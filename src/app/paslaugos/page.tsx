import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { CONTACT } from "@/lib/utils";
import { ServiceCard } from "@/components/services/ServiceCard";

export const metadata = {
  title: "Paslaugos | SkinMatu",
  description:
    "Profesionalios kosmetologinės paslaugos Kaune. Veido procedūros, mikroadatinė terapija, cheminis pilingas ir daugiau.",
};

export default function PaslaugosPage() {
  const sortedServices = [...services].sort((a, b) => a.order - b.order);

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative bg-mahogany text-vanilla py-24 md:py-48 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <PlaceholderImage
            src="https://www.skinmatu.lt/wp-content/uploads/2026/01/Viena-geriausiu-kosmetologiu-Kauno-mieste.webp"
            alt="Veido procedūros Kaune"
            variant="hero"
            className="w-full h-full"
            aspectRatio="aspect-auto"
          />
          {/* Silk/Shadow Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-mahogany/95 via-mahogany/85 to-mahogany/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <SectionHeading as="h1" align="center" className="mb-6 [&_*]:text-vanilla">
            <span className="text-tobacco">Paslaugos</span>
          </SectionHeading>
          <p className="max-w-2xl mx-auto text-vanilla/60 text-lg leading-relaxed font-medium">
            Kiekviena procedūra prasideda nuo individualios konsultacijos ir
            odos diagnostikos, kad rezultatas būtų pritaikytas būtent
            Jūsų odai.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-28 bg-[#FDFAF5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24 md:space-y-32">
            {sortedServices.map((service, index) => (
              <AnimateOnScroll key={service.id}>
                <ServiceCard service={service} reversed={index % 2 === 1} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-vanilla py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <div className="elegant-divider mx-auto mb-8" />
            <SectionHeading as="h2" align="center">
              Norite užsiregistruoti?
            </SectionHeading>
            <p className="text-mahogany/45 mb-10 text-lg leading-relaxed">
              Susisiekite telefonu arba užsiregistruokite per Treatwell
              platformą. Pirmas žingsnis – individuali konsultacija.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} variant="gold">
                Skambinti {CONTACT.phone}
              </Button>
              <Button href="/kontaktai" variant="outline">
                Kontaktai
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
