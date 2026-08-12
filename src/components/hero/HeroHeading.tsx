"use client";

export default function HeroHeading() {
  return (
    <div
      className="
        relative
        mt-6
        w-full
        overflow-hidden
      "
    >
      <h1
        className="
          mx-auto
          max-w-[1200px]
          text-center
          text-[clamp(4rem,9vw,8.5rem)]
          font-black
          uppercase
          leading-[0.82]
          tracking-[-0.055em]
          text-white
        "
      >
        <span className="block overflow-hidden">
          <span
            data-heading-line
            className="block"
          >
            Creative Frontend
          </span>
        </span>

        <span className="block overflow-hidden">
          <span
            data-heading-line
            className="block"
          >
            Engineer
          </span>
        </span>
      </h1>
    </div>
  );
}