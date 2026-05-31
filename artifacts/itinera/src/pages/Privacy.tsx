import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-serif text-foreground mb-4">{title}</h2>
      <div className="space-y-4 text-foreground/65 font-light leading-relaxed text-sm">
        {children}
      </div>
    </div>
  );
}

export default function Privacy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navigation />

      <div className="container mx-auto px-6 max-w-3xl pt-40 pb-32">
        <Link href="/">
          <span className="inline-flex items-center text-foreground/60 hover:text-primary transition-colors text-sm mb-12 cursor-pointer group">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to home
          </span>
        </Link>

        <div className="mb-12">
          <span className="text-primary font-medium tracking-widest uppercase text-xs mb-4 block">Legal</span>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Privacy Policy</h1>
          <p className="text-foreground/50 text-sm font-light">Last updated: 31 May 2026</p>
        </div>

        <div className="w-full h-[1px] bg-white/8 mb-12" />

        <Section title="1. Introduction">
          <p>
            Itinera Inc. ("Itinera", "we", "our", or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at itinera.app (the "Site") or use our mobile application (the "App").
          </p>
          <p>
            Please read this policy carefully. If you disagree with its terms, please discontinue use of our Site and App.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p>We collect information you provide directly to us, including:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-foreground/80">Account information:</strong> name, email address, and password when you create an account.</li>
            <li><strong className="text-foreground/80">Profile information:</strong> travel preferences, style, interests, and any other information you choose to provide.</li>
            <li><strong className="text-foreground/80">AI planning inputs:</strong> prompts, queries, and conversation history you submit to the Itinera AI Planner.</li>
            <li><strong className="text-foreground/80">Communications:</strong> messages you send us, including support requests and newsletter sign-ups.</li>
          </ul>
          <p>We also collect certain information automatically when you use our services, including:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Log data (IP address, browser type, pages visited, time spent)</li>
            <li>Device information (hardware model, operating system, unique device identifiers)</li>
            <li>Usage data (features used, content viewed, interactions with the AI planner)</li>
            <li>Location information (only if you grant permission)</li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Personalise your travel recommendations and AI-generated itineraries</li>
            <li>Process transactions and send related information</li>
            <li>Send you technical notices, updates, and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Send marketing communications (where you have opted in)</li>
            <li>Monitor and analyse usage trends and improve the platform</li>
            <li>Detect and prevent fraudulent transactions and other illegal activities</li>
          </ul>
        </Section>

        <Section title="4. Sharing of Information">
          <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-foreground/80">Service providers:</strong> Third-party vendors who assist us in providing our services (e.g. cloud hosting, analytics, email delivery), bound by confidentiality obligations.</li>
            <li><strong className="text-foreground/80">AI providers:</strong> When you use the AI Planner, your prompts may be processed by our AI partner (currently Google Gemini) under their respective data processing agreements.</li>
            <li><strong className="text-foreground/80">Business transfers:</strong> In connection with any merger, sale, or acquisition of all or a portion of our assets.</li>
            <li><strong className="text-foreground/80">Legal requirements:</strong> When required by law, court order, or governmental authority.</li>
          </ul>
        </Section>

        <Section title="5. Data Retention">
          <p>
            We retain personal information for as long as necessary to provide our services and fulfil the purposes outlined in this policy, unless a longer retention period is required by law. You may request deletion of your data at any time by contacting us at privacy@itinera.app.
          </p>
        </Section>

        <Section title="6. Security">
          <p>
            We implement industry-standard security measures to protect your information, including encryption in transit (TLS) and at rest, access controls, and regular security assessments. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
          </p>
        </Section>

        <Section title="7. Your Rights">
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Access and receive a copy of your personal data</li>
            <li>Rectify inaccurate or incomplete data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to or restrict processing of your data</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time (where processing is based on consent)</li>
          </ul>
          <p>To exercise any of these rights, please contact us at privacy@itinera.app.</p>
        </Section>

        <Section title="8. Cookies">
          <p>
            We use cookies and similar tracking technologies to enhance your experience, remember your preferences, and gather usage analytics. You can control cookie settings through your browser preferences. Disabling certain cookies may affect the functionality of our services.
          </p>
        </Section>

        <Section title="9. Children's Privacy">
          <p>
            Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we learn we have collected information from a child under 13, we will delete it promptly.
          </p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of the services after changes are posted constitutes acceptance of the updated policy.
          </p>
        </Section>

        <Section title="11. Contact Us">
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <div className="bg-card/40 border border-white/8 rounded-xl p-5 mt-4">
            <p className="text-foreground/70"><strong className="text-foreground/90">Itinera Inc.</strong></p>
            <p>privacy@itinera.app</p>
          </div>
        </Section>
      </div>

      <Footer />
    </div>
  );
}
