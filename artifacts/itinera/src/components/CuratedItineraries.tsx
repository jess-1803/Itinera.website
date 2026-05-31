import { motion } from "framer-motion";
import { ArrowRight, Clock, Compass, MapPin } from "lucide-react";
import { Link } from "wouter";
import parisImg from "../assets/itineraries/paris.png";
import tokyoImg from "../assets/itineraries/tokyo.png";
import swissImg from "../assets/itineraries/swiss.png";

const itineraries = [
  {
    id: "paris",
    title: "A Taste of Paris",
    image: parisImg,
    duration: "5 Days",
    style: "Culture & Cuisine",
    highlights: [
      "Private Louvre after-hours tour",
      "Michelin-star dining in Marais",
      "Hidden jazz clubs of Montmartre",
    ],
  },
  {
    id: "tokyo",
    title: "Tokyo Neon Nights",
    image: tokyoImg,
    duration: "8 Days",
    style: "Urban Exploration",
    highlights: [
      "Omakase sushi in Ginza",
      "Midnight photography walk",
      "Architecture tour of Omotesando",
    ],
  },
  {
    id: "swiss",
    title: "Swiss Alpine Retreat",
    image: swissImg,
    duration: "7 Days",
    style: "Nature & Wellness",
    highlights: [
      "Glacier Express panoramic journey",
      "Thermal baths in Vals",
      "Private chalet wine tasting",
    ],
  },
];

export function CuratedItineraries() {
  return (
    <section id="itineraries" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-[-20%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block"
          >
            AI-Crafted Journeys
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight"
          >
            Itineraries built for <br /><span className="italic">your exact taste.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/70 text-lg font-light"
          >
            Start with our masterpieces, then let our AI tune them to your preferences down to the finest detail.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {itineraries.map((trip, i) => (
            <motion.div
              key={trip.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="glass-card rounded-2xl overflow-hidden group hover:border-primary/30 transition-colors duration-500 flex flex-col h-full"
              data-testid={`card-itinerary-${trip.id}`}
            >
              <div className="h-64 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${trip.image})` }}
                />
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-foreground flex items-center border border-white/10">
                  <Clock className="w-3 h-3 mr-1.5 text-primary" />
                  {trip.duration}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center text-primary text-sm font-medium mb-3">
                  <Compass className="w-4 h-4 mr-2" />
                  {trip.style}
                </div>
                <h3 className="text-2xl font-serif text-foreground mb-6">{trip.title}</h3>

                <ul className="space-y-3 mb-8 flex-1">
                  {trip.highlights.map((highlight, j) => (
                    <li key={j} className="flex items-start text-foreground/70 text-sm font-light leading-relaxed">
                      <MapPin className="w-4 h-4 mr-3 mt-0.5 text-foreground/30 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <Link href={`/itinerary/${trip.id}`}>
                  <button
                    data-testid={`button-view-itinerary-${trip.id}`}
                    className="flex items-center text-primary hover:text-primary/80 transition-colors font-medium text-sm mt-auto group/btn"
                  >
                    View full itinerary
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
