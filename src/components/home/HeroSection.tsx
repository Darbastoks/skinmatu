import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { CONTACT } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] md:h-[85vh] flex items-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <PlaceholderImage
          src="https://www.skinmatu.lt/wp-content/uploads/2026/02/Gera-kosmetologe-Kaune-Inga-Matuseviciene-cover-foto.webp"
          alt="Inga Matusevičienė - Kosmetologė Kaune"
          variant="hero"
          className="w-full h-full"
          aspectRatio="aspect-auto"
        />
        {/* Silk/Shadow Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFAF5]/40 via-[#FDFAF5]/10 to-transparent md:block hidden" />
        <div className="absolute inset-0 bg-[#FDFAF5]/30 md:hidden" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl">
          {/* Decorative element */}
          <div className="elegant-divider mb-8" />

          <h1 className="font-serif italic text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-mahogany drop-shadow-sm">
            Tavo kosmetologė Kaune, kai reikia realių rezultatų
          </h1>
          <p className="mt-6 text-mahogany/70 text-base md:text-xl max-w-xl leading-relaxed font-medium">
            ne spėjimai, o aiškus planas Tavo odai – nes kiekviena oda skirtinga.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/paslaugos" variant="dark" className="px-8 py-4 text-lg">
              Paslaugos
            </Button>
            <Button href="/prekes" variant="outline" className="px-8 py-4 text-lg bg-white/50 backdrop-blur-sm">
              Produktai
            </Button>
          </div>

          {/* Instagram link */}
          <div className="mt-12 flex items-center gap-3">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-mahogany/60 hover:text-tobacco transition-colors duration-400 group"
            >
              <span className="border-b border-mahogany/20 group-hover:border-tobacco transition-colors">
                {CONTACT.instagramHandle}
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="opacity-70 group-hover:opacity-100"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
