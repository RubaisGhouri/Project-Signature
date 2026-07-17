import { gsap } from "@/lib/gsap";

export function createMenuBackgroundTimeline(
  leftGlow: HTMLDivElement,
  rightGlow: HTMLDivElement,
  centerGlow: HTMLDivElement
) {
  const tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
    defaults: {
      ease: "sine.inOut",
      duration: 6,
    },
  });

  tl.to(
    leftGlow,
    {
      x: 40,
      y: -25,
      scale: 1.08,
    },
    0
  )
    .to(
      rightGlow,
      {
        x: -35,
        y: 30,
        scale: 1.1,
      },
      0
    )
    .to(
      centerGlow,
      {
        scale: 1.15,
        opacity: 0.7,
      },
      0
    );

  return tl;
}