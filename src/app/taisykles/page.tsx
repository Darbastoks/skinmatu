import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT } from "@/lib/utils";

export const metadata = {
  title: "Pirkimo taisyklės | SkinMatu",
};

export default function TaisyklesPage() {
  return (
    <main>
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading as="h1" className="mb-12">
            Pirkimo taisyklės
          </SectionHeading>

          <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
            <h2 className="font-serif italic font-bold text-xl text-dark mt-8 mb-4">
              1. Bendrosios nuostatos
            </h2>
            <p>
              Šios pirkimo taisyklės reglamentuoja prekių įsigijimo {CONTACT.company} elektroninėje parduotuvėje tvarką, apmokėjimo ir pristatymo sąlygas, šalių teises ir pareigas.
            </p>

            <h2 className="font-serif italic font-bold text-xl text-dark mt-8 mb-4">
              2. Užsakymo pateikimas
            </h2>
            <p>
              Užsakymus galite pateikti susisiekdami su mumis telefonu {CONTACT.phone} arba el. paštu {CONTACT.email}. Taip pat galite užsiregistruoti vizitui ir įsigyti produktus studijoje.
            </p>

            <h2 className="font-serif italic font-bold text-xl text-dark mt-8 mb-4">
              3. Kainos ir apmokėjimas
            </h2>
            <p>
              Visos kainos nurodytos eurais su PVM. Apmokėjimas galimas grynaisiais pinigais arba bankiniu pavedimu. Kainos gali keistis be išankstinio įspėjimo.
            </p>

            <h2 className="font-serif italic font-bold text-xl text-dark mt-8 mb-4">
              4. Prekių grąžinimas
            </h2>
            <p>
              Prekės gali būti grąžinamos per 14 dienų nuo įsigijimo dienos, jeigu nepažeista pakuotė ir produktas nenaudotas. Grąžinimo atveju kreipkitės el. paštu {CONTACT.email}.
            </p>

            <h2 className="font-serif italic font-bold text-xl text-dark mt-8 mb-4">
              5. Atsakomybė
            </h2>
            <p>
              {CONTACT.company} neatsako už galimas nepageidaujamas reakcijas, jeigu produktas naudojamas ne pagal paskirtį arba nesilaikant rekomendacijų.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
