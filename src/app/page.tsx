import { Metadata } from "next";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import WhyChoose from "../components/WhyChoose";
import WhyFoundersTrust from "../components/WhyFoundersTrust";
import WebDevelopmentProcess from "../components/WebDevelopmentProcess";
import TechStack from "../components/TechStack";
import CoreExpertise from "../components/CoreExpertise";
import WebDevelopmentPromise from "../components/WebDevelopmentPromise";
import MobileAppPromise from "../components/MobileAppPromise";
import MVPDevelopmentPromise from "../components/MVPDevelopmentPromise";
import FullStackPromise from "../components/FullStackPromise";
import BlogCTA from "../components/BlogCTA";
import Features from "../components/Features";
import PricingCTA from "../components/PricingCTA";
import StructuredData from "../components/StructuredData";
import { structuredDataSchemas } from "../lib/seo";
import GA4TestComponent from "../components/GA4TestComponent";

export const metadata: Metadata = {
  title: "WP Development - Professional Web & Mobile App Development Services",
  description:
    "Leading web and mobile app development company. Expert React, Next.js, Flutter, iOS, Android development. Custom software solutions, MVP development, and full-stack services for modern businesses.",
  keywords:
    "web development company, mobile app development, React development, Next.js, Flutter, iOS app development, Android development, custom software, MVP development, full-stack development",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "WP Development - Professional Web & Mobile App Development Services",
    description:
      "Leading web and mobile app development company. Expert React, Next.js, Flutter solutions for modern businesses.",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "WP Development - Professional Development Services",
      },
    ],
  },
};

export default function Home() {
  // Structured data for homepage
  const homepageStructuredData = [
    structuredDataSchemas.organization,
    structuredDataSchemas.website,
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "WP Development",
      description: "Professional web and mobile app development services",
      url: "https://www.websiteprogrammingdevelopment.com",
      telephone: "+1-XXX-XXX-XXXX",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Global",
        addressCountry: "Worldwide",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "0",
        longitude: "0",
      },
      openingHours: "Mo-Fr 09:00-18:00",
      serviceArea: {
        "@type": "Place",
        name: "Worldwide",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "WP Development Services",
      description: "Comprehensive web and mobile app development services",
      provider: {
        "@type": "Organization",
        name: "WP Development",
      },
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web Development",
              description: "Custom web application development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mobile App Development",
              description: "iOS and Android app development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "MVP Development",
              description: "Minimum viable product development",
            },
          },
        ],
      },
    },
  ];

  return (
    <>
      <StructuredData data={homepageStructuredData} />
      <Hero />
      <Stats />
      {/* Temporary GA4 Testing Component - Remove after testing */}
      <div className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <GA4TestComponent />
        </div>
      </div>
      <WhyChoose />
      <WhyFoundersTrust />
      <WebDevelopmentProcess />
      <TechStack />
      <CoreExpertise />
      <WebDevelopmentPromise />
      <MobileAppPromise />
      <MVPDevelopmentPromise />
      <FullStackPromise />
      <BlogCTA />
      <Features />
      <PricingCTA />
    </>
  );
}
