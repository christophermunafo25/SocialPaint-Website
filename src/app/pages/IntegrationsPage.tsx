import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';
import { ScrollHeadline, Parallax, ZoomReveal, Marquee } from '../components/ScrollMotion';
import {
  Instagram, Linkedin, Twitter, Music2, Facebook, Image,
  Figma, Palette, PenTool,
  MessageSquare, BarChart3, Clock, Radio, FileText, Zap,
  ArrowRight, Plug, Workflow, Shield
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Integration {
  name: string;
  icon: LucideIcon;
  color: string;
  description: string;
}

const socialPlatforms: Integration[] = [
  { name: 'Instagram', icon: Instagram, color: '#FFC5B0', description: 'Publish posts, stories, reels, and carousels directly to Instagram with auto-formatting.' },
  { name: 'LinkedIn', icon: Linkedin, color: '#A6CEFF', description: 'Create and schedule professional posts, articles, and company page content.' },
  { name: 'Twitter / X', icon: Twitter, color: '#FFED8C', description: 'Generate threads, image posts, and polls optimized for Twitter engagement.' },
  { name: 'TikTok', icon: Music2, color: '#CDBCFF', description: 'Create video thumbnails, captions, and text overlays for TikTok content.' },
  { name: 'Facebook', icon: Facebook, color: '#A7FFAC', description: 'Manage page posts, ad creatives, and group content from one dashboard.' },
  { name: 'Pinterest', icon: Image, color: '#FFC5B0', description: 'Generate pins and idea pins with brand-consistent visuals and descriptions.' },
];

const designTools: Integration[] = [
  { name: 'Figma', icon: Figma, color: '#CDBCFF', description: 'Import your Figma design system to automatically build your Style DNA.' },
  { name: 'Canva', icon: Palette, color: '#A7FFAC', description: 'Sync brand assets from Canva and use them in AI-generated content.' },
  { name: 'Adobe Creative Suite', icon: PenTool, color: '#A6CEFF', description: 'Connect Illustrator, Photoshop, and InDesign brand files for Style DNA.' },
];

const workflowTools: Integration[] = [
  { name: 'Zapier', icon: Zap, color: '#FFED8C', description: 'Connect SocialPaint to 5,000+ apps with custom Zapier workflows. Trigger generation from form fills, CRM updates, calendar events — anything.' },
  { name: 'Slack', icon: MessageSquare, color: '#FFED8C', description: 'Get content approval notifications and share generated assets in Slack.' },
  { name: 'HubSpot', icon: BarChart3, color: '#FFC5B0', description: 'Push generated content into your HubSpot marketing campaigns and calendar.' },
  { name: 'Buffer', icon: Clock, color: '#A7FFAC', description: 'Schedule AI-generated posts to Buffer for multi-platform publishing.' },
  { name: 'Hootsuite', icon: Radio, color: '#CDBCFF', description: 'Export content directly to Hootsuite for centralized social media management.' },
  { name: 'Notion', icon: FileText, color: '#A6CEFF', description: 'Sync content plans, brand guidelines, and generated assets to Notion.' },
];

const allIntegrations = [...socialPlatforms, ...designTools, ...workflowTools];

/* ─── Marquee chip ─── */
function IntegrationChip({ item }: { item: Integration }) {
  const Icon = item.icon;
  return (
    <div className="flex items-center gap-3 bg-white border border-[rgba(35,31,35,0.08)] rounded-full pl-2 pr-5 py-2 shrink-0">
      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: item.color }}>
        <Icon size={15} color="#231f23" />
      </div>
      <p className="text-[#231f23] text-[14px] whitespace-nowrap" style={{ fontWeight: 400 }}>{item.name}</p>
    </div>
  );
}

/* ─── Standard integration card (social platforms grid) ─── */
function IntegrationCard({ item }: { item: Integration }) {
  const Icon = item.icon;
  return (
    <motion.div
      className="bg-white rounded-[16px] p-6 border border-[rgba(35,31,35,0.08)] cursor-pointer h-full"
      whileHover={{ y: -4, boxShadow: '0px 8px 40px rgba(0,0,0,0.07)' }}
      transition={{ duration: 0.25 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-[12px] flex items-center justify-center shrink-0" style={{ backgroundColor: item.color }}>
          <Icon size={22} color="#231f23" />
        </div>
        <p className="text-[#231f23] text-[16px]" style={{ fontWeight: 500 }}>{item.name}</p>
      </div>
      <p className="text-[rgba(35,31,35,0.64)] text-[14px] leading-[1.5]" style={{ fontWeight: 300 }}>{item.description}</p>
    </motion.div>
  );
}

/* ─── Section eyebrow ─── */
function SectionTag({ tag, tagColor }: { tag: string; tagColor: string }) {
  return (
    <div className="flex gap-2 items-center px-3 py-1.5 rounded-lg" style={{ backgroundColor: tagColor }}>
      <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[11px] tracking-[0.75px] uppercase">{tag}</p>
    </div>
  );
}

export function IntegrationsPage() {
  return (
    <div className="w-full pt-[140px] sm:pt-[180px] lg:pt-[200px] pb-0 max-w-[1440px] mx-auto overflow-x-clip">
      {/* ───── Hero ───── */}
      <section className="px-4 sm:px-8 pb-10 md:pb-14">
        <AnimatedSection className="flex flex-col items-center text-center gap-6 mb-12 md:mb-16">
          <AnimatedItem>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(35,31,35,0.06)]">
              <Plug size={14} color="#231f23" />
              <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[12px] tracking-[0.75px] uppercase">Integrations</p>
            </div>
          </AnimatedItem>
          <AnimatedItem delay={0.1}>
            <p className="text-[#231f23] font-[Stack_Sans_Headline] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] tracking-[-1px] leading-[1.1] max-w-[800px]" style={{ fontWeight: 400 }}>
              Connects to your entire <span className="accent-italic">content stack</span>
            </p>
          </AnimatedItem>
          <AnimatedItem delay={0.2}>
            <p className="text-[rgba(35,31,35,0.64)] text-[16px] sm:text-[18px] md:text-[20px] leading-[1.5] max-w-[680px]" style={{ fontWeight: 300 }}>
              SocialPaint plugs into the social platforms, design tools, and marketing apps your team already uses.
            </p>
          </AnimatedItem>
        </AnimatedSection>
      </section>

      {/* ───── Flowing integration rivers — the stack in motion ───── */}
      <section className="pb-16 md:pb-24">
        <AnimatedItem className="flex flex-col gap-4">
          <Marquee duration={38}>
            {allIntegrations.slice(0, 8).map((item) => <IntegrationChip key={item.name} item={item} />)}
          </Marquee>
          <Marquee duration={46} reverse>
            {allIntegrations.slice(8).concat(allIntegrations.slice(0, 3)).map((item, i) => <IntegrationChip key={`${item.name}-${i}`} item={item} />)}
          </Marquee>
        </AnimatedItem>
      </section>

      {/* ───── How integrations work strip ───── */}
      <section className="px-4 sm:px-8 pb-16 md:pb-24">
        <ZoomReveal className="w-full max-w-[1240px] mx-auto">
          <div className="bg-[#231f23] rounded-[20px] p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Plug, title: 'Connect once', desc: 'OAuth or API key — setup takes under 2 minutes per tool.', color: '#A7FFAC' },
              { icon: Workflow, title: 'Flows automatically', desc: 'Content syncs, notifications fire, approvals route — no manual work.', color: '#CDBCFF' },
              { icon: Shield, title: 'Secure by default', desc: 'SOC 2 compliant. Your credentials are encrypted end-to-end.', color: '#A6CEFF' },
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-4 items-start">
                <div className="flex items-center p-2 rounded-lg" style={{ backgroundColor: item.color }}>
                  <item.icon size={16} color="#231f23" />
                </div>
                <p className="text-[#f7f6f5] text-[16px] sm:text-[18px]" style={{ fontWeight: 500 }}>{item.title}</p>
                <p className="text-[rgba(247,246,245,0.64)] text-[14px] leading-[1.5]" style={{ fontWeight: 300 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </ZoomReveal>
      </section>

      {/* ───── Social Platforms — parallax column grid ───── */}
      <section className="px-4 sm:px-8 py-16 sm:py-20">
        <div className="max-w-[1240px] mx-auto">
          <AnimatedSection className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-12">
            <div className="flex flex-col gap-4 items-start">
              <SectionTag tag="Publish" tagColor="#FFC5B0" />
              <p className="text-[#231f23] text-[24px] sm:text-[32px] font-[Stack_Sans_Headline] tracking-[-0.5px] leading-[1.15]">
                Social Platforms
              </p>
            </div>
            <p className="text-[rgba(35,31,35,0.48)] text-[14px] leading-[1.5]" style={{ fontWeight: 300 }}>{socialPlatforms.length} integrations</p>
          </AnimatedSection>

          {/* Three columns drifting at different speeds */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {[0, 1, 2].map((col) => (
              <Parallax key={col} distance={col === 1 ? -28 : 16} className="flex flex-col gap-6">
                {socialPlatforms.filter((_, i) => i % 3 === col).map((item) => (
                  <AnimatedItem key={item.name}>
                    <IntegrationCard item={item} />
                  </AnimatedItem>
                ))}
              </Parallax>
            ))}
          </div>
          {/* Mobile/tablet: flat grid */}
          <div className="grid lg:hidden grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {socialPlatforms.map((item, i) => (
              <AnimatedItem key={item.name} delay={i * 0.05}>
                <IntegrationCard item={item} />
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Design Tools — editorial split, the Style DNA source ───── */}
      <section className="bg-[#ececec] px-4 sm:px-8 py-16 sm:py-20">
        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Sticky intro */}
          <div className="lg:w-[380px] shrink-0">
            <div className="lg:sticky lg:top-[140px] flex flex-col gap-4 items-start">
              <SectionTag tag="Import" tagColor="#CDBCFF" />
              <p className="text-[#231f23] text-[24px] sm:text-[32px] font-[Stack_Sans_Headline] tracking-[-0.5px] leading-[1.15]">
                Design Tools
              </p>
              <p className="text-[rgba(35,31,35,0.64)] text-[14px] sm:text-[16px] leading-[1.5]" style={{ fontWeight: 300 }}>
                Where your Style DNA comes from. Connect the tools your designers already work in, and SocialPaint learns your brand from the source files themselves.
              </p>
            </div>
          </div>
          {/* Stacked editorial rows */}
          <div className="flex-1 flex flex-col">
            {designTools.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedItem key={item.name} delay={i * 0.08}>
                  <motion.div
                    className="flex items-start sm:items-center gap-5 sm:gap-8 py-8 sm:py-10 border-b border-[rgba(35,31,35,0.1)] cursor-pointer group"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[16px] flex items-center justify-center shrink-0" style={{ backgroundColor: item.color }}>
                      <Icon size={26} color="#231f23" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[#231f23] text-[20px] sm:text-[24px] tracking-[-0.5px] mb-1" style={{ fontWeight: 400 }}>{item.name}</p>
                      <p className="text-[rgba(35,31,35,0.64)] text-[14px] sm:text-[15px] leading-[1.5] max-w-[480px]" style={{ fontWeight: 300 }}>{item.description}</p>
                    </div>
                    <ArrowRight size={20} className="shrink-0 text-[rgba(35,31,35,0.24)] group-hover:text-[#231f23] transition-colors mt-2 sm:mt-0" />
                  </motion.div>
                </AnimatedItem>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── Marketing & Workflow — bento with featured Zapier cell ───── */}
      <section className="px-4 sm:px-8 py-16 sm:py-20">
        <div className="max-w-[1240px] mx-auto">
          <AnimatedSection className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-12">
            <div className="flex flex-col gap-4 items-start">
              <SectionTag tag="Automate" tagColor="#A7FFAC" />
              <p className="text-[#231f23] text-[24px] sm:text-[32px] font-[Stack_Sans_Headline] tracking-[-0.5px] leading-[1.15]">
                Marketing & Workflow
              </p>
            </div>
            <p className="text-[rgba(35,31,35,0.48)] text-[14px] leading-[1.5]" style={{ fontWeight: 300 }}>{workflowTools.length} integrations</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Featured Zapier cell — spans 2×2 */}
            <AnimatedItem className="sm:col-span-2 sm:row-span-2">
              <motion.div
                className="bg-[#231f23] rounded-[20px] p-8 sm:p-10 h-full flex flex-col justify-between cursor-pointer min-h-[320px]"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex flex-col gap-5 items-start">
                  <div className="w-14 h-14 rounded-[14px] flex items-center justify-center" style={{ backgroundColor: workflowTools[0].color }}>
                    <Zap size={26} color="#231f23" />
                  </div>
                  <p className="text-[#f7f6f5] text-[24px] sm:text-[28px] tracking-[-0.5px]" style={{ fontWeight: 400 }}>{workflowTools[0].name}</p>
                  <p className="text-[rgba(247,246,245,0.64)] text-[14px] sm:text-[16px] leading-[1.5] max-w-[400px]" style={{ fontWeight: 300 }}>
                    {workflowTools[0].description}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-8">
                  <p className="font-['Fragment_Mono',monospace] text-[#A7FFAC] text-[12px] tracking-[0.75px] uppercase">5,000+ connected apps</p>
                  <ArrowRight size={14} color="#A7FFAC" />
                </div>
              </motion.div>
            </AnimatedItem>

            {workflowTools.slice(1).map((item, i) => (
              <AnimatedItem key={item.name} delay={0.08 + i * 0.05}>
                <IntegrationCard item={item} />
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Scroll-reveal statement ───── */}
      <section className="px-4 sm:px-8 py-16 sm:py-24">
        <div className="max-w-[900px] mx-auto text-center">
          <ScrollHeadline
            text={'Your tools stay. \n Your workflow gets superpowers.'}
            accentWords={['superpowers.']}
            className="leading-[1.15] text-[32px] sm:text-[44px] lg:text-[52px] tracking-[-0.5px] text-center"
          />
        </div>
      </section>

      {/* ───── API CTA ───── */}
      <section className="px-4 sm:px-8 pb-16 sm:pb-20 lg:pb-[120px]">
        <div className="max-w-[1240px] mx-auto">
          <ZoomReveal>
            <div className="bg-[#231f23] rounded-[20px] overflow-hidden flex flex-col lg:flex-row">
              {/* Left: copy */}
              <div className="flex-1 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex gap-2 items-center mb-6">
                  <div className="flex items-center p-2 rounded-lg bg-[#FFED8C]">
                    <Zap size={16} color="#231f23" />
                  </div>
                  <p className="font-['Fragment_Mono',monospace] text-[rgba(247,246,245,0.48)] text-[12px] tracking-[0.75px] uppercase">REST API</p>
                </div>
                <p className="text-[#f7f6f5] text-[24px] sm:text-[32px] font-[Stack_Sans_Headline] tracking-[-0.5px] leading-[1.15] mb-4">
                  Build custom integrations
                </p>
                <p className="text-[rgba(247,246,245,0.64)] text-[14px] sm:text-[16px] leading-[1.5] mb-8 max-w-[400px]" style={{ fontWeight: 300 }}>
                  Full REST API for generating content, managing brands, and building workflows programmatically.
                </p>
                <div className="flex gap-3">
                  <Link to="/resources" className="bg-[#f7f6f5] flex gap-2 items-center justify-center px-5 py-3 rounded-lg cursor-pointer no-underline self-start">
                    <p className="text-[#231f23] text-[14px] sm:text-[16px] whitespace-nowrap">View API Docs</p>
                    <ArrowRight size={16} color="#231f23" />
                  </Link>
                </div>
              </div>
              {/* Right: code preview drifts against scroll */}
              <div className="flex-1 bg-[rgba(247,246,245,0.04)] p-8 sm:p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-[rgba(247,246,245,0.08)] overflow-hidden">
                <Parallax distance={-20}>
                  <div className="font-['Fragment_Mono',monospace] text-[13px] leading-[22px]">
                    <p className="text-[rgba(247,246,245,0.48)]">// Generate on-brand content</p>
                    <p className="text-[#A7FFAC]">POST /v1/generate</p>
                    <p className="text-[rgba(247,246,245,0.48)] mt-4">{'{'}</p>
                    <p className="text-[#f7f6f5] ml-4">"brand_id": <span className="text-[#CDBCFF]">"bd_29xk4..."</span>,</p>
                    <p className="text-[#f7f6f5] ml-4">"platform": <span className="text-[#CDBCFF]">"instagram"</span>,</p>
                    <p className="text-[#f7f6f5] ml-4">"format": <span className="text-[#CDBCFF]">"carousel"</span>,</p>
                    <p className="text-[#f7f6f5] ml-4">"prompt": <span className="text-[#CDBCFF]">"Launch week recap"</span></p>
                    <p className="text-[rgba(247,246,245,0.48)]">{'}'}</p>
                    <p className="text-[rgba(247,246,245,0.48)] mt-4">// Response: 4 slides, on-brand</p>
                    <p className="text-[#A7FFAC]">200 OK — 2.3s</p>
                  </div>
                </Parallax>
              </div>
            </div>
          </ZoomReveal>
        </div>
      </section>
    </div>
  );
}
