import { gsap } from "@/lib/gsap";
import { motion } from "@/design-system/motion";

export function createHeroTimeline(container: HTMLElement) {
  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
  });

  tl.from(
    container.querySelector('[data-hero="badge"]'),
    {
      opacity: 0,
      y: 24,
      duration: 0.5,
    }
  );

  tl.from(
    container.querySelectorAll("[data-word]"),
    {
      opacity: 0,
      y: 70,
      rotateX: -80,
      stagger: 0.08,
      duration: 0.9,
    },
    "-=0.15"
  );

  tl.from(
    container.querySelector('[data-hero="description"]'),
    {
      opacity: 0,
      y: 20,
      duration: 0.5,
    },
    "-=0.3"
  );

  tl.from(
  container.querySelector('[data-hero="roles"]'),
  {
    opacity: 0,
    y: 24,
    duration: motion.duration.normal,
    ease: motion.ease.primary,
  },
  "-=0.5"
);

tl.from(
  container.querySelector('[data-hero="stats"]'),
  {
    opacity: 0,
    y: 30,
    duration: motion.duration.normal,
    ease: motion.ease.primary,
  },
  "-=0.2"
);

  tl.from(
    container.querySelector('[data-hero="actions"]'),
    {
      opacity: 0,
      scale: 0.94,
      duration: 0.45,
    },
    "-=0.25"
  );

  return tl;
}