"use client";

import { useEffect, useRef, useState } from 'react';

export function useInView({ 
  threshold = 0, 
  triggerOnce = false 
}: { 
  threshold?: number; 
  triggerOnce?: boolean;
}): [React.RefObject<any>, boolean] {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold }
    );

    observer.observe(ref.current);
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold, triggerOnce]);

  return [ref, isInView];
}