import Grid from "@/components/effects/Grid";
import Glow from "@/components/effects/Glow";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-[#05070d]" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,255,255,0.08),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(70,90,255,0.08),transparent_45%)]" />

      {/* Grid */}
      <Grid />

      {/* Glow */}
      <Glow />
    </div>
  );
}