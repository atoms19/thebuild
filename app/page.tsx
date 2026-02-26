import Navbar from "@/components/Navbar";
import MarketingHero from "@/components/MarketingHero";
import PhilosophySection from "@/components/PhilosophySection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ImageSliderSection from "@/components/ImageSliderSection";
import VisionGrid from "@/components/VisionGrid";
import CollaboratorsSection from "@/components/CollaboratorsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-zinc-900 selection:text-white">
      <Navbar />
      <MarketingHero />
      <CollaboratorsSection />
      <PhilosophySection />
      <WhatWeDoSection />
      <ImageSliderSection />
      <VisionGrid />
      <Footer />
    </main>
  );
}
