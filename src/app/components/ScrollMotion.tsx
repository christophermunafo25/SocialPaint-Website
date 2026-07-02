import { useRef, useState, type ReactNode } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, useMotionValueEvent, useInView, animate } from 'motion/react';
import { useEffect } from 'react';

/* ────────────────────────────────────────────────────────────────
   Shared scroll-motion primitives.
   Generalized from the home page's motion vocabulary
   (DarkFeaturesSection word reveal, HeroSection marquee) so inner
   pages can reach the same level of scroll-driven complexity.
   All primitives respect prefers-reduced-motion.
   ──────────────────────────────────────────────────────────────── */

/* ─── ScrollHeadline — word-by-word opacity reveal tied to scroll ─── */

interface ScrollHeadlineProps {
  text: string;                    // words split on spaces; '\n' forces a line break
  accentWords?: string[];          // words set in Instrument Serif italic
  dark?: boolean;                  // ink-on-paper (default) or paper-on-ink
  className?: string;              // applied to the wrapping <p> — size/tracking live here
  accentClassName?: string;
}

function ScrollWord({ word, progress, start, end, accent, dark, accentClassName }: {
  word: string;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  start: number;
  end: number;
  accent: boolean;
  dark: boolean;
  accentClassName?: string;
}) {
  const reduced = useReducedMotion();
  const opacity = useTransform(progress, [start, end], reduced ? [1, 1] : [0.25, 1]);

  return (
    <motion.span
      style={{ opacity, fontWeight: 400 }}
      className={
        accent
          ? `accent-italic ${dark ? 'text-[#f7f6f5]' : 'text-[#231f23]'} ${accentClassName ?? ''}`
          : `font-[Stack_Sans_Headline] ${dark ? 'text-[#f7f6f5]' : 'text-[#231f23]'}`
      }
    >
      {word}
    </motion.span>
  );
}

export function ScrollHeadline({ text, accentWords = [], dark = false, className = '', accentClassName }: ScrollHeadlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'start 0.5'],
  });

  const parts = text.split(' ');
  const accents = new Set(accentWords);
  const wordsOnly = parts.filter((w) => w !== '\n');
  const total = wordsOnly.length;

  return (
    <div ref={containerRef} className="relative w-full">
      <p className={className}>
        {parts.map((word, i) => {
          if (word === '\n') return <br key={`br-${i}`} className="hidden sm:inline" />;
          const wordIndex = parts.slice(0, i).filter((w) => w !== '\n').length;
          return (
            <span key={`w-${i}`}>
              {i > 0 && parts[i - 1] !== '\n' && ' '}
              <ScrollWord
                word={word}
                progress={scrollYProgress}
                start={wordIndex / total}
                end={(wordIndex + 1) / total}
                accent={accents.has(word)}
                dark={dark}
                accentClassName={accentClassName}
              />
            </span>
          );
        })}
      </p>
    </div>
  );
}

/* ─── Parallax — children drift vertically as the section crosses the viewport ─── */

export function Parallax({ children, distance = 40, className = '' }: {
  children: ReactNode;
  distance?: number;               // px of total drift; negative inverts direction
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [distance, -distance]);

  return (
    <motion.div ref={ref} style={{ y, willChange: reduced ? undefined : 'transform' }} className={className}>
      {children}
    </motion.div>
  );
}

/* ─── ZoomReveal — media scales from 0.94 → 1 as it enters (home-hero feel) ─── */

export function ZoomReveal({ children, className = '', from = 0.94 }: {
  children: ReactNode;
  className?: string;
  from?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.35'] });
  const scale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [from, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], reduced ? [1, 1] : [0.75, 1]);

  return (
    <motion.div ref={ref} style={{ scale, opacity, willChange: reduced ? undefined : 'transform, opacity' }} className={className}>
      {children}
    </motion.div>
  );
}

/* ─── Marquee — generic infinite rail (reuses the global `marquee` keyframes) ─── */

export function Marquee({ children, duration = 30, reverse = false, fade = '#f7f6f5', className = '' }: {
  children: ReactNode;             // one set of items; duplicated internally
  duration?: number;               // seconds per loop
  reverse?: boolean;
  fade?: string | null;            // edge-fade color, or null to disable
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <div className={`overflow-hidden relative w-full ${className}`}>
      <div
        className="flex gap-4 items-center w-max"
        style={reduced ? undefined : {
          animation: `marquee ${duration}s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        <div className="flex gap-4 items-center shrink-0">{children}</div>
        <div className="flex gap-4 items-center shrink-0" aria-hidden="true">{children}</div>
      </div>
      {fade && (
        <>
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10 pointer-events-none" style={{ background: `linear-gradient(to right, ${fade}, transparent)` }} />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10 pointer-events-none" style={{ background: `linear-gradient(to left, ${fade}, transparent)` }} />
        </>
      )}
    </div>
  );
}

/* ─── CountUp — number counts from 0 when it scrolls into view ─── */

export function CountUp({ to, prefix = '', suffix = '', decimals = 0, duration = 1.4, className = '', style }: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(reduced ? to : 0);

  useEffect(() => {
    if (!inView || reduced) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, reduced, to, duration]);

  const formatted = decimals > 0
    ? display.toFixed(decimals)
    : Math.round(display).toLocaleString('en-US');

  return (
    <p ref={ref} className={className} style={style}>
      {prefix}{formatted}{suffix}
    </p>
  );
}

/* ─── ScrollProgressLine — thin rule that fills as its section scrolls by ─── */

export function ScrollProgressLine({ color = '#231f23', className = '', vertical = false }: {
  color?: string;
  className?: string;
  vertical?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.5'] });
  const scale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [0, 1]);

  return (
    <div ref={ref} className={`${vertical ? 'w-px h-full' : 'h-px w-full'} relative overflow-hidden ${className}`} style={{ backgroundColor: 'rgba(35,31,35,0.08)' }}>
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: color, [vertical ? 'scaleY' : 'scaleX']: scale, transformOrigin: vertical ? 'top' : 'left' }}
      />
    </div>
  );
}
