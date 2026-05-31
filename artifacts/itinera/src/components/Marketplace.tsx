import { useState } from "react";
import { motion } from "framer-motion";
import { Tag, Plane, Hotel, Compass, Sparkles, Copy, Check, ExternalLink, Clock } from "lucide-react";

type Category = "All" | "Connectivity" | "Hotels" | "Flights" | "Activities" | "Experiences";

interface ActiveDeal {
  kind: "active";
  id: string;
  category: Category;
  title: string;
  description: string;
  discount: string;
  code: string;
  partner: string;
  link?: string;
  badge?: string;
}

interface ComingSoonDeal {
  kind: "coming-soon";
  id: string;
  category: Category;
  title: string;
  description: string;
  partner: string;
}

type Deal = ActiveDeal | ComingSoonDeal;

const DEALS: Deal[] = [
  {
    kind: "active",
    id: "airalo",
    category: "Connectivity",
    title: "Airalo — Global eSIMs",
    description: "Stay connected anywhere in the world without roaming fees. eSIMs for 200+ countries, activated instantly before you fly.",
    discount: "10% off",
    code: "ITINERA10",
    partner: "Airalo",
    link: "https://www.airalo.com/?p=itinera&code=ITINERA10&irclickid=UYMxlP1bsxyZT0A1oEw2l36rUkuWUrxOnXmrQc0&irgwc=1&afsrc=1&utm_source=impact&utm_medium=affiliate&utm_campaign=Itinera&utm_content&utm_term",
    badge: "Live deal",
  },
  {
    kind: "active",
    id: "holafly",
    category: "Connectivity",
    title: "Holafly — Unlimited Data eSIMs",
    description: "Unlimited data eSIMs for over 170 destinations. No top-ups, no surprises — just seamless connectivity from the moment you land.",
    discount: "10% off",
    code: "ITINERA",
    partner: "Holafly",
    badge: "Live deal",
  },
  {
    kind: "coming-soon",
    id: "hotels",
    category: "Hotels",
    title: "Boutique Hotel Rates",
    description: "Exclusive member rates at hand-picked design hotels and hidden retreats worldwide.",
    partner: "Coming soon",
  },
  {
    kind: "coming-soon",
    id: "flights",
    category: "Flights",
    title: "Flight Upgrades & Fares",
    description: "Premium cabin upgrades and exclusive fares with our airline partners.",
    partner: "Coming soon",
  },
  {
    kind: "coming-soon",
    id: "activities",
    category: "Activities",
    title: "Curated Experiences",
    description: "Skip-the-queue access and private tours at the world's most sought-after cultural sites.",
    partner: "Coming soon",
  },
  {
    kind: "coming-soon",
    id: "experiences",
    category: "Experiences",
    title: "Private & Luxury Add-ons",
    description: "From private villas to guided wilderness expeditions — unforgettable experiences at member prices.",
    partner: "Coming soon",
  },
];

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Connectivity: <Sparkles className="w-4 h-4" />,
  Hotels: <Hotel className="w-4 h-4" />,
  Flights: <Plane className="w-4 h-4" />,
  Activities: <Compass className="w-4 h-4" />,
  Experiences: <Tag className="w-4 h-4" />,
};

const CATEGORIES: Category[] = ["All", "Connectivity", "Hotels", "Flights", "Activities", "Experiences"];

function CodeBadge({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 bg-background/60 border border-primary/25 rounded-xl px-4 py-2.5 w-full hover:border-primary/50 transition-colors group"
      title="Click to copy code"
    >
      <span className="text-xs text-foreground/50 font-medium uppercase tracking-widest shrink-0">Code</span>
      <span className="flex-1 text-center font-mono text-sm font-bold text-primary tracking-widest">{code}</span>
      <span className="shrink-0 text-foreground/40 group-hover:text-primary transition-colors">
        {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
      </span>
    </button>
  );
}

function ActiveDealCard({ deal, index }: { deal: ActiveDeal; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      data-testid={`card-deal-${deal.id}`}
      className="rounded-2xl overflow-hidden hover:shadow-[0_0_40px_rgba(232,25,106,0.18)] transition-all duration-300"
      style={{
        background: "linear-gradient(135deg, rgba(80, 10, 40, 0.55), rgba(60, 8, 30, 0.45))",
        border: "1px solid rgba(232,25,106,0.2)",
      }}
    >
      <div className="p-6">
        {/* Top row */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
              {CATEGORY_ICONS[deal.category] ?? <Tag className="w-4 h-4" />}
            </div>
            <span className="text-foreground/50 text-xs font-medium uppercase tracking-wide">{deal.category}</span>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_12px_rgba(232,25,106,0.4)]">
              {deal.discount}
            </span>
            {deal.badge && (
              <span className="text-primary/70 text-[10px] font-semibold uppercase tracking-wider">{deal.badge}</span>
            )}
          </div>
        </div>

        <h3 className="text-xl font-serif text-foreground mb-2 leading-snug">{deal.title}</h3>
        <p className="text-foreground/60 text-sm font-light leading-relaxed mb-6">{deal.description}</p>

        {/* Code */}
        <div className="mb-4">
          <CodeBadge code={deal.code} />
        </div>

        {/* CTA */}
        {deal.link && (
          <a
            href={deal.link}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`button-shop-${deal.id}`}
            className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-xl text-sm transition-all duration-300 hover:scale-[1.02]"
          >
            Shop {deal.partner}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

function ComingSoonCard({ deal, index }: { deal: ComingSoonDeal; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      data-testid={`card-deal-${deal.id}`}
      className="rounded-2xl overflow-hidden opacity-50"
      style={{
        background: "rgba(40, 5, 20, 0.35)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-foreground/30">
              {CATEGORY_ICONS[deal.category] ?? <Tag className="w-4 h-4" />}
            </div>
            <span className="text-foreground/35 text-xs font-medium uppercase tracking-wide">{deal.category}</span>
          </div>
          <span className="flex items-center gap-1.5 text-foreground/35 text-xs font-medium border border-white/8 rounded-full px-3 py-1">
            <Clock className="w-3 h-3" />
            Coming soon
          </span>
        </div>

        <h3 className="text-xl font-serif text-foreground/50 mb-2 leading-snug">{deal.title}</h3>
        <p className="text-foreground/35 text-sm font-light leading-relaxed mb-6">{deal.description}</p>

        <div className="h-11 rounded-xl bg-white/4 border border-white/6" />
      </div>
    </motion.div>
  );
}

export function Marketplace() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
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
          className="mb-16"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
            The Marketplace
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-4">
            Travel deals, <span className="italic">curated for you.</span>
          </h2>
          <p className="text-foreground/60 font-light text-lg leading-relaxed max-w-lg">
            Exclusive discount codes and partner offers — use them directly, no account needed. More deals added as we grow.
          </p>
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
          {filtered.map((deal, i) =>
            deal.kind === "active" ? (
              <ActiveDealCard key={deal.id} deal={deal} index={i} />
            ) : (
              <ComingSoonCard key={deal.id} deal={deal} index={i} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
