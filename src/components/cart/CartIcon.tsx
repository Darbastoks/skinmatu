"use client";

import { useCart } from "@/context/CartContext";

export function CartIcon() {
  const { getItemCount, setIsCartOpen } = useCart();
  const count = getItemCount();

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="relative p-2 text-vanilla/80 hover:text-vanilla transition-colors"
      aria-label={`Krepšelis (${count} prekės)`}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
      </svg>
      {count > 0 && (
        <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-tobacco text-vanilla text-[10px] font-bold rounded-full flex items-center justify-center">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </button>
  );
}
