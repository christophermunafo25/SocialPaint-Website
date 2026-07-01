import { HeroSection } from '../components/HeroSection';
import { StickyScrollSection } from '../components/StickyScrollSection';
import { CaseStudySection } from '../components/CaseStudySection';
import { ProductsSection } from '../components/ProductsSection';
import { LogosSection } from '../components/LogosSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { DarkFeaturesSection } from '../components/DarkFeaturesSection';
import { BlogSection } from '../components/BlogSection';
import { FAQSection } from '../components/FAQSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <StickyScrollSection />
      <ProductsSection />
      <LogosSection />
      <CaseStudySection />
      <TestimonialsSection />
      <DarkFeaturesSection />
      <BlogSection />
      <FAQSection />
    </>
  );
}
