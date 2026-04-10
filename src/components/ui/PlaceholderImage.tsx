import Image from "next/image";
import { cn } from "@/lib/utils";

type PlaceholderVariant = "service" | "product" | "hero" | "about" | "gallery" | "marble";

const variantStyles: Record<PlaceholderVariant, string> = {
  service: "from-sand/40 via-vanilla to-sand/60",
  product: "from-vanilla to-sand/40",
  hero: "from-tobacco/10 via-sand/30 to-vanilla",
  about: "from-sand/20 via-vanilla to-mountain/10",
  gallery: "from-sand/30 via-vanilla to-tobacco/10",
  marble: "from-vanilla via-sand/40 to-mountain/10",
};

interface PlaceholderImageProps {
  src?: string;
  alt?: string;
  label?: string;
  variant?: PlaceholderVariant;
  className?: string;
  aspectRatio?: string;
}

export function PlaceholderImage({
  src,
  alt = "",
  label,
  variant = "product",
  className,
  aspectRatio = "aspect-square",
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "bg-gradient-to-br flex items-center justify-center relative overflow-hidden group",
        variantStyles[variant],
        aspectRatio,
        className
      )}
    >
      {/* Subtle texture overlay - only visible as fallback or behind translucent parts */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%224%22%20height%3D%224%22%20viewBox%3D%220%200%204%204%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%222%22%20cy%3D%222%22%20r%3D%220.5%22%20fill%3D%22%23584738%22/%3E%3C/svg%3E')]" />
      
      {src ? (
        <Image
          src={src}
          alt={alt || label || "SkinMatu ir Inga Matusevičienė"}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : label && (
        <span className="text-mountain text-sm font-medium text-center px-4 relative z-10">
          {label}
        </span>
      )}
    </div>
  );
}
