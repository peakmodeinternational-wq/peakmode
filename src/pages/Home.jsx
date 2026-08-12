import Hero from "../components/Hero";
import ProductsSection from "../components/ProductsSection";
import PromoBanner from "../components/PromoBanner";
import FabricTech from "../components/FabricTech";
import Capabilities from "../components/Capabilities";
import ProcessSection from "../components/ProcessSection";
import Testimonials from "../components/Testimonials";
import CTABanner from "../components/CTABanner";
import FactoryFloor from "../components/FactoryFloor";
import StripDivider from "../components/StripDivider";
import Marquee from "../components/Marquee";
import { CERTIFICATIONS } from "../data/site";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={CERTIFICATIONS} reverse className="border-t-0" />
      <ProductsSection />
      <StripDivider label="Deadline campaign" />
      <PromoBanner />
      <FabricTech />
      <Capabilities />
      <StripDivider label="Production line" />
      <ProcessSection compact />
      <FactoryFloor />
      <Testimonials />
      <CTABanner />
    </>
  );
}