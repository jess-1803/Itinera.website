import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import kyotoImg from "../assets/destinations/kyoto.png";
import amalfiImg from "../assets/destinations/amalfi.png";
import moroccoImg from "../assets/destinations/morocco.png";
import icelandImg from "../assets/destinations/iceland.png";
import baliImg from "../assets/destinations/bali.png";
import patagoniaImg from "../assets/destinations/patagonia.png";

const destinations = [
  {
    name: "Kyoto, Japan",
    tagline: "Where ancient tradition meets quiet elegance.",
    image: kyotoImg,
    size: "large"
  },
  {
    name: "Amalfi Coast, Italy",
    tagline: "Cliffside romance and Mediterranean hues.",
    image: amalfiImg,
    size: "small"
  },
  {
    name: "Marrakech, Morocco",
    tagline: "A labyrinth of rich textures and deep shadows.",
    image: moroccoImg,
    size: "medium"
  },
  {
    name: "Reykjavik, Iceland",
    tagline: "Dramatic landscapes carved by fire and ice.",
    image: icelandImg,
    size: "small"
  },
  {
    name: "Ubud, Bali",
    tagline: "Lush sanctuaries wrapped in morning mist.",
    image: baliImg,
    size: "medium"
  },
  {
    name: "Patagonia, Chile",
    tagline: "The wild edge of the world.",
    image: patagoniaImg,
    size: "large"
  }
];

export function FeaturedDestinations() {
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
          <button className="flex items-center text-foreground/80 hover:text-primary transition-colors group pb-2">
            <span className="mr-3 font-medium">View all destinations</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Masonry / Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-min">
          {destinations.map((dest, i) => {
            // Calculate grid spans based on size property to create a magazine spread feel
            let spanClass = "md:col-span-12";
            let heightClass = "h-[400px] md:h-[600px]";
            
            if (i === 0) { spanClass = "md:col-span-8"; heightClass = "h-[400px] md:h-[700px]"; } // Kyoto
            else if (i === 1) { spanClass = "md:col-span-4"; heightClass = "h-[300px] md:h-[400px]"; } // Amalfi
            else if (i === 2) { spanClass = "md:col-span-5"; heightClass = "h-[400px] md:h-[600px]"; } // Morocco
            else if (i === 3) { spanClass = "md:col-span-7"; heightClass = "h-[300px] md:h-[500px]"; } // Iceland
            else if (i === 4) { spanClass = "md:col-span-6"; heightClass = "h-[400px] md:h-[600px]"; } // Bali
            else if (i === 5) { spanClass = "md:col-span-6"; heightClass = "h-[400px] md:h-[600px]"; } // Patagonia

            return (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`${spanClass} ${heightClass} relative group overflow-hidden rounded-xl cursor-pointer`}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  style={{ backgroundImage: `url(${dest.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-90" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">{dest.name}</h3>
                  <p className="text-white/80 mb-6 font-light max-w-sm">{dest.tagline}</p>
                  
                  <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <ArrowRight className="w-5 h-5 text-white" />
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
