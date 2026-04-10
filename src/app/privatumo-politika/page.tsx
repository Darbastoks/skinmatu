import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT } from "@/lib/utils";

export const metadata = {
  title: "Privatumo politika | SkinMatu",
};

export default function PrivatumoPolitikaPage() {
  return (
    <main>
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading as="h1" className="mb-12">
            Privatumo politika
          </SectionHeading>

          <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
            <p>
              {CONTACT.company} (toliau – Duomenų valdytojas) gerbia Jūsų privatumą ir įsipareigoja saugoti Jūsų asmens duomenis pagal galiojančius teisės aktus, įskaitant Bendrąjį duomenų apsaugos reglamentą (BDAR).
            </p>

            <h2 className="font-serif italic font-bold text-xl text-dark mt-8 mb-4">
              1. Kokie duomenys renkami
            </h2>
            <p>
              Renkame tik tuos asmens duomenis, kurie yra būtini paslaugų teikimui: vardą, pavardę, telefono numerį, el. pašto adresą, informaciją apie odos būklę ir atliekamas procedūras.
            </p>

            <h2 className="font-serif italic font-bold text-xl text-dark mt-8 mb-4">
              2. Duomenų naudojimo tikslai
            </h2>
            <p>
              Jūsų asmens duomenys naudojami: registracijai vizitams, paslaugų teikimui, atsiskaitymų administravimui, komunikacijai su Jumis dėl užsakytų paslaugų ir produktų.
            </p>

            <h2 className="font-serif italic font-bold text-xl text-dark mt-8 mb-4">
              3. Duomenų saugojimo terminas
            </h2>
            <p>
              Asmens duomenys saugomi ne ilgiau, nei to reikalauja duomenų tvarkymo tikslai arba numato teisės aktai.
            </p>

            <h2 className="font-serif italic font-bold text-xl text-dark mt-8 mb-4">
              4. Jūsų teisės
            </h2>
            <p>
              Turite teisę susipažinti su savo asmens duomenimis, reikalauti juos ištaisyti, ištrinti arba apriboti tvarkymą. Dėl šios teisės įgyvendinimo kreipkitės el. paštu {CONTACT.email}.
            </p>

            <h2 className="font-serif italic font-bold text-xl text-dark mt-8 mb-4">
              5. Kontaktai
            </h2>
            <p>
              Duomenų valdytojas: {CONTACT.company}, įmonės kodas {CONTACT.companyCode}. El. paštas: {CONTACT.email}. Telefonas: {CONTACT.phone}.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
