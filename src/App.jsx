import React from 'react';
import {
  CheckCircle2,
  Clock3,
  HeartHandshake,
  MessageCircle,
  PhoneCall,
  Sparkles,
  Star,
  ArrowRight,
  ShieldCheck,
  MapPin,
  ChevronRight,
  Menu,
  X,
} from 'lucide-react';
import { beforeAfter, testimonials, steps, benefits, pricing } from './data/landingData';
import { useStickyVisibility } from './hooks/useStickyVisibility';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { Reviews } from './components/Reviews';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

/**
 * Main landing page component for lip blushing services.
 * Renders header, hero, benefits, process, pricing, reviews, CTA, and footer sections.
 */
export default function LandingPage() {
  const stickyVisible = useStickyVisibility();

  const navItems = [
    ['Benefits', '#benefits'],
    ['Process', '#process'],
    ['Pricing', '#pricing'],
    ['Reviews', '#reviews'],
  ];

  return (
    <div className="min-h-screen bg-[#f8f4f1] text-[#1d1d1f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BeautySalon',
            name: "Elora's PMU & Korean Esthetics",
            areaServed: 'Delhi, India',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Delhi',
              addressCountry: 'IN',
            },
            telephone: '+91 98776 95827',
            url: 'https://www.eloraspmu.com/',
            sameAs: ['https://www.instagram.com/'],
            serviceType: 'Lip Blushing',
          }),
        }}
      />

      <Header navItems={navItems} />
      <Hero beforeAfter={beforeAfter} />
      <Benefits benefits={benefits} />
      <Process steps={steps} />
      <Pricing pricing={pricing} />
      <Reviews testimonials={testimonials} />
      <CTA />
      <Footer />
      <StickyCTA stickyVisible={stickyVisible} />
    </div>
  );
}
