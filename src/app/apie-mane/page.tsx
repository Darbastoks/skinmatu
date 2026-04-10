import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/utils";

export const metadata = {
  title: "Apie mane | SkinMatu",
  description:
    "Kosmetologė Inga – daugiau nei 20 metų patirtis estetiniėje kosmetologijoje. Sužinokite daugiau apie SkinMatu įkūrėją.",
};

export default function ApiePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-mahogany text-vanilla py-24 md:py-48 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <PlaceholderImage
            src="/images/gen/hero_atmosphere.png"
            alt="SkinMatu studijos aplinka"
            variant="hero"
            className="w-full h-full"
            aspectRatio="aspect-auto"
          />
          {/* Silk/Shadow Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-mahogany/95 via-mahogany/85 to-mahogany/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <SectionHeading as="h1" align="center" className="mb-6 [&_*]:text-vanilla">
            <span className="text-tobacco">Apie mane</span>
          </SectionHeading>
          <p className="max-w-2xl mx-auto text-vanilla/60 text-lg leading-relaxed font-medium">
            Tavo kosmetologė Kaune, kai reikia realių rezultatų.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-[#FDFAF5]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <PlaceholderImage
                src="/images/gen/inga_real_white.png"
                alt="Kosmetologė Inga Matusevičienė"
                variant="about"
                aspectRatio="aspect-[3/4]"
                className="w-full shadow-2xl"
              />
              <div>
                <div className="elegant-divider mb-8" />
                <SectionHeading as="h2">
                  Kosmetologė Inga
                </SectionHeading>
                <div className="space-y-4 text-mahogany/50 leading-relaxed">
                  <p>
                    Esu Inga, estetinių veido procedūrų specialistė su daugiau nei 20 metų patirtimi. Mano profesinė kelionė prasidėjo nuo studijų ir gilaus domėjimosi odos fiziologija bei naujausiais estetiniės kosmetologijos metodais.
                  </p>
                  <p>
                    Per savo karjerą esu atlikusi daugiau nei 1000 procedūrų, nuolat tobulinu savo žinias ir įgūdžius dalyvaudama tarptautinėse konferencijose bei seminaruose.
                  </p>
                  <p>
                    Kiekviena procedūra mano kabinete prasideda nuo individualios konsultacijos ir odos diagnostikos, nes tikiu, kad geriausias rezultatas pasiekiamas tik tada, kai sprendimas yra pritaikytas konkrečiai Jūsų odai.
                  </p>
                  <p>
                    Dirbu tik su kliniškai patikrintais, profesionaliais produktais: NOON, Mesoestetic, Oxygen Ceuticals ir kitais pirmaujančiais gamintojais.
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Values */}
      <section className="bg-vanilla py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <SectionHeading as="h2" align="center" className="mb-16">
              Mano vertės
            </SectionHeading>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Individualumas",
                text: "Kiekviena oda yra unikali. Todėl kiekviena procedūra ir produktas parenkamas individualiai, atsižvelgiant į Jūsų odos tipą, būklę ir tikslus.",
              },
              {
                title: "Profesionalumas",
                text: "Nuolatinis tobulėjimas, tarptautinė patirtis ir tik kliniškai ištirti produktai – tai pagrindas, ant kurio statau savo darbą.",
              },
              {
                title: "Realūs rezultatai",
                text: "Mano tikslas – ne trumpalaikis efektas, o ilgalaikis, matomas odos pagerėjimas. Dirbu dėl rezultato, kurį galite matyti ir jausti.",
              },
            ].map((value, i) => (
              <AnimateOnScroll key={i}>
                <div className="text-center p-10 bg-[#FDFAF5] border border-sand/30">
                  <h3 className="font-serif italic font-bold text-xl text-mahogany mb-4">
                    {value.title}
                  </h3>
                  <p className="text-mahogany/45 leading-relaxed">{value.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-28 bg-[#FDFAF5]">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { num: "20+", label: "Metų patirties" },
                { num: "5/5", label: "Treatwell įvertinimas" },
                { num: "33+", label: "Procedūrų kataloge" },
                { num: "1000+", label: "Atliktų procedūrų" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="font-serif italic font-bold text-4xl md:text-5xl text-tobacco mb-3">
                    {stat.num}
                  </p>
                  <p className="text-mountain text-[11px] tracking-[0.15em] uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mahogany text-vanilla py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <div className="elegant-divider mx-auto mb-8" />
            <SectionHeading as="h2" align="center" className="[&_*]:text-vanilla mb-8">
              Susipažinkime
            </SectionHeading>
            <p className="text-vanilla/50 mb-10 text-lg">
              Registruokitės individualiai konsultacijai ir aptarkime, kaip galiu padėti Jūsų odai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} variant="gold">
                {CONTACT.phone}
              </Button>
              <Button href="/kontaktai" variant="outline" className="border-vanilla/30 text-vanilla hover:bg-vanilla hover:text-mahogany">
                Kontaktai
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
