import { MapPin, CheckCircle } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import WhatsAppButton from '@/components/WhatsAppButton';

const areas = [
  { name: 'Midrand', description: 'Full coverage — same-day guaranteed' },
  { name: 'Waterfall', description: 'Same-day delivery available' },
  { name: 'Kyalami', description: 'Same-day delivery available' },
  { name: 'Noordwyk', description: 'Same-day delivery available' },
  { name: 'Vorna Valley', description: 'Same-day delivery available' },
  { name: 'Halfway House', description: 'Same-day delivery available' },
];

export default function ServiceAreaSection() {
  return (
    <section
      id="service-area"
      style={{
        backgroundColor: 'var(--color-green-pale)',
        padding: 'clamp(2.5rem, 5vw, 4rem) var(--page-margin)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 'var(--max-content)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: copy */}
          <div>
            <span
              className="inline-block font-sans font-bold text-[0.7rem] uppercase tracking-[0.1em] px-3 py-1.5 rounded-[var(--radius-pill)] mb-3"
              style={{ backgroundColor: 'var(--color-green)', color: 'white' }}
            >
              Service Area
            </span>
            <h2
              className="font-serif leading-[1.1] tracking-[-0.01em] mb-3"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--color-text-primary)' }}
            >
              Delivering Across<br />Midrand & Surrounds
            </h2>
            <p
              className="text-[1.05rem] leading-[1.65] mb-6"
              style={{ color: 'var(--color-text-secondary)', maxWidth: 460 }}
            >
              We cover all major suburbs in and around Midrand. Not sure if we deliver to your area?
              Just WhatsApp us your suburb and we'll confirm within minutes.
            </p>
            <WhatsAppButton size="md" text="Check Your Area" />
          </div>

          {/* Right: suburb grid */}
          <ScrollReveal
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            stagger={0.08}
            y={20}
            start="top 80%"
          >
            {areas.map((area) => (
              <div
                key={area.name}
                className="flex items-start gap-4 p-4 rounded-[var(--radius-md)] transition-all duration-300"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'var(--color-border-green)';
                  el.style.boxShadow = '0 4px 20px rgba(0,0,0,0.07)';
                  el.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'var(--color-border)';
                  el.style.boxShadow = 'none';
                  el.style.transform = 'translateY(0)';
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: 'var(--color-green-pale)' }}
                >
                  <MapPin size={14} style={{ color: 'var(--color-green)' }} />
                </div>
                <div>
                  <p className="font-sans font-semibold text-[0.95rem]" style={{ color: 'var(--color-text-primary)' }}>
                    {area.name}
                  </p>
                  <p className="font-sans text-[0.8rem] mt-0.5" style={{ color: 'var(--color-text-muted)' }}>
                    {area.description}
                  </p>
                </div>
                <CheckCircle size={16} style={{ color: 'var(--color-green)', marginLeft: 'auto', flexShrink: 0, marginTop: 2 }} />
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
