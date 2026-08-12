"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

import Aurora from "@/components/effects/Aurora";
import Glow from "@/components/effects/Glow";
import Grid from "@/components/effects/Grid";
import Noise from "@/components/effects/Noise";

import HeroBadge from "./HeroBadge";
import HeroHeading from "./HeroHeading";
import HeroRoles from "./HeroRoles";
import HeroDescription from "./HeroDescription";
import HeroScrollIndicator from "./HeroScrollIndicator";
import HeroSocial from "./HeroSocial";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from('[data-hero="badge"]', {
        y: 24,
        opacity: 0,
        duration: 0.45,
      })
        .from(
          "[data-heading-line]",
          {
            yPercent: 100,
            opacity: 0,
            stagger: 0.1,
            duration: 0.7,
          },
          "-=0.15"
        )
        .from(
          '[data-hero="roles"]',
          {
            y: 18,
            opacity: 0,
            duration: 0.4,
          },
          "-=0.3"
        )
        .from(
          '[data-hero="description"]',
          {
            y: 18,
            opacity: 0,
            duration: 0.45,
          },
          "-=0.2"
        )
        .from(
          '[data-hero="social"]',
          {
            x: -20,
            opacity: 0,
            duration: 0.45,
          },
          "-=0.2"
        )
        .from(
          '[data-hero="scroll-indicator"]',
          {
            opacity: 0,
            y: 12,
            duration: 0.4,
          },
          "-=0.2"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="
        relative
        min-h-screen
        overflow-hidden
      "
    >
      {/* Background Effects */}

      <div className="pointer-events-none absolute inset-0 z-0">
        <Aurora />
        <Glow />
        <Grid />
        <Noise />
      </div>

      {/* Hero Content */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1440px]
          flex-col
          items-center
          px-6
          pb-32
          pt-[170px]
          text-center
          lg:px-12
          lg:pt-[185px]
        "
      >
        <HeroBadge />

        <HeroHeading />

        <HeroRoles />

        <div className="mt-2">
          <HeroDescription />
        </div>
      </div>

      {/* Social Links */}

      <HeroSocial />

      {/* Scroll Indicator */}

      <HeroScrollIndicator />
    </section>
  );
}