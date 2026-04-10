"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-vanilla via-sand/20 to-vanilla">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Marble placeholder */}
          <div className="aspect-[4/3] bg-gradient-to-br from-sand/30 via-vanilla to-tobacco/10 flex items-center justify-center">
            <span className="text-mountain text-sm tracking-wider">Marble texture</span>
          </div>

          {/* Form */}
          <AnimateOnScroll>
            <div>
              <div className="elegant-divider mb-8" />
              <h2 className="font-serif italic font-bold text-3xl md:text-4xl mb-3 text-mahogany">
                Grožis neatsiranda iš niekur.
              </h2>
              <p className="text-tobacco font-serif italic text-xl mb-8">
                Jis ateina pas tuos, kurie imasi veiksmo...
              </p>
              <p className="text-mahogany/45 text-sm mb-8">
                Registruokis ir būk pirmoji
              </p>

              {submitted ? (
                <div className="bg-tobacco/10 text-tobacco p-5 text-sm border border-tobacco/20">
                  Ačiū! Sėkmingai užsiregistravote.
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <input
                    type="text"
                    placeholder="Vardas *"
                    required
                    className="w-full border-b border-sand bg-transparent py-3 text-sm text-mahogany placeholder:text-mountain/50 focus:border-tobacco focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="El. paštas *"
                    required
                    className="w-full border-b border-sand bg-transparent py-3 text-sm text-mahogany placeholder:text-mountain/50 focus:border-tobacco focus:outline-none transition-colors"
                  />
                  <label className="flex items-start gap-3 text-[12px] text-mahogany/40 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="mt-0.5 accent-tobacco"
                    />
                    <span>
                      Sutinku gauti naujienas, pasiūlymus ir atnaujinimus el. paštu. *
                    </span>
                  </label>
                  <Button type="submit" variant="dark" className="mt-6">
                    Noriu šios privilegijos!
                  </Button>
                </form>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
