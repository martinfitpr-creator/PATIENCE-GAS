import { Zap, Wallet, Clock, ShieldCheck } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';

const features = [
  {
    icon: Wallet,
    title: 'Cost Savings',
    description: 'LPG costs less per unit than electricity for cooking — keep more money in your pocket every month.',
  },
  {
    icon: Zap,
    title: 'Load Shedding Proof',
    description: 'Works when the power doesn\'t. Your stove keeps going no matter what Eskom decides.',
  },
  {
    icon: Clock,
    title: 'Instant Heat',
    description: 'No waiting for elements to warm up — full flame the moment you turn the knob.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety First',
    description: 'Every cylinder is pressure-tested and inspected before delivery. No shortcuts, ever.',
  },
];

export default function WhyChooseGasSection() {
  return (
    <section
      id="why-lpg"
      style={{
        backgroundColor: 'var(--color-cream)',
        padding: 'clamp(4rem, 8vw, 8rem) var(--page-margin)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 'var(--max-content)' }}>
        <SectionHeader label="WHY CHOOSE LPG" heading="Cook Smarter, Not Harder" />

        <ScrollReveal
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          stagger={0.15}
          y={50}
          start="top 75%"
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex gap-6 rounded-[var(--radius-lg)] p-8 transition-all duration-[400ms]"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'var(--color-border-green)';
                el.style.transform = 'translateY(-4px)';
                el.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'var(--color-border)';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: 'var(--color-green-pale)' }}
              >
                <feature.icon size={22} style={{ color: 'var(--color-green)' }} />
              </div>
              <div>
                <h3 className="font-serif text-[1.35rem] leading-[1.2] mb-2" style={{ color: 'var(--color-text-primary)' }}>
                  {feature.title}
                </h3>
                <p className="text-[1rem] leading-[1.65]" style={{ color: 'var(--color-text-secondary)' }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
