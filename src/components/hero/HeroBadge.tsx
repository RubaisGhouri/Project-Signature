"use client";

export default function HeroBadge() {
  return (
    <div
      data-hero="badge"
      className="
        mb-8
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-cyan-400/20
        bg-cyan-400/5
        px-5
        py-2
        backdrop-blur-md
      "
    >
      <span
        className="
          h-2
          w-2
          rounded-full
          bg-cyan-300
        "
      />

      <span
        className="
          text-xs
          font-medium
          uppercase
          tracking-[0.3em]
          text-cyan-300
        "
      >
        Project Signature
      </span>
    </div>
  );
}