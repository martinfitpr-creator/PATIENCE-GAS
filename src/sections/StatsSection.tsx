import { Truck, Users, Clock, Star } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const stats = [
  { icon: Truck, value: '500+', label: 'Deliveries Completed' },
  { icon: Users, value: '200+', label: 'Happy Customers' },
  { icon: Clock, value: '< 2hrs', label: 'Average Delivery Time' },
  { icon: Star, value: '5★', label: 'Customer Rating' },
];

export default function StatsSection() {
  return (
    <section
      id="stats"
      style={{
        backgroundColor: 'var(--color-green)',
        padding: 'clamp(2.5rem, 5vw, 4rem) var(--page-margin)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 'var(--max-content)' }}>
        <ScrollReveal
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x"
          stagger={0.1}
          y={20}
          start="top 80%"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center px-6 py-2"
              style={{
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.15)' : undefined,
              }}
            >
              <stat.icon size={22} style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 8 }} />
              <span
                className="font-serif tracking-[-0.02em]"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'white', lineHeight: 1.1 }}
              >
                {stat.value}
              </span>
              <span
                className="font-sans font-medium text-[0.78rem] uppercase tracking-[0.06em] mt-1"
                style={{ color: 'rgba(255,255,255,0.65)' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
