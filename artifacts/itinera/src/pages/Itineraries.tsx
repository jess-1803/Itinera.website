import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Clock, Compass, Search, SlidersHorizontal } from "lucide-react";
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
  const [search, setSearch] = useState("");
  const [duration, setDuration] = useState("all");
  const [style, setStyle] = useState("all");
  const durations = [...new Set(ITINERARIES.map((itinerary) => itinerary.duration))].sort(
    (a, b) => Number.parseInt(a, 10) - Number.parseInt(b, 10),
  );
  const styles = [...new Set(ITINERARIES.map((itinerary) => itinerary.style))].sort();
  const filteredItineraries = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();
    return ITINERARIES.filter((itinerary) => {
      const matchesSearch = !query || [
        itinerary.title,
        itinerary.subtitle,
        itinerary.duration,
        itinerary.style,
        itinerary.bestTime,
        itinerary.groupSize,
      ].some((value) => value.toLocaleLowerCase().includes(query));
      return matchesSearch
        && (duration === "all" || itinerary.duration === duration)
        && (style === "all" || itinerary.style === style);
    });
  }, [duration, search, style]);
  const hasActiveFilters = search.trim().length > 0 || duration !== "all" || style !== "all";

  const clearFilters = () => {
    setSearch("");
    setDuration("all");
    setStyle("all");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navigation />

      {/* Header */}
      <section className="relative overflow-hidden pb-14 pt-32 md:pb-24 md:pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-background pointer-events-none" />
        <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <Link href="/">
            <span className="group mb-8 inline-flex cursor-pointer items-center text-sm text-foreground/60 transition-colors hover:text-primary md:mb-12">
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to home
            </span>
          </Link>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-6 block">
              AI-Crafted Journeys
            </span>
            <h1 className="mb-6 text-4xl font-serif font-light leading-[1.1] text-foreground md:text-7xl">
              A taste of what you <br className="hidden md:block" />
              <span className="italic text-primary">can create with us.</span>
            </h1>
            <p className="text-foreground/60 text-xl font-light max-w-2xl leading-relaxed">
              Browse every journey, then narrow the list by destination, travel style, or trip length to find one that feels like yours.
            </p>
            <p className="mt-5 text-sm text-foreground/45" aria-live="polite">
              {ITINERARIES.length} thoughtfully designed itineraries to explore
            </p>
          </motion.div>
        </div>
      </section>

      {/* Itinerary grid */}
      <section className="pb-32" aria-label="Browse itineraries">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
            <div className="mb-5 flex items-center gap-2 text-sm font-medium text-foreground/80">
              <SlidersHorizontal aria-hidden="true" className="h-4 w-4 text-primary" />
              Find your kind of trip
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)]">
              <div>
                <label htmlFor="itinerary-search" className="mb-2 block text-xs font-medium text-foreground/60">Search destinations</label>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-background/70 px-4 focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/20">
                  <Search aria-hidden="true" className="h-4 w-4 shrink-0 text-foreground/45" />
                  <input
                    id="itinerary-search"
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Try Paris, coast, culture…"
                    className="min-h-12 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-foreground/35"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="itinerary-duration" className="mb-2 block text-xs font-medium text-foreground/60">Trip length</label>
                <select
                  id="itinerary-duration"
                  value={duration}
                  onChange={(event) => setDuration(event.target.value)}
                  className="min-h-12 w-full rounded-xl border border-white/10 bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                >
                  <option value="all">Any duration</option>
                  {durations.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="itinerary-style" className="mb-2 block text-xs font-medium text-foreground/60">Travel style</label>
                <select
                  id="itinerary-style"
                  value={style}
                  onChange={(event) => setStyle(event.target.value)}
                  className="min-h-12 w-full rounded-xl border border-white/10 bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                >
                  <option value="all">Any travel style</option>
                  {styles.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
              <p className="text-sm text-foreground/55" aria-live="polite" aria-atomic="true">
                Showing <span className="font-medium text-foreground">{filteredItineraries.length}</span> of {ITINERARIES.length} itineraries
              </p>
              {hasActiveFilters && (
                <button type="button" onClick={clearFilters} className="rounded-md text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {filteredItineraries.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {filteredItineraries.map((it, i) => (
              <motion.div
                key={it.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
              >
                <Link href={`/itinerary/${it.id}`} aria-label={`View ${it.title}, ${it.duration}`} className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background">
                  <div className="glass-card overflow-hidden rounded-2xl transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-[0_0_40px_rgba(232,25,106,0.1)]">
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
          ) : (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center" role="status">
              <Search aria-hidden="true" className="mx-auto mb-4 h-8 w-8 text-primary/80" />
              <h2 className="font-serif text-2xl text-foreground">No trips found</h2>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-foreground/60">
                Try a different destination or clear your filters to see every itinerary.
              </p>
              <button type="button" onClick={clearFilters} className="mt-6 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                Clear filters
              </button>
            </div>
          )}

          {/* Bottom CTA */}
          {filteredItineraries.length > 0 && (
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
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
