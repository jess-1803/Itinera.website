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
    photo: jessicaPhoto,
    photoClass: "object-cover object-center",
  },
  {
    id: 2,
    name: "Shreya Sharma",
    role: "CEO & Co-Founder",
    photo: shreyaPhoto,
    photoClass: "object-cover object-[center_65%] scale-[1.3]",
  },
  {
    id: 3,
    name: "Athea Brennan",
    role: "CMO & Co-Founder",
    photo: atheaPhoto,
    photoClass: "object-cover object-center",
  },
];

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navigation />

      <section className="relative overflow-hidden py-28 sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background" />
        <div className="pointer-events-none absolute left-[-10%] top-20 size-[600px] rounded-full bg-primary/8 blur-[120px]" />

        <div className="container relative z-10 mx-auto max-w-6xl px-6">
          <Link href="/">
            <span className="group mb-10 inline-flex cursor-pointer items-center text-sm text-foreground/60 transition-colors hover:text-primary">
              <ArrowLeft className="mr-2 size-4 transition-transform group-hover:-translate-x-1" />
              Back to home
            </span>
          </Link>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <span className="mb-5 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Our Story</span>
            <h1 className="mb-10 max-w-4xl font-serif text-5xl font-light leading-[1.1] text-foreground sm:text-6xl md:text-7xl">
              We built the trip <span className="italic text-primary">we always wanted.</span>
            </h1>
          </motion.div>

          <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h2 className="mb-6 font-serif text-3xl leading-snug text-foreground sm:text-4xl">Why we built Itinera</h2>
              <div className="flex flex-col gap-5 font-light leading-relaxed text-foreground/70">
                <p>We were tired of the same problem every time we travelled: hours lost across a dozen browser tabs, generic blog posts, and booking engines that treated every trip like a logistics exercise.</p>
                <p>Travel, at its best, is personal. It reflects who you are — the things you notice, the pace you keep, the meals worth lingering over. No aggregator or algorithm built for mass audiences was going to get that right for us.</p>
                <p>So we built Itinera — a platform that starts with your taste, not the destination&apos;s Wikipedia page. Powered by AI that learns what you love, paired with editorial curation that believes the right trip changes how you see the world.</p>
                <p>We&apos;re a small team with a big conviction: that the best journeys begin long before you pack.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-3xl border border-white/8 bg-card/40 p-6 sm:p-8"
            >
              <span className="mb-3 block text-xs font-medium uppercase tracking-[0.2em] text-primary">The Team</span>
              <h2 className="font-serif text-2xl text-foreground sm:text-3xl">The people behind Itinera.</h2>
              <div className="mt-7 flex flex-col gap-5">
                {FOUNDERS.map((founder) => (
                  <div key={founder.id} className="flex items-center gap-4">
                    <img
                      src={founder.photo}
                      alt={founder.name}
                      className={`size-16 shrink-0 rounded-full ${founder.photoClass}`}
                    />
                    <div>
                      <h3 className="font-serif text-lg text-foreground">{founder.name}</h3>
                      <p className="text-sm text-primary">{founder.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 border-y border-white/5 bg-card/20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Taste over quantity", body: "We'd rather surface one extraordinary experience than fifty mediocre ones. Curation is our product." },
              { title: "Intelligence with soul", body: "AI is the engine, but editorial sensibility drives the wheel. Every recommendation carries a point of view." },
              { title: "The journey begins here", body: "Discovery and planning are part of the experience. We make that half as good as the trip itself." },
            ].map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <div className="w-10 h-[2px] bg-primary mb-5" />
                <h3 className="text-lg font-serif text-foreground mb-3">{v.title}</h3>
                <p className="text-foreground/55 font-light text-sm leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-3xl p-12 border border-white/8">
            <h2 className="text-3xl font-serif text-foreground mb-4">Ready to travel differently?</h2>
            <p className="text-foreground/60 font-light mb-8 max-w-md mx-auto">Let Itinera build your next journey — tailored to exactly who you are.</p>
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
