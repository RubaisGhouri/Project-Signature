import { gsap } from "@/lib/gsap";

export function createNavIconTimeline(
  line1: HTMLSpanElement,
  line2: HTMLSpanElement
) {
  return gsap.timeline({
    paused: true,
    defaults: {
      duration: 0.45,
      ease: "power4.inOut",
    },
  })
  .to(
    line1,
    {
      y: 5,
      rotate: 45,
      transformOrigin: "center center",
    },
    0
  )
  .to(
    line2,
    {
      y: -5,
      rotate: -45,
      transformOrigin: "center center",
    },
    0
  );
}