import AboutSection from "@/components/sections/about";
import Footer from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero";
import Nav from "@/components/sections/nav";
import Services from "@/components/sections/services";
import TestimonialsSection from "@/components/sections/testimonials";
import WhyChooseUsSection from "@/components/sections/why-choose-us";

export default function Home() {
  return (
    <main className="font-montserrat scroll-smooth w-full">
      <Nav />
      <HeroSection />
      <AboutSection />
      <Services />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
