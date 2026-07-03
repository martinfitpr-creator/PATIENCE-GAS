import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export default function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !ref.current) return;

    gsap.fromTo(
      ref.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: ref });

  return (
    <div className="py-8 flex justify-center">
      <div
        ref={ref}
        className="w-[60px] h-[2px]"
        style={{
          backgroundColor: 'var(--color-green)',
          transformOrigin: 'center',
          opacity: reducedMotion ? 1 : undefined,
        }}
      />
    </div>
  );
}
