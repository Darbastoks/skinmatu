import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  children,
  subtitle,
  className,
  align = "left",
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10",
        align === "center" && "text-center",
        className
      )}
    >
      <Tag
        className={cn(
          "font-serif italic font-bold tracking-tight text-mahogany",
          Tag === "h1" && "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
          Tag === "h2" && "text-3xl md:text-4xl lg:text-5xl",
          Tag === "h3" && "text-2xl md:text-3xl"
        )}
      >
        {children}
      </Tag>
      {subtitle && (
        <p className={cn(
          "mt-5 text-mahogany/50 max-w-2xl text-base leading-relaxed",
          align === "center" && "mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
