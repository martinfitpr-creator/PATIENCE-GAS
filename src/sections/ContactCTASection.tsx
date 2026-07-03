import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import WhatsAppButton from '@/components/WhatsAppButton';
import { WHATSAPP_NUMBER } from '@/constants';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export default function ContactCTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const heading = sectionRef.current!.querySelector('.cta-heading');
      const body = sectionRef.current!.querySelector('.cta-body');
      const button = sectionRef.current!.querySelector('.cta-button');
      const info = sectionRef.current!.querySelector('.cta-info');

      gsap.fromTo(
        heading,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        body,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        button,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: 0.3,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        info,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.45,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{
        backgroundColor: 'var(--color-forest)',
        padding: 'clamp(4rem, 8vw, 8rem) var(--page-margin)',
      }}
    >
      <div className="mx-auto text-center" style={{ maxWidth: '720px' }}>
        <h2
          className="cta-heading font-serif leading-[1.1] tracking-[-0.01em]"
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
            color: 'var(--color-cream)',
          }}
        >
          Don't Let an Empty Gas Cylinder Stop Your Day
        </h2>

        <p
          className="cta-body mt-6 text-[1.2rem] leading-[1.5]"
          style={{ color: 'rgba(255,255,255,0.75)' }}
        >
          Whether you're preparing dinner for your family or serving customers, we're here to make
          sure you never run out of gas.
        </p>

        <div className="cta-button mt-10 flex justify-center">
          <WhatsAppButton size="lg" text="WhatsApp Now" />
        </div>

        <div className="cta-info mt-8">
          <p className="font-sans text-[0.9rem]" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Order your LPG gas cylinder today on WhatsApp and enjoy fast, reliable delivery across
            Midrand.
          </p>
          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="inline-block mt-3 font-sans font-medium text-[1rem] transition-colors duration-300 hover:text-[var(--color-whatsapp)]"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Or call: 067 430 5238
          </a>
        </div>
      </div>
    </section>
  );
}
