"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { mainNav } from "@/data/navigation";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";
import { CartIcon } from "@/components/cart/CartIcon";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollDir, scrollY } = useScrollDirection();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  if (pathname?.startsWith("/admin")) return null;

  const isScrolled = scrollY > 50;
  const isHidden = scrollDir === "down" && scrollY > 300;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-[#FDFAF5]/95 backdrop-blur-xl shadow-[0_1px_20px_rgba(88,71,56,0.06)]"
            : "bg-[#FDFAF5]",
          isHidden && "-translate-y-full"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <span className="font-serif text-xl md:text-2xl font-bold tracking-[0.2em] uppercase text-mahogany group-hover:text-tobacco transition-colors duration-500">
                SkinMatu
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {mainNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[11px] font-medium tracking-[0.15em] uppercase text-mahogany/70 hover:text-tobacco transition-colors duration-400 link-underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side: Cart + Auth + Hamburger */}
            <div className="flex items-center gap-2">
              <div className="[&_button]:text-mahogany/70 [&_button]:hover:text-tobacco [&_span]:bg-tobacco [&_span]:text-vanilla">
                <CartIcon />
              </div>

              <Link
                href="/prisijungti"
                className="hidden md:inline-flex items-center px-5 py-2.5 border border-mahogany/20 text-mahogany text-[10px] font-medium tracking-[0.15em] uppercase hover:bg-mahogany hover:text-vanilla transition-all duration-400"
              >
                Prisijungti
              </Link>

              <Link
                href="/kontaktai"
                className="hidden md:inline-flex items-center px-7 py-3 bg-mahogany text-vanilla text-[10px] font-medium tracking-[0.2em] uppercase hover:bg-mahogany-light transition-all duration-400 shimmer-hover"
              >
                Registracija
              </Link>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden w-10 h-10 flex items-center justify-center"
                aria-label="Atidaryti meniu"
              >
                <div className="space-y-1.5">
                  <span className="block w-6 h-[1.5px] bg-mahogany transition-all duration-300" />
                  <span className="block w-6 h-[1.5px] bg-mahogany transition-all duration-300" />
                  <span className="block w-4 h-[1.5px] bg-mahogany transition-all duration-300" />
                </div>
              </button>

              {/* Desktop hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className="hidden lg:flex w-12 h-12 bg-mahogany text-vanilla items-center justify-center hover:bg-tobacco transition-colors duration-400"
                aria-label="Meniu"
              >
                <div className="space-y-1.5">
                  <span className="block w-5 h-[1.5px] bg-vanilla" />
                  <span className="block w-5 h-[1.5px] bg-vanilla" />
                  <span className="block w-3.5 h-[1.5px] bg-vanilla" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Subtle bottom border */}
        <div className={cn(
          "h-[1px] bg-gradient-to-r from-transparent via-tobacco/20 to-transparent transition-opacity duration-500",
          isScrolled ? "opacity-100" : "opacity-0"
        )} />
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Spacer */}
      <div className="h-20 lg:h-24" />
    </>
  );
}
