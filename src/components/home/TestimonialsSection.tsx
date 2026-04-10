"use client";

import { useState } from "react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 md:py-28 bg-[#FDFAF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            subtitle={"Jeigu ieškai daugiau nei procedūros – ieškai patirties, žinių, tikro dėmesio ir paprasto žmogiškumo – esi reikiamame kelyje, nes mano kabinete tu niekada nesijausi \u201Etik dar viena klientė\u201C."}
          >
            Ką galvoja mano klientės?
          </SectionHeading>
        </AnimateOnScroll>

        <div className="mt-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Video placeholder left */}
            <div className="relative group overflow-hidden">
              <PlaceholderImage
                src="https://www.skinmatu.lt/wp-content/uploads/2026/01/Viena-geriausiu-kosmetologiu-Kauno-mieste-1.webp"
                alt="Gamta ir ramybė procedūrų metu"
                aspectRatio="aspect-[4/3]"
                className="w-full"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-400 cursor-pointer">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-mahogany ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <p className="absolute bottom-4 left-4 text-[11px] text-white tracking-wider uppercase font-medium z-10">
                Video atsiliepimas
              </p>
            </div>

            {/* Testimonial text right */}
            <div>
              {/* Arrow navigation */}
              <button
                onClick={next}
                className="mb-8 flex items-center gap-2 text-mountain hover:text-tobacco transition-colors"
                aria-label="Kitas atsiliepimas"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <h3 className="text-xl font-serif italic font-semibold text-mahogany mb-4">
                {testimonials[current].name}
              </h3>
              <p className="text-mahogany/50 leading-relaxed text-base">
                {testimonials[current].text}
              </p>

              {/* Dots */}
              <div className="mt-10 flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-400 ${
                      i === current ? "bg-tobacco w-6" : "bg-sand hover:bg-mountain"
                    }`}
                    aria-label={`Atsiliepimas ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
