"use client";

import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="border-b border-sand/60">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-base md:text-lg font-medium text-mahogany pr-4 group-hover:text-tobacco transition-colors">
          {question}
        </span>
        <span className={cn(
          "w-8 h-8 rounded-full border border-sand flex items-center justify-center flex-shrink-0 transition-all duration-400 group-hover:border-tobacco",
          isOpen && "bg-tobacco border-tobacco rotate-180"
        )}>
          <svg
            className={cn(
              "w-4 h-4 transition-colors",
              isOpen ? "text-vanilla" : "text-mountain"
            )}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>
      <div className={cn("accordion-content", isOpen && "open")}>
        <div>
          <p className="pb-6 text-mahogany/50 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}
