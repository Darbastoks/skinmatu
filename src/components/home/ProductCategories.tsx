import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const byEffect = [
  "Skaistina odą",
  "Reguliuoja sebumą",
  "Ramina odą",
  "Drėkina odą",
  "Atstato odą",
  "Anti-age",
];

const byProblem = [
  "Riebiai odai",
  "Probleminei / aknės odai",
  "Jautriai odai",
  "Dehidratuotai odai",
  "Brandžiai odai",
  "Po procedūrų",
];

export function ProductCategories() {
  return (
    <section className="py-20 md:py-28 bg-vanilla">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            subtitle="Žinau, kaip sunku išsirinkti tai, kas iš tiesų tinka tavo odai. Kiekviena oda yra unikali, todėl tai, kas tiko kitai, nebūtinai tiks tau."
          >
            Rask tinkamą rutiną sau
          </SectionHeading>
        </AnimateOnScroll>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* By effect */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-tobacco mb-6">
              Pagal poveikį
            </h3>
            <div className="flex flex-wrap gap-3">
              {byEffect.map((tag) => (
                <Link
                  key={tag}
                  href="/prekes"
                  className="px-5 py-2.5 bg-[#FDFAF5] border border-sand/50 text-sm text-mahogany/60 hover:border-tobacco hover:text-tobacco transition-all duration-400"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* By problem */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-tobacco mb-6">
              Pagal problemą
            </h3>
            <div className="flex flex-wrap gap-3">
              {byProblem.map((tag) => (
                <Link
                  key={tag}
                  href="/prekes"
                  className="px-5 py-2.5 bg-[#FDFAF5] border border-sand/50 text-sm text-mahogany/60 hover:border-tobacco hover:text-tobacco transition-all duration-400"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
