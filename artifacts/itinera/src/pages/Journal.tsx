import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { STORIES } from "@/data/stories";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import architectureImg from "../assets/journal/architecture.jpg";
import wildernessImg from "../assets/journal/wilderness.jpg";
import cultureImg from "../assets/journal/culture.jpg";

const IMAGE_MAP: Record<string, string> = {
  architecture: architectureImg,
  wilderness: wildernessImg,
  culture: cultureImg,
};

export default function Journal() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const [featured, ...rest] = STORIES;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <div className="pt-40 pb-20 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
            The Itinera Journal
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-foreground leading-none mb-6">
            Stories from <span className="italic">the edge.</span>
          </h1>
          <p className="text-foreground/60 text-xl font-light max-w-xl leading-relaxed">
            Editorial travel writing. Real places, real experiences, no itinerary required.
          </p>
        </motion.div>
      </div>

      {/* Featured story */}
      <div className="container mx-auto px-6 mb-20">
        <Link href={`/journal/${featured.slug}`}>
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group cursor-pointer grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            data-testid={`card-story-featured-${featured.slug}`}
          >
            <div className="relative h-[400px] md:h-[600px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${IMAGE_MAP[featured.imageKey]})` }}
              />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div
              className="p-12 md:p-16 flex flex-col justify-center"
              style={{ background: "rgba(60, 8, 30, 0.5)", backdropFilter: "blur(20px)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-primary text-xs font-medium tracking-widest uppercase">
                  {featured.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-primary/50" />
                <span className="text-foreground/40 text-xs flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  {featured.readTime}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-6 group-hover:text-primary transition-colors duration-300">
                {featured.title}
              </h2>
              <p className="text-foreground/60 font-light leading-relaxed mb-10 text-lg">
                {featured.excerpt}
              </p>
              <div className="flex items-center text-primary text-sm font-medium group/btn">
                Read the story
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
              </div>
            </div>
          </motion.article>
        </Link>
      </div>

      {/* Story grid */}
      <div className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {rest.map((story, i) => (
            <Link key={story.slug} href={`/journal/${story.slug}`}>
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="group cursor-pointer"
                data-testid={`card-story-${story.slug}`}
              >
                <div className="relative h-72 rounded-xl overflow-hidden mb-7"
                  style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                    style={{ backgroundImage: `url(${IMAGE_MAP[story.imageKey]})` }}
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <span className="text-primary text-xs font-medium tracking-widest uppercase">
                    {story.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-primary/50" />
                  <span className="text-foreground/40 text-xs flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {story.readTime}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-serif text-foreground leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
                  {story.title}
                </h2>
                <p className="text-foreground/55 font-light leading-relaxed text-sm line-clamp-3">
                  {story.excerpt}
                </p>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
