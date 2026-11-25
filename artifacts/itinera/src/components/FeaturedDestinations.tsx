import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "wouter";
import { ITINERARIES } from "@/data/itineraries";

interface Destination {
  id: string;
  name: string;
  tagline: string;
}

const destinations: Destination[] = [
  {
    id: "kyoto",
    name: "Kyoto, Japan",
    tagline: "Where ancient tradition meets quiet elegance.",
  },
  {
    id: "amalfi",
    name: "Amalfi Coast, Italy",
    tagline: "Cliffside romance and Mediterranean hues.",
  },
  {
    id: "morocco",
    name: "Marrakech, Morocco",
    tagline: "A labyrinth of rich textures and deep shadows.",
  },
  {
    id: "cappadocia",
    name: "Cappadocia, Türkiye",
    tagline: "Hot air balloons over a dreamscape carved from ancient rock.",
  },
  {
    id: "rajasthan",
    name: "Rajasthan, India",
    tagline: "Royal palaces, blazing colour, and the soul of old India.",
  },
  {
    id: "patagonia",
    name: "Patagonia, Chile",
    tagline: "The wild edge of the world.",
  },
];

export function FeaturedDestinations() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleFlip = (i: number) => {
    setFlippedCards((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <div id="destinations" className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {destinations.map((dest, i) => {
            const itinerary = ITINERARIES.find((trip) => trip.id === dest.id);
            if (!itinerary) return null;

            const isFlipped = flippedCards.has(i);

            return (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.1 }}
                className="flip-card h-[400px] cursor-pointer rounded-xl lg:h-[420px]"
                onMouseEnter={() => {
                  if (window.matchMedia("(hover: hover)").matches) {
                    setFlippedCards((prev) => new Set(prev).add(i));
                  }
                }}
                onMouseLeave={() => {
                  if (window.matchMedia("(hover: hover)").matches) {
                    setFlippedCards((prev) => { const next = new Set(prev); next.delete(i); return next; });
                  }
                }}
                data-testid={`card-destination-${dest.id}`}
              >
                <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
                  <div className="flip-card-front rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${itinerary.coverImage})` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                      <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">{dest.name}</h3>
                      <p className="text-white/80 mb-4 font-light max-w-sm">{dest.tagline}</p>
                      <button
                        type="button"
                        onClick={() => toggleFlip(i)}
                        className="inline-flex items-center gap-1.5 text-xs text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        aria-label={`Preview highlights for ${dest.name}`}
                      >
                        <span>Flip for itinerary highlights</span>
                        <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div
                    className="flip-card-back rounded-xl"
                    style={{ background: "linear-gradient(135deg, hsl(330 60% 9%) 0%, hsl(330 55% 13%) 100%)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <div className="absolute inset-0 bg-cover bg-center opacity-10 rounded-xl" style={{ backgroundImage: `url(${itinerary.coverImage})` }} />
                    <div className="absolute inset-0 flex flex-col overflow-y-auto p-6 sm:p-8">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-primary text-sm font-medium tracking-wide uppercase">{itinerary.duration.replace(/ Days?$/, "-Day")} Highlights</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-serif text-white mb-6">{dest.name}</h3>
                        <ul className="space-y-3">
                          {itinerary.highlights.map((h, j) => (
                            <li key={j} className="flex items-start gap-3 text-white/75 text-sm font-light">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 flex items-center justify-between gap-4">
                          <Link href={`/itinerary/${dest.id}`}>
                            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                              View full itinerary
                              <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </span>
                          </Link>
                          <button
                            type="button"
                            onClick={() => toggleFlip(i)}
                            className="text-xs text-white/55 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            aria-label={`Return to ${dest.name} photo`}
                          >
                            Back to photo
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
    </div>
  );
}
