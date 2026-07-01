import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  BookOpen, FileText, Code, Download, Presentation, Video,
  Newspaper, PenLine, BarChart3, ArrowRight, Mail, Sparkles
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Resource {
  title: string;
  type: string;
  icon: LucideIcon;
  description: string;
  color: string;
}

const featuredArticle = {
  title: 'How mercenary.ai 10x\'d client content output with Socialpaint',
  type: 'Case Study',
  description: 'A deep dive into how an AI agency used Socialpaint to scale content production across 12 client brands — without adding a single designer.',
  image: 'https://images.unsplash.com/photo-1770368787728-73c60309cb42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBjcmVhdGlvbiUyMGxhcHRvcHxlbnwxfHx8fDE3NzM0Mzk1MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  color: '#FFED8C',
};

const guides: Resource[] = [
  { title: 'Getting Started with Socialpaint', type: 'Guide', icon: BookOpen, description: 'Upload your brand assets, build your Style DNA, and generate your first on-brand social post in under 10 minutes.', color: '#A7FFAC' },
  { title: 'How Style DNA Works', type: 'Deep Dive', icon: Sparkles, description: 'An inside look at how Socialpaint learns your brand identity from Figma files, color palettes, and typography systems.', color: '#CDBCFF' },
  { title: 'Brand Consistency Playbook', type: 'Playbook', icon: Download, description: 'Practical strategies for maintaining brand identity when multiple teams create content simultaneously.', color: '#FFC5B0' },
];

const developerResources: Resource[] = [
  { title: 'Socialpaint API Reference', type: 'API Docs', icon: Code, description: 'Complete REST API documentation for generating content, managing brand profiles, and building custom integrations.', color: '#A6CEFF' },
  { title: 'Webhook Events Guide', type: 'Developer', icon: FileText, description: 'Subscribe to real-time events for content generation, brand checks, and approval workflow updates.', color: '#FFED8C' },
];

const blogPosts: Resource[] = [
  { title: 'Socialpaint now auto-formats for every platform', type: 'News', icon: Newspaper, description: 'Our latest feature release: generate once, auto-format for Instagram, LinkedIn, Twitter, TikTok, and more.', color: '#CDBCFF' },
  { title: 'The 5 Brand Mistakes Killing Your Engagement', type: 'Blog', icon: PenLine, description: 'Common brand consistency issues that reduce social engagement — and how to fix them with automated checks.', color: '#A6CEFF' },
  { title: 'Scaling Content Without Losing Quality', type: 'Ebook', icon: Download, description: 'A guide to building an AI-augmented content pipeline that keeps your brand consistent across every channel.', color: '#FFED8C' },
  { title: 'AI Content for Social Media', type: 'Webinar', icon: Video, description: 'Watch our latest session on how leading brands use AI to 10x social content without sacrificing quality.', color: '#A7FFAC' },
  { title: 'Q1 2026 Content Benchmark Report', type: 'Report', icon: BarChart3, description: 'Industry benchmarks for social content performance across Instagram, LinkedIn, Twitter, and TikTok.', color: '#FFC5B0' },
  { title: 'Template Design Best Practices', type: 'Guide', icon: Presentation, description: 'How to design templates that adapt to any brand while maintaining visual consistency and performance.', color: '#CDBCFF' },
];

function ResourceCard({ resource }: { resource: Resource }) {
  const Icon = resource.icon;
  return (
    <div className="bg-white rounded-[16px] p-6 border border-[rgba(35,31,35,0.08)] hover:shadow-[0px_4px_40px_0px_rgba(0,0,0,0.06)] transition-all cursor-pointer h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0" style={{ backgroundColor: resource.color }}>
          <Icon size={18} color="#231f23" />
        </div>
        <p className="font-['Fragment_Mono',monospace] text-[rgba(35,31,35,0.48)] text-[11px] tracking-[0.75px] uppercase">{resource.type}</p>
      </div>
      <p className="text-[#231f23] text-[16px] mb-2 leading-[1.3]" style={{ fontWeight: 500 }}>{resource.title}</p>
      <p className="text-[rgba(35,31,35,0.64)] text-[14px] leading-[20px] flex-1" style={{ fontWeight: 300 }}>{resource.description}</p>
    </div>
  );
}

export function ResourcesPage() {
  return (
    <div className="w-full pt-[140px] sm:pt-[180px] lg:pt-[200px] pb-0 max-w-[1440px] mx-auto">
      {/* ───── Hero ───── */}
      <section className="px-4 sm:px-8 pb-16 md:pb-24">
        <AnimatedSection className="flex flex-col items-center text-center gap-6">
          <AnimatedItem>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(35,31,35,0.06)]">
              <BookOpen size={14} color="#231f23" />
              <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[12px] tracking-[0.75px] uppercase">Resources</p>
            </div>
          </AnimatedItem>
          <AnimatedItem delay={0.1}>
            <p className="text-[#231f23] font-[Stack_Sans_Headline] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] tracking-[-1px] leading-[1.1] max-w-[800px]" style={{ fontWeight: 400 }}>
              Learn, build, and <span className="accent-italic">scale your content</span>
            </p>
          </AnimatedItem>
          <AnimatedItem delay={0.2}>
            <p className="text-[rgba(35,31,35,0.64)] text-[16px] sm:text-[18px] md:text-[20px] leading-[28px] sm:leading-[32px] max-w-[680px]" style={{ fontWeight: 300 }}>
              Guides, tutorials, case studies, and everything you need to get the most out of Socialpaint.
            </p>
          </AnimatedItem>
        </AnimatedSection>
      </section>

      {/* ───── Featured Article ───── */}
      <section className="px-4 sm:px-8 pb-16 md:pb-20">
        <AnimatedSection className="w-full max-w-[1240px] mx-auto">
          <div className="bg-[#ececec] rounded-[20px] overflow-hidden flex flex-col lg:flex-row">
            <div className="relative h-[240px] lg:h-auto lg:w-[480px] shrink-0">
              <ImageWithFallback
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex gap-2 items-center px-3 py-1.5 rounded-lg self-start mb-5" style={{ backgroundColor: featuredArticle.color }}>
                <BarChart3 size={14} color="#231f23" />
                <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[11px] tracking-[0.75px] uppercase">{featuredArticle.type}</p>
              </div>
              <p className="text-[#231f23] text-[20px] sm:text-[24px] lg:text-[28px] tracking-[-0.5px] leading-[1.2] mb-4" style={{ fontWeight: 500 }}>
                {featuredArticle.title}
              </p>
              <p className="text-[rgba(35,31,35,0.64)] text-[14px] sm:text-[16px] leading-[24px] mb-6" style={{ fontWeight: 300 }}>
                {featuredArticle.description}
              </p>
              <Link to="/clients" className="flex gap-2 items-center self-start no-underline group">
                <p className="text-[#231f23] text-[14px] sm:text-[16px] group-hover:underline" style={{ fontWeight: 500 }}>Read case study</p>
                <ArrowRight size={16} color="#231f23" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ───── Guides & Getting Started ───── */}
      <section className="px-4 sm:px-8 py-16 sm:py-20">
        <div className="max-w-[1240px] mx-auto">
          <AnimatedSection className="flex flex-col gap-4 items-start mb-10 md:mb-12">
            <div className="flex gap-2 items-center px-3 py-2 rounded-lg relative">
              <div aria-hidden="true" className="absolute border border-[rgba(35,31,35,0.08)] border-solid inset-0 pointer-events-none rounded-lg" />
              <div className="bg-[#A7FFAC] rounded-[2px] shrink-0 size-[10px]" />
              <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[12px] tracking-[0.75px] uppercase">Getting Started</p>
            </div>
            <p className="text-[#231f23] text-[24px] sm:text-[32px] font-[Stack_Sans_Headline] tracking-[-0.5px] leading-[1.15]">
              Guides & playbooks
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((r, i) => (
              <AnimatedItem key={r.title} delay={i * 0.05}>
                <ResourceCard resource={r} />
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Developer Section (Dark) ───── */}
      <section className="bg-[#231f23] w-full px-4 sm:px-8 py-16 sm:py-20 lg:py-[100px]">
        <div className="max-w-[1240px] mx-auto">
          <AnimatedSection className="flex flex-col gap-4 items-start mb-10 md:mb-12">
            <div className="flex gap-2 items-center">
              <div className="flex items-center p-2 rounded-lg bg-[#A6CEFF]">
                <Code size={14} color="#231f23" />
              </div>
              <p className="font-['Fragment_Mono',monospace] text-[rgba(247,246,245,0.48)] text-[12px] tracking-[0.75px] uppercase">For developers</p>
            </div>
            <p className="text-[#f7f6f5] text-[24px] sm:text-[32px] font-[Stack_Sans_Headline] tracking-[-0.5px] leading-[1.15]">
              Build on the Socialpaint API
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {developerResources.map((r, i) => {
              const Icon = r.icon;
              return (
                <AnimatedItem key={r.title} delay={i * 0.08}>
                  <div className="bg-[rgba(247,246,245,0.04)] rounded-[16px] p-6 sm:p-8 border border-[rgba(247,246,245,0.08)] h-full cursor-pointer hover:bg-[rgba(247,246,245,0.06)] transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0" style={{ backgroundColor: r.color }}>
                        <Icon size={18} color="#231f23" />
                      </div>
                      <p className="font-['Fragment_Mono',monospace] text-[rgba(247,246,245,0.48)] text-[11px] tracking-[0.75px] uppercase">{r.type}</p>
                    </div>
                    <p className="text-[#f7f6f5] text-[16px] sm:text-[18px] mb-2" style={{ fontWeight: 500 }}>{r.title}</p>
                    <p className="text-[rgba(247,246,245,0.64)] text-[14px] leading-[20px]" style={{ fontWeight: 300 }}>{r.description}</p>
                  </div>
                </AnimatedItem>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── Blog & News ───── */}
      <section className="px-4 sm:px-8 py-16 sm:py-20 lg:py-[120px]">
        <div className="max-w-[1240px] mx-auto">
          <AnimatedSection className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-12">
            <div className="flex flex-col gap-4 items-start">
              <div className="flex gap-2 items-center px-3 py-2 rounded-lg relative">
                <div aria-hidden="true" className="absolute border border-[rgba(35,31,35,0.08)] border-solid inset-0 pointer-events-none rounded-lg" />
                <div className="bg-[#ed7472] rounded-[2px] shrink-0 size-[10px]" />
                <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[12px] tracking-[0.75px] uppercase">Blog & News</p>
              </div>
              <p className="text-[#231f23] text-[24px] sm:text-[32px] font-[Stack_Sans_Headline] tracking-[-0.5px] leading-[1.15]">
                Latest from Socialpaint
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((r, i) => (
              <AnimatedItem key={r.title} delay={i * 0.05}>
                <ResourceCard resource={r} />
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Newsletter CTA ───── */}
      <section className="px-4 sm:px-8 pb-16 sm:pb-20 lg:pb-[120px]">
        <AnimatedSection className="w-full max-w-[800px] mx-auto">
          <div className="bg-[#231f23] rounded-[20px] p-8 sm:p-12 flex flex-col items-center text-center gap-6">
            <div className="w-12 h-12 rounded-full bg-[rgba(247,246,245,0.08)] flex items-center justify-center">
              <Mail size={22} color="#f7f6f5" />
            </div>
            <p className="text-[#f7f6f5] text-[24px] sm:text-[32px] font-[Stack_Sans_Headline] tracking-[-0.5px] leading-[1.15]">
              Stay up to date with Socialpaint
            </p>
            <p className="text-[rgba(247,246,245,0.64)] text-[14px] sm:text-[16px] leading-[24px] max-w-[400px]" style={{ fontWeight: 300 }}>
              Get product updates, content tips, and brand strategy insights delivered to your inbox.
            </p>
            <Link to="/waitlist" className="bg-[#f7f6f5] flex gap-2 items-center justify-center px-5 py-3 rounded-lg cursor-pointer no-underline">
              <p className="text-[#231f23] text-[14px] sm:text-[16px] whitespace-nowrap">Subscribe to Newsletter</p>
              <ArrowRight size={16} color="#231f23" />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}