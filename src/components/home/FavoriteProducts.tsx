"use client";

import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { formatPrice, formatOldPrice } from "@/lib/utils";

const favorites = [
  {
    name: "Noon vit c serum 11s, 10 g, visų tipų odai, serumas",
    price: null,
    oldPrice: null,
    brand: "Noon",
    image: "https://www.skinmatu.lt/wp-content/uploads/2026/03/AP-_1390a.webp",
  },
  {
    name: "Reviderm pH Manager veido koncentratas, 30 ml",
    price: 49.6,
    oldPrice: 62.0,
    brand: "Reviderm",
    image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1377.webp",
  },
  {
    name: "Reviderm Couperose Therapy Serum 2 veido serumas, 30 ml",
    price: 32.8,
    oldPrice: 41.0,
    brand: "Reviderm",
    image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1367.webp",
  },
  {
    name: "Reviderm Sicca Calcium Serum veido serumas, 30 ml",
    price: 35.2,
    oldPrice: 44.0,
    brand: "Reviderm",
    image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1369.webp",
  },
];

export function FavoriteProducts() {
  return (
    <section className="py-20 md:py-28 bg-[#FDFAF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading>Mylimiausi produktai:</SectionHeading>
        </AnimateOnScroll>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {favorites.map((product) => (
            <Link
              key={product.name}
              href="/prekes"
              className="group bg-vanilla/50 border border-sand/40 p-5 hover:shadow-[0_8px_30px_rgba(88,71,56,0.08)] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="aspect-square bg-white mb-5 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <h4 className="text-sm font-medium text-mahogany leading-snug line-clamp-2 group-hover:text-tobacco transition-colors duration-400">
                {product.name}
              </h4>
              <div className="mt-3 flex items-center gap-2">
                {product.oldPrice && (
                  <span className="price-old text-sm">
                    {formatOldPrice(product.oldPrice)}
                  </span>
                )}
                <span className="text-tobacco font-serif italic font-semibold text-lg">
                  {formatPrice(product.price)}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/prekes"
            className="inline-flex items-center gap-2 text-sm font-medium text-mahogany hover:text-tobacco transition-colors duration-400"
          >
            Žiūrėti visus
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
