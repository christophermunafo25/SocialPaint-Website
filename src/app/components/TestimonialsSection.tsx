import { motion, useScroll, useTransform } from 'motion/react';
import imgIconBox from 'figma:asset/ed7c801194bc7ff805bb4bd285902c4636ce6287.png';
import imgIconBox1 from 'figma:asset/438799b0d857a591d37469074fd2d942064d6b8e.png';
import imgIconBox2 from 'figma:asset/17d4df9e204f69ab8f8945d205b3b56e11635cce.png';
import imgIconBox3 from 'figma:asset/d61a8ed358cd2a0b68dfce3529400567fa4b9628.png';
import imgIconBox4 from 'figma:asset/8692d79b580fbc3bc780a9f18ece1dee860321b4.png';
import imgIconBox5 from 'figma:asset/0aa8176981b3be0c20fa5d11307c97759b510907.png';
import { AnimatedSection, AnimatedItem } from './AnimatedSection';
import { useRef } from 'react';

interface TestimonialData {
  company: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

function TestimonialCard({ data }: { data: TestimonialData }) {
  return (
    <div className="bg-white flex flex-col h-auto min-h-[280px] sm:h-[320px] items-center justify-between overflow-clip p-6 sm:p-8 rounded-[20px] shrink-0 w-full sm:w-[564px]">
      <div className="flex flex-col gap-6 sm:gap-8 items-start w-full">
        <div className="h-8 flex items-center">
          <p className="text-[rgba(35,31,35,0.64)] text-[16px] sm:text-[18px] tracking-[-0.5px]" style={{ fontWeight: 400 }}>{data.company}</p>
        </div>
        <p className="leading-[24px] text-[14px] sm:text-[16px] text-[rgba(35,31,35,0.64)] w-full" style={{ fontWeight: 300 }}>
          {data.quote}
        </p>
      </div>
      <div className="flex gap-4 sm:gap-6 items-center w-full mt-6 sm:mt-0">
        <div className="relative rounded-[20px] shrink-0 size-12 sm:size-16">
          <img alt={data.name} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={data.avatar} />
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <p className="text-[#231f23] text-[14px] sm:text-[16px]" style={{ fontWeight: 400 }}>{data.name}</p>
          <p className="text-[rgba(35,31,35,0.64)] text-[14px] sm:text-[16px]" style={{ fontWeight: 300 }}>{data.role}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const row1: TestimonialData[] = [
    {
      company: 'Halden Miller',
      quote: '"Socialpaint cut our content production time by more than half. Creating on-brand social posts went from hours to minutes."',
      name: 'Jacek Rosinski',
      role: 'CTO',
      avatar: imgIconBox,
    },
    {
      company: 'Foster & Reeves',
      quote: '"We pushed a major campaign through with zero stress. The AI-generated visuals matched our brand perfectly every time."',
      name: 'Maya Fischer',
      role: 'Head of Marketing',
      avatar: imgIconBox1,
    },
    {
      company: 'Synthesia',
      quote: '"Our product team finally creates content without waiting on design. Socialpaint gives us brand-perfect assets anyone can generate."',
      name: 'Daniel Romero',
      role: 'Co-Founder and CEO',
      avatar: imgIconBox2,
    },
  ];

  const row2: TestimonialData[] = [
    {
      company: 'Brightwave',
      quote: '"Content bottlenecks used to kill our momentum. Now Socialpaint generates assets, checks brand compliance, and even suggests optimizations instantly."',
      name: 'Alejandro Vargas',
      role: 'Creative Director',
      avatar: imgIconBox3,
    },
    {
      company: 'Meridian Labs',
      quote: '"Socialpaint cut our onboarding time for new marketers by more than half. Understanding our brand system went from days to minutes."',
      name: 'Daniel Romero',
      role: 'Co-Founder and CEO',
      avatar: imgIconBox4,
    },
    {
      company: 'Brandkit',
      quote: '"Content creation used to be the bottleneck. Now Socialpaint generates assets, checks brand fit, and suggests improvements we can publish instantly."',
      name: 'Jessica Mercedes',
      role: 'Head of Content',
      avatar: imgIconBox5,
    },
  ];

  const allTestimonials = [...row1, ...row2];

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const row1X = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);
  const row2X = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section ref={sectionRef} className="bg-[#f7f6f5] relative flex flex-col gap-12 sm:gap-16 lg:gap-20 items-center overflow-clip pb-20 sm:pb-32 lg:pb-40 pt-16 sm:pt-20 lg:pt-[120px] px-4 sm:px-8 w-full max-w-[1440px] mx-auto z-[5]">
      {/* Header */}
      <AnimatedSection className="flex items-start justify-center">
        <div className="flex flex-col gap-6 items-center w-full max-w-[1440px] px-4 sm:px-0">
          <div className="flex gap-2 items-center px-3 py-2 rounded-lg relative">
            <div aria-hidden="true" className="absolute border border-[rgba(35,31,35,0.08)] border-solid inset-0 pointer-events-none rounded-lg" />
            <div className="bg-[#ed7472] rounded-[2px] shrink-0 size-[10px]" />
            <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[12px] tracking-[0.75px] uppercase">Testimonials</p>
          </div>
          <p className="leading-[1.2] text-[#231f23] text-center tracking-[-0.5px] text-[32px] sm:text-[40px] lg:text-[48px] font-[Stack_Sans_Headline]" style={{ fontWeight: 400 }}>
            Teams that <span className="accent-italic">ship smarter</span> choose Socialpaint
          </p>
        </div>
      </AnimatedSection>

      {/* Mobile: stacked testimonials */}
      <div className="flex flex-col gap-4 items-center w-full lg:hidden">
        {allTestimonials.slice(0, 4).map((t, i) => (
          <AnimatedItem key={t.name + t.company} delay={i * 0.05}>
            <TestimonialCard data={t} />
          </AnimatedItem>
        ))}
      </div>

      {/* Desktop: two rows with fade edges */}
      <div className="hidden lg:flex flex-col gap-4 items-center overflow-clip relative w-full">
        <motion.div className="flex gap-4 items-start w-full" style={{ x: row1X }}>
          {row1.map((t) => (
            <AnimatedItem key={t.name + t.company}>
              <TestimonialCard data={t} />
            </AnimatedItem>
          ))}
        </motion.div>
        <motion.div className="flex gap-4 items-center justify-center w-full" style={{ x: row2X }}>
          {row2.map((t) => (
            <AnimatedItem key={t.name + t.company} delay={0.1}>
              <TestimonialCard data={t} />
            </AnimatedItem>
          ))}
        </motion.div>
        {/* Fade edges */}
        <div className="absolute bottom-0 right-0 top-0 w-[216px] pointer-events-none">
          <div className="size-full bg-gradient-to-l from-[#f7f6f5] to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 top-0 w-[216px] pointer-events-none">
          <div className="size-full bg-gradient-to-r from-[#f7f6f5] to-transparent" />
        </div>
      </div>
    </section>
  );
}