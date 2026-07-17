import { gsap } from "@/lib/gsap";

export function animateHero(container: HTMLElement) {
  const q = gsap.utils.selector(container);

  const tl = gsap.timeline({
    defaults: {
      ease: "power4.out",
    },
  });

  tl.from(q('[data-hero="badge"]'), {
    opacity: 0,
    y: 24,
    duration: 0.6,
  });

  tl.from(
    q("[data-word]"),
    {
      opacity: 0,
      y: 90,
      filter: "blur(20px)",
      stagger: 0.12,
      duration: 1,
    },
    "-=0.25"
  );

  tl.from(
    q('[data-hero="roles"]'),
    {
      opacity: 0,
      y: 30,
      duration: 0.6,
    },
    "-=0.55"
  );

  tl.from(
    q('[data-hero="description"]'),
    {
      opacity: 0,
      y: 24,
      duration: 0.6,
    },
    "-=0.45"
  );

  tl.from(
    q('[data-hero="actions"]'),
    {
      opacity: 0,
      scale: 0.94,
      y: 24,
      duration: 0.55,
    },
    "-=0.35"
  );

  tl.from(
    q('[data-hero="stats"]'),
    {
      opacity: 0,
      y: 24,
      stagger: 0.08,
      duration: 0.55,
    },
    "-=0.30"
  );

  tl.from(
    document.querySelector('[data-hero="socials"]'),
    {
      opacity: 0,
      x: -40,
      duration: 0.55,
    },
    "-=0.45"
  );

  tl.from(
    document.querySelector('[data-hero="scroll"]'),
    {
      opacity: 0,
      y: 30,
      duration: 0.55,
    },
    "-=0.45"
  );

  return tl;
}