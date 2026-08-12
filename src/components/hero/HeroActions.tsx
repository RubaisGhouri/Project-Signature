"use client";

import Link from "next/link";

export default function HeroActions() {
  return (
    <div
      data-hero="actions"
      className="
        mt-12
        flex
        flex-col
        items-center
        gap-4
        sm:flex-row
      "
    >
      <Link
        href="#contact"
        className="
          inline-flex
          h-14
          items-center
          justify-center
          rounded-full
          bg-cyan-300
          px-8
          text-sm
          font-semibold
          uppercase
          tracking-[0.2em]
          text-black
          transition-all
          duration-300
          hover:-translate-y-1
          hover:scale-[1.02]
          hover:shadow-[0_0_40px_rgba(34,211,238,.35)]
        "
      >
        Let's Talk
      </Link>

      <Link
        href="#projects"
        className="
          inline-flex
          h-14
          items-center
          justify-center
          rounded-full
          border
          border-white/15
          bg-white/5
          px-8
          text-sm
          font-semibold
          uppercase
          tracking-[0.2em]
          text-white
          backdrop-blur-md
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-cyan-300/40
          hover:bg-cyan-300/10
        "
      >
        View Projects
      </Link>
    </div>
  );
}