import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT } from "@/lib/utils";

export const metadata = {
  title: "Slapukų politika | SkinMatu",
};

export default function SlapukaiPage() {
  return (
    <main>
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading as="h1" className="mb-12">
            Slapukų politika
          </SectionHeading>

          <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
            <p>
              Ši svetainė naudoja slapukus (cookies), kad užtikrintų geriausio naudojimosi patirtį.
            </p>

            <h2 className="font-serif italic font-bold text-xl text-dark mt-8 mb-4">
              1. Kas yra slapukai?
            </h2>
            <p>
              Slapukai – tai maži teksto failai, kuriuos svetainė išsaugo Jūsų įrenginyje, kai ją lankote. Jie padeda svetainei atpažinti Jūsų įrenginį ir prisiminti tam tikrą informaciją.
            </p>

            <h2 className="font-serif italic font-bold text-xl text-dark mt-8 mb-4">
              2. Kokie slapukai naudojami?
            </h2>
            <p>
              <strong>Būtini slapukai</strong> – užtikrina pagrindinį svetainės funkcionalumą. Be jų svetainė negali tinkamai veikti.
            </p>
            <p>
              <strong>Analitiniai slapukai</strong> – padeda suprasti, kaip lankytojai naudojasi svetaine, ir gerinti jos turinio kokybę.
            </p>

            <h2 className="font-serif italic font-bold text-xl text-dark mt-8 mb-4">
              3. Kaip valdyti slapukus?
            </h2>
            <p>
              Galite valdyti ir ištrinti slapukus per savo naršyklės nustatymus. Atkreipkite dėmesį, kad išjungus slapukus kai kurios svetainės funkcijos gali neveikti tinkamai.
            </p>

            <h2 className="font-serif italic font-bold text-xl text-dark mt-8 mb-4">
              4. Kontaktai
            </h2>
            <p>
              Jei turite klausimų dėl slapukų, kreipkitės el. paštu{" "}
              <a href={`mailto:${CONTACT.email}`} className="text-gold hover:text-gold-dark">
                {CONTACT.email}
              </a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
