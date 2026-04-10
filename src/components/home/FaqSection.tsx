"use client";

import { useState } from "react";
import { faqData } from "@/data/faq";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { ArrowLink } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-vanilla/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            subtitle="Čia galite rasti atsakymus į dažniausiai mūsų klientų užduodamus klausimus"
            align="center"
          >
            D.U.K.
          </SectionHeading>
        </AnimateOnScroll>

        <div className="mt-10">
          {faqData.slice(0, 5).map((item, i) => (
            <AccordionItem
              key={i}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div className="mt-10">
          <ArrowLink href="/kontaktai">Turi kitų klausimų?</ArrowLink>
        </div>
      </div>
    </section>
  );
}
