import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';
import { ArrowRight } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="w-full pt-[140px] sm:pt-[180px] lg:pt-[200px] pb-20 sm:pb-32 lg:pb-40 max-w-[1440px] mx-auto">
      <section className="px-4 sm:px-8">
        <AnimatedSection className="flex flex-col items-center text-center gap-6">
          <AnimatedItem>
            <p className="font-['Fragment_Mono',monospace] text-[rgba(35,31,35,0.48)] text-[12px] tracking-[0.75px] uppercase">404</p>
          </AnimatedItem>
          <AnimatedItem delay={0.1}>
            <p className="text-[#231f23] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] tracking-[-1px] leading-[1.1] max-w-[680px]">
              Page not found
            </p>
          </AnimatedItem>
          <AnimatedItem delay={0.2}>
            <p className="text-[rgba(35,31,35,0.64)] text-[16px] sm:text-[18px] md:text-[20px] leading-[28px] sm:leading-[32px] max-w-[480px]" style={{ fontWeight: 300 }}>
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
          </AnimatedItem>
          <AnimatedItem delay={0.3}>
            <div className="flex gap-3 items-center mt-2">
              <Link to="/" className="bg-[#231f23] flex gap-2 items-center justify-center px-5 py-3 rounded-lg cursor-pointer no-underline">
                <p className="text-[#f7f6f5] text-[14px] sm:text-[16px] whitespace-nowrap">Back to Home</p>
                <ArrowRight size={16} color="#f7f6f5" />
              </Link>
              <Link to="/waitlist" className="backdrop-blur-[8px] bg-[rgba(35,31,35,0.08)] flex items-center justify-center px-5 py-3 rounded-lg cursor-pointer no-underline">
                <p className="text-[#231f23] text-[14px] sm:text-[16px] whitespace-nowrap">Join the Waitlist</p>
              </Link>
            </div>
          </AnimatedItem>
        </AnimatedSection>
      </section>
    </div>
  );
}
