"use client";

import { useState } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setToastMessage(
        isLogin
          ? "Sėkmingai prisijungėte!"
          : "Sėkmingai užsiregistravote! Prašome patikrinti el. paštą."
      );
      setShowToast(true);
      
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#FDFAF5] py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-vanilla to-[#FDFAF5] pointer-events-none" />

      {/* Toast Notification */}
      <div 
        className={`fixed top-24 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 transform ${
          showToast ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-mahogany text-vanilla px-6 py-3 rounded shadow-[0_8px_30px_rgba(88,71,56,0.15)] flex items-center gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sand">
            <path d="M20 6L9 17l-5-5" />
          </svg>
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      </div>

      <div className="max-w-md w-full space-y-8 relative z-10 bg-white/60 backdrop-blur-xl p-8 sm:p-12 border border-sand/40 shadow-[0_8px_30px_rgba(88,71,56,0.06)]">
        
        <div className="text-center">
          <SectionHeading className="mb-2">
            {isLogin ? "Prisijungti" : "Registracija"}
          </SectionHeading>
          <p className="text-sm text-mountain mt-4">
            {isLogin
              ? "Prisijunkite prie savo SkinMatu paskyros"
              : "Sukurkite paskyrą ir gaukite asmenines rekomendacijas"}
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex p-1 bg-vanilla/50 border border-sand/30">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 text-sm font-medium transition-all duration-300 ${
              isLogin 
                ? "bg-white text-mahogany shadow-sm" 
                : "text-mountain hover:text-mahogany"
            }`}
          >
            Prisijungti
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 text-sm font-medium transition-all duration-300 ${
              !isLogin 
                ? "bg-white text-mahogany shadow-sm" 
                : "text-mountain hover:text-mahogany"
            }`}
          >
            Registruotis
          </button>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {!isLogin && (
              <>
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-mahogany/70 uppercase tracking-widest mb-2">
                    Vardas Pavardė
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-sand/60 px-0 py-2 text-mahogany placeholder-mountain/40 focus:border-tobacco focus:outline-none transition-colors"
                    placeholder="Įveskite savo vardą ir pavardę"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-mahogany/70 uppercase tracking-widest mb-2">
                    Telefono numeris
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full bg-transparent border-b border-sand/60 px-0 py-2 text-mahogany placeholder-mountain/40 focus:border-tobacco focus:outline-none transition-colors"
                    placeholder="+370 600 00000"
                  />
                </div>
              </>
            )}

            <div>
              <label htmlFor="email" className="block text-xs font-medium text-mahogany/70 uppercase tracking-widest mb-2">
                El. paštas
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full bg-transparent border-b border-sand/60 px-0 py-2 text-mahogany placeholder-mountain/40 focus:border-tobacco focus:outline-none transition-colors"
                placeholder="vardas@pavyzdys.lt"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-medium text-mahogany/70 uppercase tracking-widest mb-2">
                Slaptažodis
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={isLogin ? "current-password" : "new-password"}
                required
                className="w-full bg-transparent border-b border-sand/60 px-0 py-2 text-mahogany placeholder-mountain/40 focus:border-tobacco focus:outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          {isLogin && (
            <div className="flex items-center justify-end">
              <Link href="#" className="text-xs text-tobacco hover:text-mahogany transition-colors underline underline-offset-4 decoration-tobacco/30">
                Pamiršote slaptažodį?
              </Link>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3.5 bg-mahogany text-vanilla text-xs font-medium tracking-[0.2em] uppercase transition-all duration-400 flex items-center justify-center gap-2 ${
              loading ? "opacity-80 cursor-wait bg-mahogany-light" : "hover:bg-tobacco hover:shadow-[0_8px_20px_rgba(181,158,125,0.3)]"
            }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-vanilla" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Prašome palaukti...
              </>
            ) : isLogin ? (
              "Prisijungti"
            ) : (
              "Registruotis"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
