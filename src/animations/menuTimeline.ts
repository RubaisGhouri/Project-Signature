import { gsap } from "@/lib/gsap";

export function createMenuTimeline(menu: HTMLElement) {
  const items = menu.querySelectorAll("[data-menu-item]");
  const footer = menu.querySelector("[data-menu='footer']");

  const tl = gsap.timeline({
    paused: true,
    defaults: {
      ease: "power4.out",
    },
  });

  tl.set(menu, {
    display: "block",
    pointerEvents: "auto",
  });

  tl.fromTo(
    menu,
    {
      opacity: 0,
      backdropFilter: "blur(0px)",
    },
    {
      opacity: 1,
      backdropFilter: "blur(22px)",
      duration: 0.45,
    }
  );

  tl.fromTo(
    items,
    {
      opacity: 0,
      y: 70,
      filter: "blur(12px)",
    },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      stagger: 0.08,
      duration: 0.7,
    },
    "-=0.15"
  );

  if (footer) {
    tl.fromTo(
      footer,
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
      },
      "-=0.25"
    );
  }

  return tl;
}