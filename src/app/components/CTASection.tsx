import svgPaths from '../../imports/svg-j8kolrt8id';
import { AnimatedSection } from './AnimatedSection';
import { Link } from 'react-router-dom';

export function CTASection() {
  return (
    <section className="flex flex-col gap-16 sm:gap-20 lg:gap-[120px] items-center pb-20 sm:pb-32 lg:pb-40 pt-24 sm:pt-32 lg:pt-[200px] px-4 sm:px-8 relative w-full max-w-[1440px] mx-auto">
      {/* Gradient blob */}
      <div className="absolute h-[400px] sm:h-[590px] left-4 sm:left-[66px] top-[200px] sm:top-[274px] right-4 sm:right-auto sm:w-[1308px] pointer-events-none">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1708 990" style={{ width: '130%', height: '168%', position: 'absolute', left: '-15%', top: '-34%' }}>
          <g filter="url(#filter0_f_cta)">
            <ellipse cx="854" cy="495" fill="url(#paint0_linear_cta)" rx="654" ry="295" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="990" id="filter0_f_cta" width="1708" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_cta" stdDeviation="100" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_cta" x1="854" x2="854" y1="200" y2="495">
              <stop stopColor="#ED7472" />
              <stop offset="1" stopColor="#FFED8C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* Top fade */}
      <div className="absolute bg-gradient-to-b from-[#f7f6f5] h-[160px] sm:h-[252px] left-0 to-transparent top-0 w-full pointer-events-none" />

      <AnimatedSection className="flex items-start justify-center w-full max-w-[1440px] relative z-10">
        <div className="flex-1 flex flex-col gap-6 sm:gap-8 items-center">
          <div className="flex flex-col gap-6 items-center w-full">
            <p className="leading-[1.15] text-[#231f23] text-[28px] sm:text-[40px] lg:text-[48px] text-center tracking-[-0.5px] font-[Stack_Sans_Headline] max-w-[1440px] sm:max-w-[1440px] lg:max-w-[1440px]" style={{ fontWeight: 400 }}>
              Ready to create<br />faster and <span className="accent-italic">stay on brand?</span>
            </p>
          </div>
          {/* Buttons */}
          <div className="flex gap-3 items-start">
            <Link to="/waitlist" className="bg-[#231f23] flex gap-2 items-center justify-center px-5 py-3 rounded-lg cursor-pointer no-underline">
              <p className="text-[#f7f6f5] text-[14px] sm:text-[16px] whitespace-nowrap">Join the Waitlist</p>
              <div className="overflow-clip relative shrink-0 size-4">
                <div className="absolute inset-[20.83%]">
                  <div className="absolute inset-[-8.04%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8333 10.8333">
                      <path d={svgPaths.p9a1b880} stroke="#F7F6F5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}