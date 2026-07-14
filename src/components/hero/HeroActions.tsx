import { heroData } from "@/data/hero";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";

export default function HeroActions() {
  return (
    <div 
    data-hero="actions"
    className="mt-10 flex flex-wrap items-center justify-center gap-4">
      <PrimaryButton href={heroData.primaryButton.href}>
        {heroData.primaryButton.label}
      </PrimaryButton>

      <SecondaryButton href={heroData.secondaryButton.href}>
        {heroData.secondaryButton.label}
      </SecondaryButton>
    </div>
  );
}