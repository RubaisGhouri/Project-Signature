"use client";

import { RefObject, useLayoutEffect } from "react";

import { animateFeaturedProjects } from "@/animations/featured/masterTimeline";

export function useFeaturedProjects(
  ref: RefObject<HTMLElement | null>
) {
  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = animateFeaturedProjects(ref.current);

    return () => {
      ctx?.revert();
    };
  }, [ref]);
}