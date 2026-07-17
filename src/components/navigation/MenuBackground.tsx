"use client";

import { useEffect, useRef } from "react";
import { createMenuBackgroundTimeline } from "@/animations/menuBackgroundTimeline";

export default function MenuBackground() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!leftRef.current || !rightRef.current || !centerRef.current) return;

    const tl = createMenuBackgroundTimeline(
      leftRef.current,
      rightRef.current,
      centerRef.current
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      {/* Left Glow */}
      <div
        ref={leftRef}
        className="
          absolute
          left-[-260px]
          top-1/2
          h-[700px]
          w-[700px]
          -translate-y-1/2
          rounded-full
          bg-cyan-500/10
          blur-[220px]
        "
      />

      {/* Right Glow */}
      <div
        ref={rightRef}
        className="
          absolute
          right-[-260px]
          top-1/2
          h-[700px]
          w-[700px]
          -translate-y-1/2
          rounded-full
          bg-violet-500/10
          blur-[220px]
        "
      />

      {/* Center Glow */}
      <div
        ref={centerRef}
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/5
          blur-[170px]
        "
      />

      {/* Noise Layer */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          mix-blend-soft-light
          bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
          bg-[size:20px_20px]
        "
      />
    </>
  );
}