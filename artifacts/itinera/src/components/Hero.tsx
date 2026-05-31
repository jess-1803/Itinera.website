import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import heroImg from "../assets/hero.png";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl"
        >
          <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-6 block">
            The New Standard in Travel
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[1.1] mb-8 font-light">
            Discover the world,<br />
            <span className="italic text-foreground/90">beautifully curated.</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            AI-powered itineraries. Exquisite destinations. Unforgettable experiences. Let us craft the perfect journey for your unique taste.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full max-w-2xl glass-card rounded-full p-2 pl-6 flex items-center shadow-2xl"
        >
          <Search className="text-foreground/50 w-5 h-5 mr-3 hidden sm:block" />
          <Input 
            placeholder="Where do you want to go?" 
            className="border-0 bg-transparent text-foreground placeholder:text-foreground/50 focus-visible:ring-0 text-lg h-12 shadow-none px-0"
          />
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 text-base ml-2 shrink-0 transition-transform hover:scale-105">
            Plan Trip
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest text-foreground/50 mb-2 font-medium">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
