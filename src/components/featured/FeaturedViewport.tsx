"use client";

import SceneRenderer from "./renderer/SceneRenderer";

export default function FeaturedViewport() {
  return (
    <div
      className="
        sticky
        top-0
        h-[100svh]
        min-h-[700px]
        w-full
        overflow-hidden
      "
    >
      <SceneRenderer />
    </div>
  );
}