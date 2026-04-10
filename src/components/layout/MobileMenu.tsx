"use client";

import Link from "next/link";
import { useEffect } from "react";
import { mainNav } from "@/data/navigation";
import { CONTACT } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-mahogany/40 backdrop-blur-sm transition-opacity duration-400",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-[#FDFAF5] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Close button */}
          <div className="flex items-center justify-between p-6 border-b border-sand/40">
            <span className="font-serif text-xl font-bold tracking-[0.2em] uppercase text-mahogany">
              SkinMatu
            </span>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center text-mahogany hover:text-tobacco transition-colors"
              aria-label="Uždaryti meniu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 px-6 py-8 overflow-y-auto">
            <ul className="space-y-1">
              {mainNav.map((link, i) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block py-4 text-lg font-serif italic text-mahogany hover:text-tobacco transition-colors border-b border-sand/30"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom section */}
          <div className="p-6 border-t border-sand/40 bg-vanilla/50">
            <div className="space-y-2 text-sm text-mahogany/60">
              <p>{CONTACT.phone}</p>
              <p>{CONTACT.email}</p>
              <p>{CONTACT.hours}</p>
            </div>
            <Link
              href="/kontaktai"
              onClick={onClose}
              className="mt-4 block w-full text-center px-6 py-3.5 bg-mahogany text-vanilla text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-tobacco transition-colors shimmer-hover"
            >
              Registracija vizitui
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
