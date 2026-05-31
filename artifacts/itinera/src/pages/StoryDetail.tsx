import { useEffect } from "react";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
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

export default function StoryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const story = STORIES.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!story) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navigation />
        <div className="text-center">
          <h1 className="text-3xl font-serif text-foreground mb-4">Story not found</h1>
          <Link href="/journal">
            <button className="text-primary hover:text-primary/80 flex items-center gap-2 mx-auto">
              <ArrowLeft className="w-4 h-4" /> Back to Journal
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const heroImage = IMAGE_MAP[story.imageKey];
  const relatedStories = STORIES.filter((s) => s.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <div className="relative h-[75vh] min-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/15" />

        <div className="absolute inset-0 flex flex-col justify-end pb-16 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <Link href="/journal">
              <button
                data-testid="button-back-journal"
                className="flex items-center text-foreground/60 hover:text-primary transition-colors mb-8 group text-sm"
              >
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Journal
              </button>
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <span className="text-primary text-xs font-medium tracking-widest uppercase">
                {story.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-primary/50" />
              <span className="text-foreground/50 text-xs flex items-center gap-1.5">
                <Clock className="w-3 h-3" />
                {story.readTime}
              </span>
              <span className="w-1 h-1 rounded-full bg-primary/50" />
              <span className="text-foreground/50 text-xs flex items-center gap-1.5">
                <Calendar className="w-3 h-3" />
                {story.publishedDate}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-5">
              {story.title}
            </h1>
            <p className="text-white/65 text-lg font-light italic max-w-2xl leading-relaxed">
              {story.excerpt}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Article body */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-16 pb-8 border-b border-white/8">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary text-xs font-bold">I</span>
            </div>
            <div>
              <p className="text-foreground text-sm font-medium">{story.author}</p>
              <p className="text-muted-foreground text-xs">{story.publishedDate}</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {story.body.map((section, i) => {
              if (section.type === "paragraph") {
                return (
                  <p
                    key={i}
                    className="text-foreground/80 text-lg font-light leading-[1.85] tracking-wide"
                    data-testid={`text-paragraph-${i}`}
                  >
                    {section.content}
                  </p>
                );
              }

              if (section.type === "pullquote") {
                return (
                  <blockquote
                    key={i}
                    className="relative pl-8 py-2 my-12"
                    data-testid={`text-pullquote-${i}`}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary rounded-full" />
                    <p className="text-2xl font-serif italic text-foreground/90 leading-relaxed">
                      {section.content}
                    </p>
                  </blockquote>
                );
              }

              if (section.type === "subheading") {
                return (
                  <h2
                    key={i}
                    className="text-2xl font-serif text-foreground pt-6"
                    data-testid={`text-subheading-${i}`}
                  >
                    {section.content}
                  </h2>
                );
              }

              return null;
            })}
          </motion.div>

          {/* End rule */}
          <div className="flex items-center gap-4 mt-20 pt-12 border-t border-white/8">
            <div className="w-6 h-[2px] bg-primary" />
            <span className="text-muted-foreground text-sm italic">Itinera Editorial</span>
          </div>
        </div>
      </div>

      {/* Related stories */}
      {relatedStories.length > 0 && (
        <div className="border-t border-white/5 py-20">
          <div className="container mx-auto px-6">
            <h3 className="text-2xl font-serif text-foreground mb-12">
              More from <span className="italic">the Journal</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {relatedStories.map((related) => (
                <Link key={related.slug} href={`/journal/${related.slug}`}>
                  <article
                    className="group cursor-pointer"
                    data-testid={`card-related-${related.slug}`}
                  >
                    <div className="relative h-60 rounded-xl overflow-hidden mb-6"
                      style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                        style={{ backgroundImage: `url(${IMAGE_MAP[related.imageKey]})` }}
                      />
                      <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-primary text-xs font-medium tracking-widest uppercase">{related.category}</span>
                      <span className="w-1 h-1 rounded-full bg-primary/50" />
                      <span className="text-foreground/40 text-xs">{related.readTime}</span>
                    </div>
                    <h4 className="text-xl font-serif text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
                      {related.title}
                    </h4>
                  </article>
                </Link>
              ))}
            </div>
            <div className="mt-12">
              <Link href="/journal">
                <button className="flex items-center text-foreground/60 hover:text-primary transition-colors text-sm group">
                  View all stories
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
