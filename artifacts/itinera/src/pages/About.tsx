import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import jessicaPhoto from "@assets/100_1066_1780401851691.JPG";
import shreyaPhoto from "@assets/FullSizeRender_1780401851692.JPEG";
import atheaPhoto from "@assets/IMG_7873_1780401851692.JPEG";

const FOUNDERS = [
  {
    id: 1,
    name: "Jessica Mangos",
    role: "CSO & Co-Founder",
    bio: "Bio coming soon.",
    photo: jessicaPhoto,
  },
  {
    id: 2,
    name: "Shreya Sharma",
    role: "CEO & Co-Founder",
    bio: "Bio coming soon.",
    photo: shreyaPhoto,
  },
  {
    id: 3,
    name: "Athea Brennan",
    role: "CMO & Co-Founder",
    bio: "Bio coming soon.",
    photo: atheaPhoto,
  },
];

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background pointer-events-none" />
        <div className="absolute top-20 left-[-10%] w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <Link href="/">
            <span className="inline-flex items-center text-foreground/60 hover:text-primary transition-colors text-sm mb-12 cursor-pointer group">
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to home
            </span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-6 block">
              Our Story
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-[1.1] mb-8 font-light">
              We built the trip<br />
              <span className="italic text-primary">we always wanted.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Origin story */}
      <section className="pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6 leading-snug">
                Why we built Itinera
              </h2>
            </div>
            <div className="space-y-5 text-foreground/70 font-light leading-relaxed">
              <p>
                We were tired of the same problem every time we travelled: hours lost across a dozen browser tabs, generic blog posts, and booking engines that treated every trip like a logistics exercise.
              </p>
              <p>
                Travel, at its best, is personal. It reflects who you are — the things you notice, the pace you keep, the meals worth lingering over. No aggregator or algorithm built for mass audiences was going to get that right for us.
              </p>
              <p>
                So we built Itinera — a platform that starts with your taste, not the destination's Wikipedia page. Powered by AI that learns what you love, paired with editorial curation that believes the right trip changes how you see the world.
              </p>
              <p>
                We're a small team with a big conviction: that the best journeys begin long before you pack.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values strip */}
      <section className="py-20 border-y border-white/5 bg-card/20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Taste over quantity", body: "We'd rather surface one extraordinary experience than fifty mediocre ones. Curation is our product." },
              { title: "Intelligence with soul", body: "AI is the engine, but editorial sensibility drives the wheel. Every recommendation carries a point of view." },
              { title: "The journey begins here", body: "Discovery and planning are part of the experience. We make that half as good as the trip itself." },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="w-10 h-[2px] bg-primary mb-5" />
                <h3 className="text-lg font-serif text-foreground mb-3">{v.title}</h3>
                <p className="text-foreground/55 font-light text-sm leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">The Team</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">
              The people behind <span className="italic">Itinera.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FOUNDERS.map((founder, i) => (
              <motion.div
                key={founder.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="group"
              >
                {/* Photo */}
                <div className="w-full aspect-[3/4] rounded-2xl mb-6 overflow-hidden relative border border-white/8">
                  <img
                    src={founder.photo}
                    alt={founder.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
                </div>

                <h3 className="text-xl font-serif text-foreground mb-1">{founder.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{founder.role}</p>
                <p className="text-foreground/55 text-sm font-light leading-relaxed">{founder.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 border border-white/8"
          >
            <h2 className="text-3xl font-serif text-foreground mb-4">Ready to travel differently?</h2>
            <p className="text-foreground/60 font-light mb-8 max-w-md mx-auto">
              Let Itinera build your next journey — tailored to exactly who you are.
            </p>
            <Link href="/">
              <span
                onClick={() => setTimeout(() => document.getElementById("ai-planning")?.scrollIntoView({ behavior: "smooth" }), 100)}
                className="inline-block bg-primary hover:bg-primary/90 text-white font-medium px-10 py-4 rounded-full text-sm transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                Start Planning
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
