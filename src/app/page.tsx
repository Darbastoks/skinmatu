import { HeroSection } from "@/components/home/HeroSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { StatsBar } from "@/components/home/StatsBar";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { SkinQuiz } from "@/components/home/SkinQuiz";
import { ProductCategories } from "@/components/home/ProductCategories";
import { FavoriteProducts } from "@/components/home/FavoriteProducts";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { NewsletterSignup } from "@/components/home/NewsletterSignup";
import { FaqSection } from "@/components/home/FaqSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TestimonialsSection />
      <StatsBar />
      <ServicesOverview />
      <SkinQuiz />
      <ProductCategories />
      <FavoriteProducts />
      <InstagramFeed />
      <NewsletterSignup />
      <FaqSection />
    </>
  );
}
