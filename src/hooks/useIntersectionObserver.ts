"use client";

import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Safety timeout: if observer fails to trigger, just show the content after a delay
    const safetyTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        clearTimeout(safetyTimeout);
        observer.unobserve(el);
      }
    }, { threshold: 0.1, ...options });

    observer.observe(el);
    return () => {
      clearTimeout(safetyTimeout);
      observer.disconnect();
    };
  }, [options]);

  return { ref, isVisible };
}
