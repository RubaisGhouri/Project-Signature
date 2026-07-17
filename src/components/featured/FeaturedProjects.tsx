"use client";

import FeaturedHeading from "./FeaturedHeading";
import FeaturedStage from "./FeaturedStage";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative bg-[#05070d]"
    >
      <FeaturedHeading />

      <FeaturedStage />
    </section>
  );
}