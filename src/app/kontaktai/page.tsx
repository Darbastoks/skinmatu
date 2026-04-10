import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { CONTACT } from "@/lib/utils";

export const metadata = {
  title: "Kontaktai | SkinMatu",
  description:
    "SkinMatu kontaktai. Kosmetologinė studija Kaune, Karaliaus Mindaugo pr. 35. Registracija telefonu.",
};

export default function KontaktaiPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-mahogany text-vanilla py-24 md:py-48 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <PlaceholderImage
            src="https://www.skinmatu.lt/wp-content/uploads/2026/01/Aloe-vera-fonas-kosmetologes-svetainei.webp"
            alt="SkinMatu kontaktai"
            variant="hero"
            className="w-full h-full opacity-40"
            aspectRatio="aspect-auto"
          />
          {/* Silk/Shadow Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-mahogany/95 via-mahogany/85 to-mahogany/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <SectionHeading as="h1" align="center" className="mb-6 [&_*]:text-vanilla">
            <span className="text-tobacco">Kontaktai</span>
          </SectionHeading>
          <p className="max-w-2xl mx-auto text-vanilla/60 text-lg leading-relaxed font-medium">
            Susisiekite su mumis ir užsiregistruokite vizitui.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 md:py-28 bg-[#FDFAF5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Contact Details */}
            <div>
              <AnimateOnScroll>
                <div className="elegant-divider mb-8" />
                <SectionHeading as="h2" className="mb-12">
                  Susisiekite
                </SectionHeading>

                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-tobacco/8 border border-tobacco/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-tobacco" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-mahogany mb-1">Telefonas</h3>
                      <a
                        href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                        className="text-tobacco hover:text-mahogany text-lg font-serif italic transition-colors"
                      >
                        {CONTACT.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-tobacco/8 border border-tobacco/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-tobacco" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-mahogany mb-1">El. paštas</h3>
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="text-tobacco hover:text-mahogany text-lg font-serif italic transition-colors"
                      >
                        {CONTACT.email}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-tobacco/8 border border-tobacco/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-tobacco" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-mahogany mb-1">Adresas</h3>
                      <p className="text-mahogany/50">{CONTACT.address}</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-tobacco/8 border border-tobacco/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-tobacco" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-mahogany mb-1">Darbo laikas</h3>
                      <p className="text-mahogany/50">{CONTACT.hours}</p>
                      <p className="text-mountain text-sm mt-1">Šeštadienį – pagal išankstinę registraciją</p>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-tobacco/8 border border-tobacco/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-tobacco" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-mahogany mb-1">Instagram</h3>
                      <a
                        href={CONTACT.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-tobacco hover:text-mahogany font-serif italic transition-colors"
                      >
                        {CONTACT.instagramHandle}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <Button href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} variant="gold">
                    Registruotis vizitui
                  </Button>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right - Map Placeholder & Company Info */}
            <div>
              <AnimateOnScroll>
            {/* Map Section - Professional Branding Image */}
            <div className="relative group overflow-hidden border border-sand/40 group">
              <PlaceholderImage
                src="https://www.skinmatu.lt/wp-content/uploads/2025/12/1.webp"
                alt="SkinMatu studija"
                aspectRatio="aspect-[4/3]"
                className="w-full grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-mahogany/10 pointer-events-none" />
              <div className="absolute bottom-6 left-6 z-10">
                <div className="bg-white/90 backdrop-blur-sm p-4 shadow-xl border border-sand/30">
                  <p className="text-mahogany font-serif italic text-sm">{CONTACT.address}</p>
                  <p className="text-mountain text-[10px] tracking-widest uppercase mt-1">Kaunas, Lietuva</p>
                </div>
              </div>
            </div>

                {/* Company Details */}
                <div className="bg-vanilla p-8 border border-sand/40">
                  <h3 className="font-serif italic font-semibold text-lg text-mahogany mb-5">
                    Rekvizitai
                  </h3>
                  <div className="space-y-3 text-sm text-mahogany/50">
                    <p>
                      <span className="text-mountain text-[11px] tracking-wider uppercase">Pavadinimas:</span>{" "}
                      <span className="block mt-0.5">{CONTACT.company}</span>
                    </p>
                    <p>
                      <span className="text-mountain text-[11px] tracking-wider uppercase">Įmonės kodas:</span>{" "}
                      <span className="block mt-0.5">{CONTACT.companyCode}</span>
                    </p>
                    <p>
                      <span className="text-mountain text-[11px] tracking-wider uppercase">Banko sąsk.:</span>{" "}
                      <span className="block mt-0.5">{CONTACT.bank}</span>
                    </p>
                    <p>
                      <span className="text-mountain text-[11px] tracking-wider uppercase">Registruotas adr.:</span>{" "}
                      <span className="block mt-0.5">{CONTACT.registeredAddress}</span>
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
