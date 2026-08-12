"use client";

import FeaturedHeading from "./FeaturedHeading";
import FeaturedStage from "./FeaturedStage";

export default function FeaturedProjects() {
  return (
    <section
      id="featured-projects"
      className="
        relative
        w-full
        overflow-hidden
      "
    >
      <FeaturedHeading />

      <FeaturedStage />
    </section>
  );
}