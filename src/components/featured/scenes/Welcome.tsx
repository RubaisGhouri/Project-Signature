"use client";

export default function Welcome() {
  return (
    <div
      className="
        relative
        flex
        h-full
        w-full
        items-center
        justify-center
        overflow-hidden
        px-6
      "
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.06]
          blur-[140px]
        "
      />

      {/* Content */}

      <div
        className="
          relative
          z-10
          flex
          max-w-5xl
          flex-col
          items-center
          text-center
        "
      >
        <p
          className="
            mb-6
            text-xs
            font-medium
            uppercase
            tracking-[0.45em]
            text-cyan-300/70
          "
        >
          The Work
        </p>

        <h3
          className="
            text-5xl
            font-black
            uppercase
            leading-[0.85]
            tracking-[-0.05em]
            text-white
            sm:text-6xl
            md:text-8xl
            lg:text-[9rem]
          "
        >
          Selected
          <br />
          <span className="text-white/25">
            Work
          </span>
        </h3>

        <p
          className="
            mt-8
            max-w-xl
            text-sm
            leading-relaxed
            text-white/45
            sm:text-base
          "
        >
          A collection of digital experiences,
          interfaces and creative builds crafted
          with precision, motion and purpose.
        </p>

        <div
          className="
            mt-10
            flex
            items-center
            gap-3
            text-[10px]
            uppercase
            tracking-[0.35em]
            text-white/30
          "
        >
          <span
            className="
              h-px
              w-10
              bg-white/20
            "
          />

          <span>
            01 / 06
          </span>

          <span
            className="
              h-px
              w-10
              bg-white/20
            "
          />
        </div>
      </div>
    </div>
  );
}