"use client";

import { useRef } from "react";

import { useHeroAnimation } from "@/hooks/useHeroAnimation";

import HeroBadge from "./HeroBadge";
import HeroHeading from "./HeroHeading";
import HeroDescription from "./HeroDescription";
import HeroActions from "./HeroActions";
import HeroRoles from "./HeroRoles";
import HeroStats from "./HeroStats";
import HeroSocial from "./HeroSocial";
import ScrollIndicator from "./ScrollIndicator";

export default function HeroContent() {
  const heroRef = useRef<HTMLDivElement>(null);

  useHeroAnimation(heroRef);

  return (
    <div
      ref={heroRef}
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

      <HeroRoles />

      <HeroDescription />

      <HeroActions />

      <HeroStats />

      <HeroSocial />

      <ScrollIndicator />
    </div>
  );
}