import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';
import { Check, X, ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    monthlyPrice: '$0',
    annualPrice: '$0',
    period: '/month',
    description: 'For individuals testing AI-powered social content.',
    features: ['5 content generations/month', '1 brand profile (Style DNA)', '3 platform formats', 'Basic templates', 'Community support'],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    monthlyPrice: '$49',
    annualPrice: '$39',
    period: '/month',
    description: 'For growing teams that need consistent, on-brand content.',
    features: ['Unlimited content generation', '5 brand profiles', 'All platform formats', 'Content Studio full access', 'Brand Guard checks', 'Analytics dashboard', 'Priority support', 'Team collaboration (5 seats)'],
    cta: 'Join the Waitlist',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: 'Custom',
    annualPrice: 'Custom',
    period: '',
    description: 'For organizations with multiple brands and advanced needs.',
    features: ['Everything in Pro', 'Unlimited brand profiles', 'Unlimited team seats', 'Custom integrations & API', 'SSO & SAML authentication', 'Dedicated success manager', 'Custom template builder', 'SLA & uptime guarantee'],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

const comparisonRows = [
  { feature: 'Content generations', starter: '5/mo', pro: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Brand profiles', starter: '1', pro: '5', enterprise: 'Unlimited' },
  { feature: 'Team seats', starter: '1', pro: '5', enterprise: 'Unlimited' },
  { feature: 'Platform formats', starter: '3', pro: 'All', enterprise: 'All + custom' },
  { feature: 'Style DNA', starter: true, pro: true, enterprise: true },
  { feature: 'Content Studio', starter: false, pro: true, enterprise: true },
  { feature: 'Brand Guard', starter: false, pro: true, enterprise: true },
  { feature: 'Analytics', starter: false, pro: true, enterprise: true },
  { feature: 'Templates library', starter: 'Basic', pro: 'Full', enterprise: 'Full + custom' },
  { feature: 'API access', starter: false, pro: false, enterprise: true },
  { feature: 'SSO / SAML', starter: false, pro: false, enterprise: true },
  { feature: 'Dedicated support', starter: false, pro: false, enterprise: true },
];

const faqs = [
  { q: 'Can I switch plans later?', a: 'Yes, you can upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle.' },
  { q: 'Is there a free trial for Pro?', a: 'Yes! Pro includes a 14-day free trial with full access. No credit card required to start.' },
  { q: 'What counts as a content generation?', a: 'One generation = one unique piece of content (a social post, story, ad creative, etc). Editing an existing piece doesn\'t count.' },
  { q: 'Do you offer annual billing?', a: 'Yes, annual billing saves you 20%. Toggle the switch above to see annual pricing.' },
];

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) return <Check size={16} color="#231f23" />;
  if (value === false) return <X size={16} color="rgba(35,31,35,0.2)" />;
  return <p className="text-[#231f23] text-[14px]" style={{ fontWeight: 300 }}>{value}</p>;
}

export function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="w-full pt-[140px] sm:pt-[180px] lg:pt-[200px] pb-0 max-w-[1440px] mx-auto">
      {/* ───── Hero ───── */}
      <section className="px-4 sm:px-8 pb-16 md:pb-24">
        <AnimatedSection className="flex flex-col items-center text-center gap-6 mb-8">
          <AnimatedItem>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(35,31,35,0.06)]">
              <Sparkles size={14} color="#231f23" />
              <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[12px] tracking-[0.75px] uppercase">Pricing</p>
            </div>
          </AnimatedItem>
          <AnimatedItem delay={0.1}>
            <p className="text-[#231f23] font-[Stack_Sans_Headline] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] tracking-[-1px] leading-[1.1] max-w-[680px]" style={{ fontWeight: 400 }}>
              Simple pricing, <span className="accent-italic">powerful results</span>
            </p>
          </AnimatedItem>
          <AnimatedItem delay={0.2}>
            <p className="text-[rgba(35,31,35,0.64)] text-[16px] sm:text-[18px] md:text-[20px] leading-[28px] sm:leading-[32px] max-w-[560px]" style={{ fontWeight: 300 }}>
              Start free and scale as your team grows. Every plan includes Style DNA.
            </p>
          </AnimatedItem>
        </AnimatedSection>

        {/* Toggle */}
        <AnimatedItem delay={0.3} className="flex items-center justify-center gap-3 mb-12 md:mb-16">
          <p className={`text-[14px] transition-colors ${!annual ? 'text-[#231f23]' : 'text-[rgba(35,31,35,0.48)]'}`} style={{ fontWeight: 500 }}>Monthly</p>
          <button
            onClick={() => setAnnual(!annual)}
            className={`w-12 h-7 rounded-full p-1 cursor-pointer transition-colors ${annual ? 'bg-[#231f23]' : 'bg-[rgba(35,31,35,0.16)]'}`}
          >
            <motion.div
              className="w-5 h-5 rounded-full bg-[#f7f6f5]"
              animate={{ x: annual ? 20 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </button>
          <p className={`text-[14px] transition-colors ${annual ? 'text-[#231f23]' : 'text-[rgba(35,31,35,0.48)]'}`} style={{ fontWeight: 500 }}>Annual</p>
          {annual && (
            <div className="bg-[#A7FFAC] px-2.5 py-1 rounded-full">
              <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[10px] tracking-[0.5px] uppercase">Save 20%</p>
            </div>
          )}
        </AnimatedItem>

        {/* Plans */}
        <div className="w-full max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <AnimatedItem key={plan.name} delay={i * 0.1}>
              <div className={`rounded-[20px] p-8 ${plan.highlighted ? 'bg-[#231f23] text-[#f7f6f5] ring-2 ring-[rgba(247,246,245,0.12)]' : 'bg-white border border-[rgba(35,31,35,0.08)]'}`}>
                {plan.highlighted && (
                  <div className="bg-[#A7FFAC] px-3 py-1 rounded-full inline-flex mb-4">
                    <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[10px] tracking-[0.75px] uppercase">Most popular</p>
                  </div>
                )}
                <p className={`font-['Fragment_Mono',monospace] text-[12px] tracking-[0.75px] uppercase mb-4 ${plan.highlighted ? 'text-[rgba(247,246,245,0.48)]' : 'text-[rgba(35,31,35,0.48)]'}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-2">
                  <p className="text-[40px] sm:text-[48px] tracking-[-1px]" style={{ fontWeight: 500 }}>{annual ? plan.annualPrice : plan.monthlyPrice}</p>
                  {plan.period && (
                    <p className={`text-[16px] ${plan.highlighted ? 'text-[rgba(247,246,245,0.48)]' : 'text-[rgba(35,31,35,0.48)]'}`} style={{ fontWeight: 300 }}>
                      {plan.period}
                    </p>
                  )}
                </div>
                <p className={`text-[14px] leading-[20px] mb-8 ${plan.highlighted ? 'text-[rgba(247,246,245,0.64)]' : 'text-[rgba(35,31,35,0.64)]'}`} style={{ fontWeight: 300 }}>
                  {plan.description}
                </p>
                <Link
                  to="/waitlist"
                  className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg cursor-pointer mb-8 no-underline ${plan.highlighted ? 'bg-[#f7f6f5] text-[#231f23]' : 'bg-[#231f23] text-[#f7f6f5]'}`}
                >
                  <p className="text-[14px] sm:text-[16px]">{plan.cta}</p>
                  <ArrowRight size={16} />
                </Link>
                <div className="flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.highlighted ? 'bg-[#A7FFAC]' : 'bg-[rgba(35,31,35,0.06)]'}`}>
                        <Check size={12} color="#231f23" strokeWidth={2.5} />
                      </div>
                      <p className={`text-[14px] ${plan.highlighted ? 'text-[rgba(247,246,245,0.8)]' : 'text-[rgba(35,31,35,0.64)]'}`} style={{ fontWeight: 300 }}>
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </section>

      {/* ───── Trust Strip ───── */}
      <section className="px-4 sm:px-8 py-8 sm:py-12">
        <AnimatedItem className="w-full max-w-[1100px] mx-auto">
          <div className="bg-[#ececec] rounded-[20px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            {[
              { icon: ShieldCheck, text: 'SOC 2 compliant' },
              { icon: Zap, text: '99.9% uptime SLA' },
              { icon: Sparkles, text: 'No credit card for free tier' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <item.icon size={16} color="rgba(35,31,35,0.48)" />
                <p className="text-[rgba(35,31,35,0.64)] text-[14px]" style={{ fontWeight: 300 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </AnimatedItem>
      </section>

      {/* ───── Comparison Table ───── */}
      <section className="px-4 sm:px-8 py-16 sm:py-20 lg:py-[120px]">
        <div className="max-w-[1100px] mx-auto">
          <AnimatedSection className="mb-10 md:mb-12">
            <p className="text-[#231f23] text-[24px] sm:text-[32px] lg:text-[36px] font-[Stack_Sans_Headline] tracking-[-0.5px] leading-[1.15] text-center">
              Compare plans
            </p>
          </AnimatedSection>

          <AnimatedItem>
            <div className="bg-white rounded-[20px] border border-[rgba(35,31,35,0.08)] overflow-x-auto">
              <div className="min-w-[560px]">
              {/* Header */}
              <div className="grid grid-cols-4 border-b border-[rgba(35,31,35,0.08)]">
                <div className="p-4 sm:p-5">
                  <p className="font-['Fragment_Mono',monospace] text-[rgba(35,31,35,0.48)] text-[11px] tracking-[0.75px] uppercase">Feature</p>
                </div>
                {['Starter', 'Pro', 'Enterprise'].map((name) => (
                  <div key={name} className="p-4 sm:p-5 text-center">
                    <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[11px] tracking-[0.75px] uppercase">{name}</p>
                  </div>
                ))}
              </div>
              {/* Rows */}
              {comparisonRows.map((row, i) => (
                <div key={row.feature} className={`grid grid-cols-4 ${i < comparisonRows.length - 1 ? 'border-b border-[rgba(35,31,35,0.06)]' : ''}`}>
                  <div className="p-4 sm:p-5 flex items-center">
                    <p className="text-[#231f23] text-[13px] sm:text-[14px]" style={{ fontWeight: 300 }}>{row.feature}</p>
                  </div>
                  {[row.starter, row.pro, row.enterprise].map((val, vi) => (
                    <div key={vi} className="p-4 sm:p-5 flex items-center justify-center">
                      <CellValue value={val} />
                    </div>
                  ))}
                </div>
              ))}
              </div>
            </div>
          </AnimatedItem>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="px-4 sm:px-8 pb-16 sm:pb-20 lg:pb-[120px]">
        <div className="max-w-[680px] mx-auto">
          <AnimatedSection className="mb-8 md:mb-10">
            <p className="text-[#231f23] text-[24px] sm:text-[32px] tracking-[-0.5px] text-center">Frequently asked questions</p>
          </AnimatedSection>
          <div className="flex flex-col gap-3 sm:gap-4">
            {faqs.map((faq, i) => (
              <AnimatedItem key={faq.q} delay={i * 0.05}>
                <div className="bg-[#ececec] rounded-xl overflow-hidden">
                  <button
                    className="flex items-center justify-between w-full p-5 sm:p-6 cursor-pointer gap-4"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <p className="text-[#231f23] text-[16px] sm:text-[18px] text-left" style={{ fontWeight: 500 }}>{faq.q}</p>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 w-6 h-6 rounded-full bg-[rgba(35,31,35,0.08)] flex items-center justify-center"
                    >
                      <p className="text-[#231f23] text-[16px] leading-none" style={{ fontWeight: 300 }}>+</p>
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                      <p className="text-[rgba(35,31,35,0.64)] text-[14px] sm:text-[16px] leading-[24px]" style={{ fontWeight: 300 }}>{faq.a}</p>
                    </div>
                  </motion.div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}