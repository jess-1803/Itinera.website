import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Clock, Compass } from "lucide-react";
import { ITINERARIES } from "@/data/itineraries";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import parisImg from "../assets/itineraries/paris.png";
import tokyoImg from "../assets/itineraries/tokyo.png";
import swissImg from "../assets/itineraries/swiss.png";

const LOCAL_IMAGES: Record<string, string> = {
  paris: parisImg,
  tokyo: tokyoImg,
  swiss: swissImg,
};

function getImage(it: (typeof ITINERARIES)[number]): string {
  return it.coverImage ?? LOCAL_IMAGES[it.imageKey] ?? parisImg;
}

export default function Itineraries() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navigation />

      {/* Header */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-background pointer-events-none" />
        <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <Link href="/">
            <span className="inline-flex items-center text-foreground/60 hover:text-primary transition-colors text-sm mb-12 cursor-pointer group">
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to home
            </span>
          </Link>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-6 block">
              AI-Crafted Journeys
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-[1.1] mb-6 font-light">
              A taste of what you <br />
              <span className="italic text-primary">can create with us.</span>
            </h1>
            <p className="text-foreground/60 text-xl font-light max-w-2xl leading-relaxed">
              Every itinerary here starts with a conversation. Tell us your travel style, and our AI builds something built around you — not the average traveller.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Itinerary grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ITINERARIES.map((it, i) => (
              <motion.div
                key={it.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
              >
                <Link href={`/itinerary/${it.id}`}>
                  <div className="group cursor-pointer glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(232,25,106,0.1)]">
                    {/* Image */}
                    <div className="h-64 relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${getImage(it)})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-foreground flex items-center border border-white/10">
                        <Clock className="w-3 h-3 mr-1.5 text-primary" />
                        {it.duration}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-center text-primary text-sm font-medium mb-3">
                        <Compass className="w-4 h-4 mr-2" />
                        {it.style}
                      </div>
                      <h2 className="text-2xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {it.title}
                      </h2>
                      <p className="text-foreground/55 text-sm font-light leading-relaxed mb-6 line-clamp-2">
                        {it.subtitle}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-white/6">
                        <div className="flex gap-4 text-xs text-foreground/40">
                          <span>{it.bestTime}</span>
                          <span>·</span>
                          <span>{it.groupSize}</span>
                        </div>
                        <span className="flex items-center text-primary text-sm font-medium group/btn">
                          View itinerary
                          <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover/btn:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div
              className="rounded-3xl p-12"
              style={{ background: "linear-gradient(135deg, rgba(60,8,30,0.5), rgba(80,10,40,0.4))", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <h2 className="text-3xl font-serif text-foreground mb-4">
                None of these quite right?
              </h2>
              <p className="text-foreground/60 font-light mb-8 max-w-md mx-auto">
                Every itinerary on this page was built in minutes. Tell our AI where you want to go and it'll build something entirely your own.
              </p>
              <Link href="/">
                <span
                  onClick={() => setTimeout(() => document.getElementById("ai-planning")?.scrollIntoView({ behavior: "smooth" }), 100)}
                  className="inline-block bg-primary hover:bg-primary/90 text-white font-medium px-10 py-4 rounded-full text-sm transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  Start with the AI Planner
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
