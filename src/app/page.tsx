import AboutSection from "@/components/sections/about";
import HeroSection from "@/components/sections/hero";
import Nav from "@/components/sections/nav";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <main className="font-montserrat scroll-smooth w-full">
      <Nav />
      <HeroSection />
      <AboutSection />
      <Services />
    </main>
  );
}
