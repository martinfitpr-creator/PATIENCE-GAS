import { useState, useEffect, useRef } from 'react';

export function useScrollDirection(): 'up' | 'down' {
  const [direction, setDirection] = useState<'up' | 'down'>('up');
  const lastScrollY = useRef(0);

  useEffect(() => {
    let rafId: number;

    const update = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 100) {
        setDirection('down');
      } else if (currentY < lastScrollY.current) {
        setDirection('up');
      }
      lastScrollY.current = currentY;
      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return direction;
}
