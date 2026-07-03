import ContactCTASection from '@/sections/ContactCTASection';
import ServiceAreaSection from '@/sections/ServiceAreaSection';
import FAQSection from '@/sections/FAQSection';

export default function ContactPage() {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <ContactCTASection />
      <ServiceAreaSection />
      <FAQSection />
    </div>
  );
}
