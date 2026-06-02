import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import kyotoImg from "../assets/destinations/kyoto.png";
import amalfiImg from "../assets/destinations/amalfi.png";
import moroccoImg from "../assets/destinations/morocco.png";
import patagoniaImg from "../assets/destinations/patagonia.png";

const CAPPADOCIA_URL = "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?q=80&w=1600&auto=format&fit=crop";
const RAJASTHAN_URL = "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1600&auto=format&fit=crop";

const DESTINATIONS = [
  {
    name: "Kyoto, Japan",
    region: "East Asia",
    tagline: "Where ancient tradition meets quiet elegance.",
    image: kyotoImg,
    bestTime: "March – May, Oct – Nov",
    highlights: ["Fushimi Inari", "Arashiyama", "Gion tea ceremony", "Nishiki Market"],
  },
  {
    name: "Amalfi Coast, Italy",
    region: "Mediterranean",
    tagline: "Cliffside romance and Mediterranean hues.",
    image: amalfiImg,
    bestTime: "May – June, Sept",
    highlights: ["Positano", "Path of the Gods", "Ravello", "Amalfi town"],
  },
  {
    name: "Marrakech, Morocco",
    region: "North Africa",
    tagline: "A labyrinth of rich textures and deep shadows.",
    image: moroccoImg,
    bestTime: "Oct – April",
    highlights: ["Medina souks", "Atlas Mountains", "Majorelle Garden", "Traditional riads"],
  },
  {
    name: "Cappadocia, Turkey",
    region: "Middle East",
    tagline: "Hot air balloons over a dreamscape carved from ancient rock.",
    image: CAPPADOCIA_URL,
    bestTime: "April – June, Sept – Nov",
    highlights: ["Balloon flights at dawn", "Cave hotels", "Derinkuyu underground city", "Göreme Valley"],
  },
  {
    name: "Rajasthan, India",
    region: "South Asia",
    tagline: "Royal palaces, blazing colour, and the soul of old India.",
    image: RAJASTHAN_URL,
    bestTime: "Oct – March",
    highlights: ["Amber Fort", "Jodhpur blue city", "Thar Desert", "Udaipur lake palaces"],
  },
  {
    name: "Patagonia, Chile",
    region: "South America",
    tagline: "The wild edge of the world.",
    image: patagoniaImg,
    bestTime: "Nov – March",
    highlights: ["Torres del Paine", "Grey Glacier", "Puma tracking", "Estancia stays"],
  },
];

const REGIONS = ["All", "East Asia", "Mediterranean", "North Africa", "Middle East", "South Asia", "South America"];

export default function Destinations() {
  const [activeRegion, setActiveRegion] = useState("All");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const filtered = activeRegion === "All" ? DESTINATIONS : DESTINATIONS.filter((d) => d.region === activeRegion);

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navigation />

      {/* Header */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-background pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <Link href="/">
            <span className="inline-flex items-center text-foreground/60 hover:text-primary transition-colors text-sm mb-12 cursor-pointer group">
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to home
            </span>
          </Link>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-6 block">Curated Escapes</span>
            <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-[1.1] mb-6 font-light">
              Destinations that <br />
              <span className="italic text-primary">inspire.</span>
            </h1>
            <p className="text-foreground/60 text-xl font-light max-w-xl leading-relaxed">
              Every place here has been selected for a reason. Hover a card to see why it's worth the flight.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <div className="container mx-auto px-6 max-w-5xl mb-12">
        <div className="flex gap-2 flex-wrap">
          {REGIONS.map((r) => (
            <button
              key={r}
              onClick={() => setActiveRegion(r)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeRegion === r
                  ? "bg-primary text-white shadow-[0_0_20px_rgba(232,25,106,0.3)]"
                  : "bg-card border border-white/10 text-foreground/70 hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((dest, i) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className="group cursor-pointer rounded-2xl overflow-hidden relative"
                style={{ border: "1px solid rgba(255,255,255,0.08)", aspectRatio: "3/4" }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${dest.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-3 h-3 text-primary" />
                    <span className="text-primary text-xs font-medium tracking-widest uppercase">{dest.region}</span>
                  </div>
                  <h3 className="text-xl font-serif text-white mb-2">{dest.name}</h3>
                  <p className="text-white/70 text-sm font-light leading-relaxed mb-4">{dest.tagline}</p>

                  {/* Highlights — visible on hover */}
                  <div className={`overflow-hidden transition-all duration-500 ${hoveredIdx === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                    <ul className="space-y-1.5 mb-4">
                      {dest.highlights.map((h, j) => (
                        <li key={j} className="flex items-center gap-2 text-white/65 text-xs font-light">
                          <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <p className="text-foreground/40 text-xs">Best time: {dest.bestTime}</p>
                  </div>

                  <Link href="/">
                    <span
                      onClick={() => setTimeout(() => document.getElementById("ai-planning")?.scrollIntoView({ behavior: "smooth" }), 100)}
                      className="flex items-center text-primary text-sm font-medium hover:text-primary/80 transition-colors group/btn mt-2"
                    >
                      Plan this trip
                      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover/btn:translate-x-1" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
