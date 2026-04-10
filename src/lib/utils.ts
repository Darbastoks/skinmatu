import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(price: number | null): string {
  if (price === null) return "Kaina paslėpta";
  return `€${price.toFixed(2)}`;
}

export function formatOldPrice(price: number | null): string {
  if (price === null) return "";
  return `€${price.toFixed(2)}`;
}

export const CONTACT = {
  phone: "+370 675 94592",
  email: "inga@skinmatu.lt",
  address: "Karaliaus Mindaugo pr. 35, Kaunas",
  hours: "I-V – 10:00 – 19:00",
  instagram: "https://www.instagram.com/skinmatu/",
  instagramHandle: "@skinmatu",
  company: 'MB „SkinMatu"',
  companyCode: "307575800",
  bank: "LT947300010200474860",
  registeredAddress: "Laisvės al. 110, LT-44253 Kaunas, Lietuva",
} as const;
