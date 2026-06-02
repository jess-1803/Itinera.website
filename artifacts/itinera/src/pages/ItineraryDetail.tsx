import { useEffect } from "react";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Compass, Users, Calendar, MapPin, ChevronRight } from "lucide-react";
import { ITINERARIES } from "@/data/itineraries";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import parisImg from "../assets/itineraries/paris.png";
import tokyoImg from "../assets/itineraries/tokyo.png";
import swissImg from "../assets/itineraries/swiss.png";

const LOCAL_IMAGE_MAP: Record<string, string> = {
  paris: parisImg,
  tokyo: tokyoImg,
  swiss: swissImg,
};

export default function ItineraryDetail() {
  const { id } = useParams<{ id: string }>();
  const itinerary = ITINERARIES.find((it) => it.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!itinerary) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navigation />
        <div className="text-center">
          <h1 className="text-3xl font-serif text-foreground mb-4">Itinerary not found</h1>
          <Link href="/itineraries">
            <button className="text-primary hover:text-primary/80 flex items-center gap-2 mx-auto">
              <ArrowLeft className="w-4 h-4" /> Back to itineraries
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const heroImage = itinerary.coverImage ?? LOCAL_IMAGE_MAP[itinerary.imageKey] ?? parisImg;

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navigation />

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />

        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-12 container mx-auto">
          <Link href="/itineraries">
            <span className="inline-flex items-center text-foreground/70 hover:text-white transition-colors text-sm mb-6 cursor-pointer group">
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to itineraries
            </span>
          </Link>

          <div className="flex items-center gap-2 mb-3 text-primary text-sm font-medium">
            <Compass className="w-4 h-4" />
            {itinerary.style}
            <ChevronRight className="w-4 h-4 text-foreground/30" />
            {itinerary.duration}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif text-foreground leading-tight mb-4"
          >
            {itinerary.title}
          </motion.h1>
          <p className="text-foreground/70 italic text-lg md:text-xl font-light max-w-2xl">
            {itinerary.subtitle}
          </p>
        </div>
      </div>

      {/* Meta strip */}
      <div className="bg-card/50 border-y border-white/5 py-5">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-8 justify-around">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-foreground/40 uppercase tracking-widest">Duration</p>
                <p className="text-foreground font-medium">{itinerary.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Compass className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-foreground/40 uppercase tracking-widest">Style</p>
                <p className="text-foreground font-medium">{itinerary.style}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-foreground/40 uppercase tracking-widest">Best Time</p>
                <p className="text-foreground font-medium">{itinerary.bestTime}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-foreground/40 uppercase tracking-widest">Group Size</p>
                <p className="text-foreground font-medium">{itinerary.groupSize}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container mx-auto px-6 py-20 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Main content */}
          <div className="lg:col-span-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-foreground/70 font-light leading-relaxed mb-16"
            >
              {itinerary.intro}
            </motion.p>

            {/* Days */}
            <div className="space-y-12">
              {itinerary.days.map((day, i) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="relative"
                >
                  <div className="flex items-start gap-6">
                    <div className="shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-sm font-medium">
                        {day.day}
                      </div>
                    </div>
                    <div className="flex-1 pb-12 border-b border-white/5 last:border-0 last:pb-0">
                      <h3 className="text-xl font-serif text-foreground mb-6">{day.title}</h3>
                      <ul className="space-y-5">
                        {day.activities.map((activity, j) => (
                          <li key={j} className="flex items-start gap-4">
                            <span className="text-primary text-xs font-medium w-12 shrink-0 mt-1 font-mono">{activity.time}</span>
                            <span className="text-foreground/70 text-sm font-light leading-relaxed">{activity.description}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <div className="glass-card rounded-2xl p-6 mb-6">
                <h4 className="text-sm font-medium text-foreground mb-5 uppercase tracking-wider">Trip Highlights</h4>
                <ul className="space-y-3">
                  {itinerary.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/70 text-sm font-light">
                      <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h4 className="text-sm font-medium text-foreground mb-3 uppercase tracking-wider">Make it yours</h4>
                <p className="text-foreground/55 text-sm font-light leading-relaxed mb-5">
                  This itinerary is a starting point. Our AI can adapt every detail to your pace, budget, and style.
                </p>
                <Link href="/">
                  <span
                    onClick={() => setTimeout(() => document.getElementById("ai-planning")?.scrollIntoView({ behavior: "smooth" }), 100)}
                    className="block w-full bg-primary hover:bg-primary/90 text-white text-center font-medium py-3 rounded-xl text-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  >
                    Customise with AI
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
