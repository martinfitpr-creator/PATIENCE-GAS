import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion) return;

    const section = sectionRef.current;
    const videoContainer = videoContainerRef.current;
    const content = contentRef.current;
    const scrollIndicator = scrollIndicatorRef.current;
    if (!section || !videoContainer || !content || !scrollIndicator) return;

    const ctx = gsap.context(() => {
      // 1. Parallax on video container
      gsap.to(videoContainer, {
        y: 150,
        scale: 1.05,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // 2. Content fade on scroll
      gsap.to(content.children, {
        opacity: 0,
        y: -30,
        stagger: 0.05,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '50% top',
          scrub: true,
        },
      });

      // 3. Scroll indicator fade out
      gsap.to(scrollIndicator, {
        opacity: 0,
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '100px top',
          scrub: true,
        },
      });

      // 4. Page load entrance sequence
      const tl = gsap.timeline({ delay: 0.2 });
      tl.fromTo(
        videoContainer,
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: 'power2.out' }
      );
      tl.fromTo(
        content.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      );

      // 5. Scroll indicator dot bounce
      gsap.to(scrollIndicator.querySelector('.scroll-dot'), {
        y: 20,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }, section);

    return () => ctx.revert();
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100dvh' }}
    >
      {/* Image Background */}
      <div
        ref={videoContainerRef}
        className="absolute inset-0 w-full h-full"
        style={{ willChange: 'transform' }}
      >
        <img
          src="/assets/hero-bg-gas-seal.jpg"
          alt="LPG Gas Cylinder Safety Seal"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <span
          className="inline-block font-sans font-medium text-[0.7rem] uppercase tracking-[0.08em] px-4 py-1.5 rounded-[var(--radius-pill)] mb-6"
          style={{
            color: 'rgba(255,255,255,0.7)',
            backgroundColor: 'rgba(255,255,255,0.12)',
          }}
        >
          LPG GAS DELIVERY — MIDRAND
        </span>

        <h1
          className="font-serif leading-[1.05] tracking-[-0.02em] text-white max-w-[800px]"
          style={{
            fontSize: 'clamp(2.2rem, 7vw, 5.5rem)',
            textShadow: '0 2px 30px rgba(0,0,0,0.3)',
          }}
        >
          Never Run Out of Gas Again
        </h1>

        <p
          className="mt-6 text-[1.2rem] leading-[1.5] max-w-[560px]"
          style={{ color: 'rgba(255,255,255,0.85)' }}
        >
          Fast, reliable LPG cylinder delivery across Midrand. Order on WhatsApp and we'll be at
          your door.
        </p>

        <div className="mt-10 relative z-20">
          <WhatsAppButton size="lg" className="shadow-[0_0_40px_rgba(37,211,102,0.5)] scale-110" />
        </div>

        <p
          className="mt-6 font-sans text-[0.85rem] tracking-[0.04em]"
          style={{ color: 'rgba(255,255,255,0.6)' }}
        >
          9kg Cylinder Exchange · Same-Day Delivery · R350
        </p>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <div className="w-px h-8" style={{ backgroundColor: 'rgba(255,255,255,0.4)' }} />
        <div
          className="scroll-dot w-1 h-1 rounded-full mt-[-2px]"
          style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
        />
      </div>
    </section>
  );
}
