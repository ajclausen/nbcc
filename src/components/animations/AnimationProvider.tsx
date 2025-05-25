import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

interface AnimationContextType {
  prefersReducedMotion: boolean;
  isLoaded: boolean;
}

const AnimationContext = createContext<AnimationContextType>({
  prefersReducedMotion: false,
  isLoaded: false
});

export function useAnimation() {
  return useContext(AnimationContext);
}

interface AnimationProviderProps {
  children: ReactNode;
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    
    // Set loaded after a small delay to ensure smooth initial animations
    setTimeout(() => setIsLoaded(true), 100);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <AnimationContext.Provider value={{ prefersReducedMotion, isLoaded }}>
      {children}
    </AnimationContext.Provider>
  );
}