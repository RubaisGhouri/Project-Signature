"use client";

import { RefObject, useEffect } from "react";
import { gsap } from "@/lib/gsap";

export function useMagnetic(
  ref: RefObject<HTMLElement | null>,
  strength = 0.35
) {
  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const move = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();

      const x =
        e.clientX - rect.left - rect.width / 2;

      const y =
        e.clientY - rect.top - rect.height / 2;

      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: 0.45,
        ease: "power3.out",
      });
    };

    const leave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1,0.35)",
      });
    };

    element.addEventListener("mousemove", move);
    element.addEventListener("mouseleave", leave);

    return () => {
      element.removeEventListener("mousemove", move);
      element.removeEventListener("mouseleave", leave);
    };
  }, [ref, strength]);
}