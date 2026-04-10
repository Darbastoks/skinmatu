import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { CONTACT } from "@/lib/utils";

export const metadata = {
  title: "Galerija | SkinMatu",
  description:
    "SkinMatu procedūrų ir rezultatų galerija. Pažiūrėkite mūsų darbų pavyzdžius.",
};

const galleryItems = [
  { id: "res-1", src: "/images/gen/result_1.png", label: "Mikroadatinė terapija - Rezultatas" },
  { id: "res-2", src: "/images/gen/result_2.png", label: "Nanoprone Scars - Randų mažinimas" },
  { id: "res-3", src: "/images/gen/result_3.png", label: "Pigmentacijos šalinimas - Rezultatas" },
  { id: "res-4", src: "/images/gen/result_4.png", label: "Gilus veido valymas - Rezultatas" },
  { id: "res-5", src: "/images/gen/result_5.png", label: "Aknės gydymas - Rezultatas" },
  { id: "res-6", src: "/images/gen/result_6.png", label: "Hydra Beauty - Drėkinimas" },
  { id: "res-7", src: "/images/gen/result_7.png", label: "Paakių atjauninimas - Rezultatas" },
  { id: "res-8", src: "/images/gen/result_8.png", label: "Kaktos raukšlių lyginimas - Rezultatas" },
  { id: "res-9", src: "/images/gen/result_9.png", label: "Odos stangrinimas - Jawline" },
  { id: "res-10", src: "/images/gen/result_10.png", label: "Raudonio mažinimas - Rosacea" },
  { id: "res-11", src: "/images/gen/result_11.png", label: "Glass Skin Effect - Švytėjimas" },
  { id: "res-12", src: "/images/gen/result_12.png", label: "Porų sutraukimas - Rezultatas" },
];

export default function GalerijaPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-mahogany text-vanilla py-24 md:py-48 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <PlaceholderImage
            src="https://www.skinmatu.lt/wp-content/uploads/2026/01/Aloe-vera-fonas-kosmetologes-svetainei.webp"
            alt="SkinMatu galerija"
            variant="hero"
            className="w-full h-full opacity-60"
            aspectRatio="aspect-auto"
          />
          {/* Silk/Shadow Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-mahogany/95 via-mahogany/85 to-mahogany/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <SectionHeading as="h1" align="center" className="mb-6 [&_*]:text-vanilla">
            <span className="text-tobacco">Galerija</span>
          </SectionHeading>
          <p className="max-w-2xl mx-auto text-vanilla/60 text-lg leading-relaxed font-medium">
            Procedūrų rezultatai ir mūsų studijos aplinka.
            Kiekviena nuotrauka – tai realaus kliento istorija.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-[#FDFAF5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {galleryItems.map((item) => (
              <AnimateOnScroll key={item.id}>
                <div className="group cursor-pointer">
                  <div className="overflow-hidden border border-sand/30 shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-lg group">
                      <img
                        src={item.src}
                        alt={item.label}
                        className="w-full h-full object-cover object-bottom transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                    </div>
                  </div>
                  <p className="mt-4 text-center font-serif italic text-mahogany/60 text-sm">
                    {item.label}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Instagram CTA */}
          <AnimateOnScroll>
            <div className="text-center mt-20 pt-16 border-t border-sand/40">
              <p className="font-serif italic text-2xl text-mahogany mb-5">
                Daugiau rezultatų – Instagram
              </p>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-tobacco hover:text-mahogany font-medium transition-colors duration-400"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                {CONTACT.instagramHandle}
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
