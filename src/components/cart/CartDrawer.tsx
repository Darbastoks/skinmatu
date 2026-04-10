"use client";

import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { useEffect } from "react";

export function CartDrawer() {
  const { items, removeFromCart, updateQuantity, clearCart, getTotal, isCartOpen, setIsCartOpen } = useCart();

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-mahogany/40 backdrop-blur-sm z-[100] transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-vanilla z-[101] shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-sand/40">
          <h2 className="font-serif text-xl text-mahogany">
            Krepšelis
            <span className="text-sm font-sans text-mountain ml-2">
              ({items.length} {items.length === 1 ? "prekė" : "prekės"})
            </span>
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-mountain hover:text-mahogany transition-colors"
            aria-label="Uždaryti krepšelį"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sand mb-4">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
              </svg>
              <p className="text-mountain text-sm mb-1">Krepšelis tuščias</p>
              <p className="text-mountain/60 text-xs">Pridėkite produktų iš katalogo</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-6 text-sm text-tobacco hover:text-mahogany transition-colors underline underline-offset-4"
              >
                Tęsti apsipirkimą
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 bg-white/60 border border-sand/20"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 flex-shrink-0 bg-white overflow-hidden">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-mountain uppercase tracking-wider mb-0.5">{item.product.brand}</p>
                    <h4 className="text-xs font-medium text-mahogany leading-snug line-clamp-2 mb-2">
                      {item.product.name}
                    </h4>

                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-sand/40">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-mountain hover:text-mahogany hover:bg-sand/20 transition-colors text-sm"
                        >
                          −
                        </button>
                        <span className="w-8 h-7 flex items-center justify-center text-xs font-medium text-mahogany border-x border-sand/40">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-mountain hover:text-mahogany hover:bg-sand/20 transition-colors text-sm"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        {item.product.price ? (
                          <span className="font-serif italic text-sm font-bold text-mahogany">
                            {formatPrice(item.product.price * item.quantity)}
                          </span>
                        ) : (
                          <span className="text-xs text-mountain italic">Kaina po konsultacijos</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="self-start text-mountain/40 hover:text-red-500 transition-colors"
                    aria-label="Pašalinti"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-sand/40 bg-white/40">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-mountain">Iš viso:</span>
              <span className="font-serif italic text-xl font-bold text-mahogany">
                {formatPrice(getTotal())}
              </span>
            </div>

            <Link
              href="/atsiskaitymas"
              onClick={() => setIsCartOpen(false)}
              className="block w-full py-3 bg-tobacco text-vanilla text-center text-sm font-medium uppercase tracking-wider hover:bg-mahogany transition-colors duration-400"
            >
              Apmokėti
            </Link>

            <button
              onClick={clearCart}
              className="block w-full mt-2 py-2 text-xs text-mountain hover:text-red-500 transition-colors text-center"
            >
              Išvalyti krepšelį
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
