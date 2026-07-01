import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowRight, TrendingUp, Clock, Users, Sparkles, Quote } from 'lucide-react';

const heroStats = [
  { value: '500+', label: 'Teams using Socialpaint', icon: Users },
  { value: '10x', label: 'Average output increase', icon: TrendingUp },
  { value: '98%', label: 'Brand consistency score', icon: Sparkles },
  { value: '< 10min', label: 'To first content piece', icon: Clock },
];

const featured = {
  name: 'mercenary.ai',
  industry: 'AI Agency',
  stat: '10x content output',
  image: 'https://images.unsplash.com/photo-1758873268877-3cd8ed329ed8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjB0ZWFtJTIwY3JlYXRpdmUlMjBhZ2VuY3klMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzczNDM5Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  quote: 'Socialpaint let us scale content production for 12 clients simultaneously without adding headcount. The AI learns each client\'s brand independently and generates content that\'s indistinguishable from what their in-house team would create.',
  person: 'Alex Chen',
  role: 'CEO, mercenary.ai',
};

const logos = ['Foster & Reeves', 'Synthesia', 'Halden Miller', 'Brandkit', 'Brightwave', 'Meridian Labs', 'PixelForge', 'Mosaic'];

const testimonials = [
  { name: 'Maya Fischer', role: 'Head of Marketing', company: 'Foster & Reeves', industry: 'Design Agency', stat: '60% faster turnaround', quote: 'We pushed a major campaign through with zero stress. The AI-generated visuals matched our brand perfectly every time.', color: '#CDBCFF' },
  { name: 'Daniel Romero', role: 'Co-Founder & CEO', company: 'Synthesia', industry: 'AI Video Platform', stat: '300+ assets/month', quote: 'Our product team finally creates content without waiting on design. Brand-perfect assets anyone can generate.', color: '#A7FFAC' },
  { name: 'Jacek Rosinski', role: 'CTO', company: 'Halden Miller', industry: 'Fintech', stat: '98% brand consistency', quote: 'Content production time went from hours to minutes. Every piece is on-brand, every time.', color: '#A6CEFF' },
  { name: 'Jessica Mercedes', role: 'Head of Content', company: 'Brandkit', industry: 'Brand Management', stat: '4x social engagement', quote: 'Content creation used to be the bottleneck. Now we generate, check brand fit, and publish instantly.', color: '#FFED8C' },
  { name: 'Alejandro Vargas', role: 'Creative Director', company: 'Brightwave', industry: 'Marketing Tech', stat: '50% lower costs', quote: 'Content bottlenecks used to kill our momentum. Socialpaint generates assets and checks compliance instantly.', color: '#FFC5B0' },
  { name: 'Sam Okafor', role: 'VP Marketing', company: 'Meridian Labs', industry: 'SaaS', stat: '2-day → 10-min onboarding', quote: 'New marketers understand our brand system in minutes instead of days. The learning curve basically vanished.', color: '#CDBCFF' },
];

export function ClientsPage() {
  return (
    <div className="w-full pt-[140px] sm:pt-[180px] lg:pt-[200px] pb-0 max-w-[1440px] mx-auto">
      {/* ───── Hero ───── */}
      <section className="px-4 sm:px-8 pb-16 md:pb-24">
        <AnimatedSection className="flex flex-col items-center text-center gap-6 mb-12 md:mb-16">
          <AnimatedItem>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(35,31,35,0.06)]">
              <Users size={14} color="#231f23" />
              <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[12px] tracking-[0.75px] uppercase">Clients</p>
            </div>
          </AnimatedItem>
          <AnimatedItem delay={0.1}>
            <p className="text-[#231f23] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] tracking-[-1px] leading-[1.1] max-w-[680px]">
              Teams that ship smarter choose Socialpaint
            </p>
          </AnimatedItem>
          <AnimatedItem delay={0.2}>
            <p className="text-[rgba(35,31,35,0.64)] text-[16px] sm:text-[18px] md:text-[20px] leading-[28px] sm:leading-[32px] max-w-[560px]" style={{ fontWeight: 300 }}>
              From startups to agencies, marketing teams use Socialpaint to create on-brand content at scale.
            </p>
          </AnimatedItem>
        </AnimatedSection>

        {/* Stats bar */}
        <AnimatedItem delay={0.3} className="w-full max-w-[1100px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {heroStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-white rounded-[16px] p-6 border border-[rgba(35,31,35,0.08)] flex flex-col gap-3">
                  <Icon size={20} color="rgba(35,31,35,0.32)" />
                  <p className="text-[#231f23] text-[28px] sm:text-[32px] tracking-[-0.5px]" style={{ fontWeight: 500 }}>{stat.value}</p>
                  <p className="font-['Fragment_Mono',monospace] text-[rgba(35,31,35,0.48)] text-[11px] tracking-[0.5px] uppercase">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </AnimatedItem>
      </section>

      {/* ───── Logo Cloud ───── */}
      <section className="px-4 sm:px-8 pb-8">
        <div className="max-w-[1100px] mx-auto">
          <AnimatedItem className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-8">
            {logos.map((name) => (
              <p key={name} className="text-[rgba(35,31,35,0.32)] text-[14px] sm:text-[16px] tracking-wide whitespace-nowrap" style={{ fontWeight: 500 }}>{name}</p>
            ))}
          </AnimatedItem>
        </div>
      </section>

      {/* ───── Featured Case Study ───── */}
      <section className="px-4 sm:px-8 py-8 sm:py-12">
        <AnimatedSection className="w-full max-w-[1100px] mx-auto">
          <div className="rounded-[20px] overflow-hidden relative h-[480px] sm:h-[560px] lg:h-[600px]">
            <ImageWithFallback
              src={featured.image}
              alt="mercenary.ai team"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(35,31,35,0.8)] via-[rgba(35,31,35,0.2)] to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(35,31,35,0.4)] to-transparent h-[200px]" />

            <div className="absolute inset-0 flex flex-col items-start justify-between p-6 sm:p-8 lg:p-12">
              {/* Top */}
              <div className="flex items-center gap-3">
                <p className="text-[#f7f6f5] text-[20px] sm:text-[24px] lg:text-[28px] tracking-[-0.5px]" style={{ fontWeight: 500 }}>{featured.name}</p>
                <div className="bg-[#A7FFAC] px-3 py-1 rounded-full">
                  <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[11px] tracking-[0.5px] uppercase">{featured.stat}</p>
                </div>
              </div>
              {/* Bottom */}
              <div className="flex flex-col gap-6 max-w-[600px]">
                <p className="text-[#f7f6f5] text-[18px] sm:text-[20px] lg:text-[24px] leading-[1.4]" style={{ fontWeight: 300 }}>
                  "{featured.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-[#f7f6f5] text-[14px] sm:text-[16px]" style={{ fontWeight: 500 }}>{featured.person}</p>
                    <p className="text-[rgba(247,246,245,0.64)] text-[13px]" style={{ fontWeight: 300 }}>{featured.role}</p>
                  </div>
                </div>
                <Link to="/resources" className="bg-[#f7f6f5] flex gap-2 items-center justify-center px-5 py-3 rounded-lg cursor-pointer no-underline self-start">
                  <p className="text-[#231f23] text-[14px] sm:text-[16px] whitespace-nowrap">Read full case study</p>
                  <ArrowRight size={16} color="#231f23" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ───── Testimonials Grid ───── */}
      <section className="px-4 sm:px-8 py-16 sm:py-20 lg:py-[120px]">
        <div className="max-w-[1100px] mx-auto">
          <AnimatedSection className="flex flex-col gap-6 items-start mb-12 md:mb-16">
            <div className="flex gap-2 items-center px-3 py-2 rounded-lg relative">
              <div aria-hidden="true" className="absolute border border-[rgba(35,31,35,0.08)] border-solid inset-0 pointer-events-none rounded-lg" />
              <div className="bg-[#ed7472] rounded-[2px] shrink-0 size-[10px]" />
              <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[12px] tracking-[0.75px] uppercase">Testimonials</p>
            </div>
            <p className="text-[#231f23] text-[28px] sm:text-[36px] lg:text-[40px] tracking-[-0.5px] leading-[1.15] max-w-[560px]">
              What our clients say
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedItem key={t.name} delay={i * 0.06}>
                <div className="bg-white rounded-[20px] p-6 sm:p-8 border border-[rgba(35,31,35,0.08)] h-full flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: t.color }}>
                        <Quote size={14} color="#231f23" />
                      </div>
                      <p className="text-[rgba(35,31,35,0.48)] text-[14px]" style={{ fontWeight: 500 }}>{t.company}</p>
                    </div>
                    <div className="px-2.5 py-1 rounded-full bg-[#A7FFAC] shrink-0">
                      <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[10px] tracking-[0.5px] uppercase">{t.stat}</p>
                    </div>
                  </div>
                  <p className="text-[rgba(35,31,35,0.64)] text-[14px] sm:text-[15px] leading-[22px] flex-1 mb-6" style={{ fontWeight: 300 }}>
                    "{t.quote}"
                  </p>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-[#231f23] text-[14px]" style={{ fontWeight: 500 }}>{t.name}</p>
                    <p className="text-[rgba(35,31,35,0.48)] text-[13px]" style={{ fontWeight: 300 }}>{t.role}</p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Bottom CTA ───── */}
      <section className="px-4 sm:px-8 pb-16 sm:pb-20 lg:pb-[120px]">
        <AnimatedSection className="w-full max-w-[1100px] mx-auto">
          <div className="bg-[#231f23] rounded-[20px] p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center gap-6">
            <p className="text-[#f7f6f5] text-[24px] sm:text-[32px] lg:text-[40px] tracking-[-0.5px] leading-[1.15] max-w-[480px]">
              Join 500+ teams creating smarter content
            </p>
            <p className="text-[rgba(247,246,245,0.64)] text-[16px] leading-[24px] max-w-[400px]" style={{ fontWeight: 300 }}>
              Start your free trial today. No credit card required.
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