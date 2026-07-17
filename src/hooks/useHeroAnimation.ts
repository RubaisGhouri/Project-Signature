"use client";

import { useLayoutEffect, RefObject } from "react";
import { animateHero } from "@/animations/hero";

export function useHeroAnimation(
  ref: RefObject<HTMLElement | null>
) {
  useLayoutEffect(() => {
    if (!ref.current) return;

    const tl = animateHero(ref.current);

    return () => {
      tl.kill();
    };
  }, [ref]);
}