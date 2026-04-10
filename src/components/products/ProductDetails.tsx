"use client";

import { Product } from "@/types";
import { formatPrice, formatOldPrice } from "@/lib/utils";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState<"description" | "reviews" | "shipping">("description");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    // We can extend addToCart to accept quantity if needed, but for now we'll call it multiple times
    // or just assume it adds one for simplicity of the current Context.
    // Let's assume the context handles adding the same product multiple times.
    for (let i = 0; i < quantity; i++) {
        addToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const tabs = [
    { id: "description", label: "Aprašymas" },
    { id: "reviews", label: "Atsiliepimai (0)" },
    { id: "shipping", label: "Pristatymas" },
  ] as const;

  return (
    <div className="bg-vanilla/20 min-h-screen pb-24 lg:pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex mb-12 text-[10px] uppercase tracking-[0.2em] text-mountain/60">
          <Link href="/" className="hover:text-mahogany transition-colors">Pagrindinis</Link>
          <span className="mx-3">/</span>
          <Link href="/prekes" className="hover:text-mahogany transition-colors">Parduotuvė</Link>
          <span className="mx-3">/</span>
          <span className="text-mahogany/80 truncate max-w-[200px]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          
          {/* Left Column: Image Area */}
          <div className="space-y-6">
            <div className="aspect-square bg-white border border-sand/40 p-10 flex items-center justify-center relative overflow-hidden group shadow-[0_15px_50px_rgba(88,71,56,0.05)]">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-3 border border-sand/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
              </div>
            </div>
            
            {/* Gallery placeholder if needed */}
            <div className="grid grid-cols-4 gap-4">
              <div className="aspect-square border-2 border-tobacco bg-white p-2">
                <img src={product.image} className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Right Column: Key Details */}
          <div className="flex flex-col">
            <p className="text-xs uppercase tracking-[0.3em] text-tobacco font-bold mb-4">
              {product.brand}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl text-mahogany leading-[1.2] mb-6">
              {product.name}
            </h1>

            {/* Price section */}
            <div className="flex items-center gap-4 mb-8">
              {product.price !== null ? (
                <>
                  <span className="font-serif italic text-3xl font-bold text-tobacco">
                    {formatPrice(product.price)}
                  </span>
                  {product.oldPrice && (
                    <span className="text-xl text-mountain/50 line-through decoration-mountain/30">
                      {formatOldPrice(product.oldPrice)}
                    </span>
                  )}
                </>
              ) : (
                <div className="p-4 bg-vanilla/50 border-l-4 border-tobacco text-mahogany italic font-medium text-sm">
                  Šio produkto kaina nurodoma tik po profesionalios kosmetologo konsultacijos.
                </div>
              )}
            </div>

            {/* Short Description */}
            {product.shortDescription && (
              <div 
                className="text-mountain/80 text-sm leading-relaxed mb-10 border-b border-sand/40 pb-10"
                dangerouslySetInnerHTML={{ __html: product.shortDescription }}
              />
            )}

            {/* Quantity and Add to Cart */}
            <div className="flex flex-wrap items-center gap-6 mb-12">
              <div className="flex items-center border border-sand/60 bg-white">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-vanilla transition-colors text-mahogany"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/></svg>
                </button>
                <span className="px-4 py-3 w-12 text-center text-sm font-medium border-x border-sand/40">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-vanilla transition-colors text-mahogany"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className={cn(
                  "flex-1 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 rounded-full flex items-center justify-center gap-3",
                  added 
                    ? "bg-green-600 text-white shadow-[0_8px_25px_rgba(22,163,74,0.3)]" 
                    : "bg-mahogany text-vanilla hover:bg-tobacco hover:shadow-[0_8px_25px_rgba(88,71,56,0.2)]"
                )}
              >
                {added ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                    Pridėta!
                  </>
                ) : (
                  "Į krepšelį"
                )}
              </button>
            </div>

            {/* Meta Data */}
            <div className="space-y-3 text-[11px] uppercase tracking-widest text-mountain/60 pt-4 border-t border-sand/30">
              <div className="flex items-center gap-2">
                <span className="text-mahogany/40 font-bold min-w-[120px]">Produkto kodas:</span>
                <span className="text-mahogany">AP-{product.id.substring(0, 4)}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-mahogany/40 font-bold min-w-[120px]">Kategorija:</span>
                <span className="text-mahogany">{product.category.replace('-', ' ')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-mahogany/40 font-bold min-w-[120px]">Prekės ženklas:</span>
                <span className="text-mahogany italic border-b border-tobacco/30 pb-0.5">{product.brand}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Vertical/Horizontal Tabs Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-t border-sand/40">
           {/* Tab Headers (Reference sidebar-style tabs) */}
           <div className="md:col-span-3 flex flex-row md:flex-col border-b md:border-b-0 md:border-r border-sand/40 bg-vanilla/10 h-fit">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={cn(
                    "flex-1 md:flex-none py-5 px-8 text-[11px] uppercase tracking-[0.25em] font-bold text-left transition-all relative border-b border-sand/20",
                    activeTab === tab.id 
                      ? "text-mahogany bg-white border-r-transparent md:border-r-0" 
                      : "text-mountain/50 hover:bg-white/50"
                  )}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute right-0 top-0 h-full w-[3px] bg-tobacco hidden md:block" />
                  )}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-tobacco md:hidden" />
                  )}
                </button>
              ))}
           </div>

           {/* Tab Content */}
           <div className="md:col-span-9 p-8 md:p-14 bg-white min-h-[400px]">
              {activeTab === "description" && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                   <h2 className="font-serif text-2xl text-mahogany mb-8 border-b border-sand/20 pb-4">Aprašymas</h2>
                   {product.descriptionHtml ? (
                      <div 
                        className="prose prose-sm max-w-none prose-stone prose-headings:font-serif prose-headings:text-mahogany prose-p:text-mountain/80 prose-li:text-mountain/80 leading-loose"
                        dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                      />
                   ) : (
                      <p className="text-mountain/60 italic">Šio produkto aprašymas dar ruošiamas.</p>
                   )}
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center py-12">
                   <h2 className="font-serif text-2xl text-mahogany mb-4">Klientų Atsiliepimai</h2>
                   <p className="text-mountain/50 text-sm italic">Šiuo metu atsiliepimų apie šį produktą nėra.</p>
                </div>
              )}

              {activeTab === "shipping" && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                   <h2 className="font-serif text-2xl text-mahogany mb-8">Pristatymo informacija</h2>
                   <div className="space-y-6 text-sm text-mountain/80 leading-relaxed">
                     <p>Pristatymas visoje Lietuvoje per **Omniva** arba **LP Express** paštomatus.</p>
                     <p>Standartinis pristatymo terminas: **1-3 darbo dienos**.</p>
                     <p>Taip pat galimas nemokamas prekių atsiėmimas vietoje adresu: **Karaliaus Mindaugo pr. 35, Kaunas**.</p>
                   </div>
                </div>
              )}
           </div>
        </div>

      </div>
    </div>
  );
}
