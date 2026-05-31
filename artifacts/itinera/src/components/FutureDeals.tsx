import { motion } from "framer-motion";

export function FutureDeals() {
  return (
    <section className="py-32 relative bg-card/30 border-y border-white/5">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-widest uppercase mb-8 inline-block">
            Coming Later This Year
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            The Itinera <span className="italic">Collection</span>.
          </h2>
          <p className="text-lg text-foreground/60 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            We are curating a private collection of the world's most remarkable boutique hotels, hidden villas, and exclusive experiences. Booking with Itinera will unlock perks you won't find anywhere else.
          </p>
        </motion.div>

        {/* Blurred Preview Grid */}
        <div className="relative mt-16 group">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50 blur-[6px] transition-all duration-700 group-hover:blur-[8px] pointer-events-none select-none">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-[3/4] rounded-xl bg-card border border-white/10 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                <div className="w-full h-full bg-muted/50" />
              </div>
            ))}
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-background/90 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl max-w-md w-full"
            >
              <h3 className="text-xl font-serif text-foreground mb-2">Join the Waitlist</h3>
              <p className="text-sm text-foreground/60 font-light mb-6">Get early access to our private booking collection.</p>
              
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 bg-card border border-white/10 rounded-lg px-4 text-sm focus:outline-none focus:border-primary/50 text-foreground transition-colors"
                />
                <button className="bg-foreground text-background px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors">
                  Request Access
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
