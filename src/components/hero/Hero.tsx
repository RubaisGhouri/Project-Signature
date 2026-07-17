import Container from "@/components/layout/Container";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroSocial from "./HeroSocial";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section  data-page="hero"
  className="
    relative
    isolate
    min-h-screen
    overflow-hidden
    bg-[#05070d]
    pt-20
    ">
      <HeroBackground />

      <HeroSocial />

      <Container>
        <HeroContent />
      </Container>

      <ScrollIndicator />
    </section>
  );
}