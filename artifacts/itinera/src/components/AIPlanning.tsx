import { motion } from "framer-motion";
import { Sparkles, Send } from "lucide-react";

export function AIPlanning() {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card to-background z-0" />
      <div className="absolute right-[-10%] top-[20%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium tracking-wide mb-6">
              <Sparkles className="w-3 h-3 mr-2" />
              Intelligence meets taste
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight mb-8">
              A travel planner that <br />
              <span className="italic text-primary">actually knows you.</span>
            </h2>
            
            <div className="space-y-8 mb-10">
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="w-8 h-8 rounded-full bg-card border border-primary/20 flex items-center justify-center text-primary font-medium text-sm">1</div>
                  <div className="w-[1px] h-16 bg-gradient-to-b from-primary/30 to-transparent my-2" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-foreground mb-2">Tell us your vibe</h4>
                  <p className="text-foreground/60 font-light leading-relaxed">No generic forms. Just chat with our AI about what makes a perfect trip for you. Architecture? Natural wine? Boutique hotels?</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="w-8 h-8 rounded-full bg-card border border-primary/20 flex items-center justify-center text-primary font-medium text-sm">2</div>
                  <div className="w-[1px] h-16 bg-gradient-to-b from-primary/30 to-transparent my-2" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-foreground mb-2">Review the masterpiece</h4>
                  <p className="text-foreground/60 font-light leading-relaxed">Within seconds, receive a beautiful, magazine-quality itinerary tailored to your exact pacing and style preferences.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-medium text-sm shadow-[0_0_15px_rgba(232,25,106,0.4)]">3</div>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-foreground mb-2">Refine and book</h4>
                  <p className="text-foreground/60 font-light leading-relaxed">Tweak the details directly on the canvas. When perfect, our concierges secure your exclusive rates.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Chat Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative perspective-1000"
          >
            <div className="glass-card rounded-3xl p-6 md:p-8 shadow-2xl relative z-10 border border-white/10 rotate-y-[-5deg] rotate-x-[2deg] transform-gpu">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/5 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-foreground font-medium">Itinera AI</h5>
                    <span className="text-xs text-primary flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-1.5 animate-pulse" />
                      Online
                    </span>
                  </div>
                </div>
              </div>

              {/* Chat Body */}
              <div className="space-y-6 mb-8 h-[300px] overflow-hidden relative">
                <div className="flex flex-col space-y-4">
                  
                  <div className="self-end bg-card border border-white/5 rounded-2xl rounded-tr-sm p-4 max-w-[85%] text-sm font-light text-foreground/90 shadow-sm">
                    I want to go to Japan in October for 10 days. I love brutalist architecture, quiet tea houses, and high-end sushi. I hate tourist traps.
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                    className="self-start bg-primary/10 border border-primary/20 rounded-2xl rounded-tl-sm p-5 max-w-[90%]"
                  >
                    <p className="text-sm font-light text-foreground/90 leading-relaxed mb-4">
                      A beautiful choice. October offers crisp air and autumn colors. Let's build a route focused on design and culinary excellence, avoiding the golden route crowds.
                    </p>
                    
                    <div className="bg-background/50 rounded-xl p-3 border border-white/5 flex items-center cursor-pointer hover:bg-background/80 transition-colors">
                      <div className="w-12 h-12 rounded-lg bg-card bg-cover bg-center mr-4 shrink-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542051812871-75f10255291f?q=80&w=200&auto=format&fit=crop')" }} />
                      <div>
                        <h6 className="text-sm font-medium text-foreground">Draft: Shadows of Honshu</h6>
                        <p className="text-xs text-foreground/50">10 days • Tokyo, Kanazawa, Naoshima</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Fade out bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card/50 to-transparent" />
              </div>

              {/* Input */}
              <div className="bg-background/50 border border-white/10 rounded-full p-2 pl-6 flex items-center">
                <input 
                  type="text" 
                  placeholder="Ask anything..." 
                  className="bg-transparent border-0 flex-1 text-sm text-foreground focus:outline-none placeholder:text-foreground/40 font-light"
                  disabled
                />
                <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0 hover:scale-105 transition-transform">
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </div>
            
            {/* Ambient glow behind mockup */}
            <div className="absolute inset-0 bg-primary/20 blur-[80px] -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
