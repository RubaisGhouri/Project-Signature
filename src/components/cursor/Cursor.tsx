"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dot.current || !ring.current) return;

    const dotX = gsap.quickTo(dot.current, "x", {
      duration: 0.08,
      ease: "power3.out",
    });

    const dotY = gsap.quickTo(dot.current, "y", {
      duration: 0.08,
      ease: "power3.out",
    });

    const ringX = gsap.quickTo(ring.current, "x", {
      duration: 0.25,
      ease: "power3.out",
    });

    const ringY = gsap.quickTo(ring.current, "y", {
      duration: 0.25,
      ease: "power3.out",
    });

    const handleMouseMove = (e: MouseEvent) => {
      dotX(e.clientX);
      dotY(e.clientY);

      ringX(e.clientX);
      ringY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={ring}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]
          h-10
          w-10
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-cyan-400/60
        "
      />

      <div
        ref={dot}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]
          h-2.5
          w-2.5
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400
        "
      />
    </>
  );
}