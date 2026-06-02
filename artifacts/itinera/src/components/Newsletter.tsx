import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Check, AlertCircle } from "lucide-react";

export function Newsletter() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`${import.meta.env.BASE_URL}api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json() as { ok?: boolean; error?: string };

      if (res.ok && data.ok) {
        setStatus("success");
      } else {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection.");
      setStatus("error");
    }
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto mb-8">
            <Bell className="w-6 h-6" />
          </div>

          <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-6 block">
            Early Access
          </span>

          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Be first to know <br />
            <span className="italic text-foreground/80">when we launch.</span>
          </h2>

          <p className="text-lg text-foreground/60 font-light mb-10 leading-relaxed max-w-xl mx-auto">
            Subscribe for launch updates, early access to the full app, and exclusive deals as new partners join the marketplace.
          </p>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <p className="text-foreground font-medium">You're on the list.</p>
              <p className="text-foreground/50 text-sm font-light">We'll be in touch when it's time.</p>
            </motion.div>
          ) : (
            <>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="Your email address"
                  required
                  className="flex-1 bg-card/50 backdrop-blur-sm border border-white/10 rounded-full px-6 py-4 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                />
                <button
                  type="submit"
                  data-testid="button-subscribe"
                  disabled={status === "loading"}
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105 shrink-0 disabled:opacity-60 disabled:scale-100"
                >
                  {status === "loading" ? "Subscribing…" : "Notify me"}
                </button>
              </form>

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2 mt-4 text-red-400 text-sm"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {errorMsg}
                </motion.div>
              )}

              <p className="text-xs text-foreground/40 mt-4 font-light">
                No spam. Unsubscribe at any time.
              </p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
