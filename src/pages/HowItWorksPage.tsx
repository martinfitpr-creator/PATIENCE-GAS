import HowItWorksSection from '@/sections/HowItWorksSection';
import SafetyTipsSection from '@/sections/SafetyTipsSection';

export default function HowItWorksPage() {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <HowItWorksSection />
      <SafetyTipsSection />
    </div>
  );
}
