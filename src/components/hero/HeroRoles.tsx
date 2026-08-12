"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const roles = [
  "WordPress Web Specialist",
  "Next.js Developer",
  "Creative Technologist",
  "UI Motion Designer",
  "Premium Web Experiences",
];

export default function HeroRoles() {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const el = textRef.current;

    let index = 0;

    const interval = setInterval(() => {
      gsap.to(el, {
        y: -20,
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.35,
        ease: "power2.inOut",
        onComplete: () => {
          index = (index + 1) % roles.length;

          el.textContent = roles[index];

          gsap.set(el, {
            y: 20,
            opacity: 0,
            filter: "blur(8px)",
          });

          gsap.to(el, {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.45,
            ease: "power3.out",
          });
        },
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      data-hero="roles"
      className="
        relative
        mt-8
        flex
        h-12
        w-full
        items-center
        justify-center
        overflow-hidden
      "
    >
      <span
        ref={textRef}
        className="
          absolute
          whitespace-nowrap
          text-center
          text-lg
          font-medium
          tracking-[0.2em]
          uppercase
          text-cyan-300
          will-change-transform
          sm:text-xl
          lg:text-2xl
        "
      >
        {roles[0]}
      </span>
    </div>
  );
}