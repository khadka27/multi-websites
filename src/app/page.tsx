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

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
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
    </main>
  );
}
