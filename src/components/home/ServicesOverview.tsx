import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLink } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function ServicesOverview() {
  const featured = services.slice(0, 6);

  return (
    <section className="py-20 md:py-28 bg-[#FDFAF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            subtitle={"Grožis prasideda ten, kur atsiranda rūpestis savimi. Su manimi kiekvienas Tavo apsilankymas tampa investicija, o ne spontanišku bandymu \u201Ekažką pataisyti\u201C."}
          >
            Profesionalios Veido Procedūros ir Aparatinė Kosmetologija Kaune
          </SectionHeading>
        </AnimateOnScroll>

        <p className="mt-4 text-mahogany/45 max-w-3xl leading-relaxed mb-20">
          Jeigu pavargai nuo bandymų ir klaidų — atėjo laikas dirbti su
          kosmetologe, kuri turi virš 20 metų patirties ir tiksliai žino, ko
          tavo odai reikia.
        </p>

        {/* Alternating service blocks */}
        <div className="space-y-24 md:space-y-32">
          {featured.map((service, i) => (
            <AnimateOnScroll key={service.id}>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center ${
                  i % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                  <PlaceholderImage
                    src={service.image}
                    alt={service.name}
                    variant="service"
                    aspectRatio="aspect-[4/5]"
                    className="w-full"
                  />
                </div>
                <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                  <h3 className="font-serif italic font-bold text-2xl md:text-3xl lg:text-4xl mb-4 text-mahogany">
                    {service.name}
                  </h3>
                  <p className="text-mahogany/45 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center gap-4 mb-8 text-sm text-mountain">
                    <span className="px-4 py-1.5 bg-vanilla border border-sand/60 rounded-sm text-[12px] tracking-wider">
                      {service.duration}
                    </span>
                    <span className="font-serif italic font-semibold text-tobacco text-lg">
                      €{service.price}
                    </span>
                  </div>
                  <ArrowLink href="/paslaugos">Sužinoti daugiau</ArrowLink>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="mt-20 text-center">
          <ArrowLink href="/paslaugos">Atrask paslaugas</ArrowLink>
        </div>
      </div>
    </section>
  );
}
