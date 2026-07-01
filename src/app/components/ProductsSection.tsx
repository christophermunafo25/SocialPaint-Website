import svgPaths from '../../imports/svg-j8kolrt8id';
import { AnimatedSection } from './AnimatedSection';
import { Link } from 'react-router-dom';
import { BarChart3, Building2, Users, type LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

function ProductCard({ tag, tagColor, icon: Icon, title, description }: {
  tag: string;
  tagColor: string;
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#ececec] flex flex-col items-start p-6 sm:p-8 rounded-[20px] shrink-0 w-full lg:w-[448px]">
      <div className="flex flex-col gap-4 items-start w-full">
        <div className="flex gap-3 items-center">
          <div className="flex items-center p-2 rounded-lg" style={{ backgroundColor: tagColor }}>
            <Icon className="size-4" strokeWidth={1.5} />
          </div>
          <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[12px] tracking-[0.75px] uppercase">{tag}</p>
        </div>
        <p className="leading-[28px] sm:leading-[32px] text-[#231f23] font-[Stack_Sans_Headline] text-[24px]" style={{ fontWeight: 400 }}>{title}</p>
        <p className="leading-[22px] text-[13px] sm:text-[15px] text-[rgba(35,31,35,0.56)]" style={{ fontWeight: 300 }}>{description}</p>
      </div>
    </div>
  );
}

export function ProductsSection() {
  return (
    <section className="bg-[#f7f6f5] flex flex-col gap-12 sm:gap-16 lg:gap-20 items-center overflow-clip pb-8 pt-8 sm:pt-10 lg:pt-12 px-4 sm:px-8 w-full max-w-[1440px] mx-auto z-[6]">
      {/* Header */}
      <AnimatedSection className="flex items-start justify-center">
        <div className="flex flex-col gap-6 sm:gap-8 items-center w-full max-w-[1440px] px-4 sm:px-0">
          <div className="flex gap-2 items-center px-3 py-2 rounded-lg relative">
            <div aria-hidden="true" className="absolute border border-[rgba(35,31,35,0.08)] border-solid inset-0 pointer-events-none rounded-lg" />
            <div className="bg-[#ed7472] rounded-[2px] shrink-0 size-[10px]" />
            <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[12px] tracking-[0.75px] uppercase">Use Cases</p>
          </div>
          <p className="leading-[1.15] text-[#231f23] text-[32px] sm:text-[40px] lg:text-[48px] text-center tracking-[-0.5px] font-[Stack_Sans_Headline]" style={{ fontWeight: 400 }}>
            Brand knowledge into usable output <span className="accent-italic">in seconds</span>
          </p>
          <Link to="/waitlist" className="bg-[#231f23] flex gap-2 items-center justify-center px-5 py-3 rounded-lg cursor-pointer no-underline">
            <p className="text-[#f7f6f5] text-[14px] sm:text-[16px] whitespace-nowrap">Join the Waitlist</p>
          </Link>
        </div>
      </AnimatedSection>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-center w-full">
        {[
          { tag: 'For Marketing', tagColor: '#A6CEFF', icon: BarChart3, title: 'Generate more without starting from scratch', description: 'Turn your team\'s existing creative patterns into a system that can produce new assets quickly while staying aligned with your brand.' },
          { tag: 'For the Business', tagColor: '#FFED8C', icon: Building2, title: 'Give every team access to marketing-quality assets', description: 'Sales, recruiting, partnerships, and internal teams can generate what they need without waiting on design, while still working from marketing\'s standards.' },
          { tag: 'For Agencies', tagColor: '#A7FFAC', icon: Users, title: 'Scale client content with more consistency', description: 'Use Socialpaint to capture each client\'s brand logic and generate assets that reflect their system, making it easier to move faster across accounts.' },
        ].map((card, i) => (
          <motion.div
            key={card.tag}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ProductCard
              tag={card.tag}
              tagColor={card.tagColor}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}