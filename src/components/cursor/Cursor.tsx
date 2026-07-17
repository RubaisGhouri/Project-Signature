"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function Cursor() {
  const [mounted, setMounted] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;

    let visible = false;
    let started = false;

    let animationId = 0;

    gsap.set([dot, ring], {
      opacity: 0,
    });

    const render = () => {
      if (!started) return;

      gsap.set(dot, {
        x: mouseX - 5,
        y: mouseY - 5,
      });

      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      gsap.set(ring, {
        x: ringX - 20,
        y: ringY - 20,
      });

      animationId = requestAnimationFrame(render);
    };

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!visible) {
        visible = true;

        ringX = mouseX;
        ringY = mouseY;

        gsap.set(dot, {
          x: mouseX - 5,
          y: mouseY - 5,
        });

        gsap.set(ring, {
          x: mouseX - 20,
          y: mouseY - 20,
        });

        gsap.to([dot, ring], {
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      }

      if (!started) {
        started = true;
        render();
      }
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMove);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      {/* Ring */}

      <div
        ref={ringRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]
          h-10
          w-10
          rounded-full
          border
          border-cyan-400/50
          backdrop-blur-sm
          opacity-0
          will-change-transform
        "
      />

      {/* Dot */}

      <div
        ref={dotRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[10000]
          h-2.5
          w-2.5
          rounded-full
          bg-cyan-400
          shadow-[0_0_14px_rgba(34,211,238,.9)]
          opacity-0
          will-change-transform
        "
      />
    </>
  );
}