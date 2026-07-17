import { gsap, ScrollTrigger } from "@/lib/gsap";

gsap.registerPlugin(ScrollTrigger);

export function animateWorks() {
  const cards = gsap.utils.toArray<HTMLElement>("[data-work-card]");

  cards.forEach((card) => {
    gsap.from(card, {
      y: 100,
      opacity: 0,
      filter: "blur(10px)",
      duration: 1,
      ease: "power4.out",

      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        once: true,
      },
    });
  });
}