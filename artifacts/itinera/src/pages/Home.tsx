import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FeaturedDestinations } from "@/components/FeaturedDestinations";
import { CuratedItineraries } from "@/components/CuratedItineraries";
import { AIPlanning } from "@/components/AIPlanning";
import { TravelInspiration } from "@/components/TravelInspiration";
import { HowItWorks } from "@/components/HowItWorks";
import { Marketplace } from "@/components/Marketplace";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background min-h-[100dvh] text-foreground font-sans selection:bg-primary/30">
      <Navigation />
      <Hero />
      <FeaturedDestinations />
      <CuratedItineraries />
      <AIPlanning />
      <HowItWorks />
      <Marketplace />
      <TravelInspiration />
      <Newsletter />
      <Footer />
    </main>
  );
}
