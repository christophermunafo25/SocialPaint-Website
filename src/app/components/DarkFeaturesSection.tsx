import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { AnimatedItem } from './AnimatedSection';
import { ArrowRight, Clock, RefreshCw, Shield } from 'lucide-react';

const CARDS = [
  {
    number: '01',
    title: 'Give time back to marketing',
    description:
      'Stop fulfilling one-off requests. Socialpaint handles the production so your team can focus on the work that actually shapes the brand.',
    accentColor: '#A7FFAC',
    accentGlow: 'rgba(204,253,207,0.15)',
    icon: Clock,
    detail: 'Teams using Socialpaint redirect 60%+ of production hours back into brand strategy and creative direction.',
  },
  {
    number: '02',
    title: 'Let the brand evolve in real time',
    description:
      "Every creative decision your team makes feeds back into the system. The brand doesn't get frozen in a PDF — it stays current, always.",
    accentColor: '#A6CEFF',
    accentGlow: 'rgba(215,233,255,0.15)',
    icon: RefreshCw,
    detail: 'As your team updates typography, color, or tone, generated output reflects those changes immediately.',
  },
  {
    number: '03',
    title: 'Keep output aligned as the brand grows',
    description:
      'Generated content adapts as the brand evolves. No manual updates, no drift — just output that reflects the latest version of your brand.',
    accentColor: '#FFC5B0',
    accentGlow: 'rgba(255,225,214,0.15)',
    icon: Shield,
    detail: 'Whether it\'s 10 assets or 10,000, every piece stays consistent with your latest brand standards.',
  },
];

function InteractiveCard({
  card,
  index,
  isActive,
  onHover,
}: {
  card: (typeof CARDS)[number];
  index: number;
  isActive: boolean;
  onHover: (i: number | null) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const Icon = card.icon;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  return (
    <AnimatedItem delay={index * 0.1} className="flex-1 min-w-[280px]">
      <motion.div
        ref={cardRef}
        className="relative rounded-xl p-px cursor-pointer h-full"
        onMouseEnter={() => onHover(index)}
        onMouseLeave={() => onHover(null)}
        onMouseMove={handleMouseMove}
        animate={{ y: isActive ? -4 : 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          animate={{
            opacity: isActive ? 1 : 0,
          }}
          transition={{ duration: 0.35 }}
          style={{
            background: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, ${card.accentGlow}, transparent 70%)`,
          }}
        />

        {/* Card border */}
        <div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            border: `1px solid ${isActive ? card.accentColor + '30' : 'rgba(247,246,245,0.06)'}`,
            transition: 'border-color 0.35s ease',
          }}
        />

        {/* Card inner */}
        <div className="relative rounded-xl bg-[#1a171a] p-6 sm:p-7 h-full flex flex-col gap-5">
          {/* Top row: number + icon */}
          <div className="flex items-center justify-between">
            <p
              className="font-['Fragment_Mono',monospace] text-[11px] tracking-[0.75px] uppercase"
              style={{ color: isActive ? card.accentColor : 'rgba(247,246,245,0.3)', transition: 'color 0.35s ease' }}
            >
              {card.number}
            </p>
            <motion.div
              animate={{ rotate: isActive ? 90 : 0, scale: isActive ? 1.1 : 1 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Icon
                size={18}
                strokeWidth={1.5}
                style={{ color: isActive ? card.accentColor : 'rgba(247,246,245,0.2)', transition: 'color 0.35s ease' }}
              />
            </motion.div>
          </div>

          {/* Accent line */}
          <div className="relative h-px w-full bg-[rgba(247,246,245,0.06)] overflow-hidden rounded-full">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{ backgroundColor: card.accentColor }}
              animate={{ width: isActive ? '100%' : '0%' }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </div>

          {/* Title */}
          <p className="text-[#f7f6f5] text-[18px] sm:text-[20px] leading-[1.3]">
            {card.title}
          </p>

          {/* Description */}
          <p className="text-[14px] sm:text-[15px] leading-[1.6] text-[rgba(247,246,245,0.5)]" style={{ fontWeight: 300 }}>
            {card.description}
          </p>

          {/* Expandable detail */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-1 border-t border-[rgba(247,246,245,0.06)]">
                  <p className="text-[13px] sm:text-[14px] leading-[1.6] pt-4" style={{ fontWeight: 300, color: card.accentColor + 'cc' }}>
                    {card.detail}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatedItem>
  );
}

/* Flow step for the progression strip */
function FlowStep({ label, index, total }: { label: string; index: number; total: number }) {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="size-[6px] rounded-full bg-[rgba(247,246,245,0.24)] shrink-0" />
        <p className="font-['Fragment_Mono',monospace] text-[11px] sm:text-[12px] tracking-[0.75px] uppercase text-[rgba(247,246,245,0.48)] whitespace-nowrap">
          {label}
        </p>
      </div>
      {index < total - 1 && (
        <ArrowRight size={14} className="text-[rgba(247,246,245,0.16)] shrink-0" />
      )}
    </div>
  );
}

const HEADLINE_WORDS = ['Turn', 'your', 'brand', 'into', '\n', 'a', 'living', 'system'];
// Payoff phrase gets the Instrument Serif italic accent.
const ACCENT_WORDS = new Set(['living', 'system']);

function ScrollWord({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.35, 1]);
  const accent = ACCENT_WORDS.has(word);

  return (
    <motion.span
      style={{ opacity, fontWeight: 400, ...(accent ? { fontFamily: 'var(--font-accent)', fontStyle: 'italic', fontSize: '55px' } : {}) }}
      className={`text-[#f7f6f5] text-[48px] ${accent ? '' : 'font-[Stack_Sans_Headline]'}`}
    >
      {word}
    </motion.span>
  );
}

function ScrollRevealHeadline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'start 0.45'],
  });

  const wordsOnly = HEADLINE_WORDS.filter((w) => w !== '\n');
  const total = wordsOnly.length;

  return (
    <div ref={containerRef} className="relative w-full">
      <p className="leading-[1.1] text-[32px] sm:text-[44px] lg:text-[56px] tracking-[-0.5px] text-center">
        {HEADLINE_WORDS.map((word, i) => {
          if (word === '\n') {
            return <br key={`br-${i}`} />;
          }
          const wordIndex = HEADLINE_WORDS.slice(0, i).filter((w) => w !== '\n').length;
          const start = wordIndex / total;
          const end = (wordIndex + 1) / total;
          return (
            <span key={`wrap-${i}`}>
              {i > 0 && HEADLINE_WORDS[i - 1] !== '\n' && ' '}
              <ScrollWord word={word} progress={scrollYProgress} start={start} end={end} />
            </span>
          );
        })}
      </p>
    </div>
  );
}

export function DarkFeaturesSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const flowSteps = ['Marketing input', 'Brand development', 'System learning', 'Evolving output'];

  return (
    <section className="bg-[#1a171a] flex flex-col items-center w-full max-w-[1440px] mx-auto z-[4] rounded-[20px] px-4 sm:px-8 py-[60px] overflow-hidden">
      <div className="flex flex-col gap-10 sm:gap-14 lg:gap-16 items-center w-full max-w-[1440px]">

        {/* Editorial headline + subcopy */}
        <div className="flex flex-col gap-5 sm:gap-6 items-center w-full">
          <ScrollRevealHeadline />
          <AnimatedItem delay={0.15} className="max-w-[1440px]">
          </AnimatedItem>

          {/* Flow progression strip */}
          <AnimatedItem delay={0.3} className="mt-1 sm:mt-2">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-0">
              {flowSteps.map((step, i) => (
                <FlowStep key={step} label={step} index={i} total={flowSteps.length} />
              ))}
            </div>
          </AnimatedItem>
        </div>

        {/* Interactive cards */}
        <div className="flex flex-col md:flex-row gap-4 w-full items-stretch">
          {CARDS.map((card, i) => (
            <InteractiveCard
              key={card.number}
              card={card}
              index={i}
              isActive={activeCard === i}
              onHover={setActiveCard}
            />
          ))}
        </div>
      </div>
    </section>
  );
}