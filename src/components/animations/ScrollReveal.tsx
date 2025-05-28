import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Use require for ScrollTrigger to avoid CommonJS import issues
const ScrollTrigger = typeof window !== 'undefined' ? require('gsap/ScrollTrigger').ScrollTrigger : null;

if (ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade' | 'slide' | 'scale' | 'rotate';
  duration?: number;
  delay?: number;
  stagger?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  animation = 'fade',
  duration = 0.8,
  delay = 0,
  stagger = 0
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !ScrollTrigger) return;

    const animations = {
      fade: {
        from: { opacity: 0, y: 30 },
        to: { opacity: 1, y: 0 }
      },
      slide: {
        from: { opacity: 0, x: -50 },
        to: { opacity: 1, x: 0 }
      },
      scale: {
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 }
      },
      rotate: {
        from: { opacity: 0, rotation: -10 },
        to: { opacity: 1, rotation: 0 }
      }
    };

    const anim = animations[animation];

    gsap.fromTo(
      element.children,
      anim.from,
      {
        ...anim.to,
        duration,
        delay,
        stagger,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        }
      }
    );

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, [animation, duration, delay, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}