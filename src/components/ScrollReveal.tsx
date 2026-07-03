import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  y?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  delay?: number;
  style?: React.CSSProperties;
}

export default function ScrollReveal({
  children,
  className = '',
  y = 40,
  duration = 0.8,
  stagger = 0.12,
  start = 'top 80%',
  delay = 0,
  style,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !containerRef.current) return;

    const items = containerRef.current.children;
    if (items.length === 0) return;

    gsap.fromTo(
      items,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className={className}
      style={style}
    >
      {children}
    </div>
  );
}
