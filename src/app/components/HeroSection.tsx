import svgPaths from '../../imports/svg-j8kolrt8id';
import { AnimatedSection, AnimatedItem } from './AnimatedSection';
import { AnalyzerFrame } from './AnalyzerFrame';
import { Link } from 'react-router-dom';

function ArrowIcon({ color = '#F7F6F5' }: { color?: string }) {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]">
      <div className="absolute inset-[20.83%]">
        <div className="absolute inset-[-8.04%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8333 10.8333">
            <path d={svgPaths.p9a1b880} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LogoCarousel() {
  const logos = ['Webflow', 'Foster & Reeves', 'Synthesia', 'Halden Miller', 'Brandkit', 'Mosaic', 'PixelForge'];
  return (
    <div className="h-[80px] overflow-hidden relative w-full max-w-[1440px]">
      <div className="flex gap-12 sm:gap-20 items-center absolute left-0 top-1/2 -translate-y-1/2 animate-[marquee_20s_linear_infinite]">
        {[...logos, ...logos].map((name, i) => (
          <div key={`${name}-${i}`} className="h-8 shrink-0 flex items-center">
            <p className="text-[rgba(35,31,35,0.64)] text-[14px] sm:text-[16px] whitespace-nowrap tracking-wide" style={{ fontWeight: 400 }}>{name}</p>
          </div>
        ))}
      </div>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#f7f6f5] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#f7f6f5] to-transparent z-10" />
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="bg-[#f7f6f5] flex flex-col gap-2 md:gap-20 items-center w-full max-w-[1440px] mx-auto relative z-10 px-[32px] pt-[200px] pb-[0px]">
      {/* Intro */}
      <AnimatedSection className="flex items-start justify-center w-full max-w-[1440px]">
        <div className="flex flex-col gap-6 md:gap-8 items-start md:items-center w-full">
          <div className="flex flex-col gap-4 md:gap-6 items-start md:items-center text-left md:text-center w-full">
            <AnimatedItem>
              <p className="leading-[1.1] text-[#231f23] tracking-[-1px] font-[Stack_Sans_Headline] text-[55px]" style={{ fontWeight: 400 }}>Replicate your marketing team<br className="hidden md:inline" /> <span className="accent-italic">straight from the source.</span></p>
            </AnimatedItem>
            <AnimatedItem delay={0.1}>
              <p className="leading-[28px] sm:leading-[32px] text-[16px] sm:text-[18px] md:text-[20px] text-[rgba(35,31,35,0.64)] px-0 sm:px-[75px] py-[0px]" style={{ fontWeight: 300 }}>
                Socialpaint is the first AI design system that learns exactly how your marketing team<br className="hidden sm:inline" /> designs and generates content for anyone in your company.
              </p>
            </AnimatedItem>
          </div>
          {/* Buttons */}
          <AnimatedItem delay={0.2}>
            <div className="flex gap-3 items-start">
              <Link to="/waitlist" className="bg-[#231f23] flex gap-2 items-center justify-center px-5 py-3 rounded-lg cursor-pointer no-underline">
                <p className="text-[#f7f6f5] text-[14px] sm:text-[16px] whitespace-nowrap">Join the Waitlist</p>
                <ArrowIcon />
              </Link>
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>
      {/* Product Visual + Logos */}
      <div className="flex flex-col gap-4 md:gap-20 items-center w-full">
        <AnimatedItem delay={0.3} className="w-full max-w-[1440px] mx-auto relative">
          <AnalyzerFrame />
        </AnimatedItem>
        <AnimatedItem delay={0.2}>
          <LogoCarousel />
        </AnimatedItem>
      </div>
    </section>
  );
}