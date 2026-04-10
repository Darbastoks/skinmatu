"use client";

import { useState } from "react";
import { Service } from "@/types";
import { cn } from "@/lib/utils";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

interface ServiceCardProps {
  service: Service;
  reversed?: boolean;
}

export function ServiceCard({ service, reversed = false }: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center",
        reversed && "md:[direction:rtl]"
      )}
    >
      {/* Image */}
      <div className={cn(reversed && "md:[direction:ltr]")}>
        <PlaceholderImage
          src={service.image}
          label={service.name}
          variant="service"
          aspectRatio="aspect-[4/3]"
          className="w-full"
        />
      </div>

      {/* Content */}
      <div className={cn(reversed && "md:[direction:ltr]")}>
        {/* Price & Duration Badge */}
        <div className="flex items-center gap-3 mb-5">
          <span className="bg-tobacco/8 text-tobacco px-4 py-1.5 text-[12px] font-medium tracking-[0.1em] uppercase border border-tobacco/10">
            {service.duration}
          </span>
          <span className="text-tobacco font-serif italic text-2xl font-bold">
            &euro;{service.price}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif italic font-bold text-2xl md:text-3xl text-mahogany mb-4 tracking-tight">
          {service.name}
        </h3>

        {/* Short Description */}
        <p className="text-mahogany/45 leading-relaxed mb-6">
          {service.shortDescription}
        </p>

        {/* Expandable Full Description */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-600",
            expanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          {/* Full Description */}
          <div className="mb-6">
            {service.fullDescription.split("\\n\\n").map((paragraph, i) => (
              <p key={i} className="text-mahogany/45 leading-relaxed mb-3">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Steps */}
          {service.steps && service.steps.length > 0 && (
            <div className="mb-6">
              <h4 className="font-serif italic font-semibold text-lg text-mahogany mb-4">
                Procedūros eiga
              </h4>
              <ol className="space-y-3">
                {service.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-mahogany/50">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-tobacco/8 text-tobacco flex items-center justify-center text-xs font-bold mt-0.5 border border-tobacco/10">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Suitable For */}
          {service.suitableFor && service.suitableFor.length > 0 && (
            <div className="mb-6">
              <h4 className="font-serif italic font-semibold text-lg text-mahogany mb-4">
                Tinka
              </h4>
              <ul className="space-y-2">
                {service.suitableFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-mahogany/50">
                    <svg
                      className="w-4 h-4 text-tobacco flex-shrink-0 mt-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-2 text-tobacco font-medium text-[12px] tracking-[0.12em] uppercase hover:text-mahogany transition-colors duration-400 group"
        >
          {expanded ? "Suskleisti" : "Plačiau apie procedūrą"}
          <svg
            className={cn(
              "w-4 h-4 transition-transform duration-400",
              expanded && "rotate-180"
            )}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
