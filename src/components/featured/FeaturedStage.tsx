"use client";

import { useRef } from "react";

import FeaturedViewport from "./FeaturedViewport";

import { useFeaturedProjects } from "@/hooks/featured/useFeaturedProjects";

export default function FeaturedStage() {
  const sectionRef = useRef<HTMLElement>(null);

  useFeaturedProjects(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-screen
        overflow-hidden
      "
    >
      <FeaturedViewport />
    </section>
  );
}