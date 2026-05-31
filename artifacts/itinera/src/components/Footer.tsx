import { Link } from "wouter";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = `/#${id}`;
  }
};

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-16">

          <div className="md:col-span-2">
            <Link href="/">
              <span className="font-serif italic text-3xl tracking-wide cursor-pointer text-foreground block mb-6">
                Itinera
              </span>
            </Link>
            <p className="text-foreground/50 font-light max-w-sm leading-relaxed text-sm">
              The new standard in intelligent travel. We build masterpieces, so you can just arrive and experience.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground mb-6 uppercase tracking-wider">Platform</h4>
            <ul className="space-y-4">
              <li>
                <button onClick={() => scrollTo("discover")} className="text-sm text-foreground/60 hover:text-primary transition-colors text-left">
                  Discover
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("itineraries")} className="text-sm text-foreground/60 hover:text-primary transition-colors text-left">
                  Curated Itineraries
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("ai-planning")} className="text-sm text-foreground/60 hover:text-primary transition-colors text-left">
                  The AI Planner
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("marketplace")} className="text-sm text-foreground/60 hover:text-primary transition-colors text-left">
                  Marketplace
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about">
                  <span className="text-sm text-foreground/60 hover:text-primary transition-colors cursor-pointer">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/journal">
                  <span className="text-sm text-foreground/60 hover:text-primary transition-colors cursor-pointer">Journal</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <span className="text-sm text-foreground/60 hover:text-primary transition-colors cursor-pointer">Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <span className="text-sm text-foreground/60 hover:text-primary transition-colors cursor-pointer">Terms of Service</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="text-xs text-foreground/40 mb-4 md:mb-0">
            © {new Date().getFullYear()} Itinera Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-foreground/40 hover:text-primary transition-colors text-sm">Instagram</a>
            <a href="#" className="text-foreground/40 hover:text-primary transition-colors text-sm">Twitter</a>
            <a href="#" className="text-foreground/40 hover:text-primary transition-colors text-sm">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
