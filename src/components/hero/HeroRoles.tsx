"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const roles = [
  "Creative Frontend Engineer",
  "WordPress Web Specialist",
  "Next.js Developer",
  "UI Motion Designer",
  "Creative Technologist",
];

export default function HeroRoles() {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const el = textRef.current;
    let index = 0;

    const interval = setInterval(() => {
      gsap.to(el, {
        y: -18,
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.35,
        ease: "power2.inOut",
        onComplete: () => {
          index = (index + 1) % roles.length;

          el.textContent = roles[index];

          gsap.set(el, {
            y: 18,
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
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      data-hero="roles"
      className="
        relative
        mt-6
        h-10
        w-[460px]
        overflow-hidden
        flex
        items-center
        justify-center
      "
    >
      <span
        ref={textRef}
        className="
          absolute
          whitespace-nowrap
          text-xl
          font-medium
          tracking-wide
          text-cyan-300
          will-change-transform
        "
      >
        {roles[0]}
      </span>
    </div>
  );
}