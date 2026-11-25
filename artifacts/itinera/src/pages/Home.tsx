import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FeaturedDestinations } from "@/components/FeaturedDestinations";
import { AIPlanning } from "@/components/AIPlanning";
import { TravelInspiration } from "@/components/TravelInspiration";
import { Marketplace } from "@/components/Marketplace";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";

export default function Home() {
  return (
    <main className="bg-background min-h-[100dvh] text-foreground font-sans selection:bg-primary/30">
      <Navigation />
      <Hero />
      <section id="discover" aria-labelledby="journeys-heading" className="relative overflow-hidden bg-background py-20 md:py-28">
        <div className="container mx-auto mb-10 px-6 md:mb-14">
          <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-primary">Explore Itinera</span>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
            <div className="max-w-3xl">
              <h2 id="journeys-heading" className="font-serif text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
                Destinations that inspire. <span className="italic">Itineraries built for your taste.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-foreground/70 md:text-lg">
                Flip a card for a preview, then open the full day-by-day itinerary when you find your next destination.
              </p>
            </div>
            <Link href="/itineraries">
              <span className="group inline-flex shrink-0 cursor-pointer items-center font-medium text-foreground/80 transition-colors hover:text-primary">
                Browse all itineraries
                <span aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </div>
        </div>
        <FeaturedDestinations />
        </section>
      <AIPlanning />
      <Marketplace />
      <TravelInspiration />
      <Newsletter />
      <Footer />
    </main>
  );
}
