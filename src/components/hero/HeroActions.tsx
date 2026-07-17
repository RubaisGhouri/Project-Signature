import { heroData } from "@/data/hero";

import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";

import Magnetic from "@/components/magnetic/Magnetic";

export default function HeroActions() {
  return (
    <div
      data-hero="actions"
      className="
        mt-10
        flex
        flex-wrap
        items-center
        justify-center
        gap-4
      "
    >
      <Magnetic strength={0.35}>
        <PrimaryButton href={heroData.primaryButton.href}>
          {heroData.primaryButton.label}
        </PrimaryButton>
      </Magnetic>

      <Magnetic strength={0.35}>
        <SecondaryButton href={heroData.secondaryButton.href}>
          {heroData.secondaryButton.label}
        </SecondaryButton>
      </Magnetic>
    </div>
  );
}