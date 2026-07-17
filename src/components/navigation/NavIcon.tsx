"use client";

import { useEffect, useRef } from "react";

import { useNavigationContext } from "@/providers/navigation/NavigationProvider";
import { createNavIconTimeline } from "@/animations/navIconTimeline";

export default function NavIcon() {
  const { isOpen } = useNavigationContext();

  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);

  const morphTimeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!line1Ref.current || !line2Ref.current) return;

    morphTimeline.current = createNavIconTimeline(
      line1Ref.current,
      line2Ref.current
    );

    return () => {
      morphTimeline.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (!morphTimeline.current) return;

    if (isOpen) {
      morphTimeline.current.play();
    } else {
      morphTimeline.current.reverse();
    }
  }, [isOpen]);

  return (
    <div
      className="
        relative
        h-5
        w-8
      "
    >
      <span
        ref={line1Ref}
        className="
          absolute
          left-0
          top-[6px]
          h-[2px]
          w-8
          rounded-full
          bg-white
          will-change-transform
        "
      />

      <span
        ref={line2Ref}
        className="
          absolute
          left-0
          top-[16px]
          h-[2px]
          w-8
          rounded-full
          bg-white
          will-change-transform
        "
      />
    </div>
  );
}