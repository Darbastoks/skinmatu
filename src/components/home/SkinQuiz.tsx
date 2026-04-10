import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function SkinQuiz() {
  return (
    <section className="py-20 md:py-28 bg-[#FDFAF5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="max-w-3xl">
            <div className="elegant-divider mb-8" />
            <h2 className="font-serif italic font-bold text-3xl md:text-4xl lg:text-5xl mb-5 text-mahogany">
              Kaip išsirinkti tai, kas tinka tavo odai?
            </h2>
            <p className="text-tobacco font-serif italic text-xl md:text-2xl mb-5">
              Kosmetologės Kaune patarimai
              <br />
              pagal tavo odos poreikius
            </p>
            <p className="text-mahogany/45 leading-relaxed mb-8">
              Žinau, kaip sunku išsirinkti tai, kas iš tiesų tinka tavo odai.
              Šimtai kosmetikos produktų, dar daugiau patarimų internete ir
              skirtingų nuomonių – o veidrodis vis dar nerodo norimo rezultato.
              Kiekviena oda yra unikali, todėl tai, kas tiko kitai, nebūtinai
              tiks tau.
            </p>
            <p className="text-[11px] font-semibold text-tobacco tracking-[0.2em] uppercase mb-8">
              NEMOKAMAI!
            </p>
            <Button href="/kontaktai" variant="gold">
              Gauk rekomendacijas
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
