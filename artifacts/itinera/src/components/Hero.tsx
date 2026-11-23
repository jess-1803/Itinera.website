import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import heroImg from "../assets/hero-coastal.png";

export function Hero() {
  const scrollToPlanner = () => {
    document.getElementById("ai-planning")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[88svh] md:min-h-[100svh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 relative z-10 pt-28 pb-20 md:pt-32 md:pb-24 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl"
        >
          <span className="text-white/90 font-medium tracking-[0.16em] md:tracking-[0.2em] uppercase text-[0.65rem] md:text-sm mb-4 md:mb-6 block">
            The New Standard in Travel
          </span>
          <h1 className="text-[2.25rem] sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.08] md:leading-[1.1] mb-5 md:mb-8 font-light">
            Discover the world,<br />
            <span className="italic text-white/95">beautifully curated.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-6 md:mb-12 font-light leading-relaxed">
            AI-powered itineraries. Exquisite destinations. Unforgettable experiences. Let us craft the perfect journey for your unique taste.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full max-w-xl glass-card rounded-2xl sm:rounded-full p-2 sm:pl-6 flex flex-col sm:flex-row items-stretch sm:items-center shadow-2xl gap-2 sm:gap-0"
        >
          <Search className="text-foreground/50 w-5 h-5 mr-3 hidden sm:block" />
          <Input
            placeholder="Where do you want to go?"
            className="border-0 bg-transparent text-foreground placeholder:text-foreground/50 focus-visible:ring-0 text-base sm:text-lg h-11 sm:h-12 shadow-none px-3 sm:px-0"
            data-testid="input-destination"
          />
          <Button
            data-testid="button-plan-trip"
            onClick={scrollToPlanner}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl sm:rounded-full px-6 sm:px-8 h-12 text-base sm:ml-2 w-full sm:w-auto shrink-0 transition-transform hover:scale-105"
          >
            Plan Trip
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest text-white/70 mb-2 font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
