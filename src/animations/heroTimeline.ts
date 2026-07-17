import { gsap } from "@/lib/gsap";

export function createHeroTimeline(hero: HTMLElement) {
  const badge = hero.querySelector('[data-hero="badge"]');
  const title = hero.querySelector('[data-hero="title"]');
  const roles = hero.querySelector('[data-hero="roles"]');
  const description = hero.querySelector('[data-hero="description"]');
  const cta = hero.querySelector('[data-hero="cta"]');
  const socials = hero.querySelector('[data-hero="socials"]');
  const scroll = hero.querySelector('[data-hero="scroll"]');

  return gsap
    .timeline({
      defaults: {
        ease: "power4.out",
      },
    })

    .from(badge, {
      y: 40,
      opacity: 0,
      duration: 0.6,
    })

    .from(
      title,
      {
        y: 80,
        opacity: 0,
        filter: "blur(20px)",
        duration: 1,
      },
      "-=0.2"
    )

    .from(
      roles,
      {
        y: 40,
        opacity: 0,
        duration: 0.6,
      },
      "-=0.5"
    )

    .from(
      description,
      {
        y: 40,
        opacity: 0,
        duration: 0.6,
      },
      "-=0.4"
    )

    .from(
      cta,
      {
        scale: 0.92,
        opacity: 0,
        duration: 0.6,
      },
      "-=0.35"
    )

    .from(
      socials,
      {
        y: 30,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
      },
      "-=0.4"
    )

    .from(
      scroll,
      {
        y: 25,
        opacity: 0,
        duration: 0.6,
      },
      "-=0.3"
    );
}