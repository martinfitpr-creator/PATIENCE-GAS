import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ChevronDown, MessageCircle, Truck, Smile } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '1',
    icon: MessageCircle,
    title: 'Order',
    description: 'Message us on WhatsApp with your order.',
    timeEstimate: 'Under 5 minutes',
  },
  {
    number: '2',
    icon: Truck,
    title: 'We Deliver',
    description: 'Fast delivery to your home or business.',
    timeEstimate: 'Within 2 hours',
  },
  {
    number: '3',
    icon: Smile,
    title: 'Enjoy Cooking Again',
    description: 'Cook with confidence knowing you have a reliable LPG supply.',
    timeEstimate: 'Same day, every time',
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const stepEls = sectionRef.current!.querySelectorAll('.step-item');
      const arrowEls = sectionRef.current!.querySelectorAll('.step-arrow');
      const circleEls = sectionRef.current!.querySelectorAll('.step-circle');
      const contentEls = sectionRef.current!.querySelectorAll('.step-content');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

      stepEls.forEach((_, i) => {
        tl.fromTo(
          circleEls[i],
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' },
          i * 0.4
        );
        tl.fromTo(
          contentEls[i],
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
          i * 0.4 + 0.1
        );
        if (i < arrowEls.length) {
          tl.fromTo(
            arrowEls[i],
            { opacity: 0 },
            { opacity: 1, duration: 0.4, ease: 'power2.out' },
            i * 0.4 + 0.3
          );
        }
      });

      arrowEls.forEach((arrow) => {
        gsap.to(arrow.querySelector('svg'), {
          y: 8,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      style={{
        backgroundColor: 'var(--color-green-pale)',
        padding: 'clamp(4rem, 8vw, 8rem) var(--page-margin)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 'var(--max-content)' }}>
        <SectionHeader label="HOW IT WORKS" heading="Gas in 3 Simple Steps" />

        <div className="flex flex-col items-center max-w-[640px] mx-auto">
          {steps.map((step, i) => (
            <div key={step.number} className="w-full">
              <div
                className={`step-item flex flex-col md:flex-row items-center gap-6 md:gap-10 py-5`}
              >
                {/* Number circle */}
                <div
                  className="step-circle w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: 'var(--color-green)',
                    color: 'white',
                    opacity: reducedMotion ? 1 : undefined,
                  }}
                >
                  <span className="font-serif text-[1.5rem]">{step.number}</span>
                </div>

                {/* Content */}
                <div
                  className="step-content text-center md:text-left flex-1"
                  style={{ opacity: reducedMotion ? 1 : undefined }}
                >
                  <h3 className="font-serif text-[1.5rem] leading-[1.2] mb-1" style={{ color: 'var(--color-text-primary)' }}>
                    {step.title}
                  </h3>
                  <p className="text-[1.05rem] leading-[1.65]" style={{ color: 'var(--color-text-secondary)' }}>
                    {step.description}
                  </p>
                  {/* Time estimate badge */}
                  <span
                    className="inline-flex items-center gap-1.5 mt-2 font-sans font-medium text-[0.75rem] uppercase tracking-[0.06em] px-3 py-1 rounded-[var(--radius-pill)]"
                    style={{
                      backgroundColor: 'var(--color-green)',
                      color: 'white',
                    }}
                  >
                    ⏱ {step.timeEstimate}
                  </span>
                </div>
              </div>

              {/* Arrow */}
              {i < steps.length - 1 && (
                <div
                  className="step-arrow flex justify-center py-2"
                  style={{ opacity: reducedMotion ? 1 : undefined }}
                >
                  <ChevronDown size={24} style={{ color: 'var(--color-green)' }} strokeWidth={2} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
