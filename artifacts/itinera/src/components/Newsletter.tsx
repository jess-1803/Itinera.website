import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8">
            <Mail className="w-6 h-6" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Join the <span className="italic">Society.</span>
          </h2>
          
          <p className="text-lg text-foreground/60 font-light mb-10 leading-relaxed max-w-xl mx-auto">
            A weekly dispatch of hidden gems, extraordinary stays, and intelligent travel design. Read by those who know the difference.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-card/50 backdrop-blur-sm border border-white/10 rounded-full px-6 py-4 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
              required
            />
            <button 
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-transform hover:scale-105 shrink-0"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-foreground/40 mt-4 font-light">
            No spam. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
