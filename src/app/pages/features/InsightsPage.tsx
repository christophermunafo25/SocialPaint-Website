import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedSection, AnimatedItem } from '../../components/AnimatedSection';
import { Link } from 'react-router-dom';
import {
  Lightbulb, ArrowRight, TrendingUp, BarChart3, Flame,
  Globe, Users, Activity, Clock, Instagram, Linkedin, Twitter, ArrowUpRight, ArrowDownRight
} from 'lucide-react';

/* ─── Animated Metric Card ─── */
function MetricCard({ label, value, change, positive, color, delay = 0 }: {
  label: string; value: string; change: string; positive: boolean; color: string; delay?: number;
}) {
  return (
    <AnimatedItem delay={delay}>
      <motion.div
        className="bg-white rounded-[16px] p-5 sm:p-6 border border-[rgba(35,31,35,0.08)] cursor-pointer h-full"
        whileHover={{ y: -4, boxShadow: '0px 8px 40px rgba(0,0,0,0.06)' }}
        transition={{ duration: 0.25 }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
          <p className="font-['Fragment_Mono',monospace] text-[rgba(35,31,35,0.48)] text-[11px] tracking-[0.75px] uppercase">{label}</p>
        </div>
        <p className="text-[#231f23] text-[28px] font-[Stack_Sans_Headline] sm:text-[36px] tracking-[-0.5px] mb-1" style={{ fontWeight: 400 }}>{value}</p>
        <div className="flex items-center gap-1">
          {positive ? (
            <ArrowUpRight size={14} color="#4a7c59" />
          ) : (
            <ArrowDownRight size={14} color="#e94560" />
          )}
          <p className="text-[13px]" style={{ fontWeight: 400, color: positive ? '#4a7c59' : '#e94560' }}>{change}</p>
          <p className="text-[rgba(35,31,35,0.32)] text-[12px] ml-1" style={{ fontWeight: 300 }}>vs last month</p>
        </div>
      </motion.div>
    </AnimatedItem>
  );
}

/* ─── Engagement Heatmap ─── */
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const HOURS = ['6am', '9am', '12pm', '3pm', '6pm', '9pm'];
const HEATMAP_DATA = [
  [0.2, 0.5, 0.7, 0.4, 0.3, 0.1],
  [0.3, 0.9, 0.8, 0.6, 0.4, 0.2],
  [0.2, 0.7, 0.9, 0.5, 0.3, 0.1],
  [0.3, 0.8, 0.7, 0.6, 0.5, 0.2],
  [0.4, 0.6, 0.5, 0.4, 0.2, 0.1],
  [0.1, 0.3, 0.4, 0.5, 0.6, 0.3],
  [0.1, 0.2, 0.3, 0.4, 0.5, 0.2],
];

function EngagementHeatmap() {
  const [hoveredCell, setHoveredCell] = useState<{ day: number; hour: number } | null>(null);

  return (
    <div className="w-full max-w-[600px]">
      {/* Hour headers */}
      <div className="flex mb-2 pl-[52px]">
        {HOURS.map((h) => (
          <p key={h} className="flex-1 text-center font-['Fragment_Mono',monospace] text-[rgba(35,31,35,0.32)] text-[10px] tracking-[0.5px]">{h}</p>
        ))}
      </div>

      {/* Grid */}
      <div className="flex flex-col gap-1">
        {DAYS.map((day, di) => (
          <div key={day} className="flex items-center gap-2">
            <p className="w-[40px] text-right font-['Fragment_Mono',monospace] text-[rgba(35,31,35,0.32)] text-[10px] tracking-[0.5px] shrink-0">{day}</p>
            <div className="flex gap-1 flex-1">
              {HEATMAP_DATA[di].map((val, hi) => (
                <motion.div key={hi}
                  className="flex-1 aspect-[2/1] rounded-[4px] cursor-pointer relative"
                  style={{ backgroundColor: `rgba(204,253,207,${val})` }}
                  onMouseEnter={() => setHoveredCell({ day: di, hour: hi })}
                  onMouseLeave={() => setHoveredCell(null)}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.15 }}>
                  {hoveredCell?.day === di && hoveredCell?.hour === hi && (
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#231f23] text-[#f7f6f5] px-2 py-1 rounded text-[10px] font-['Fragment_Mono',monospace] whitespace-nowrap z-10">
                      {Math.round(val * 100)}% engagement
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── AI Recommendation Cards ─── */
const RECOMMENDATIONS = [
  {
    type: 'Timing',
    icon: Clock,
    title: 'Post on Tuesdays at 9 AM',
    detail: 'Your audience is 3.2x more active on Tuesday mornings. Shifting your posting schedule could increase reach by ~40%.',
    impact: '+40% reach',
    color: '#A7FFAC',
  },
  {
    type: 'Format',
    icon: BarChart3,
    title: 'Carousels outperform single images',
    detail: 'Your carousels get 2.1x more engagement than single images on Instagram. Consider converting upcoming campaigns to carousel format.',
    impact: '2.1x engagement',
    color: '#A6CEFF',
  },
  {
    type: 'Content',
    icon: Lightbulb,
    title: 'Team spotlights drive the most shares',
    detail: '"Behind the brand" content featuring team members generates 58% more shares than product-focused posts.',
    impact: '+58% shares',
    color: '#FFED8C',
  },
  {
    type: 'Platform',
    icon: Globe,
    title: 'LinkedIn is your highest-ROI channel',
    detail: 'Your LinkedIn content drives 4x more qualified traffic than other platforms. Consider increasing LinkedIn posting frequency.',
    impact: '4x qualified traffic',
    color: '#CDBCFF',
  },
];

function RecommendationCard({ rec, index }: { rec: typeof RECOMMENDATIONS[number]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = rec.icon;

  return (
    <AnimatedItem delay={index * 0.1}>
      <motion.div
        className="bg-white rounded-[16px] p-5 sm:p-6 border border-[rgba(35,31,35,0.08)] cursor-pointer"
        onClick={() => setExpanded(!expanded)}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}>
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0" style={{ backgroundColor: rec.color }}>
            <Icon size={18} color="#231f23" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <p className="font-['Fragment_Mono',monospace] text-[rgba(35,31,35,0.48)] text-[10px] tracking-[0.75px] uppercase">{rec.type}</p>
              <div className="px-2 py-0.5 rounded-full bg-[#A7FFAC]">
                <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[10px] tracking-[0.5px]">{rec.impact}</p>
              </div>
            </div>
            <p className="text-[#231f23] text-[15px] sm:text-[16px]" style={{ fontWeight: 400 }}>{rec.title}</p>
          </div>
          <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0 mt-1">
            <ArrowRight size={14} color="rgba(35,31,35,0.32)" className="rotate-90" />
          </motion.div>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden">
              <div className="pt-4 pl-14">
                <p className="text-[rgba(35,31,35,0.64)] text-[14px] leading-[22px]" style={{ fontWeight: 300 }}>{rec.detail}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatedItem>
  );
}

/* ─── Platform comparison ─── */
const PLATFORM_METRICS = [
  { platform: 'Instagram', icon: Instagram, reach: 82, engagement: 4.2, growth: '+12%', color: '#FFC5B0' },
  { platform: 'LinkedIn', icon: Linkedin, reach: 45, engagement: 6.8, growth: '+28%', color: '#A6CEFF' },
  { platform: 'Twitter', icon: Twitter, reach: 31, engagement: 2.1, growth: '+5%', color: '#FFED8C' },
];

export function InsightsPage() {
  return (
    <div className="w-full pt-[140px] sm:pt-[180px] lg:pt-[200px] pb-0 max-w-[1440px] mx-auto">
      {/* ───── Hero with Dashboard Metrics ───── */}
      <section className="px-4 sm:px-8 pb-16 md:pb-24">
        <AnimatedSection className="flex flex-col items-center text-center gap-6 mb-12 md:mb-16">
          <AnimatedItem>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ backgroundColor: '#FFED8C' }}>
              <Lightbulb size={14} color="#231f23" />
              <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[12px] tracking-[0.75px] uppercase">Insights</p>
            </div>
          </AnimatedItem>
          <AnimatedItem delay={0.1}>
            <p className="text-[#231f23] text-[36px] font-[Stack_Sans_Headline] sm:text-[48px] md:text-[56px] lg:text-[64px] tracking-[-1px] leading-[1.1] max-w-[760px]" style={{ fontWeight: 400 }}>
              Know what's working<br className="hidden sm:inline" /> <span className="accent-italic">and why</span>
            </p>
          </AnimatedItem>
          <AnimatedItem delay={0.2}>
            <p className="text-[rgba(35,31,35,0.64)] text-[16px] sm:text-[18px] md:text-[20px] leading-[28px] sm:leading-[32px] max-w-[580px]" style={{ fontWeight: 300 }}>
              Track content performance across every platform. See which formats, styles, and timing drive the most engagement — and let AI optimize your strategy.
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

        {/* Dashboard Metrics Grid */}
        <div className="w-full max-w-[1100px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard label="Total Reach" value="284K" change="+23%" positive={true} color="#A7FFAC" delay={0.35} />
          <MetricCard label="Engagement" value="4.8%" change="+0.6%" positive={true} color="#A6CEFF" delay={0.4} />
          <MetricCard label="Brand Score" value="96" change="+3pts" positive={true} color="#CDBCFF" delay={0.45} />
          <MetricCard label="Content Created" value="847" change="+142" positive={true} color="#FFED8C" delay={0.5} />
        </div>
      </section>

      {/* ───── AI Recommendations ───── */}
      <section className="px-4 sm:px-8 py-16 sm:py-20 lg:py-[120px]">
        <div className="max-w-[800px] mx-auto">
          <AnimatedSection className="flex flex-col gap-6 items-start mb-10 md:mb-12">
            <div className="flex gap-2 items-center px-3 py-2 rounded-lg relative">
              <div aria-hidden="true" className="absolute border border-[rgba(35,31,35,0.08)] border-solid inset-0 pointer-events-none rounded-lg" />
              <div className="bg-[#FFED8C] rounded-[2px] shrink-0 size-[10px]" />
              <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[12px] tracking-[0.75px] uppercase">AI Recommendations</p>
            </div>
            <p className="text-[#231f23] text-[28px] font-[Stack_Sans_Headline] sm:text-[36px] lg:text-[40px] tracking-[-0.5px] leading-[1.15] max-w-[560px]" style={{ fontWeight: 400 }}>
              Actionable insights, not just dashboards
            </p>
            <p className="text-[rgba(35,31,35,0.64)] text-[15px] sm:text-[16px] leading-[26px] max-w-[520px]" style={{ fontWeight: 300 }}>
              Socialpaint doesn't just show you numbers. It tells you exactly what to do — what to post, when, where, and how.
            </p>
          </AnimatedSection>

          <div className="flex flex-col gap-3">
            {RECOMMENDATIONS.map((rec, i) => (
              <RecommendationCard key={rec.title} rec={rec} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ───── Engagement Heatmap — Dark Section ───── */}
      <section className="bg-[#1a171a] w-full px-4 sm:px-8 py-16 sm:py-20 lg:py-[120px] rounded-[20px] max-w-[1440px] mx-auto">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <AnimatedSection className="flex-1">
              <div className="flex flex-col gap-6">
                <p className="text-[#f7f6f5] text-[28px] sm:text-[36px] font-[Stack_Sans_Headline] lg:text-[40px] tracking-[-0.5px] leading-[1.15]" style={{ fontWeight: 400 }}>
                  Find your audience's sweet spot
                </p>
                <p className="text-[rgba(247,246,245,0.5)] text-[15px] sm:text-[16px] leading-[26px]" style={{ fontWeight: 300 }}>
                  The engagement heatmap shows exactly when your audience is most active and responsive. Stop guessing posting times — use data.
                </p>
                <div className="flex flex-col gap-3 mt-2">
                  {[
                    { label: 'Peak engagement', value: 'Tuesday 9 AM', color: '#A7FFAC' },
                    { label: 'Best format', value: 'Carousels', color: '#A6CEFF' },
                    { label: 'Top channel', value: 'LinkedIn', color: '#FFED8C' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                      <p className="text-[rgba(247,246,245,0.48)] text-[13px]" style={{ fontWeight: 300 }}>{item.label}</p>
                      <p className="text-[#f7f6f5] text-[13px] ml-auto" style={{ fontWeight: 400 }}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedItem delay={0.2} className="flex-1 w-full flex justify-center">
              <EngagementHeatmap />
            </AnimatedItem>
          </div>
        </div>
      </section>

      {/* ───── Platform Comparison ───── */}
      <section className="px-4 sm:px-8 py-16 sm:py-20 lg:py-[120px]">
        <div className="max-w-[900px] mx-auto">
          <AnimatedSection className="mb-10 md:mb-12 text-center">
            <p className="text-[#231f23] text-[28px] font-[Stack_Sans_Headline] sm:text-[36px] lg:text-[40px] tracking-[-0.5px] leading-[1.15]" style={{ fontWeight: 400 }}>
              Every platform, one view
            </p>
          </AnimatedSection>

          <div className="flex flex-col gap-4">
            {PLATFORM_METRICS.map((pm, i) => {
              const Icon = pm.icon;
              return (
                <AnimatedItem key={pm.platform} delay={i * 0.1}>
                  <div className="bg-white rounded-[16px] p-5 sm:p-6 border border-[rgba(35,31,35,0.08)] flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex items-center gap-3 w-full sm:w-[160px] shrink-0">
                      <div className="w-10 h-10 rounded-[10px] flex items-center justify-center" style={{ backgroundColor: pm.color }}>
                        <Icon size={18} color="#231f23" />
                      </div>
                      <p className="text-[#231f23] text-[16px]" style={{ fontWeight: 400 }}>{pm.platform}</p>
                    </div>

                    <div className="flex-1 w-full">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-['Fragment_Mono',monospace] text-[rgba(35,31,35,0.32)] text-[10px] tracking-[0.5px] uppercase w-[60px]">Reach</p>
                        <div className="flex-1 h-2 bg-[rgba(35,31,35,0.06)] rounded-full overflow-hidden">
                          <motion.div className="h-full rounded-full" style={{ backgroundColor: pm.color }}
                            initial={{ width: 0 }} whileInView={{ width: `${pm.reach}%` }}
                            viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }} />
                        </div>
                        <p className="font-['Fragment_Mono',monospace] text-[rgba(35,31,35,0.48)] text-[11px] w-[36px] text-right">{pm.reach}K</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                      <div className="text-center">
                        <p className="text-[#231f23] text-[18px] tracking-[-0.5px]" style={{ fontWeight: 400 }}>{pm.engagement}%</p>
                        <p className="font-['Fragment_Mono',monospace] text-[rgba(35,31,35,0.32)] text-[9px] tracking-[0.5px] uppercase">Eng. rate</p>
                      </div>
                      <div className="px-2.5 py-1 rounded-full bg-[#A7FFAC]">
                        <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[11px] tracking-[0.5px]">{pm.growth}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedItem>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── Bottom CTA ───── */}
      <section className="px-4 sm:px-8 py-16 sm:py-20 lg:py-[120px]">
        <AnimatedSection className="w-full max-w-[1100px] mx-auto">
          <div className="bg-[#231f23] rounded-[20px] p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center gap-6">
            <p className="text-[#f7f6f5] text-[24px] sm:text-[32px] font-[Stack_Sans_Headline] lg:text-[40px] tracking-[-0.5px] leading-[1.15] max-w-[480px]" style={{ fontWeight: 400 }}>
              Stop guessing. Start knowing.
            </p>
            <p className="text-[rgba(247,246,245,0.64)] text-[16px] leading-[24px] max-w-[400px]" style={{ fontWeight: 300 }}>
              AI-powered insights that tell you exactly what to do next.
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