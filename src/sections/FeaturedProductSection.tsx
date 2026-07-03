import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Check, Banknote, CreditCard, Smartphone } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const features = [
  'Same-day delivery in Midrand',
  'Professionally inspected cylinders',
  'Safe, reliable LPG supply',
  'Order via WhatsApp in seconds',
];

const paymentMethods = [
  { icon: Banknote, label: 'Cash' },
  { icon: Smartphone, label: 'EFT' },
  { icon: CreditCard, label: 'Card on Delivery' },
];

export default function FeaturedProductSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !sectionRef.current || !cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      const img = cardRef.current!.querySelector('img');
      if (img) {
        gsap.fromTo(
          img,
          { scale: 1.03 },
          {
            scale: 1,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (priceRef.current) {
        const proxy = { value: 0 };
        gsap.to(proxy, {
          value: 350,
          duration: 1,
          ease: 'power2.out',
          snap: { value: 1 },
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            if (priceRef.current) {
              priceRef.current.textContent = `R${Math.round(proxy.value)}`;
            }
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="pricing"
      style={{
        backgroundColor: 'var(--color-cream)',
        padding: 'clamp(3rem, 6vw, 6rem) var(--page-margin)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 'var(--max-content)' }}>
        <SectionHeader label="OUR PRODUCT" heading="9kg LPG Cylinder Exchange" />

        <div
          ref={cardRef}
          className="grid grid-cols-1 lg:grid-cols-2 rounded-[var(--radius-lg)] overflow-hidden"
          style={{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            opacity: reducedMotion ? 1 : undefined,
          }}
        >
          {/* Product Image */}
          <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto">
            <img
              src="/assets/img-product-delivery.jpg"
              alt="LPG gas cylinder delivery to a home in Midrand"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
            <h3 className="font-serif text-[1.5rem] leading-[1.2]" style={{ color: 'var(--color-text-primary)' }}>
              9kg LPG Cylinder Exchange
            </h3>

            <span
              ref={priceRef}
              className="font-serif text-[2.5rem] leading-none tracking-[-0.02em] mt-3"
              style={{ color: 'var(--color-green)' }}
            >
              {reducedMotion ? 'R350' : 'R0'}
            </span>

            <p className="mt-1 text-[1.05rem]" style={{ color: 'var(--color-text-secondary)' }}>
              Delivery calculated based on your location
            </p>

            <div
              className="w-10 h-0.5 mt-6 mb-6"
              style={{ backgroundColor: 'var(--color-green)' }}
            />

            <ul className="space-y-2.5">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check size={18} style={{ color: 'var(--color-green)' }} strokeWidth={2.5} />
                  <span className="text-[1.05rem]" style={{ color: 'var(--color-text-secondary)' }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Payment methods */}
            <div className="mt-6 flex flex-wrap gap-2">
              {paymentMethods.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-pill)]"
                  style={{ backgroundColor: 'var(--color-green-pale)', border: '1px solid var(--color-border)' }}
                >
                  <Icon size={13} style={{ color: 'var(--color-green)' }} />
                  <span className="font-sans text-[0.78rem] font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <WhatsAppButton size="md" text="Order Now on WhatsApp" fullWidth />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
