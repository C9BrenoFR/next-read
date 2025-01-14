import Carousel from "@/components/public/landing_page/carousel";
import HeroSection from "@/components/public/landing_page/hero_section";
import { Products } from "@/components/public/landing_page/products";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Carousel />
      <Products />
    </div>
  );
}
