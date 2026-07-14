"use client";

import { RefObject, useEffect } from "react";
import { gsap } from "@/lib/gsap";

export default function useGSAPReveal(
  ref: RefObject<HTMLElement | null>
) {
  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, [ref]);
}