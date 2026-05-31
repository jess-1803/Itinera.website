import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";
import { STORIES } from "@/data/stories";
import architectureImg from "../assets/journal/architecture.jpg";
import wildernessImg from "../assets/journal/wilderness.jpg";
import cultureImg from "../assets/journal/culture.jpg";

const IMAGE_MAP: Record<string, string> = {
  architecture: architectureImg,
  wilderness: wildernessImg,
  culture: cultureImg,
};

export function TravelInspiration() {
  return (
    <section id="guides" className="py-32 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-foreground/50 font-medium tracking-widest uppercase text-xs mb-4 block">
              The Editorial
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground leading-tight">
              Stories from the edge.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/journal">
              <button
                data-testid="button-read-journal"
                className="flex items-center text-sm border-b border-primary text-foreground hover:text-primary transition-colors pb-1 font-medium group"
              >
                Read the Journal
                <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STORIES.map((story, i) => (
            <motion.div
              key={story.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link href={`/journal/${story.slug}`}>
                <article
                  className="group block cursor-pointer"
                  data-testid={`card-story-home-${story.slug}`}
                >
                  <div className="overflow-hidden rounded-xl aspect-[4/5] mb-6 relative border border-white/5">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                      style={{ backgroundImage: `url(${IMAGE_MAP[story.imageKey]})` }}
                    />
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  <div className="flex items-center text-xs text-primary font-medium tracking-wide uppercase mb-3 space-x-3">
                    <span>{story.category}</span>
                    <span className="w-1 h-1 rounded-full bg-primary/50" />
                    <span className="text-foreground/50 flex items-center gap-1 normal-case tracking-normal font-normal">
                      <Clock className="w-3 h-3" />
                      {story.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif text-foreground leading-snug group-hover:text-primary transition-colors mb-3">
                    {story.title}
                  </h3>

                  <p className="text-foreground/50 text-sm font-light leading-relaxed line-clamp-2">
                    {story.excerpt}
                  </p>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
