"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav, footerNav } from "@/data/navigation";
import { CONTACT } from "@/lib/utils";

export function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;
  return (
    <footer className="bg-mahogany text-vanilla">
      {/* Decorative top line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-tobacco/40 to-transparent" />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* Column 1: Logo + CTAs */}
          <div>
            <span className="font-serif text-3xl font-bold tracking-[0.15em] uppercase block mb-2">
              SkinMatu
            </span>
            <div className="elegant-divider mb-6" />
            <p className="text-vanilla/50 text-sm leading-relaxed mb-10">
              Daugiau nei 20 metų kasdienės patirties dirbant tarp serumų,
              rūgščių, inovatyvių technologijų ir tikrų žmonių istorijų.
            </p>
            <div className="space-y-3">
              <Link
                href="/kontaktai"
                className="block w-fit px-8 py-3.5 bg-tobacco text-vanilla text-[10px] font-medium tracking-[0.2em] uppercase hover:bg-tobacco-dark transition-colors shimmer-hover"
              >
                Registracija vizitui
              </Link>
              <Link
                href="/paslaugos"
                className="block w-fit px-8 py-3.5 border border-tobacco/40 text-tobacco-light text-[10px] font-medium tracking-[0.2em] uppercase hover:bg-tobacco hover:text-vanilla transition-all duration-400"
              >
                Žiūrėti paslaugas
              </Link>
            </div>
          </div>

          {/* Column 2: Kontaktai */}
          <div>
            <h3 className="font-serif italic text-2xl mb-8 text-vanilla">Kontaktai</h3>
            <div className="space-y-5 text-sm">
              <div>
                <span className="text-vanilla/30 uppercase text-[10px] tracking-[0.15em] block mb-1.5">
                  Darbo laikas procedūroms:
                </span>
                <span className="text-vanilla/70">{CONTACT.hours}</span>
              </div>
              <div>
                <span className="text-vanilla/30 uppercase text-[10px] tracking-[0.15em] block mb-1.5">
                  Adresas:
                </span>
                <span className="text-vanilla/70">{CONTACT.address}</span>
              </div>
              <div>
                <span className="text-vanilla/30 uppercase text-[10px] tracking-[0.15em] block mb-1.5">
                  Kontaktai:
                </span>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="text-vanilla/70 hover:text-tobacco transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-vanilla/70 hover:text-tobacco transition-colors"
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Social */}
          <div>
            <h3 className="font-serif italic text-2xl mb-8 text-vanilla">
              Socialiniai tinklai
            </h3>
            <div className="space-y-4">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-vanilla/50 hover:text-tobacco transition-colors group"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-vanilla/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] tracking-wider uppercase text-vanilla/30">
              {mainNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-tobacco transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <p className="text-[10px] text-vanilla/25 tracking-wider">
              © 2026. Visos Teisės Saugomos.{" "}
              {footerNav.map((link, i) => (
                <span key={link.href}>
                  {i > 0 && " · "}
                  <Link
                    href={link.href}
                    className="hover:text-tobacco transition-colors"
                  >
                    {link.label}
                  </Link>
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
