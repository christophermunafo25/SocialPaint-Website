import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { AnimatedSection, AnimatedItem } from '../../components/AnimatedSection';
import { Link } from 'react-router-dom';
import {
  Fingerprint, Palette, Type, LayoutGrid, MessageCircle, Image,
  Layers, ArrowRight, Figma, Pen, RefreshCw
} from 'lucide-react';

/* ─── Brand Element Interactive Grid ─── */
const BRAND_ELEMENTS = [
  { label: 'Colors', icon: Palette, color: '#CDBCFF', samples: ['#1a1a2e', '#e94560', '#0f3460', '#16213e', '#533483', '#FFED8C'], description: 'Primary, secondary, accent, and semantic colors extracted with exact hex values and usage context.' },
  { label: 'Typography', icon: Type, color: '#A6CEFF', samples: ['Aa', 'Bb', 'Cc'], description: 'Font families, weights, sizes, line heights, and letter spacing across headings, body, and UI text.' },
  { label: 'Spacing', icon: LayoutGrid, color: '#A7FFAC', samples: ['4px', '8px', '16px', '24px', '32px', '48px'], description: 'Padding, margins, gaps, and grid systems captured from your actual layout decisions.' },
  { label: 'Voice & Tone', icon: MessageCircle, color: '#FFED8C', samples: ['Confident', 'Warm', 'Clear'], description: 'Your brand\'s communication style — formal vs casual, technical vs friendly, measured vs bold.' },
  { label: 'Imagery', icon: Image, color: '#FFC5B0', samples: ['Style', 'Treatment', 'Crop'], description: 'Photo treatments, illustration styles, icon conventions, and visual composition patterns.' },
  { label: 'Layout', icon: Layers, color: '#ececec', samples: ['Grid', 'Stack', 'Flow'], description: 'Component structures, alignment rules, breakpoint behaviors, and hierarchy patterns.' },
];

function BrandElementCard({ element, index, isActive, onHover }: {
  element: typeof BRAND_ELEMENTS[number]; index: number; isActive: boolean;
  onHover: (i: number | null) => void;
}) {
  const Icon = element.icon;
  return (
    <AnimatedItem delay={index * 0.08}>
      <motion.div
        className="relative rounded-[20px] p-6 sm:p-7 cursor-pointer h-full flex flex-col gap-4 bg-white border border-[rgba(35,31,35,0.08)]"
        onMouseEnter={() => onHover(index)}
        onMouseLeave={() => onHover(null)}
        animate={{ y: isActive ? -6 : 0, boxShadow: isActive ? '0px 8px 40px rgba(0,0,0,0.08)' : '0px 0px 0px rgba(0,0,0,0)' }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-[10px] flex items-center justify-center" style={{ backgroundColor: element.color }}>
            <Icon size={20} color="#231f23" />
          </div>
          <p className="font-['Fragment_Mono',monospace] text-[12px] tracking-[0.75px] uppercase text-[rgba(35,31,35,0.48)]">{element.label}</p>
        </div>

        {/* Animated samples */}
        <div className="flex flex-wrap gap-2 min-h-[36px]">
          {element.label === 'Colors' ? (
            element.samples.map((s, i) => (
              <motion.div key={i} className="w-7 h-7 rounded-full border border-[rgba(35,31,35,0.08)]" style={{ backgroundColor: s }}
                animate={{ scale: isActive ? 1.15 : 1 }} transition={{ delay: i * 0.04, duration: 0.25 }} />
            ))
          ) : (
            element.samples.map((s, i) => (
              <motion.div key={i} className="px-2.5 py-1 rounded-md bg-[rgba(35,31,35,0.04)]"
                animate={{ scale: isActive ? 1.05 : 1 }} transition={{ delay: i * 0.04, duration: 0.25 }}>
                <p className="font-['Fragment_Mono',monospace] text-[11px] text-[rgba(35,31,35,0.64)]">{s}</p>
              </motion.div>
            ))
          )}
        </div>

        {/* Expanding description */}
        <motion.div
          initial={false}
          animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="overflow-hidden"
        >
          <p className="text-[13px] sm:text-[14px] leading-[1.6] text-[rgba(35,31,35,0.64)]" style={{ fontWeight: 300 }}>{element.description}</p>
        </motion.div>
      </motion.div>
    </AnimatedItem>
  );
}

/* ─── Scroll-linked DNA strand visualization ─── */
function DNAVisualization() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'end 0.3'] });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <div ref={ref} className="w-full max-w-[800px] mx-auto h-[300px] sm:h-[400px] relative">
      <motion.svg viewBox="0 0 800 400" className="w-full h-full" style={{ opacity }}>
        <motion.path
          d="M 50 200 Q 200 50, 400 200 Q 600 350, 750 200"
          fill="none" stroke="#CDBCFF" strokeWidth="3" strokeLinecap="round"
          style={{ pathLength }} />
        <motion.path
          d="M 50 200 Q 200 350, 400 200 Q 600 50, 750 200"
          fill="none" stroke="rgba(206,191,250,0.3)" strokeWidth="3" strokeLinecap="round"
          style={{ pathLength }} />
        {[100, 200, 300, 400, 500, 600, 700].map((x, i) => (
          <motion.circle key={i} cx={x} cy={200 + Math.sin(x / 100) * 50} r="6" fill="#CDBCFF"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }} />
        ))}
      </motion.svg>
    </div>
  );
}

/* ─── Tool integration pills ─── */
const INTEGRATIONS = [
  { name: 'Figma', icon: Figma },
  { name: 'Canva', icon: Pen },
  { name: 'Adobe CC', icon: Layers },
];

export function StyleDNAPage() {
  const [activeElement, setActiveElement] = useState<number | null>(null);

  return (
    <div className="w-full pt-[140px] sm:pt-[180px] lg:pt-[200px] pb-0 max-w-[1440px] mx-auto">
      {/* ───── Hero ───── */}
      <section className="px-4 sm:px-8 pb-16 md:pb-24">
        <AnimatedSection className="flex flex-col items-center text-center gap-6 mb-12 md:mb-16">
          <AnimatedItem>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ backgroundColor: '#CDBCFF' }}>
              <Fingerprint size={14} color="#231f23" />
              <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[12px] tracking-[0.75px] uppercase">Style DNA</p>
            </div>
          </AnimatedItem>
          <AnimatedItem delay={0.1}>
            <p className="text-[#231f23] text-[36px] font-[Stack_Sans_Headline] sm:text-[48px] md:text-[56px] lg:text-[64px] tracking-[-1px] leading-[1.1] max-w-[760px]" style={{ fontWeight: 400 }}>
              Your brand, decoded<br className="hidden sm:inline" /> down to the pixel
            </p>
          </AnimatedItem>
          <AnimatedItem delay={0.2}>
            <p className="text-[rgba(35,31,35,0.64)] text-[16px] sm:text-[18px] md:text-[20px] leading-[28px] sm:leading-[32px] max-w-[580px]" style={{ fontWeight: 300 }}>
              Socialpaint connects to your design tools and learns everything about your brand — colors, type, spacing, tone, imagery — creating a living profile that powers every piece of content.
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

        {/* DNA Visualization */}
        <AnimatedItem delay={0.35}>
          <DNAVisualization />
        </AnimatedItem>
      </section>

      {/* ───── What It Captures — Interactive Bento Grid ───── */}
      <section className="px-4 sm:px-8 py-16 sm:py-20 lg:py-[120px]">
        <div className="max-w-[1100px] mx-auto">
          <AnimatedSection className="flex flex-col gap-6 items-start mb-12 md:mb-16">
            <div className="flex gap-2 items-center px-3 py-2 rounded-lg relative">
              <div aria-hidden="true" className="absolute border border-[rgba(35,31,35,0.08)] border-solid inset-0 pointer-events-none rounded-lg" />
              <div className="bg-[#CDBCFF] rounded-[2px] shrink-0 size-[10px]" />
              <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[12px] tracking-[0.75px] uppercase">What it captures</p>
            </div>
            <p className="text-[#231f23] text-[28px] font-[Stack_Sans_Headline] sm:text-[36px] lg:text-[40px] tracking-[-0.5px] leading-[1.15] max-w-[560px]" style={{ fontWeight: 400 }}>
              Every detail that makes your brand yours
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BRAND_ELEMENTS.map((el, i) => (
              <BrandElementCard key={el.label} element={el} index={i} isActive={activeElement === i} onHover={setActiveElement} />
            ))}
          </div>
        </div>
      </section>

      {/* ───── How It Learns — Dark Horizontal Timeline ───── */}
      <section className="bg-[#1a171a] w-full px-4 sm:px-8 py-16 sm:py-20 lg:py-[120px] rounded-[20px] max-w-[1440px] mx-auto">
        <div className="max-w-[1100px] mx-auto">
          <AnimatedSection className="mb-12 md:mb-20">
            <p className="text-[#f7f6f5] text-[28px] sm:text-[36px] font-[Stack_Sans_Headline] lg:text-[48px] tracking-[-0.5px] leading-[1.1] text-center max-w-[600px] mx-auto" style={{ fontWeight: 400 }}>
              From your design files to a living brand system
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[40px] left-[16.66%] right-[16.66%] h-px bg-[rgba(247,246,245,0.08)]" />

            {[
              { step: '01', title: 'Connect your tools', desc: 'Link Figma, Canva, or Adobe — we pull your brand assets and analyze every design decision your team has made.', color: '#CDBCFF' },
              { step: '02', title: 'AI extracts your brand', desc: 'Colors, typography, spacing, layout patterns, imagery style, and tone of voice are identified and structured automatically.', color: '#A6CEFF' },
              { step: '03', title: 'Style DNA goes live', desc: 'Your living brand profile powers content generation, brand checks, and templates — and updates as your brand evolves.', color: '#A7FFAC' },
            ].map((item, i) => (
              <AnimatedItem key={item.step} delay={i * 0.15} className="flex flex-col items-center text-center gap-6 px-4 md:px-8">
                <div className="w-20 h-20 rounded-full flex items-center justify-center relative z-10" style={{ backgroundColor: item.color }}>
                  <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[16px] tracking-[0.75px]">{item.step}</p>
                </div>
                <p className="text-[#f7f6f5] text-[20px] sm:text-[24px] leading-[1.2]" style={{ fontWeight: 400 }}>{item.title}</p>
                <p className="text-[rgba(247,246,245,0.5)] text-[14px] sm:text-[15px] leading-[1.6]" style={{ fontWeight: 300 }}>{item.desc}</p>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Living System Section ───── */}
      <section className="px-4 sm:px-8 py-16 sm:py-20 lg:py-[120px]">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <AnimatedSection className="flex-1">
              <div className="flex flex-col gap-6">
                <div className="flex gap-2 items-center">
                  <RefreshCw size={16} color="rgba(35,31,35,0.48)" />
                  <p className="font-['Fragment_Mono',monospace] text-[rgba(35,31,35,0.48)] text-[12px] tracking-[0.75px] uppercase">Always current</p>
                </div>
                <p className="text-[#231f23] text-[28px] font-[Stack_Sans_Headline] sm:text-[36px] lg:text-[40px] tracking-[-0.5px] leading-[1.15]" style={{ fontWeight: 400 }}>
                  Not a PDF. A living, learning brand profile.
                </p>
                <p className="text-[rgba(35,31,35,0.64)] text-[15px] sm:text-[16px] leading-[26px]" style={{ fontWeight: 300 }}>
                  Traditional brand guidelines are static documents that go stale the moment they're published. Style DNA is different — it observes your team's ongoing design decisions and evolves alongside your brand. When your team shifts a color palette or introduces a new type treatment, Style DNA picks it up automatically.
                </p>
                <div className="flex flex-col gap-3 mt-2">
                  {['Updates as your team designs', 'No manual maintenance required', 'Version history for every change'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#CDBCFF] flex items-center justify-center shrink-0">
                        <ArrowRight size={10} color="#231f23" />
                      </div>
                      <p className="text-[#231f23] text-[14px]" style={{ fontWeight: 300 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedItem delay={0.2} className="flex-1 w-full max-w-[480px]">
              <div className="bg-[#ececec] rounded-[20px] p-6 sm:p-8">
                <div className="flex flex-col gap-4">
                  {['Brand palette updated', 'New heading weight detected', 'Tone shift: more conversational'].map((update, i) => (
                    <motion.div key={update}
                      className="bg-white rounded-xl p-4 flex items-center gap-3 border border-[rgba(35,31,35,0.06)]"
                      initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}>
                      <div className="w-2 h-2 rounded-full bg-[#A7FFAC] shrink-0" />
                      <p className="text-[#231f23] text-[14px]" style={{ fontWeight: 300 }}>{update}</p>
                      <p className="text-[rgba(35,31,35,0.32)] text-[12px] ml-auto shrink-0 font-['Fragment_Mono',monospace]">{i === 0 ? '2m ago' : i === 1 ? '1h ago' : '3h ago'}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </section>

      {/* ───── Integrations Strip ───── */}
      <section className="px-4 sm:px-8 pb-12">
        <AnimatedItem className="w-full max-w-[1100px] mx-auto">
          <div className="bg-[#ececec] rounded-[20px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <p className="text-[rgba(35,31,35,0.48)] text-[14px]" style={{ fontWeight: 300 }}>Connects with</p>
            {INTEGRATIONS.map((tool) => {
              const Icon = tool.icon;
              return (
                <div key={tool.name} className="flex items-center gap-2">
                  <Icon size={18} color="rgba(35,31,35,0.48)" />
                  <p className="text-[#231f23] text-[14px] sm:text-[16px]" style={{ fontWeight: 400 }}>{tool.name}</p>
                </div>
              );
            })}
          </div>
        </AnimatedItem>
      </section>

      {/* ───── Bottom CTA ───── */}
      <section className="px-4 sm:px-8 py-16 sm:py-20 lg:py-[120px]">
        <AnimatedSection className="w-full max-w-[1100px] mx-auto">
          <div className="bg-[#231f23] rounded-[20px] p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center gap-6">
            <p className="text-[#f7f6f5] text-[24px] sm:text-[32px] font-[Stack_Sans_Headline] lg:text-[40px] tracking-[-0.5px] leading-[1.15] max-w-[480px]" style={{ fontWeight: 400 }}>
              Ready to decode your brand?
            </p>
            <p className="text-[rgba(247,246,245,0.64)] text-[16px] leading-[24px] max-w-[400px]" style={{ fontWeight: 300 }}>
              Connect your design tools and see your Style DNA in minutes.
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