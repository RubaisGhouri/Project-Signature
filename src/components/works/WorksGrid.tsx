"use client";

import { works } from "@/data/works";
import WorkCard from "./WorkCard";

export default function WorksGrid() {
  return (
    <div
      className="
        mt-24
        grid
        gap-10
      "
    >
      {works.map((work) => (
        <WorkCard
          key={work.id}
          work={work}
        />
      ))}
    </div>
  );
}