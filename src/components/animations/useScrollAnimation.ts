import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
  duration?: number;
  delay?: number;
  ease?: string;
}

export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = '0px',
  animationClass = 'animate-in',
  duration = 0.8,
  delay = 0,
  ease = 'power2.out'
}: ScrollAnimationOptions = {}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.from(element, {
        y: 50,
        opacity: 0,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
          once: true
        }
      });
    });

    return () => ctx.revert();
  }, [duration, delay, ease]);

  return ref;
}