import HeroSection from '@/sections/HeroSection';
import TrustBar from '@/components/TrustBar';
import HowItWorksSection from '@/sections/HowItWorksSection';
import FeaturedProductSection from '@/sections/FeaturedProductSection';
import WhyPatienceGasSection from '@/sections/WhyPatienceGasSection';
import CustomerReviewsSection from '@/sections/CustomerReviewsSection';
import FAQSection from '@/sections/FAQSection';
import ServiceAreaSection from '@/sections/ServiceAreaSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <HowItWorksSection />
      <FeaturedProductSection />
      <WhyPatienceGasSection />
      <ServiceAreaSection />
      <CustomerReviewsSection />
      <FAQSection />
    </>
  );
}
