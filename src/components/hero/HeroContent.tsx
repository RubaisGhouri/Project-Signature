import HeroBadge from "./HeroBadge";
import HeroHeading from "./HeroHeading";
import HeroDescription from "./HeroDescription";
import HeroActions from "./HeroActions";

export default function HeroContent() {
  return (
    <div
      className="
        relative
        z-10
        flex
        min-h-screen
        flex-col
        items-center
        justify-center
      "
    >
      <HeroBadge />

      <HeroHeading />

      <HeroDescription />

      <HeroActions />
    </div>
  );
}