import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-icon.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, navigate] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navHref = (anchor: string) => (isHome ? anchor : `/${anchor}`);

  const scrollTo = (id: string) => {
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-white/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <span className="flex items-center gap-2.5 cursor-pointer">
              <img src={logoIcon} alt="Itinera" className="w-8 h-8 object-contain" data-testid="img-logo" />
              <span className="font-serif italic text-2xl tracking-wide text-foreground">Itinera</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href={navHref("#discover")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 relative group"
            >
              Discover
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href={navHref("#itineraries")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 relative group"
            >
              Itineraries
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <button
              onClick={() => scrollTo("marketplace")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 relative group"
            >
              Marketplace
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
            <Link href="/journal">
              <span className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 relative group cursor-pointer">
                Journal
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
            <Button
              data-testid="button-start-planning"
              onClick={() => scrollTo("ai-planning")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 font-medium transition-all duration-300"
            >
              Start Planning
            </Button>
          </div>

          <button
            data-testid="button-mobile-menu"
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-3xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6">
              <span className="flex items-center gap-2.5">
                <img src={logoIcon} alt="Itinera" className="w-7 h-7 object-contain" />
                <span className="font-serif italic text-xl tracking-wide text-foreground">Itinera</span>
              </span>
              <button className="text-foreground" onClick={() => setMobileMenuOpen(false)}>
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center space-y-8 text-2xl font-serif">
              <a href={navHref("#discover")} onClick={() => setMobileMenuOpen(false)} className="text-foreground/90 hover:text-primary transition-colors">Discover</a>
              <a href={navHref("#itineraries")} onClick={() => setMobileMenuOpen(false)} className="text-foreground/90 hover:text-primary transition-colors">Itineraries</a>
              <button onClick={() => scrollTo("marketplace")} className="text-foreground/90 hover:text-primary transition-colors">Marketplace</button>
              <Link href="/journal"><span onClick={() => setMobileMenuOpen(false)} className="text-foreground/90 hover:text-primary transition-colors cursor-pointer">Journal</span></Link>
              <Button
                onClick={() => scrollTo("ai-planning")}
                className="bg-primary text-primary-foreground mt-4 rounded-full px-8 py-6 text-xl"
              >
                Start Planning
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
