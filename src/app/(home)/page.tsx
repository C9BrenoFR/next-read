import Carousel from "@/components/landing_page/carousel";
import HeroSection from "@/components/landing_page/hero_section";
import Products from "@/components/landing_page/products";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Carousel />
      <Products />
    </div>
  );
}
