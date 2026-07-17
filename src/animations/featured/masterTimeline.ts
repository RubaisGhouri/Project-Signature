import { gsap } from "@/lib/gsap";

export function animateFeaturedProjects(section: HTMLElement) {
  return gsap.context(() => {
    const cards = gsap.utils.toArray<HTMLElement>("[data-project-card]");

    if (!cards.length) return;

    gsap.set(cards, {
      scale: 0.72,
      opacity: 0,
      rotationX: -18,
      rotationY: 8,
      z: -500,
      transformOrigin: "center center",
    });

    gsap.set(cards[0], {
      scale: 1,
      opacity: 1,
      rotationX: 0,
      rotationY: 0,
      z: 0,
    });

    const tl = gsap.timeline({
      defaults: {
        ease: "power4.inOut",
      },
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${cards.length * 1800}`,
        pin: true,
        scrub: 1.2,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    cards.forEach((card, index) => {
      if (index === 0) return;

      const previous = cards[index - 1];

      tl.to(previous, {
        scale: 0.82,
        opacity: 0.25,
        y: -180,
        z: -300,
        rotationX: 16,
        rotationZ: -4,
        filter: "blur(8px)",
        duration: 1,
      });

      tl.fromTo(
        card,
        {
          opacity: 0,
          scale: 1.35,
          y: 260,
          z: -700,
          rotationX: -25,
          rotationY: 10,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          z: 0,
          rotationX: 0,
          rotationY: 0,
          duration: 1,
        },
        "<"
      );

      tl.to(
        card,
        {
          rotationZ: 1.2,
          repeat: 1,
          yoyo: true,
          duration: 0.35,
        },
        "<+0.25"
      );
    });
  }, section);
}