import { motion } from "framer-motion";
import { Sparkles, Apple, Smartphone } from "lucide-react";
import appMapImg from "@assets/IMG_6142_1780216591749.jpg";
import appPlacesImg from "@assets/IMG_6141_1780216591749.jpg";
import appPlanImg from "@assets/IMG_6140_1780216591749.jpg";

export function AIPlanning() {
  return (
    <section id="ai-planning" className="py-32 relative overflow-hidden bg-background">
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
                  <div className="w-8 h-8 rounded-full bg-card border border-primary/20 flex items-center justify-center text-primary font-medium text-sm shrink-0">1</div>
                  <div className="w-[1px] h-16 bg-gradient-to-b from-primary/30 to-transparent my-2" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-foreground mb-2">Tell us your vibe</h4>
                  <p className="text-foreground/60 font-light leading-relaxed">No generic forms. Just chat with our AI about what makes a perfect trip for you. Architecture? Natural wine? Boutique hotels?</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="w-8 h-8 rounded-full bg-card border border-primary/20 flex items-center justify-center text-primary font-medium text-sm shrink-0">2</div>
                  <div className="w-[1px] h-16 bg-gradient-to-b from-primary/30 to-transparent my-2" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-foreground mb-2">Review the masterpiece</h4>
                  <p className="text-foreground/60 font-light leading-relaxed">Within seconds, receive a beautiful, magazine-quality itinerary tailored to your exact pacing and style preferences.</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-medium text-sm shrink-0 shadow-[0_0_15px_rgba(232,25,106,0.4)]">3</div>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-foreground mb-2">Save, share & explore</h4>
                  <p className="text-foreground/60 font-light leading-relaxed">Save destinations to your map, build collections, and take everything on the road with the Itinera app.</p>
                </div>
              </div>
            </div>

            {/* Download CTAs — Coming Soon */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-foreground/10 border border-white/10 opacity-60 cursor-not-allowed select-none">
                <Apple className="w-6 h-6 shrink-0 text-foreground/50" />
                <div className="text-left">
                  <p className="text-[10px] font-medium text-foreground/40 leading-none mb-0.5">Coming soon</p>
                  <p className="text-sm font-semibold leading-none text-foreground/60">App Store</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-foreground/10 border border-white/10 opacity-60 cursor-not-allowed select-none">
                <Smartphone className="w-6 h-6 shrink-0 text-foreground/50" />
                <div className="text-left">
                  <p className="text-[10px] font-medium text-foreground/40 leading-none mb-0.5">Coming soon</p>
                  <p className="text-sm font-semibold leading-none text-foreground/60">Google Play</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: App Screenshots */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center h-[600px]"
          >
            <div className="absolute inset-0 bg-primary/15 blur-[80px] rounded-full" />

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="absolute left-0 top-10 z-10"
              style={{ transform: "rotate(-8deg) translateX(10px)" }}
            >
              <PhoneFrame src={appMapImg} alt="Itinera map view" width={200} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative z-20"
            >
              <PhoneFrame src={appPlanImg} alt="Itinera AI planner" width={240} shadow />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="absolute right-0 top-10 z-10"
              style={{ transform: "rotate(8deg) translateX(-10px)" }}
            >
              <PhoneFrame src={appPlacesImg} alt="Itinera places view" width={200} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PhoneFrame({ src, alt, width, shadow }: { src: string; alt: string; width: number; shadow?: boolean }) {
  return (
    <div
      className={`relative rounded-[2.5rem] overflow-hidden border-2 border-white/20 bg-black ${shadow ? "shadow-[0_30px_80px_rgba(0,0,0,0.6)]" : "shadow-[0_20px_50px_rgba(0,0,0,0.5)]"}`}
      style={{ width, aspectRatio: "9/19" }}
    >
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10" />
      <img src={src} alt={alt} className="w-full h-full object-cover" draggable={false} />
      <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
