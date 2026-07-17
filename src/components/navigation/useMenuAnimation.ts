"use client";

import { useLayoutEffect } from "react";
import { createMenuTimeline } from "@/animations/menuTimeline";

export function useMenuAnimation() {
  useLayoutEffect(() => {
    const tl = createMenuTimeline();

    return () => {
      tl.kill();
    };
  }, []);
}