import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedSection, AnimatedItem } from '../../components/AnimatedSection';
import { Link } from 'react-router-dom';
import {
  LayoutTemplate, ArrowRight, Brush, MonitorSmartphone, Wrench,
  Trophy, Sparkles, Share2, Instagram, Linkedin, Twitter, Mail, FileText
} from 'lucide-react';

/* ─── Template Category Tabs ─── */
const CATEGORIES = [
  {
    name: 'Social Posts',
    icon: Instagram,
    templates: [
      { title: 'Product Launch', platform: 'Instagram', color: '#FFC5B0' },
      { title: 'Team Spotlight', platform: 'LinkedIn', color: '#A6CEFF' },
      { title: 'Quick Tip Thread', platform: 'Twitter', color: '#FFED8C' },
      { title: 'Behind the Scenes', platform: 'Instagram', color: '#CDBCFF' },
      { title: 'Industry Take', platform: 'LinkedIn', color: '#A7FFAC' },
      { title: 'Poll / Question', platform: 'Twitter', color: '#FFC5B0' },
    ],
  },
  {
    name: 'Ad Creatives',
    icon: Sparkles,
    templates: [
      { title: 'Awareness Campaign', platform: 'Facebook', color: '#A6CEFF' },
      { title: 'Retargeting Visual', platform: 'Instagram', color: '#CDBCFF' },
      { title: 'Testimonial Ad', platform: 'LinkedIn', color: '#A7FFAC' },
      { title: 'Feature Highlight', platform: 'Facebook', color: '#FFED8C' },
    ],
  },
  {
    name: 'Email',
    icon: Mail,
    templates: [
      { title: 'Newsletter Header', platform: 'Email', color: '#A7FFAC' },
      { title: 'Welcome Sequence', platform: 'Email', color: '#CDBCFF' },
      { title: 'Product Update', platform: 'Email', color: '#FFED8C' },
      { title: 'Event Invitation', platform: 'Email', color: '#A6CEFF' },
      { title: 'Case Study Teaser', platform: 'Email', color: '#FFC5B0' },
    ],
  },
  {
    name: 'Blog & Content',
    icon: FileText,
    templates: [
      { title: 'Blog Hero Banner', platform: 'Blog', color: '#FFED8C' },
      { title: 'Infographic', platform: 'Blog', color: '#A6CEFF' },
      { title: 'Data Visualization', platform: 'Blog', color: '#A7FFAC' },
    ],
  },
];

function TemplateGallery() {
  const [activeCategory, setActiveCategory] = useState(0);
  const category = CATEGORIES[activeCategory];

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <button key={cat.name}
              onClick={() => setActiveCategory(i)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg cursor-pointer transition-all ${
                i === activeCategory ? 'bg-[#231f23] text-[#f7f6f5]' : 'bg-[rgba(35,31,35,0.06)] text-[#231f23] hover:bg-[rgba(35,31,35,0.1)]'
              }`}>
              <Icon size={14} />
              <p className="text-[13px] sm:text-[14px] whitespace-nowrap">{cat.name}</p>
              <span className={`font-['Fragment_Mono',monospace] text-[10px] tracking-[0.5px] ${
                i === activeCategory ? 'text-[rgba(247,246,245,0.48)]' : 'text-[rgba(35,31,35,0.32)]'
              }`}>{cat.templates.length}</span>
            </button>
          );
        })}
      </div>

      {/* Template grid */}
      <AnimatePresence mode="wait">
        <motion.div key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {category.templates.map((template, i) => (
            <motion.div key={template.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="group cursor-pointer">
              <div className="rounded-[16px] overflow-hidden border border-[rgba(35,31,35,0.08)] hover:shadow-[0px_4px_40px_rgba(0,0,0,0.06)] transition-shadow">
                <div className="aspect-[4/3] relative" style={{ backgroundColor: template.color }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <LayoutTemplate size={20} color="#231f23" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-[#231f23] text-[14px] mb-1" style={{ fontWeight: 400 }}>{template.title}</p>
                  <p className="font-['Fragment_Mono',monospace] text-[rgba(35,31,35,0.48)] text-[11px] tracking-[0.5px] uppercase">{template.platform}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ─── Brand Adaptation Demo ─── */
const BRANDS = [
  { name: 'Tech Startup', primary: '#0f3460', secondary: '#e94560', bg: '#16213e', text: '#f7f6f5', font: 'Inter' },
  { name: 'Wellness Brand', primary: '#4a7c59', secondary: '#FFED8C', bg: '#faf8f5', text: '#2d3b2d', font: 'Serif' },
  { name: 'Fashion Label', primary: '#1a1a1a', secondary: '#e0c9a6', bg: '#f5f0eb', text: '#1a1a1a', font: 'Didot' },
];

function AdaptationDemo() {
  const [activeBrand, setActiveBrand] = useState(0);
  const brand = BRANDS[activeBrand];

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Brand switcher */}
      <div className="flex gap-3 justify-center">
        {BRANDS.map((b, i) => (
          <button key={b.name}
            onClick={() => setActiveBrand(i)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all ${
              i === activeBrand ? 'bg-[#231f23] text-[#f7f6f5]' : 'bg-[rgba(35,31,35,0.06)] text-[#231f23]'
            }`}>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: b.primary }} />
            <p className="text-[13px] whitespace-nowrap">{b.name}</p>
          </button>
        ))}
      </div>

      {/* Preview */}
      <AnimatePresence mode="wait">
        <motion.div key={activeBrand}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full max-w-[600px] mx-auto">
          <div className="rounded-[20px] overflow-hidden" style={{ backgroundColor: brand.bg }}>
            <div className="p-6 sm:p-8">
              {/* Mock social post */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full" style={{ backgroundColor: brand.primary }} />
                  <div>
                    <p className="text-[14px]" style={{ color: brand.text, fontWeight: 400, fontFamily: brand.font === 'Inter' ? 'inherit' : brand.font }}>Brand Name</p>
                    <p className="text-[11px]" style={{ color: brand.text, opacity: 0.5 }}>Just now</p>
                  </div>
                </div>
                <div className="aspect-[16/9] rounded-xl" style={{ backgroundColor: brand.secondary, opacity: 0.3 }} />
                <p className="text-[14px] leading-[1.5]" style={{ color: brand.text, fontWeight: 300, fontFamily: brand.font === 'Inter' ? 'inherit' : brand.font }}>
                  Same template, completely different brand identity. One click.
                </p>
                <div className="flex items-center gap-2 self-start px-4 py-2 rounded-lg" style={{ backgroundColor: brand.primary }}>
                  <p className="text-[13px]" style={{ color: brand.bg }}>Learn more</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ─── Feature List ─── */
const FEATURES = [
  { title: 'Brand-adaptive', desc: 'Every template automatically applies your colors, fonts, spacing, and voice.', icon: Brush, color: '#FFC5B0' },
  { title: 'Platform-optimized', desc: 'Pre-configured for Instagram, LinkedIn, Twitter, email, and more.', icon: MonitorSmartphone, color: '#A6CEFF' },
  { title: 'Custom builder', desc: 'Create your own templates that the whole team can reuse.', icon: Wrench, color: '#A7FFAC' },
  { title: 'Performance-ranked', desc: 'Templates ranked by engagement data so you pick what works.', icon: Trophy, color: '#FFED8C' },
  { title: 'Seasonal packs', desc: 'Fresh templates for holidays, trends, and campaigns — updated automatically.', icon: Sparkles, color: '#CDBCFF' },
  { title: 'Team sharing', desc: 'Share templates across departments with role-based access.', icon: Share2, color: '#FFC5B0' },
];

export function SmartTemplatesPage() {
  return (
    <div className="w-full pt-[140px] sm:pt-[180px] lg:pt-[200px] pb-0 max-w-[1440px] mx-auto">
      {/* ───── Hero ───── */}
      <section className="px-4 sm:px-8 pb-16 md:pb-24">
        <AnimatedSection className="flex flex-col items-center text-center gap-6 mb-12 md:mb-16">
          <AnimatedItem>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ backgroundColor: '#FFC5B0' }}>
              <LayoutTemplate size={14} color="#231f23" />
              <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[12px] tracking-[0.75px] uppercase">Smart Templates</p>
            </div>
          </AnimatedItem>
          <AnimatedItem delay={0.1}>
            <p className="text-[#231f23] text-[36px] font-[Stack_Sans_Headline] sm:text-[48px] md:text-[56px] lg:text-[64px] tracking-[-1px] leading-[1.1] max-w-[880px]" style={{ fontWeight: 400 }}>
              Start fast,<br className="hidden sm:inline" /> <span className="accent-italic">stay on-brand</span>
            </p>
          </AnimatedItem>
          <AnimatedItem delay={0.2}>
            <p className="text-[rgba(35,31,35,0.64)] text-[16px] sm:text-[18px] md:text-[20px] leading-[1.5] max-w-[700px]" style={{ fontWeight: 300 }}>
              A library of templates that automatically adapt to your brand. Every template respects your Style DNA — so anyone can create professional content without design skills.
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

        {/* Stats */}
        <AnimatedItem delay={0.35} className="w-full max-w-[700px] mx-auto mb-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
            {[
              { value: '200+', label: 'Templates' },
              { value: '1-click', label: 'Brand adaptation' },
              { value: 'Weekly', label: 'New packs' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <p className="text-[#231f23] text-[28px] font-[Stack_Sans_Headline] sm:text-[36px] tracking-[-0.5px]" style={{ fontWeight: 400 }}>{stat.value}</p>
                <p className="font-['Fragment_Mono',monospace] text-[rgba(35,31,35,0.48)] text-[11px] tracking-[0.5px] uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedItem>
      </section>

      {/* ───── Template Gallery — Tabbed ───── */}
      <section className="px-4 sm:px-8 py-16 sm:py-20 lg:py-[120px]">
        <div className="max-w-[1240px] mx-auto">
          <AnimatedSection className="flex flex-col gap-6 items-start mb-10 md:mb-12">
            <div className="flex gap-2 items-center px-3 py-2 rounded-lg relative">
              <div aria-hidden="true" className="absolute border border-[rgba(35,31,35,0.08)] border-solid inset-0 pointer-events-none rounded-lg" />
              <div className="bg-[#FFC5B0] rounded-[2px] shrink-0 size-[10px]" />
              <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[12px] tracking-[0.75px] uppercase">Browse templates</p>
            </div>
            <p className="text-[#231f23] text-[28px] font-[Stack_Sans_Headline] sm:text-[36px] lg:text-[40px] tracking-[-0.5px] leading-[1.15] max-w-[680px]" style={{ fontWeight: 400 }}>
              Find the right starting point, instantly
            </p>
          </AnimatedSection>

          <TemplateGallery />
        </div>
      </section>

      {/* ───── Brand Adaptation Demo ───── */}
      <section className="bg-[#1a171a] w-full px-4 sm:px-8 py-16 sm:py-20 lg:py-[120px] rounded-[20px] max-w-[1440px] mx-auto">
        <div className="max-w-[1240px] mx-auto">
          <AnimatedSection className="mb-12 md:mb-16 text-center">
            <p className="text-[#f7f6f5] text-[28px] sm:text-[40px] lg:text-[48px] font-[Stack_Sans_Headline] tracking-[-0.5px] leading-[1.1] max-w-[720px] mx-auto mb-4" style={{ fontWeight: 400 }}>
              One template, infinite brands
            </p>
            <p className="text-[rgba(247,246,245,0.5)] text-[14px] sm:text-[16px] leading-[1.5] max-w-[600px] mx-auto" style={{ fontWeight: 300 }}>
              Watch the same template transform to match completely different brand identities — automatically.
            </p>
          </AnimatedSection>

          <AdaptationDemo />
        </div>
      </section>

      {/* ───── Features Grid ───── */}
      <section className="px-4 sm:px-8 py-16 sm:py-20 lg:py-[120px]">
        <div className="max-w-[1240px] mx-auto">
          <AnimatedSection className="flex flex-col gap-6 items-start mb-10 md:mb-12">
            <p className="text-[#231f23] text-[28px] font-[Stack_Sans_Headline] sm:text-[36px] lg:text-[40px] tracking-[-0.5px] leading-[1.15] max-w-[680px]" style={{ fontWeight: 400 }}>
              Smart templates, not static files
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <AnimatedItem key={feature.title} delay={i * 0.08}>
                  <div className="bg-white rounded-[16px] p-6 border border-[rgba(35,31,35,0.08)] h-full">
                    <div className="w-10 h-10 rounded-[10px] mb-4 flex items-center justify-center" style={{ backgroundColor: feature.color }}>
                      <Icon size={20} color="#231f23" />
                    </div>
                    <p className="text-[#231f23] text-[16px] mb-2" style={{ fontWeight: 400 }}>{feature.title}</p>
                    <p className="text-[rgba(35,31,35,0.48)] text-[14px] leading-[1.5]" style={{ fontWeight: 300 }}>{feature.desc}</p>
                  </div>
                </AnimatedItem>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── Bottom CTA ───── */}
      <section className="px-4 sm:px-8 py-16 sm:py-20 lg:py-[120px]">
        <AnimatedSection className="w-full max-w-[1240px] mx-auto">
          <div className="bg-[#231f23] rounded-[20px] p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center gap-6">
            <p className="text-[#f7f6f5] text-[24px] sm:text-[32px] font-[Stack_Sans_Headline] lg:text-[40px] tracking-[-0.5px] leading-[1.15] max-w-[600px]" style={{ fontWeight: 400 }}>
              200+ templates that already know your brand
            </p>
            <p className="text-[rgba(247,246,245,0.64)] text-[14px] sm:text-[16px] leading-[1.5] max-w-[400px]" style={{ fontWeight: 300 }}>
              Pick a template, click once, and it adapts to your Style DNA.
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
