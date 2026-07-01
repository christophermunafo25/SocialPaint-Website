import svgPaths from '../../imports/svg-j8kolrt8id';
import imgFrame1 from 'figma:asset/fc9668aae01b8424946682c23af59f46f5d2e9de.png';
import { AnimatedSection } from './AnimatedSection';
import { Link } from 'react-router-dom';

export function CaseStudySection() {
  return (
    <AnimatedSection as="section" className="bg-[#f7f6f5] flex flex-col items-start overflow-clip p-4 sm:p-8 w-full max-w-[1440px] mx-auto z-[7]">
      <div className="h-[400px] sm:h-[520px] lg:h-[680px] relative rounded-[20px] w-full">
        <img alt="Team collaborating on content" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgFrame1} />
        <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
          <div className="flex items-end justify-between p-6 sm:p-8 lg:p-12 relative size-full">
            {/* Gradient overlays */}
            <div className="absolute bg-gradient-to-b from-[rgba(35,31,35,0.64)] h-[160px] sm:h-[232px] left-0 right-0 to-transparent top-0" />
            <div className="absolute left-0 right-0 bottom-0 h-[320px] sm:h-[480px] bg-gradient-to-t from-[rgba(35,31,35,0.64)] to-transparent" />
            
            {/* Content */}
            <div className="flex flex-col h-full items-start justify-between relative z-10">
              {/* Company logo placeholder */}
              <div className="h-12 flex items-center">
                <p className="text-[#f7f6f5] text-[20px] sm:text-[24px] lg:text-[28px] tracking-[-1px]" style={{ fontWeight: 400 }}>mercenary.ai</p>
              </div>
              <div className="flex flex-col gap-4 sm:gap-6 items-start w-full max-w-[564px]">
                <p className="leading-[1.2] text-[#f7f6f5] text-[24px] sm:text-[32px] lg:text-[40px] tracking-[-0.5px]">
                  How mercenary.ai used Socialpaint to 10x content output for their clients
                </p>
                <Link to="/clients" className="bg-[#f7f6f5] flex gap-2 items-center justify-center px-5 py-3 rounded-lg cursor-pointer no-underline">
                  <p className="text-[#231f23] text-[14px] sm:text-[16px] whitespace-nowrap">Read case study</p>
                  <div className="overflow-clip relative shrink-0 size-4">
                    <div className="absolute inset-[20.83%]">
                      <div className="absolute inset-[-8.04%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8333 10.8333">
                          <path d={svgPaths.p9a1b880} stroke="#231F23" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="hidden sm:flex gap-3 items-start relative z-10">
              {[svgPaths.p3e5b4640, svgPaths.p3712abc0].map((path, i) => (
                <button key={i} className="backdrop-blur-[8px] bg-[rgba(247,246,245,0.08)] flex items-center justify-center p-3 rounded-full cursor-pointer">
                  <div className="overflow-clip relative shrink-0 size-5">
                    <div className="absolute inset-[20.83%]">
                      <div className="absolute inset-[-6.43%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1667 13.1667">
                          <path d={path} stroke="#F7F6F5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}