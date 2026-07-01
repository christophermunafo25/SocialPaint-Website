import { useState } from 'react';
import { motion } from 'motion/react';
import svgPaths from '../../imports/svg-j8kolrt8id';
import { AnimatedSection, AnimatedItem } from './AnimatedSection';

const faqs = [
  {
    question: 'How does SocialPaint learn my brand style?',
    answer: 'SocialPaint connects to your existing design tools — Figma, Canva, Adobe — and analyzes your brand assets including colors, typography, spacing, and layout patterns. This creates your unique Style DNA that powers all content generation.',
  },
  {
    question: 'Can anyone on my team generate content?',
    answer: 'Yes! That\'s the whole point. Once your Style DNA is set up, anyone from sales to customer success can generate on-brand content without design skills or waiting on the marketing team.',
  },
  {
    question: 'What platforms does SocialPaint support?',
    answer: 'SocialPaint generates content optimized for Instagram, LinkedIn, Twitter/X, Facebook, TikTok, and more. Each piece is automatically sized and formatted for the target platform.',
  },
  {
    question: 'How do I ensure brand consistency across teams?',
    answer: 'Every piece of content generated goes through an automated brand check against your Style DNA. You can set approval workflows, review dashboards, and get alerts if anything drifts off-brand.',
  },
  {
    question: 'Can I customize the AI-generated content?',
    answer: 'Absolutely. SocialPaint generates a starting point that\'s already on-brand, then you can fine-tune text, imagery, and layout in our built-in editor before publishing.',
  },
  {
    question: 'What integrations are available?',
    answer: 'We integrate with Figma, Canva, Adobe Creative Suite, Slack, HubSpot, Buffer, Hootsuite, and many more. Our API also allows custom integrations with your existing marketing stack.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#ececec] relative rounded-xl w-full">
      <div className="flex flex-col items-start p-4 sm:p-6 w-full">
        <button
          className="flex items-center justify-between w-full cursor-pointer gap-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="leading-[28px] sm:leading-[32px] text-[#231f23] text-[16px] sm:text-[18px] lg:text-[20px] text-left" style={{ fontWeight: 400 }}>{question}</p>
          <div className="backdrop-blur-[8px] bg-[rgba(35,31,35,0.08)] flex items-center justify-center p-2 rounded-full shrink-0">
            <div className="overflow-clip relative shrink-0 size-4">
              <div className="absolute inset-[20.83%]">
                <div className="absolute inset-[-8.04%]">
                  <motion.svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 10.8333 10.8333"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <path d={svgPaths.p18191e80} stroke="#231F23" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </motion.svg>
                </div>
              </div>
            </div>
          </div>
        </button>
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="overflow-hidden w-full"
        >
          <div className="pt-4">
            <p className=" text-[14px] sm:text-[16px] leading-[1.5] text-[rgba(35,31,35,0.64)]" style={{ fontWeight: 300 }}>{answer}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="bg-[#f7f6f5] flex flex-col items-start px-4 sm:px-8 py-16 sm:py-20 lg:py-[120px] w-full max-w-[1440px] mx-auto z-[2]">
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-start w-full">
        {/* Left: heading */}
        <AnimatedSection className="flex-1 lg:sticky lg:top-[120px]">
          <p className="leading-[1.15] text-[#231f23] text-[28px] sm:text-[40px] lg:text-[48px] tracking-[-0.5px] font-[Stack_Sans_Headline]" style={{ fontWeight: 400 }}>
            Questions?<br /><span className="accent-italic">We're glad you asked.</span>
          </p>
        </AnimatedSection>
        {/* Right: FAQ items */}
        <div className="flex flex-col gap-3 sm:gap-4 items-start justify-center w-full lg:w-[680px]">
          {faqs.map((faq, i) => (
            <AnimatedItem key={faq.question} delay={i * 0.05}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
}