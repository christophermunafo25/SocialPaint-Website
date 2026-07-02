import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { AnimatedSection, AnimatedItem } from '../../components/AnimatedSection';
import { ScrollHeadline, ZoomReveal } from '../../components/ScrollMotion';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, ArrowRight, Check, X, AlertTriangle,
  Bell, Wand2, GitBranch, ClipboardList, BarChart3, Eye
} from 'lucide-react';

/* ─── Animated Compliance Score Ring ─── */
function ComplianceRing() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'start 0.35'] });
  const dashOffset = useTransform(scrollYProgress, [0, 1], [339.292, 339.292 * 0.04]);
  const scoreValue = useTransform(scrollYProgress, [0, 1], [0, 96]);
  const [displayScore, setDisplayScore] = useState(0);

  useMotionValueEvent(scoreValue, 'change', (v) => {
    setDisplayScore(Math.round(v));
  });

  return (
    <div ref={ref} className="relative w-[200px] h-[200px] sm:w-[280px] sm:h-[280px]">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        {/* Background ring */}
        <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(35,31,35,0.06)" strokeWidth="6" />
        {/* Score ring */}
        <motion.circle cx="60" cy="60" r="54" fill="none" stroke="#A6CEFF" strokeWidth="6"
          strokeLinecap="round" strokeDasharray="339.292"
          style={{ strokeDashoffset: dashOffset }} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-[#231f23] text-[48px] font-[Stack_Sans_Headline] sm:text-[64px] tracking-[-2px]"
          style={{ fontWeight: 400 }}>
          {displayScore}
        </p>
        <p className="font-['Fragment_Mono',monospace] text-[rgba(35,31,35,0.48)] text-[11px] tracking-[0.75px] uppercase">Brand Score</p>
      </div>
    </div>
  );
}

/* ─── Interactive Brand Check Simulation ─── */
const CHECK_ITEMS = [
  { label: 'Primary color accuracy', status: 'pass', detail: '#1a1a2e matches brand palette' },
  { label: 'Heading font family', status: 'pass', detail: 'Inter Bold — correct' },
  { label: 'Logo clear space', status: 'pass', detail: '24px minimum maintained' },
  { label: 'Body text size', status: 'warn', detail: '13px detected — brand minimum is 14px' },
  { label: 'Tone of voice', status: 'pass', detail: 'Confident, professional — matches profile' },
  { label: 'Image aspect ratio', status: 'pass', detail: '1:1 — correct for Instagram post' },
];

function BrandCheckSimulation() {
  const [visibleCount, setVisibleCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="bg-white rounded-[20px] border border-[rgba(35,31,35,0.08)] overflow-hidden w-full max-w-[680px]">
      {/* Header */}
      <div className="bg-[#231f23] px-5 py-4 flex items-center justify-between">
        <p className="font-['Fragment_Mono',monospace] text-[rgba(247,246,245,0.64)] text-[12px] tracking-[0.75px] uppercase">Brand Check</p>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#A7FFAC]" />
          <p className="font-['Fragment_Mono',monospace] text-[rgba(247,246,245,0.48)] text-[11px] tracking-[0.5px]">
            {visibleCount}/{CHECK_ITEMS.length} checked
          </p>
        </div>
      </div>

      {/* Check items */}
      <div className="flex flex-col">
        {CHECK_ITEMS.map((item, i) => (
          <motion.div key={item.label}
            className="flex items-center gap-3 px-5 py-4 border-b border-[rgba(35,31,35,0.06)] last:border-0"
            initial={{ opacity: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: i * 0.12, duration: 0.4 }}
            onAnimationComplete={() => { if (i >= visibleCount) setVisibleCount(i + 1); }}>
            <motion.div
              className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
              initial={{ scale: 0, backgroundColor: 'rgba(35,31,35,0.06)' }}
              whileInView={{
                scale: 1,
                backgroundColor: item.status === 'pass' ? '#A7FFAC' : '#FFED8C',
              }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.12 + 0.2, duration: 0.3, type: 'spring', stiffness: 400 }}>
              {item.status === 'pass' ? (
                <Check size={12} color="#231f23" strokeWidth={2.5} />
              ) : (
                <AlertTriangle size={10} color="#231f23" strokeWidth={2.5} />
              )}
            </motion.div>
            <div className="flex-1">
              <p className="text-[#231f23] text-[14px]" style={{ fontWeight: 400 }}>{item.label}</p>
              <p className="text-[rgba(35,31,35,0.48)] text-[12px] mt-0.5" style={{ fontWeight: 300 }}>{item.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── Workflow Steps ─── */
const WORKFLOW_FEATURES = [
  { title: 'Real-time scanning', desc: 'Every piece of content is checked against your Style DNA the instant it\'s created — before anyone sees it.', icon: Eye, color: '#A6CEFF' },
  { title: 'Auto-fix suggestions', desc: 'Brand Guard doesn\'t just flag problems. It suggests the exact fix — swap this color, change this font weight, adjust this spacing.', icon: Wand2, color: '#A7FFAC' },
  { title: 'Approval workflows', desc: 'Route content through multi-step reviews. Marketing leads approve templates, team leads approve daily posts.', icon: GitBranch, color: '#CDBCFF' },
  { title: 'Off-brand alerts', desc: 'Get notified in Slack, email, or the dashboard when content drifts from your brand standards.', icon: Bell, color: '#FFED8C' },
  { title: 'Audit trail', desc: 'Every check, approval, and change is logged. Export compliance reports for stakeholders anytime.', icon: ClipboardList, color: '#FFC5B0' },
  { title: 'Compliance scoring', desc: 'Track your brand consistency score over time across teams, channels, and content types.', icon: BarChart3, color: '#ececec' },
];

export function BrandGuardPage() {
  return (
    <div className="w-full pt-[140px] sm:pt-[180px] lg:pt-[200px] pb-0 max-w-[1440px] mx-auto">
      {/* ───── Hero with Score Ring ───── */}
      <section className="px-4 sm:px-8 pb-16 md:pb-24">
        <AnimatedSection className="flex flex-col items-center text-center gap-6 mb-12 md:mb-16">
          <AnimatedItem>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ backgroundColor: '#A6CEFF' }}>
              <ShieldCheck size={14} color="#231f23" />
              <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[12px] tracking-[0.75px] uppercase">Brand Guard</p>
            </div>
          </AnimatedItem>
          <AnimatedItem delay={0.1}>
            <p className="text-[#231f23] text-[36px] font-[Stack_Sans_Headline] sm:text-[48px] md:text-[56px] lg:text-[64px] tracking-[-1px] leading-[1.1] max-w-[880px]" style={{ fontWeight: 400 }}>
              Consistency on <span className="accent-italic">autopilot</span>
            </p>
          </AnimatedItem>
          <AnimatedItem delay={0.2}>
            <p className="text-[rgba(35,31,35,0.64)] text-[16px] sm:text-[18px] md:text-[20px] leading-[1.5] max-w-[700px]" style={{ fontWeight: 300 }}>
              Every piece of content passes through automated brand checks before it goes live. Off-brand colors, wrong fonts, tone mismatches — caught and fixed automatically.
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

        {/* Score Ring */}
        <AnimatedItem delay={0.35} className="flex justify-center">
          <ComplianceRing />
        </AnimatedItem>
      </section>

      {/* ───── Live Brand Check — Interactive ───── */}
      <section className="px-4 sm:px-8 py-16 sm:py-20 lg:py-[120px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <AnimatedSection className="flex-1">
              <div className="flex flex-col gap-6">
                <div className="flex gap-2 items-center px-3 py-2 rounded-lg relative">
                  <div aria-hidden="true" className="absolute border border-[rgba(35,31,35,0.08)] border-solid inset-0 pointer-events-none rounded-lg" />
                  <div className="bg-[#A6CEFF] rounded-[2px] shrink-0 size-[10px]" />
                  <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[12px] tracking-[0.75px] uppercase">How it checks</p>
                </div>
                <p className="text-[#231f23] text-[28px] font-[Stack_Sans_Headline] sm:text-[36px] lg:text-[40px] tracking-[-0.5px] leading-[1.15]" style={{ fontWeight: 400 }}>
                  Every detail, checked in under a second
                </p>
                <p className="text-[rgba(35,31,35,0.64)] text-[14px] sm:text-[16px] leading-[1.5]" style={{ fontWeight: 300 }}>
                  Brand Guard compares every asset against your Style DNA — colors, fonts, spacing, tone, imagery, and logo usage. Issues are flagged with specific, actionable fixes. Not vague warnings.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedItem delay={0.2} className="flex-1 w-full flex justify-center">
              <BrandCheckSimulation />
            </AnimatedItem>
          </div>
        </div>
      </section>

      {/* ───── Features — Dark Section ───── */}
      <ZoomReveal from={0.97}>
      <section className="bg-[#1a171a] w-full px-4 sm:px-8 py-16 sm:py-20 lg:py-[120px] rounded-[20px] max-w-[1440px] mx-auto">
        <div className="max-w-[1240px] mx-auto">
          <div className="mb-12 md:mb-16 max-w-[720px] mx-auto">
            <ScrollHeadline
              text={'More than a spell-check \n for your brand'}
              accentWords={['spell-check']}
              dark
              className="leading-[1.1] text-[28px] sm:text-[40px] lg:text-[48px] tracking-[-0.5px] text-center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WORKFLOW_FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <AnimatedItem key={feature.title} delay={i * 0.08}>
                  <motion.div
                    className="bg-[rgba(247,246,245,0.04)] rounded-[16px] p-6 sm:p-7 border border-[rgba(247,246,245,0.08)] h-full flex flex-col gap-4 cursor-pointer"
                    whileHover={{ backgroundColor: 'rgba(247,246,245,0.06)', y: -4 }}
                    transition={{ duration: 0.25 }}>
                    <div className="w-10 h-10 rounded-[10px] flex items-center justify-center" style={{ backgroundColor: feature.color }}>
                      <Icon size={18} color="#231f23" />
                    </div>
                    <p className="text-[#f7f6f5] text-[16px] sm:text-[18px]" style={{ fontWeight: 400 }}>{feature.title}</p>
                    <p className="text-[rgba(247,246,245,0.5)] text-[14px] leading-[1.5]" style={{ fontWeight: 300 }}>{feature.desc}</p>
                  </motion.div>
                </AnimatedItem>
              );
            })}
          </div>
        </div>
      </section>
      </ZoomReveal>

      {/* ───── Before / After Strip ───── */}
      <section className="px-4 sm:px-8 py-16 sm:py-20 lg:py-[120px]">
        <div className="max-w-[900px] mx-auto">
          <AnimatedSection className="mb-12 md:mb-16 text-center">
            <p className="text-[#231f23] text-[28px] font-[Stack_Sans_Headline] sm:text-[36px] lg:text-[40px] tracking-[-0.5px] leading-[1.15]" style={{ fontWeight: 400 }}>
              The difference is in the details
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Before */}
            <AnimatedItem>
              <div className="bg-[#ececec] rounded-[20px] p-6 sm:p-8 h-full">
                <div className="flex items-center gap-2 mb-6">
                  <X size={14} color="rgba(35,31,35,0.32)" />
                  <p className="font-['Fragment_Mono',monospace] text-[rgba(35,31,35,0.48)] text-[11px] tracking-[0.75px] uppercase">Without Brand Guard</p>
                </div>
                <div className="flex flex-col gap-3">
                  {['Wrong shade of blue (#3B82F6 instead of #0f3460)', 'Body text set in Arial, not Inter', 'Logo used at 70% minimum clear space', 'CTA button uses rounded-full instead of rounded-lg'].map((issue) => (
                    <div key={issue} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#FFC5B0] flex items-center justify-center shrink-0 mt-0.5">
                        <X size={8} color="#231f23" strokeWidth={3} />
                      </div>
                      <p className="text-[rgba(35,31,35,0.64)] text-[14px] leading-[1.5]" style={{ fontWeight: 300 }}>{issue}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedItem>

            {/* After */}
            <AnimatedItem delay={0.1}>
              <div className="bg-[#ececec] rounded-[20px] p-6 sm:p-8 h-full">
                <div className="flex items-center gap-2 mb-6">
                  <ShieldCheck size={14} color="#231f23" />
                  <p className="font-['Fragment_Mono',monospace] text-[rgba(35,31,35,0.48)] text-[11px] tracking-[0.75px] uppercase">With Brand Guard</p>
                </div>
                <div className="flex flex-col gap-3">
                  {['Exact brand blue #0f3460 — auto-corrected', 'Inter Regular 16px — matches Style DNA', 'Logo clear space meets 24px minimum', 'CTA uses rounded-lg as specified in brand system'].map((fix) => (
                    <div key={fix} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#A7FFAC] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={8} color="#231f23" strokeWidth={3} />
                      </div>
                      <p className="text-[rgba(35,31,35,0.64)] text-[14px] leading-[1.5]" style={{ fontWeight: 300 }}>{fix}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </section>

      {/* ───── Bottom CTA ───── */}
      <section className="px-4 sm:px-8 py-16 sm:py-20 lg:py-[120px]">
        <AnimatedSection className="w-full max-w-[1240px] mx-auto">
          <div className="bg-[#231f23] rounded-[20px] p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center gap-6">
            <p className="text-[#f7f6f5] text-[24px] sm:text-[32px] font-[Stack_Sans_Headline] lg:text-[40px] tracking-[-0.5px] leading-[1.15] max-w-[600px]" style={{ fontWeight: 400 }}>
              Never publish off-brand content again
            </p>
            <p className="text-[rgba(247,246,245,0.64)] text-[14px] sm:text-[16px] leading-[1.5] max-w-[400px]" style={{ fontWeight: 300 }}>
              Brand Guard checks everything automatically. Zero manual reviews.
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