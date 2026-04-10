"use client";

import { Product } from "@/types";
import { formatPrice, formatOldPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const isExternal = product.image.startsWith("http");

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link 
      href={`/preke/${product.id}`}
      className="group bg-vanilla/30 border border-sand/30 hover:border-tobacco/20 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(88,71,56,0.08)] flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-white">
        <div className="aspect-square w-full">
          {isExternal ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-vanilla to-sand/30">
              <span className="text-xs text-mountain/50 text-center px-4">{product.name}</span>
            </div>
          )}
        </div>
        {product.oldPrice && (
          <span className="absolute top-3 left-3 bg-mountain text-vanilla text-[10px] font-bold px-2.5 py-1 uppercase tracking-[0.1em]">
            −20%
          </span>
        )}
        {product.featured && !product.oldPrice && (
          <span className="absolute top-3 left-3 bg-tobacco text-vanilla text-[10px] font-bold px-2.5 py-1 uppercase tracking-[0.1em]">
            Rekomenduojama
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-[10px] text-mountain uppercase tracking-[0.15em] mb-1.5">
          {product.brand}
        </p>
        <h3 className="text-sm font-medium text-mahogany leading-snug mb-3 min-h-[2.5rem] group-hover:text-tobacco transition-colors duration-400">
          {product.name}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {product.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-mountain bg-vanilla px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price + Add to Cart */}
        <div className="mt-auto">
          <div className="flex items-center gap-2 mb-3">
            {product.price !== null ? (
              <>
                <span className="font-serif italic text-lg font-bold text-mahogany">
                  {formatPrice(product.price)}
                </span>
                {product.oldPrice && (
                  <span className="text-sm text-mountain line-through">
                    {formatOldPrice(product.oldPrice)}
                  </span>
                )}
              </>
            ) : (
              <span className="text-xs text-tobacco italic font-medium">Kaina po konsultacijos</span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className={`w-full py-2.5 text-xs font-medium uppercase tracking-wider transition-all duration-400 ${
              added
                ? "bg-green-600 text-white shadow-[0_4px_12px_rgba(22,163,74,0.2)]"
                : "bg-tobacco/10 text-tobacco hover:bg-tobacco hover:text-vanilla border border-tobacco/50 hover:shadow-[0_4px_12px_rgba(181,158,125,0.2)]"
            }`}
          >
            {added ? "✓ Pridėta!" : "Į krepšelį"}
          </button>
        </div>
      </div>
    </Link>
  );
}
