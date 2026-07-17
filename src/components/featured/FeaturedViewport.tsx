"use client";

import ProjectScene from "./ProjectScene";

export default function FeaturedViewport() {
  return (
    <div
      className="
        relative
        flex
        h-full
        w-full
        items-center
        justify-center
        overflow-hidden
      "
    >
      <ProjectScene />
    </div>
  );
}