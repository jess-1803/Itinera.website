import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Compass, Users, Calendar, MapPin, ChevronRight } from "lucide-react";
import { ITINERARIES } from "@/data/itineraries";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import parisImg from "../assets/itineraries/paris.png";
import tokyoImg from "../assets/itineraries/tokyo.png";
import swissImg from "../assets/itineraries/swiss.png";

const IMAGE_MAP: Record<string, string> = {
  paris: parisImg,
  tokyo: tokyoImg,
  swiss: swissImg,
};

export default function ItineraryDetail() {
  const { id } = useParams<{ id: string }>();
  const itinerary = ITINERARIES.find((it) => it.id === id);

  if (!itinerary) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navigation />
        <div className="text-center">
          <h1 className="text-3xl font-serif text-foreground mb-4">Itinerary not found</h1>
          <Link href="/">
            <button className="text-primary hover:text-primary/80 flex items-center gap-2 mx-auto">
              <ArrowLeft className="w-4 h-4" /> Back to home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const heroImage = IMAGE_MAP[itinerary.imageKey] ?? parisImg;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />

        <div className="absolute inset-0 flex flex-col justify-end pb-16 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/#itineraries">
              <button
                data-testid="button-back"
                className="flex items-center text-foreground/70 hover:text-primary transition-colors mb-8 group text-sm"
              >
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to itineraries
              </button>
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-primary text-sm font-medium tracking-widest uppercase">
                {itinerary.style}
              </span>
              <ChevronRight className="w-3 h-3 text-foreground/30" />
              <span className="text-foreground/50 text-sm">{itinerary.duration}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-4 max-w-3xl">
              {itinerary.title}
            </h1>
            <p className="text-white/70 text-lg max-w-2xl font-light italic">
              {itinerary.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Meta strip */}
      <div
        className="border-y border-border"
        style={{ background: "rgba(60, 8, 30, 0.6)", backdropFilter: "blur(20px)" }}
      >
        <div className="container mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Clock, label: "Duration", value: itinerary.duration },
            { icon: Compass, label: "Style", value: itinerary.style },
            { icon: Calendar, label: "Best Time", value: itinerary.bestTime },
            { icon: Users, label: "Group Size", value: itinerary.groupSize },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wider mb-0.5">{label}</p>
                <p className="text-foreground text-sm font-medium">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main — day by day */}
          <div className="lg:col-span-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-foreground/80 text-lg font-light leading-relaxed mb-16"
            >
              {itinerary.intro}
            </motion.p>

            <h2 className="text-3xl font-serif text-foreground mb-10">
              Day by <span className="italic">Day</span>
            </h2>

            <div className="space-y-10">
              {itinerary.days.map((day, i) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="relative pl-8"
                  data-testid={`section-day-${day.day}`}
                >
                  {/* Timeline line */}
                  {i < itinerary.days.length - 1 && (
                    <div className="absolute left-[11px] top-10 bottom-[-40px] w-px bg-gradient-to-b from-primary/30 to-transparent" />
                  )}

                  {/* Day dot */}
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                    <span className="text-primary text-[10px] font-bold">{day.day}</span>
                  </div>

                  <div
                    className="rounded-xl p-6"
                    style={{
                      background: "rgba(60, 8, 30, 0.35)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <h3 className="text-xl font-serif text-foreground mb-6">
                      Day {day.day} — {day.title}
                    </h3>

                    <div className="space-y-4">
                      {day.activities.map((activity, j) => (
                        <div key={j} className="flex gap-4">
                          <span className="text-primary text-xs font-mono shrink-0 mt-0.5 w-12">
                            {activity.time}
                          </span>
                          <p className="text-foreground/75 text-sm font-light leading-relaxed">
                            {activity.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Highlights card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-xl p-6"
                style={{
                  background: "rgba(60, 8, 30, 0.45)",
                  border: "1px solid rgba(255,255,255,0.09)",
                }}
              >
                <h3 className="text-lg font-serif text-foreground mb-5">Trip Highlights</h3>
                <ul className="space-y-3">
                  {itinerary.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/75 text-sm font-light">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-xl p-6 text-center"
                style={{
                  background: "linear-gradient(135deg, hsl(335 90% 20% / 0.6), hsl(335 90% 30% / 0.4))",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Compass className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-serif text-foreground mb-2">Make it yours</h3>
                <p className="text-foreground/60 text-sm font-light mb-6 leading-relaxed">
                  Our AI can adapt every day, every meal, and every experience to your exact preferences.
                </p>
                <button
                  data-testid="button-personalise"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-full text-sm transition-all duration-300"
                >
                  Personalise with AI
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
