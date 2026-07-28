"use client";

import SceneRenderer from "./renderer/SceneRenderer";

export default function FeaturedViewport() {
  return (
    <div
      className="
        relative
        h-full
        w-full
        overflow-hidden
      "
    >
      <SceneRenderer />
    </div>
  );
}