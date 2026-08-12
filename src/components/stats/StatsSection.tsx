"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const stats = [
  {
    value: "40+",
    label: "Projects",
  },
  {
    value: "10+",
    label: "Technologies",
  },
  {
    value: "100%",
    label: "Performance Focus",
  },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('[data-stat="item"]', {
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="
        relative
        overflow-hidden
        border-y
        border-white/[0.06]
        bg-transparent
        px-6
        py-20
        lg:px-12
        lg:py-24
      "
    >
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.04),transparent_65%)]
        "
      />

      <div
        className="
          relative
          mx-auto
          grid
          w-full
          max-w-[1200px]
          grid-cols-1
          gap-12
          sm:grid-cols-3
          sm:gap-8
        "
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            data-stat="item"
            className="
              flex
              flex-col
              items-center
              justify-center
              text-center
            "
          >
            <span
              className="
                text-5xl
                font-black
                leading-none
                tracking-[-0.04em]
                text-white
                sm:text-6xl
                lg:text-7xl
              "
            >
              {stat.value}
            </span>

            <span
              className="
                mt-4
                text-[10px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-white/40
                sm:text-xs
              "
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}