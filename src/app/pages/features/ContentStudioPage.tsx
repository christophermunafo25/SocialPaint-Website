import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { AnimatedSection, AnimatedItem } from '../../components/AnimatedSection';
import { Link } from 'react-router-dom';
import {
  Layers, ArrowRight, Instagram, Linkedin, Twitter,
  Music2, Facebook, Image as ImageIcon, PenTool, GalleryHorizontalEnd,
  CalendarDays, Maximize, Zap, Clock
} from 'lucide-react';

/* ─── Platform Format Switcher ─── */
const PLATFORMS = [
  { name: 'Instagram Post', icon: Instagram, aspect: 'aspect-square', size: '1080 × 1080', color: '#FFC5B0' },
  { name: 'LinkedIn Article', icon: Linkedin, aspect: 'aspect-[1.91/1]', size: '1200 × 628', color: '#A6CEFF' },
  { name: 'Twitter Card', icon: Twitter, aspect: 'aspect-[16/9]', size: '1600 × 900', color: '#FFED8C' },
  { name: 'TikTok', icon: Music2, aspect: 'aspect-[9/16]', size: '1080 × 1920', color: '#CDBCFF' },
  { name: 'Facebook Cover', icon: Facebook, aspect: 'aspect-[2.63/1]', size: '1640 × 624', color: '#A7FFAC' },
  { name: 'Pinterest Pin', icon: ImageIcon, aspect: 'aspect-[2/3]', size: '1000 × 1500', color: '#FFC5B0' },
];

function PlatformShowcase() {
  const [activePlatform, setActivePlatform] = useState(0);
  const platform = PLATFORMS[activePlatform];
  const Icon = platform.icon;

  return (
    <div className="flex flex-col gap-8 items-center w-full">
      {/* Platform pills */}
      <div className="flex flex-wrap gap-2 justify-center">
        {PLATFORMS.map((p, i) => {
          const PIcon = p.icon;
          return (
            <button key={p.name}
              onClick={() => setActivePlatform(i)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all ${
                i === activePlatform ? 'bg-[#231f23] text-[#f7f6f5]' : 'bg-[rgba(35,31,35,0.06)] text-[#231f23] hover:bg-[rgba(35,31,35,0.1)]'
              }`}>
              <PIcon size={14} />
              <p className="text-[13px] whitespace-nowrap">{p.name}</p>
            </button>
          );
        })}
      </div>

      {/* Format preview */}
      <AnimatePresence mode="wait">
        <motion.div key={activePlatform}
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full max-w-[480px]">
          <div className="bg-[#ececec] rounded-[20px] p-4 sm:p-6">
            <div className={`${platform.aspect} max-h-[400px] rounded-xl overflow-hidden relative`}
              style={{ backgroundColor: platform.color }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
                <Icon size={32} color="#231f23" strokeWidth={1} />
                <p className="text-[#231f23] text-[14px] sm:text-[16px] text-center" style={{ fontWeight: 400 }}>
                  Your brand, perfectly formatted
                </p>
                <p className="font-['Fragment_Mono',monospace] text-[rgba(35,31,35,0.48)] text-[11px] tracking-[0.5px]">
                  {platform.size}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-[#231f23] text-[14px]" style={{ fontWeight: 400 }}>{platform.name}</p>
              <p className="font-['Fragment_Mono',monospace] text-[rgba(35,31,35,0.48)] text-[11px] tracking-[0.5px] uppercase">Auto-sized</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ─── Scroll-driven generation flow ─── */
const FLOW_STEPS = [
  { step: '01', title: 'Describe what you need', desc: 'Enter a brief, topic, or campaign goal. Drop in reference images or past content if you want.', icon: PenTool },
  { step: '02', title: 'AI generates on-brand content', desc: 'Socialpaint pulls from your Style DNA to create visuals, copy, and formatting that match your brand exactly.', icon: Zap },
  { step: '03', title: 'Resize for every platform', desc: 'One click adapts your content to Instagram, LinkedIn, Twitter, TikTok, and more — no manual resizing.', icon: Maximize },
  { step: '04', title: 'Publish or schedule', desc: 'Export to your content calendar, push directly to platforms, or share with your team for final review.', icon: CalendarDays },
];

function GenerationFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 0.7', 'end 0.3'] });

  return (
    <div ref={containerRef} className="flex flex-col gap-0 relative">
      {/* Progress line */}
      <div className="absolute left-[23px] sm:left-[27px] top-0 bottom-0 w-px bg-[rgba(35,31,35,0.08)]">
        <motion.div className="w-full bg-[#A7FFAC] origin-top" style={{ height: '100%', scaleY: scrollYProgress }} />
      </div>

      {FLOW_STEPS.map((step, i) => {
        const Icon = step.icon;
        return (
          <AnimatedItem key={step.step} delay={i * 0.1} className="flex gap-6 sm:gap-8 items-start py-8 sm:py-10 relative">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#A7FFAC] flex items-center justify-center shrink-0 relative z-10">
              <Icon size={20} color="#231f23" />
            </div>
            <div className="flex flex-col gap-2 flex-1 pt-1">
              <p className="font-['Fragment_Mono',monospace] text-[rgba(35,31,35,0.32)] text-[11px] tracking-[0.75px] uppercase">{step.step}</p>
              <p className="text-[#231f23] text-[20px] sm:text-[24px] leading-[1.2]" style={{ fontWeight: 400 }}>{step.title}</p>
              <p className="text-[rgba(35,31,35,0.64)] text-[14px] sm:text-[16px] leading-[24px] max-w-[480px]" style={{ fontWeight: 300 }}>{step.desc}</p>
            </div>
          </AnimatedItem>
        );
      })}
    </div>
  );
}

/* ─── Content Type Gallery ─── */
const CONTENT_TYPES = [
  { type: 'Social Posts', color: '#A7FFAC', count: '∞' },
  { type: 'Ad Creatives', color: '#A6CEFF', count: '∞' },
  { type: 'Stories & Reels', color: '#CDBCFF', count: '∞' },
  { type: 'Carousels', color: '#FFED8C', count: '∞' },
  { type: 'Email Headers', color: '#FFC5B0', count: '∞' },
  { type: 'Blog Graphics', color: '#ececec', count: '∞' },
];

export function ContentStudioPage() {
  return (
    <div className="w-full pt-[140px] sm:pt-[180px] lg:pt-[200px] pb-0 max-w-[1440px] mx-auto">
      {/* ───── Hero ───── */}
      <section className="px-4 sm:px-8 pb-16 md:pb-24">
        <AnimatedSection className="flex flex-col items-center text-center gap-6 mb-12 md:mb-16">
          <AnimatedItem>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ backgroundColor: '#A7FFAC' }}>
              <Layers size={14} color="#231f23" />
              <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[12px] tracking-[0.75px] uppercase">Content Studio</p>
            </div>
          </AnimatedItem>
          <AnimatedItem delay={0.1}>
            <p className="text-[#231f23] text-[36px] font-[Stack_Sans_Headline] sm:text-[48px] md:text-[56px] lg:text-[64px] tracking-[-1px] leading-[1.1] max-w-[760px]" style={{ fontWeight: 400 }}>
              Create anything,<br className="hidden sm:inline" /> <span className="accent-italic">always on-brand</span>
            </p>
          </AnimatedItem>
          <AnimatedItem delay={0.2}>
            <p className="text-[rgba(35,31,35,0.64)] text-[16px] sm:text-[18px] md:text-[20px] leading-[28px] sm:leading-[32px] max-w-[580px]" style={{ fontWeight: 300 }}>
              Generate social posts, ad creatives, stories, carousels, and more — perfectly on-brand, automatically formatted for every platform. Anyone on your team can create.
            </p>
          </AnimatedItem>
          <AnimatedItem delay={0.3}>
            <div className="flex gap-3 items-center mt-2">
              <Link to="/waitlist" className="bg-[#231f23] flex gap-2 items-center justify-center px-5 py-3 rounded-lg cursor-pointer no-underline">
                <p className="text-[#f7f6f5] text-[14px] sm:text-[16px] whitespace-nowrap">Join the Waitlist</p>
                <ArrowRight size={16} color="#f7f6f5" />
              </Link>
            </div>
          </AnimatedItem>
        </AnimatedSection>

        {/* Speed stats */}
        <AnimatedItem delay={0.35} className="w-full max-w-[800px] mx-auto mb-12 md:mb-16">
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: '10s', label: 'Avg. generation time', icon: Clock },
              { value: '6+', label: 'Platforms supported', icon: Maximize },
              { value: '3x', label: 'Content output increase', icon: Zap },
            ].map((stat) => {
              const StatIcon = stat.icon;
              return (
                <div key={stat.label} className="bg-[#ececec] rounded-[16px] p-4 sm:p-6 flex flex-col gap-2 items-center text-center">
                  <StatIcon size={16} color="rgba(35,31,35,0.32)" />
                  <p className="text-[#231f23] text-[24px] font-[Stack_Sans_Headline] sm:text-[32px] tracking-[-0.5px]" style={{ fontWeight: 400 }}>{stat.value}</p>
                  <p className="font-['Fragment_Mono',monospace] text-[rgba(35,31,35,0.48)] text-[10px] sm:text-[11px] tracking-[0.5px] uppercase">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </AnimatedItem>

        {/* Platform Showcase */}
        <PlatformShowcase />
      </section>

      {/* ───── Generation Flow ───── */}
      <section className="px-4 sm:px-8 py-16 sm:py-20 lg:py-[120px]">
        <div className="max-w-[720px] mx-auto">
          <AnimatedSection className="flex flex-col gap-6 items-start mb-8 md:mb-12">
            <div className="flex gap-2 items-center px-3 py-2 rounded-lg relative">
              <div aria-hidden="true" className="absolute border border-[rgba(35,31,35,0.08)] border-solid inset-0 pointer-events-none rounded-lg" />
              <div className="bg-[#A7FFAC] rounded-[2px] shrink-0 size-[10px]" />
              <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[12px] tracking-[0.75px] uppercase">How it works</p>
            </div>
            <p className="text-[#231f23] text-[28px] font-[Stack_Sans_Headline] sm:text-[36px] lg:text-[40px] tracking-[-0.5px] leading-[1.15] max-w-[520px]" style={{ fontWeight: 400 }}>
              From brief to published in four steps
            </p>
          </AnimatedSection>

          <GenerationFlow />
        </div>
      </section>

      {/* ───── Content Types — Dark Bento Grid ───── */}
      <section className="bg-[#1a171a] w-full px-4 sm:px-8 py-16 sm:py-20 lg:py-[120px] rounded-[20px] max-w-[1440px] mx-auto">
        <div className="max-w-[1100px] mx-auto">
          <AnimatedSection className="mb-12 md:mb-16 text-center">
            <p className="text-[#f7f6f5] text-[28px] sm:text-[36px] font-[Stack_Sans_Headline] lg:text-[48px] tracking-[-0.5px] leading-[1.1] max-w-[560px] mx-auto" style={{ fontWeight: 400 }}>
              Every content type your team needs
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {CONTENT_TYPES.map((ct, i) => (
              <AnimatedItem key={ct.type} delay={i * 0.08}>
                <motion.div
                  className="bg-[rgba(247,246,245,0.04)] rounded-[16px] p-6 sm:p-8 border border-[rgba(247,246,245,0.08)] cursor-pointer h-full"
                  whileHover={{ backgroundColor: 'rgba(247,246,245,0.06)', y: -4 }}
                  transition={{ duration: 0.25 }}>
                  <div className="w-10 h-10 rounded-[10px] mb-4 flex items-center justify-center" style={{ backgroundColor: ct.color }}>
                    <GalleryHorizontalEnd size={18} color="#231f23" />
                  </div>
                  <p className="text-[#f7f6f5] text-[16px] sm:text-[18px] mb-1" style={{ fontWeight: 400 }}>{ct.type}</p>
                  <p className="font-['Fragment_Mono',monospace] text-[rgba(247,246,245,0.32)] text-[11px] tracking-[0.5px] uppercase">Unlimited generation</p>
                </motion.div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Team Scaling Section ───── */}
      <section className="px-4 sm:px-8 py-16 sm:py-20 lg:py-[120px]">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <AnimatedItem className="flex-1 w-full max-w-[480px] order-2 lg:order-1">
              <div className="bg-[#ececec] rounded-[20px] p-6 sm:p-8">
                <div className="flex flex-col gap-3">
                  {[
                    { team: 'Marketing', items: 12, color: '#A7FFAC' },
                    { team: 'Sales', items: 8, color: '#A6CEFF' },
                    { team: 'HR', items: 4, color: '#FFED8C' },
                    { team: 'Product', items: 6, color: '#CDBCFF' },
                  ].map((row, i) => (
                    <motion.div key={row.team}
                      className="bg-white rounded-xl p-4 flex items-center gap-4"
                      initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}>
                      <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: row.color }} />
                      <p className="text-[#231f23] text-[14px] flex-1" style={{ fontWeight: 400 }}>{row.team}</p>
                      <div className="h-2 flex-1 bg-[rgba(35,31,35,0.06)] rounded-full overflow-hidden">
                        <motion.div className="h-full rounded-full" style={{ backgroundColor: row.color }}
                          initial={{ width: 0 }} whileInView={{ width: `${(row.items / 12) * 100}%` }}
                          viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.1, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }} />
                      </div>
                      <p className="font-['Fragment_Mono',monospace] text-[rgba(35,31,35,0.48)] text-[11px] w-8 text-right">{row.items}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedItem>

            <AnimatedSection className="flex-1 order-1 lg:order-2">
              <div className="flex flex-col gap-6">
                <p className="text-[#231f23] text-[28px] font-[Stack_Sans_Headline] sm:text-[36px] lg:text-[40px] tracking-[-0.5px] leading-[1.15]" style={{ fontWeight: 400 }}>
                  Every team creates. Marketing stays in control.
                </p>
                <p className="text-[rgba(35,31,35,0.64)] text-[15px] sm:text-[16px] leading-[26px]" style={{ fontWeight: 300 }}>
                  Sales, recruiting, product, and executive teams can generate on-brand content without waiting on designers or learning new tools. Marketing defines the brand system — everyone else builds from it.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ───── Bottom CTA ───── */}
      <section className="px-4 sm:px-8 py-16 sm:py-20 lg:py-[120px]">
        <AnimatedSection className="w-full max-w-[1100px] mx-auto">
          <div className="bg-[#231f23] rounded-[20px] p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center gap-6">
            <p className="text-[#f7f6f5] text-[24px] sm:text-[32px] font-[Stack_Sans_Headline] lg:text-[40px] tracking-[-0.5px] leading-[1.15] max-w-[480px]" style={{ fontWeight: 400 }}>
              Start creating on-brand content today
            </p>
            <p className="text-[rgba(247,246,245,0.64)] text-[16px] leading-[24px] max-w-[400px]" style={{ fontWeight: 300 }}>
              No design skills required. Your Style DNA powers everything.
            </p>
            <div className="flex gap-3 items-center">
              <Link to="/waitlist" className="bg-[#f7f6f5] flex gap-2 items-center justify-center px-5 py-3 rounded-lg cursor-pointer no-underline">
                <p className="text-[#231f23] text-[14px] sm:text-[16px] whitespace-nowrap">Join the Waitlist</p>
                <ArrowRight size={16} color="#231f23" />
              </Link>
              <Link to="/pricing" className="backdrop-blur-[8px] bg-[rgba(247,246,245,0.08)] flex items-center justify-center px-5 py-3 rounded-lg cursor-pointer no-underline">
                <p className="text-[#f7f6f5] text-[14px] sm:text-[16px] whitespace-nowrap">View Pricing</p>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}