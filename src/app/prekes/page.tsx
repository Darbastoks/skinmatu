import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCatalog } from "@/components/products/ProductCatalog";

export const metadata = {
  title: "Prekės | SkinMatu",
  description:
    "Profesionali kosmetika iš NOON, Mesoestetic ir Oxygen Ceuticals. Veido kremai, serumai, SPF apsauga ir daugiau.",
};

export default function PrekesPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative bg-mahogany text-vanilla py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-mahogany/95 to-mahogany/80" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%224%22%20height%3D%224%22%20viewBox%3D%220%200%204%204%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%222%22%20cy%3D%222%22%20r%3D%220.5%22%20fill%3D%22%23F1EADA%22/%3E%3C/svg%3E')]" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <SectionHeading as="h1" align="center" className="mb-6 [&_*]:text-vanilla">
            <span className="text-tobacco">Prekės</span>
          </SectionHeading>
          <p className="max-w-2xl mx-auto text-vanilla/60 text-lg leading-relaxed">
            Profesionali kosmetika, parinkta ir rekomenduojama kosmetologės.
            Tik patikimi, kliniškai ištirti produktai Jūsų kasdienei
            odos priežiūrai.
          </p>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-16 md:py-24 bg-[#FDFAF5]">
        <ProductCatalog />
      </section>
    </main>
  );
}
