"use client";

import { useEffect } from "react";

import WorksHeading from "./WorksHeading";
import WorksGrid from "./WorksGrid";

import { animateWorks } from "@/animations/works";

export default function Works() {
  useEffect(() => {
    animateWorks();
  }, []);

  return (
    <section
      id="works"
      className="
        relative
        py-40
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          lg:px-10
        "
      >
        <WorksHeading />

        <WorksGrid />
      </div>
    </section>
  );
}