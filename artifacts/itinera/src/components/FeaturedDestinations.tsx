import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import kyotoImg from "../assets/destinations/kyoto.png";
import amalfiImg from "../assets/destinations/amalfi.png";
import moroccoImg from "../assets/destinations/morocco.png";
import icelandImg from "../assets/destinations/iceland.png";
import baliImg from "../assets/destinations/bali.png";
import patagoniaImg from "../assets/destinations/patagonia.png";

interface DestinationItinerary {
  days: string;
  highlights: string[];
}

interface Destination {
  name: string;
  tagline: string;
  image: string;
  size: string;
  itinerary: DestinationItinerary;
}

const destinations: Destination[] = [
  {
    name: "Kyoto, Japan",
    tagline: "Where ancient tradition meets quiet elegance.",
    image: kyotoImg,
    size: "large",
    itinerary: {
      days: "5-Day Highlights",
      highlights: [
        "Dawn at Fushimi Inari before the crowds",
        "Arashiyama bamboo grove at sunrise",
        "Private tea ceremony in Gion",
        "Nishiki Market food walk",
        "Hidden temples of Higashiyama",
      ],
    },
  },
  {
    name: "Amalfi Coast, Italy",
    tagline: "Cliffside romance and Mediterranean hues.",
    image: amalfiImg,
    size: "small",
    itinerary: {
      days: "4-Day Highlights",
      highlights: [
        "Positano arrival by private boat",
        "Coastal hiking the Path of the Gods",
        "Ravello gardens and villa tour",
        "Sunset dinner in Amalfi town",
      ],
    },
  },
  {
    name: "Marrakech, Morocco",
    tagline: "A labyrinth of rich textures and deep shadows.",
    image: moroccoImg,
    size: "medium",
    itinerary: {
      days: "4-Day Highlights",
      highlights: [
        "Medina exploration with a local guide",
        "Atlas Mountains day trip",
        "Traditional cooking class",
        "Majorelle Garden at golden hour",
      ],
    },
  },
  {
    name: "Reykjavik, Iceland",
    tagline: "Dramatic landscapes carved by fire and ice.",
    image: icelandImg,
    size: "small",
    itinerary: {
      days: "4-Day Highlights",
      highlights: [
        "Golden Circle in a private vehicle",
        "Blue Lagoon geothermal spa",
        "Northern Lights night tour",
        "South Coast waterfalls & black sand",
      ],
    },
  },
  {
    name: "Ubud, Bali",
    tagline: "Lush sanctuaries wrapped in morning mist.",
    image: baliImg,
    size: "medium",
    itinerary: {
      days: "5-Day Highlights",
      highlights: [
        "Rice terrace walks at dawn",
        "Pura Tirta Empul temple purification",
        "Mount Batur sunrise hike",
        "Sound bath and jungle spa day",
        "Cooking class with a local family",
      ],
    },
  },
  {
    name: "Patagonia, Chile",
    tagline: "The wild edge of the world.",
    image: patagoniaImg,
    size: "large",
    itinerary: {
      days: "6-Day Highlights",
      highlights: [
        "Torres del Paine full circuit trek",
        "Grey Glacier boat expedition",
        "Puma tracking with a wildlife guide",
        "Valle de la Luna at sunset",
        "Stargazing in the Atacama",
        "Estancia stay — gaucho culture",
      ],
    },
  },
];

export function FeaturedDestinations() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleFlip = (i: number) => {
    setFlippedCards((prev) => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }
      return next;
    });
  };

  return (
    <section id="discover" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
        >
          <div className="max-w-2xl">
            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
              Curated Escapes
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
              Destinations that <span className="italic">inspire.</span>
            </h2>
          </div>
          <div className="flex flex-col items-end gap-2">
            <button className="flex items-center text-foreground/80 hover:text-primary transition-colors group pb-2">
              <span className="mr-3 font-medium">View all destinations</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="text-muted-foreground text-xs">Hover a card to reveal the itinerary</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-min">
          {destinations.map((dest, i) => {
            let spanClass = "md:col-span-12";
            let heightClass = "h-[400px] md:h-[600px]";

            if (i === 0) { spanClass = "md:col-span-8"; heightClass = "h-[400px] md:h-[700px]"; }
            else if (i === 1) { spanClass = "md:col-span-4"; heightClass = "h-[300px] md:h-[400px]"; }
            else if (i === 2) { spanClass = "md:col-span-5"; heightClass = "h-[400px] md:h-[600px]"; }
            else if (i === 3) { spanClass = "md:col-span-7"; heightClass = "h-[300px] md:h-[500px]"; }
            else if (i === 4) { spanClass = "md:col-span-6"; heightClass = "h-[400px] md:h-[600px]"; }
            else if (i === 5) { spanClass = "md:col-span-6"; heightClass = "h-[400px] md:h-[600px]"; }

            const isFlipped = flippedCards.has(i);

            return (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`${spanClass} ${heightClass} flip-card rounded-xl cursor-pointer`}
                onMouseEnter={() => setFlippedCards((prev) => new Set(prev).add(i))}
                onMouseLeave={() => setFlippedCards((prev) => {
                  const next = new Set(prev);
                  next.delete(i);
                  return next;
                })}
                onClick={() => toggleFlip(i)}
                data-testid={`card-destination-${i}`}
              >
                <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
                  {/* FRONT — destination photo */}
                  <div className="flip-card-front rounded-xl overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${dest.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">{dest.name}</h3>
                      <p className="text-white/80 mb-4 font-light max-w-sm">{dest.tagline}</p>
                      <div className="flex items-center text-white/50 text-xs gap-1.5">
                        <span>Hover to reveal itinerary</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>

                  {/* BACK — quick itinerary */}
                  <div
                    className="flip-card-back rounded-xl"
                    style={{
                      background: "linear-gradient(135deg, hsl(330 60% 9%) 0%, hsl(330 55% 13%) 100%)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {/* faint background image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-10 rounded-xl"
                      style={{ backgroundImage: `url(${dest.image})` }}
                    />
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-primary text-sm font-medium tracking-wide uppercase">
                            {dest.itinerary.days}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-serif text-white mb-6">{dest.name}</h3>
                        <ul className="space-y-3">
                          {dest.itinerary.highlights.map((h, j) => (
                            <li key={j} className="flex items-start gap-3 text-white/75 text-sm font-light">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button className="flex items-center text-primary text-sm font-medium hover:text-primary/80 transition-colors group mt-6">
                        <Clock className="w-4 h-4 mr-2" />
                        Build full itinerary with AI
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
