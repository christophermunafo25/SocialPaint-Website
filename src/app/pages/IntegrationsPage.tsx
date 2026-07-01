import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';
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

const categories: { title: string; tag: string; tagColor: string; items: Integration[] }[] = [
  {
    title: 'Social Platforms',
    tag: 'Publish',
    tagColor: '#FFC5B0',
    items: [
      { name: 'Instagram', icon: Instagram, color: '#FFC5B0', description: 'Publish posts, stories, reels, and carousels directly to Instagram with auto-formatting.' },
      { name: 'LinkedIn', icon: Linkedin, color: '#A6CEFF', description: 'Create and schedule professional posts, articles, and company page content.' },
      { name: 'Twitter / X', icon: Twitter, color: '#FFED8C', description: 'Generate threads, image posts, and polls optimized for Twitter engagement.' },
      { name: 'TikTok', icon: Music2, color: '#CDBCFF', description: 'Create video thumbnails, captions, and text overlays for TikTok content.' },
      { name: 'Facebook', icon: Facebook, color: '#A7FFAC', description: 'Manage page posts, ad creatives, and group content from one dashboard.' },
      { name: 'Pinterest', icon: Image, color: '#FFC5B0', description: 'Generate pins and idea pins with brand-consistent visuals and descriptions.' },
    ],
  },
  {
    title: 'Design Tools',
    tag: 'Import',
    tagColor: '#CDBCFF',
    items: [
      { name: 'Figma', icon: Figma, color: '#CDBCFF', description: 'Import your Figma design system to automatically build your Style DNA.' },
      { name: 'Canva', icon: Palette, color: '#A7FFAC', description: 'Sync brand assets from Canva and use them in AI-generated content.' },
      { name: 'Adobe Creative Suite', icon: PenTool, color: '#A6CEFF', description: 'Connect Illustrator, Photoshop, and InDesign brand files for Style DNA.' },
    ],
  },
  {
    title: 'Marketing & Workflow',
    tag: 'Automate',
    tagColor: '#A7FFAC',
    items: [
      { name: 'Slack', icon: MessageSquare, color: '#FFED8C', description: 'Get content approval notifications and share generated assets in Slack.' },
      { name: 'HubSpot', icon: BarChart3, color: '#FFC5B0', description: 'Push generated content into your HubSpot marketing campaigns and calendar.' },
      { name: 'Buffer', icon: Clock, color: '#A7FFAC', description: 'Schedule AI-generated posts to Buffer for multi-platform publishing.' },
      { name: 'Hootsuite', icon: Radio, color: '#CDBCFF', description: 'Export content directly to Hootsuite for centralized social media management.' },
      { name: 'Notion', icon: FileText, color: '#A6CEFF', description: 'Sync content plans, brand guidelines, and generated assets to Notion.' },
      { name: 'Zapier', icon: Zap, color: '#FFED8C', description: 'Connect Socialpaint to 5,000+ apps with custom Zapier workflows.' },
    ],
  },
];

export function IntegrationsPage() {
  return (
    <div className="w-full pt-[140px] sm:pt-[180px] lg:pt-[200px] pb-0 max-w-[1440px] mx-auto">
      {/* ───── Hero ───── */}
      <section className="px-4 sm:px-8 pb-16 md:pb-24">
        <AnimatedSection className="flex flex-col items-center text-center gap-6 mb-12 md:mb-16">
          <AnimatedItem>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(35,31,35,0.06)]">
              <Plug size={14} color="#231f23" />
              <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[12px] tracking-[0.75px] uppercase">Integrations</p>
            </div>
          </AnimatedItem>
          <AnimatedItem delay={0.1}>
            <p className="text-[#231f23] font-[Stack_Sans_Headline] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] tracking-[-1px] leading-[1.1] max-w-[680px]" style={{ fontWeight: 400 }}>
              Connects to your entire <span className="accent-italic">content stack</span>
            </p>
          </AnimatedItem>
          <AnimatedItem delay={0.2}>
            <p className="text-[rgba(35,31,35,0.64)] text-[16px] sm:text-[18px] md:text-[20px] leading-[28px] sm:leading-[32px] max-w-[560px]" style={{ fontWeight: 300 }}>
              Socialpaint plugs into the social platforms, design tools, and marketing apps your team already uses.
            </p>
          </AnimatedItem>
        </AnimatedSection>

        {/* How integrations work strip */}
        <AnimatedItem delay={0.3} className="w-full max-w-[1100px] mx-auto">
          <div className="bg-[#231f23] rounded-[20px] p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Plug, title: 'Connect once', desc: 'OAuth or API key — setup takes under 2 minutes per tool.', color: '#A7FFAC' },
              { icon: Workflow, title: 'Flows automatically', desc: 'Content syncs, notifications fire, approvals route — no manual work.', color: '#CDBCFF' },
              { icon: Shield, title: 'Secure by default', desc: 'SOC 2 compliant. Your credentials are encrypted end-to-end.', color: '#A6CEFF' },
            ].map((item, i) => (
              <div key={item.title} className="flex flex-col gap-4 items-start">
                <div className="flex items-center p-2 rounded-lg" style={{ backgroundColor: item.color }}>
                  <item.icon size={16} color="#231f23" />
                </div>
                <p className="text-[#f7f6f5] text-[16px] sm:text-[18px]" style={{ fontWeight: 500 }}>{item.title}</p>
                <p className="text-[rgba(247,246,245,0.64)] text-[14px] leading-[20px]" style={{ fontWeight: 300 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedItem>
      </section>

      {/* ───── Categorized Integration Sections ───── */}
      {categories.map((category, ci) => (
        <section key={category.title} className={`px-4 sm:px-8 py-16 sm:py-20 ${ci % 2 === 1 ? 'bg-[#ececec]' : ''}`}>
          <div className="max-w-[1100px] mx-auto">
            <AnimatedSection className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-12">
              <div className="flex flex-col gap-4 items-start">
                <div className="flex gap-2 items-center px-3 py-1.5 rounded-lg" style={{ backgroundColor: category.tagColor }}>
                  <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[11px] tracking-[0.75px] uppercase">{category.tag}</p>
                </div>
                <p className="text-[#231f23] text-[24px] sm:text-[32px] lg:text-[36px] font-[Stack_Sans_Headline] tracking-[-0.5px] leading-[1.15]">
                  {category.title}
                </p>
              </div>
              <p className="text-[rgba(35,31,35,0.48)] text-[14px]" style={{ fontWeight: 300 }}>{category.items.length} integrations</p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {category.items.map((item, i) => {
                const Icon = item.icon;
                return (
                  <AnimatedItem key={item.name} delay={i * 0.05}>
                    <div className="bg-white rounded-[16px] p-6 border border-[rgba(35,31,35,0.08)] hover:shadow-[0px_4px_40px_0px_rgba(0,0,0,0.06)] transition-all cursor-pointer h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-[12px] flex items-center justify-center shrink-0" style={{ backgroundColor: item.color }}>
                          <Icon size={22} color="#231f23" />
                        </div>
                        <div>
                          <p className="text-[#231f23] text-[16px]" style={{ fontWeight: 500 }}>{item.name}</p>
                        </div>
                      </div>
                      <p className="text-[rgba(35,31,35,0.64)] text-[14px] leading-[20px]" style={{ fontWeight: 300 }}>{item.description}</p>
                    </div>
                  </AnimatedItem>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* ───── API CTA ───── */}
      <section className="px-4 sm:px-8 py-16 sm:py-20 lg:py-[120px]">
        <div className="max-w-[1100px] mx-auto">
          <AnimatedSection>
            <div className="bg-[#231f23] rounded-[20px] overflow-hidden flex flex-col lg:flex-row">
              {/* Left: code block */}
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
                <p className="text-[rgba(247,246,245,0.64)] text-[14px] sm:text-[16px] leading-[24px] mb-8 max-w-[400px]" style={{ fontWeight: 300 }}>
                  Full REST API for generating content, managing brands, and building workflows programmatically.
                </p>
                <div className="flex gap-3">
                  <Link to="/resources" className="bg-[#f7f6f5] flex gap-2 items-center justify-center px-5 py-3 rounded-lg cursor-pointer no-underline">
                    <p className="text-[#231f23] text-[14px] sm:text-[16px] whitespace-nowrap">View API Docs</p>
                    <ArrowRight size={16} color="#231f23" />
                  </Link>
                </div>
              </div>
              {/* Right: code preview */}
              <div className="flex-1 bg-[rgba(247,246,245,0.04)] p-8 sm:p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-[rgba(247,246,245,0.08)]">
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
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}