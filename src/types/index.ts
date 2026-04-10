export type ProductCategory =
  | "veido-kremai"
  | "veido-serumai"
  | "spf-apsauga"
  | "veido-kaukes"
  | "valymas-ir-tonizavimas"
  | "papildymai"
  | "mini-dydziai"
  | "rinkiniai"
  | "produktai-kunui"
  | "makiazas"
  | "veido-fluidas";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  tags: string[];
  price: number | null;
  oldPrice: number | null;
  image: string;
  featured?: boolean;
  shortDescription?: string;
  descriptionHtml?: string;
}

export interface Service {
  id: string;
  name: string;
  price: number;
  duration: string;
  shortDescription: string;
  fullDescription: string;
  steps?: string[];
  suitableFor?: string[];
  image: string;
  order: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  text: string;
}

export interface NavLink {
  label: string;
  href: string;
}
