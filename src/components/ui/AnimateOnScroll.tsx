"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimateOnScroll({ children, className }: AnimateOnScrollProps) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={cn(
        "fade-up",
        isVisible ? "visible" : "opacity-0",
        className
      )}
      style={{ minHeight: isVisible ? "auto" : "20px" }}
    >
      {children}
    </div>
  );
}
