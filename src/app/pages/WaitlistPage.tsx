import { useState } from 'react';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

export function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full pt-[140px] sm:pt-[180px] lg:pt-[200px] pb-16 sm:pb-24 max-w-[1440px] mx-auto px-4 sm:px-8">
      <AnimatedSection className="flex flex-col items-center text-center gap-6 mb-12 md:mb-16">
        <AnimatedItem>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(35,31,35,0.06)]">
            <Sparkles size={14} color="#231f23" />
            <p className="font-['Fragment_Mono',monospace] text-[#231f23] text-[12px] tracking-[0.75px] uppercase">Early Access</p>
          </div>
        </AnimatedItem>
        <AnimatedItem delay={0.1}>
          <p className="leading-[1.1] text-[#231f23] font-[Stack_Sans_Headline] text-[36px] sm:text-[48px] lg:text-[56px] tracking-[-1px] max-w-[720px]" style={{ fontWeight: 400 }}>
            Join the <span className="accent-italic">waitlist</span>
          </p>
        </AnimatedItem>
        <AnimatedItem delay={0.2}>
          <p className="text-[rgba(35,31,35,0.64)] text-[16px] sm:text-[18px] md:text-[20px] leading-[28px] sm:leading-[32px] max-w-[520px]" style={{ fontWeight: 300 }}>
            Be among the first to turn your brand into a living content system. We'll notify you when early access opens.
          </p>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedItem delay={0.3} className="w-full max-w-[520px] mx-auto">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-white rounded-[20px] p-6 sm:p-8 border border-[rgba(35,31,35,0.08)]">
            <div className="flex flex-col gap-1.5">
              <label className="font-['Fragment_Mono',monospace] text-[11px] tracking-[0.75px] uppercase text-[rgba(35,31,35,0.48)]">
                Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-lg bg-[rgba(35,31,35,0.04)] border border-[rgba(35,31,35,0.08)] text-[#231f23] text-[16px] outline-none focus:border-[rgba(35,31,35,0.24)] transition-colors placeholder:text-[rgba(35,31,35,0.32)]"
                style={{ fontWeight: 300 }}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-['Fragment_Mono',monospace] text-[11px] tracking-[0.75px] uppercase text-[rgba(35,31,35,0.48)]">
                Email *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full px-4 py-3 rounded-lg bg-[rgba(35,31,35,0.04)] border border-[rgba(35,31,35,0.08)] text-[#231f23] text-[16px] outline-none focus:border-[rgba(35,31,35,0.24)] transition-colors placeholder:text-[rgba(35,31,35,0.32)]"
                style={{ fontWeight: 300 }}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-['Fragment_Mono',monospace] text-[11px] tracking-[0.75px] uppercase text-[rgba(35,31,35,0.48)]">
                Company
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Your company name"
                className="w-full px-4 py-3 rounded-lg bg-[rgba(35,31,35,0.04)] border border-[rgba(35,31,35,0.08)] text-[#231f23] text-[16px] outline-none focus:border-[rgba(35,31,35,0.24)] transition-colors placeholder:text-[rgba(35,31,35,0.32)]"
                style={{ fontWeight: 300 }}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-['Fragment_Mono',monospace] text-[11px] tracking-[0.75px] uppercase text-[rgba(35,31,35,0.48)]">
                Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[rgba(35,31,35,0.04)] border border-[rgba(35,31,35,0.08)] text-[#231f23] text-[16px] outline-none focus:border-[rgba(35,31,35,0.24)] transition-colors appearance-none cursor-pointer"
                style={{ fontWeight: 300 }}
              >
                <option value="">Select your role</option>
                <option value="founder">Founder / CEO</option>
                <option value="marketing">Marketing</option>
                <option value="design">Design</option>
                <option value="social">Social Media Manager</option>
                <option value="agency">Agency</option>
                <option value="freelancer">Freelancer</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-[#231f23] flex items-center justify-center gap-2 px-5 py-3 rounded-lg cursor-pointer mt-2"
            >
              <p className="text-[#f7f6f5] text-[16px]">Join the Waitlist</p>
              <ArrowRight size={16} color="#f7f6f5" />
            </button>
            <p className="text-[rgba(35,31,35,0.4)] text-[13px] text-center" style={{ fontWeight: 300 }}>
              No spam. We'll only email you when it's time.
            </p>
          </form>
        ) : (
          <div className="flex flex-col items-center gap-5 bg-white rounded-[20px] p-8 sm:p-12 border border-[rgba(35,31,35,0.08)] text-center">
            <div className="w-16 h-16 rounded-full bg-[#A7FFAC] flex items-center justify-center">
              <CheckCircle size={32} color="#231f23" />
            </div>
            <p className="text-[#231f23] text-[24px] sm:text-[28px] tracking-[-0.5px]" style={{ fontWeight: 500 }}>
              You're on the list!
            </p>
            <p className="text-[rgba(35,31,35,0.64)] text-[16px] leading-[24px] max-w-[360px]" style={{ fontWeight: 300 }}>
              Thanks for signing up, {name.split(' ')[0]}. We'll reach out to <span style={{ fontWeight: 500 }}>{email}</span> when early access opens.
            </p>
          </div>
        )}
      </AnimatedItem>
    </div>
  );
}
