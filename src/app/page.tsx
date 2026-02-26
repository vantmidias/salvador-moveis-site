import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Gallery } from "@/components/Gallery";
import { AboutSection } from "@/components/AboutSection";
import { Reviews } from "@/components/Reviews";
import { InstagramSection } from "@/components/InstagramSection";
import { Footer, WhatsAppButton } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <AboutSection />
      <Reviews />
      <InstagramSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
