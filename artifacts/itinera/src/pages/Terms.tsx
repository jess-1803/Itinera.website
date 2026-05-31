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

export default function Terms() {
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
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Terms of Service</h1>
          <p className="text-foreground/50 text-sm font-light">Last updated: 31 May 2026</p>
        </div>

        <div className="w-full h-[1px] bg-white/8 mb-12" />

        <Section title="1. Acceptance of Terms">
          <p>
            By accessing or using the Itinera website (itinera.app) or mobile application (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.
          </p>
          <p>
            These Terms constitute a legally binding agreement between you and Itinera Inc. ("Itinera", "we", "our", or "us"). We reserve the right to update these Terms at any time. Continued use of the Services following notice of changes constitutes acceptance.
          </p>
        </Section>

        <Section title="2. Description of Services">
          <p>
            Itinera is a travel discovery and planning platform that provides:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>AI-powered itinerary generation and travel planning tools</li>
            <li>Curated travel content, editorial articles, and destination guides</li>
            <li>A marketplace of travel-related deals, discounts, and affiliate offers from third-party partners</li>
            <li>Mobile application with map, places, and planning features</li>
          </ul>
          <p>
            Itinera is a discovery and planning platform only. We do not directly sell or book travel products (flights, hotels, activities) unless otherwise stated. Transactions with third-party partners are subject to those partners' own terms.
          </p>
        </Section>

        <Section title="3. User Accounts">
          <p>
            Some features of our Services require you to create an account. You agree to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide accurate, current, and complete information during registration</li>
            <li>Maintain the security of your password and account credentials</li>
            <li>Notify us immediately of any unauthorised use of your account</li>
            <li>Accept responsibility for all activities that occur under your account</li>
          </ul>
          <p>
            We reserve the right to suspend or terminate accounts that violate these Terms, engage in fraudulent activity, or pose a security risk.
          </p>
        </Section>

        <Section title="4. AI Planner — Acceptable Use">
          <p>
            Itinera's AI Planner is powered by large language model technology. By using the AI Planner, you acknowledge and agree that:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>AI-generated itineraries are suggestions only and may not reflect current conditions (closures, prices, availability)</li>
            <li>You are responsible for verifying all travel information before making bookings or decisions</li>
            <li>You will not use the AI Planner to generate content that is harmful, illegal, or deceptive</li>
            <li>Your inputs may be processed by third-party AI providers subject to their data policies</li>
          </ul>
        </Section>

        <Section title="5. Marketplace & Affiliate Deals">
          <p>
            The Itinera Marketplace lists deals, discounts, and offers from third-party travel partners. By clicking through to or purchasing from a partner:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>You enter into a direct relationship with that partner, not with Itinera</li>
            <li>Itinera may receive a referral commission or affiliate fee at no cost to you</li>
            <li>We do not guarantee partner pricing, availability, or service quality</li>
            <li>Disputes with partners must be resolved directly with those partners</li>
          </ul>
          <p>
            We curate marketplace partners carefully, but we are not liable for the content, accuracy, or conduct of third-party partners.
          </p>
        </Section>

        <Section title="6. Intellectual Property">
          <p>
            All content on the Services — including text, images, logos, editorial articles, itineraries, and the Itinera brand — is owned by or licensed to Itinera Inc. and is protected by copyright and other intellectual property laws.
          </p>
          <p>
            You may not reproduce, distribute, modify, or create derivative works from our content without our express written permission, except for personal, non-commercial use.
          </p>
        </Section>

        <Section title="7. User Content">
          <p>
            If you submit any content to our Services (reviews, itinerary modifications, feedback), you grant Itinera a non-exclusive, royalty-free, worldwide licence to use, display, and distribute that content in connection with providing and improving the Services.
          </p>
          <p>
            You represent that you have the rights to any content you submit and that it does not infringe any third-party rights.
          </p>
        </Section>

        <Section title="8. Prohibited Conduct">
          <p>You agree not to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Use the Services for any unlawful purpose or in violation of these Terms</li>
            <li>Attempt to reverse engineer, scrape, or extract data from our Services at scale</li>
            <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
            <li>Upload or transmit viruses or any other malicious code</li>
            <li>Use automated tools or bots to access the Services without our prior written consent</li>
          </ul>
        </Section>

        <Section title="9. Disclaimers">
          <p>
            THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, ITINERA DISCLAIMS ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <p>
            We do not warrant that the Services will be uninterrupted, error-free, or free of harmful components.
          </p>
        </Section>

        <Section title="10. Limitation of Liability">
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ITINERA SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICES.
          </p>
          <p>
            In no event shall Itinera's aggregate liability exceed the greater of (a) the amount you paid to Itinera in the twelve months preceding the claim, or (b) £100.
          </p>
        </Section>

        <Section title="11. Governing Law">
          <p>
            These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>
        </Section>

        <Section title="12. Contact">
          <p>
            For questions about these Terms, please contact:
          </p>
          <div className="bg-card/40 border border-white/8 rounded-xl p-5 mt-4">
            <p className="text-foreground/70"><strong className="text-foreground/90">Itinera Inc.</strong></p>
            <p>legal@itinera.app</p>
          </div>
        </Section>
      </div>

      <Footer />
    </div>
  );
}
