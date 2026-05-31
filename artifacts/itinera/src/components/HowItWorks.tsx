import { motion } from "framer-motion";
import { Sparkles, Map, Heart, Compass } from "lucide-react";

const steps = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "1. Share your desires",
    description: "Tell our AI what moves you. From hidden jazz clubs to boutique design hotels, we learn your unique travel fingerprint."
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: "2. Review your masterpiece",
    description: "Instantly receive a meticulously crafted itinerary. It's not a list of spots; it's a narrative designed for your pace and style."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "3. Refine to perfection",
    description: "Adjust the pacing, swap experiences, or let our concierges add exclusive perks to your stays."
  },
  {
    icon: <Compass className="w-6 h-6" />,
    title: "4. Arrive and experience",
    description: "Everything is handled. Your only job is to show up and let the journey unfold exactly as you imagined."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block"
          >
            The Experience
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-foreground leading-tight"
          >
            Travel, <span className="italic">reimagined.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              {/* Connecting line for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[1px] bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              
              <div className="w-16 h-16 rounded-2xl bg-card border border-white/10 flex items-center justify-center text-primary mb-6 shadow-xl relative z-10">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-serif text-foreground mb-3">{step.title}</h3>
              <p className="text-foreground/60 font-light text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
