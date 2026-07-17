import { gsap } from "@/lib/gsap";

export function animateHeroMenu(isOpen: boolean) {
  const hero = document.querySelector("[data-page='hero']");

  if (!hero) return;

  gsap.to(hero, {
    scale: isOpen ? 0.985 : 1,
    opacity: isOpen ? 0.35 : 1,
    filter: isOpen ? "blur(6px)" : "blur(0px)",
    duration: 0.65,
    ease: "power3.inOut",
  });
}