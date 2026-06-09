import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { LunchSection } from "../components/LunchSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection  />
      <LunchSection />
      <ContactSection />
      <Footer />
    </>
  );
}