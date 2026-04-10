import { products } from "@/data/products";
import { notFound } from "next/navigation";
import { ProductDetails } from "@/components/products/ProductDetails";
import { Metadata } from "next";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return { title: "Produktas nerastas" };

  return {
    title: `${product.name} | SkinMatu`,
    description: product.shortDescription || `Aukštos kokybės ${product.brand} kosmetika.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 lg:pt-32">
      <ProductDetails product={product} />
    </main>
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}
