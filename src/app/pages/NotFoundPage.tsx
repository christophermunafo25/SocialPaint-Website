import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';
import { ArrowRight } from 'lucide-react';

/* Brand-colored shapes drifting around the numerals — an off-brand asset,
   caught. The 404 is the one page where the shapes get to float loose. */
const SHAPES = [
  { color: '#CDBCFF', size: 56, x: '12%', y: '18%', delay: 0, rounded: '9999px' },
  { color: '#A7FFAC', size: 40, x: '82%', y: '12%', delay: 0.8, rounded: '12px' },
  { color: '#FFC5B0', size: 48, x: '8%', y: '72%', delay: 1.6, rounded: '12px' },
  { color: '#FFED8C', size: 32, x: '88%', y: '64%', delay: 0.4, rounded: '9999px' },
  { color: '#A6CEFF', size: 44, x: '70%', y: '84%', delay: 1.2, rounded: '9999px' },
];

function FloatingShapes() {
  const reduced = useReducedMotion();
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {SHAPES.map((s, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: s.x, top: s.y, width: s.size, height: s.size, borderRadius: s.rounded, backgroundColor: s.color, opacity: 0.8 }}
          animate={reduced ? undefined : { y: [0, -18, 0], rotate: [0, i % 2 === 0 ? 8 : -8, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
        />
      ))}
    </div>
  );
}

export function NotFoundPage() {
  return (
    <div className="w-full pt-[140px] sm:pt-[180px] lg:pt-[200px] pb-20 sm:pb-32 lg:pb-40 max-w-[1440px] mx-auto overflow-x-clip">
      <section className="px-4 sm:px-8 relative">
        <FloatingShapes />
        <AnimatedSection className="flex flex-col items-center text-center gap-6 relative z-10">
          {/* Giant numerals */}
          <AnimatedItem>
            <p className="font-[Stack_Sans_Headline] text-[#231f23] text-[120px] sm:text-[180px] lg:text-[220px] leading-[0.9] tracking-[-6px]" style={{ fontWeight: 400 }}>
              4<span className="accent-italic text-[130px] sm:text-[195px] lg:text-[240px]">0</span>4
            </p>
          </AnimatedItem>
          <AnimatedItem delay={0.1}>
            <p className="font-['Fragment_Mono',monospace] text-[rgba(35,31,35,0.48)] text-[12px] tracking-[0.75px] uppercase">Off-brand URL detected</p>
          </AnimatedItem>
          <AnimatedItem delay={0.15}>
            <p className="text-[rgba(35,31,35,0.64)] text-[16px] sm:text-[18px] md:text-[20px] leading-[1.5] max-w-[600px]" style={{ fontWeight: 300 }}>
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
          </AnimatedItem>
          <AnimatedItem delay={0.25}>
            <div className="flex gap-3 items-center mt-2">
              <Link to="/" className="bg-[#231f23] flex gap-2 items-center justify-center px-5 py-3 rounded-lg cursor-pointer no-underline">
                <p className="text-[#f7f6f5] text-[14px] sm:text-[16px] whitespace-nowrap">Back to Home</p>
                <ArrowRight size={16} color="#f7f6f5" />
              </Link>
              <Link to="/waitlist" className="backdrop-blur-[8px] bg-[rgba(35,31,35,0.08)] flex items-center justify-center px-5 py-3 rounded-lg cursor-pointer no-underline">
                <p className="text-[#231f23] text-[14px] sm:text-[16px] whitespace-nowrap">Join the Waitlist</p>
              </Link>
            </div>
          </AnimatedItem>
        </AnimatedSection>
      </section>
    </div>
  );
}
