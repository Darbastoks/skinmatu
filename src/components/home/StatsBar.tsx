"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useEffect, useState } from "react";

interface StatItem {
  prefix?: string;
  value: number;
  suffix: string;
  label: string;
  separator?: string;
}

const stats: StatItem[] = [
  { value: 20, suffix: "+", label: "Metų patirtis", prefix: "" },
  { value: 5, suffix: "/5", label: "Įvertinimas Treatwell", separator: "" },
  { value: 33, suffix: "+", label: "Veido procedūros" },
  { value: 1000, suffix: "", label: "Atliktų procedūrų", prefix: "<" },
];

function CountUp({ target, prefix, suffix }: { target: number; prefix?: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useIntersectionObserver();

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [isVisible, target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-serif italic font-bold text-tobacco">
      {prefix}
      {target >= 1000 ? count.toLocaleString("lt-LT") : count}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  return (
    <section className="py-20 md:py-28 bg-vanilla/50 relative">
      {/* Top decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-tobacco/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <CountUp
                target={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
              <p className="mt-3 text-[11px] text-mountain tracking-[0.15em] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-tobacco/20 to-transparent" />
    </section>
  );
}
