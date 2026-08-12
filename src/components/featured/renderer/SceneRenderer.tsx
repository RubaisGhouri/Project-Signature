"use client";

import { sceneRegistry } from "./sceneRegistry";

export default function SceneRenderer() {
  return (
    <div
      data-scene-renderer
      className="
        relative
        h-full
        w-full
        overflow-hidden
      "
    >
      {sceneRegistry.map(
        ({ id, component: Scene }, index) => (
          <div
            key={id}
            data-scene-id={id}
            className="
              absolute
              inset-0
              h-full
              w-full
              overflow-hidden
              will-change-transform
            "
            style={{
              opacity: index === 0 ? 1 : 0,
              pointerEvents:
                index === 0 ? "auto" : "none",
              zIndex: index === 0 ? 10 : 0,
              transform:
                index === 0
                  ? "translate3d(0,0,0) scale(1)"
                  : "translate3d(0,0,0) scale(0.96)",
            }}
          >
            <Scene />
          </div>
        )
      )}
    </div>
  );
}