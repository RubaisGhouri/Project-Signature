import { gsap } from "@/lib/gsap";

export function createHeroTimeline(container: HTMLElement) {
  const tl = gsap.timeline();

  tl.from(
    container.querySelector('[data-hero="badge"]'),
    {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power3.out",
    }
  );

  tl.from(
    container.querySelectorAll("[data-word]"),
    {
      opacity: 0,
      y: 80,
      rotateX: -90,
      stagger: 0.12,
      duration: 1,
      ease: "power4.out",
    },
    "-=0.2"
  );

  tl.from(
    container.querySelector('[data-hero="description"]'),
    {
      opacity: 0,
      y: 30,
      duration: 0.7,
    },
    "-=0.4"
  );

  return tl;
}