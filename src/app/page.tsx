import Hero from "@/components/hero/Hero";
import StatsSection from "@/components/stats/StatsSection";
import { Navbar, FullscreenMenu } from "@/components/navigation";
import FeaturedProjects from "@/components/featured/FeaturedProjects";

export default function Home() {
  return (
    <>
      <Navbar />

      <FullscreenMenu />

      <Hero />

      <StatsSection />

      <FeaturedProjects />
    </>
  );
}