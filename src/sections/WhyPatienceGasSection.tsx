import { Truck, MessageCircle, Tag, ShieldCheck, CreditCard } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';

const reasons = [
  {
    icon: Truck,
    title: 'Same-Day Delivery Across Midrand',
    description: 'Order before 3pm and get your gas the same day — no waiting until tomorrow.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Ordering',
    description: 'No app or account needed. Just send us a message and we handle the rest.',
  },
  {
    icon: Tag,
    title: 'Transparent Pricing',
    description: 'No hidden delivery fees. The price you see is the price you pay.',
  },
  {
    icon: ShieldCheck,
    title: 'Certified & Inspected Cylinders',
    description: 'Every cylinder passes a safety inspection before it reaches your door.',
  },
  {
    icon: CreditCard,
    title: 'Flexible Payment',
    description: 'Cash or EFT on delivery — whatever is most convenient for you.',
  },
];

export default function WhyPatienceGasSection() {
  return (
    <section
      id="why-us"
      style={{
        backgroundColor: 'var(--color-forest)',
        padding: 'clamp(2.5rem, 5vw, 4rem) var(--page-margin)',
      }}
    >
      <div className="mx-auto flex flex-col gap-10" style={{ maxWidth: 'var(--max-content)' }}>
        <SectionHeader
          label="WHY CUSTOMERS CHOOSE US"
          heading="More Than Just Gas. Peace of Mind."
          subheading="Here's why Midrand, Centurion, and Johannesburg homes and businesses trust Patience Gas Supplies."
          theme="dark"
        />

        <ScrollReveal
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          stagger={0.1}
          y={40}
          start="top 72%"
        >
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group flex gap-5 rounded-[var(--radius-lg)] p-7 transition-all duration-[350ms]"
              style={{
                border: '1px solid rgba(255,255,255,0.12)',
                backgroundColor: 'rgba(255,255,255,0.05)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = 'rgba(255,255,255,0.1)';
                el.style.borderColor = 'rgba(255,255,255,0.25)';
                el.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = 'rgba(255,255,255,0.05)';
                el.style.borderColor = 'rgba(255,255,255,0.12)';
                el.style.transform = 'translateY(0)';
              }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ border: '1.5px solid rgba(255,255,255,0.25)', backgroundColor: 'rgba(255,255,255,0.08)' }}
              >
                <reason.icon size={20} style={{ color: 'var(--color-cream)' }} />
              </div>
              <div>
                <h3 className="font-serif text-[1.25rem] leading-[1.25] mb-2" style={{ color: 'var(--color-cream)' }}>
                  {reason.title}
                </h3>
                <p className="text-[0.95rem] leading-[1.6]" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </ScrollReveal>

        {/* New Informational Display showing the delivery photos & details */}
        <ScrollReveal
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
          y={30}
          start="top 75%"
        >
          <div className="rounded-[var(--radius-lg)] overflow-hidden aspect-[16/10] border border-white/10 relative group">
            <img
              src="/assets/delivery-1.jpg"
              alt="Patience Gas delivery staff delivering cylinder to customer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
              <h4 className="font-serif text-[1.3rem] text-white">Centurion & Midrand Express</h4>
              <p className="text-[0.88rem] text-white/80 mt-1">Our dedicated delivery drivers bring your refills straight to your doorstep.</p>
            </div>
          </div>

          <div className="rounded-[var(--radius-lg)] overflow-hidden aspect-[16/10] border border-white/10 relative group">
            <img
              src="/assets/delivery-2.jpg"
              alt="LPG cylinder delivery arrival"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
              <h4 className="font-serif text-[1.3rem] text-white">Johannesburg Wide Coverage</h4>
              <p className="text-[0.88rem] text-white/80 mt-1">Fast tracking and route planning ensures we arrive in under 2 hours.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
