import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Tag, Plane, Hotel, Compass, Star, ArrowRight, Sparkles } from "lucide-react";

type Category = "All" | "Hotels" | "Flights" | "Activities" | "Experiences";

interface Deal {
  id: string;
  category: Category;
  title: string;
  description: string;
  discount: string;
  partner: string;
  rating: number;
  locked: boolean;
  badge?: string;
}

const DEALS: Deal[] = [
  {
    id: "1",
    category: "Hotels",
    title: "Ace Hotel Kyoto",
    description: "Design-forward rooms in a Kengo Kuma building at the heart of the city.",
    discount: "20% off",
    partner: "Direct rate",
    rating: 4.9,
    locked: false,
    badge: "Members only",
  },
  {
    id: "2",
    category: "Flights",
    title: "Business Class Upgrade",
    description: "Complimentary upgrade to Business on long-haul routes with Singapore Airlines.",
    discount: "Save £400+",
    partner: "Singapore Airlines",
    rating: 4.8,
    locked: false,
    badge: "Exclusive",
  },
  {
    id: "3",
    category: "Activities",
    title: "After-Hours Louvre Access",
    description: "Private guided tour of the Louvre with no crowds — after the doors close to the public.",
    discount: "30% off",
    partner: "Context Travel",
    rating: 5.0,
    locked: true,
  },
  {
    id: "4",
    category: "Experiences",
    title: "Private Villa — Santorini",
    description: "Clifftop villa with infinity pool in Oia. Member rates not available anywhere else.",
    discount: "25% off",
    partner: "Smith Hotels",
    rating: 4.9,
    locked: true,
  },
  {
    id: "5",
    category: "Activities",
    title: "Marrakech Cooking Masterclass",
    description: "Private half-day class in a traditional riad with a local chef. Souk tour included.",
    discount: "15% off",
    partner: "La Maison Arabe",
    rating: 4.7,
    locked: true,
  },
  {
    id: "6",
    category: "Experiences",
    title: "Glacier Expedition, Patagonia",
    description: "Guided boat expedition to Grey Glacier with a certified wilderness guide.",
    discount: "Save $180",
    partner: "Explora Patagonia",
    rating: 4.9,
    locked: true,
  },
];

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Hotels: <Hotel className="w-4 h-4" />,
  Flights: <Plane className="w-4 h-4" />,
  Activities: <Compass className="w-4 h-4" />,
  Experiences: <Sparkles className="w-4 h-4" />,
};

const CATEGORIES: Category[] = ["All", "Hotels", "Flights", "Activities", "Experiences"];

export function Marketplace() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = activeCategory === "All"
    ? DEALS
    : DEALS.filter((d) => d.category === activeCategory);

  return (
    <section className="py-32 bg-card/20 relative border-y border-white/5" id="marketplace">
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
              The Marketplace
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-4">
              Travel deals, <span className="italic">curated for you.</span>
            </h2>
            <p className="text-foreground/60 font-light text-lg leading-relaxed max-w-lg">
              Exclusive rates, member perks, and hand-picked affiliate offers across hotels, flights, activities, and experiences worldwide.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-2 text-xs text-foreground/40">
              <Lock className="w-3 h-3" />
              <span>Sign in to unlock member deals</span>
            </div>
            <button
              data-testid="button-browse-deals"
              className="flex items-center text-primary text-sm font-medium hover:text-primary/80 transition-colors group"
            >
              Browse all deals
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>

        {/* Category pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex gap-2 flex-wrap mb-10"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              data-testid={`button-category-${cat.toLowerCase()}`}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-[0_0_20px_rgba(232,25,106,0.3)]"
                  : "bg-card border border-white/10 text-foreground/70 hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {cat !== "All" && CATEGORY_ICONS[cat]}
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Deal grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((deal, i) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              data-testid={`card-deal-${deal.id}`}
              className={`relative group rounded-2xl overflow-hidden transition-all duration-300 ${
                deal.locked
                  ? "opacity-70 hover:opacity-90"
                  : "hover:border-primary/30 hover:shadow-[0_0_30px_rgba(232,25,106,0.12)]"
              }`}
              style={{
                background: "rgba(60, 8, 30, 0.4)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Lock overlay */}
              {deal.locked && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mb-3">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground text-sm font-medium">Sign in to unlock</p>
                  <p className="text-foreground/50 text-xs mt-1">Free membership required</p>
                </div>
              )}

              <div className="p-6">
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center text-primary">
                      {CATEGORY_ICONS[deal.category] ?? <Tag className="w-4 h-4" />}
                    </div>
                    <span className="text-foreground/50 text-xs font-medium uppercase tracking-wide">
                      {deal.category}
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="bg-primary/15 text-primary text-xs font-semibold px-2.5 py-1 rounded-full border border-primary/25">
                      {deal.discount}
                    </span>
                    {deal.badge && (
                      <span className="text-foreground/40 text-[10px] font-medium">{deal.badge}</span>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-serif text-foreground mb-2 leading-snug">
                  {deal.title}
                </h3>
                <p className="text-foreground/55 text-sm font-light leading-relaxed mb-5">
                  {deal.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/6">
                  <div className="flex items-center gap-1.5">
                    <div className="flex">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`w-3 h-3 ${j < Math.floor(deal.rating) ? "text-primary fill-primary" : "text-foreground/20"}`}
                        />
                      ))}
                    </div>
                    <span className="text-foreground/50 text-xs">{deal.rating}</span>
                  </div>
                  <span className="text-foreground/40 text-xs">{deal.partner}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-6 px-10 py-8 rounded-3xl"
            style={{
              background: "linear-gradient(135deg, rgba(60, 8, 30, 0.6), rgba(80, 10, 40, 0.5))",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div className="text-left">
              <p className="text-foreground font-medium mb-1">Unlock all {DEALS.length} deals — free membership</p>
              <p className="text-foreground/50 text-sm font-light">More partners added every week. No card required.</p>
            </div>
            <button
              data-testid="button-join-marketplace"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-full text-sm transition-all duration-300 hover:scale-105 shrink-0 whitespace-nowrap"
            >
              Join for free
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
