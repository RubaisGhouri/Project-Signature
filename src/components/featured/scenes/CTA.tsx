"use client";

export default function CTA() {
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
      {/* Ambient Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.06]
          blur-[190px]
        "
      />

      {/* Secondary Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-40
          h-[400px]
          w-[400px]
          rounded-full
          bg-violet-400/[0.045]
          blur-[150px]
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
        {/* Label */}

        <div
          className="
            mb-8
            flex
            items-center
            gap-4
          "
        >
          <span
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.4em]
              text-cyan-300/70
            "
          >
            06 / 06
          </span>

          <span
            className="
              h-px
              w-12
              bg-white/15
            "
          />

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-white/30
            "
          >
            Let&apos;s Build
          </span>
        </div>

        {/* Heading */}

        <h3
          className="
            text-5xl
            font-black
            uppercase
            leading-[0.84]
            tracking-[-0.055em]
            text-white
            sm:text-6xl
            md:text-8xl
            lg:text-[9rem]
          "
        >
          Have a
          <br />
          <span className="text-white/25">
            project?
          </span>
        </h3>

        {/* Description */}

        <p
          className="
            mt-8
            max-w-xl
            text-sm
            leading-relaxed
            text-white/40
            sm:text-base
          "
        >
          Let&apos;s turn your idea into a digital
          experience that looks sharp, feels
          intentional and performs.
        </p>

        {/* CTA */}

        <a
          href="#contact"
          className="
            group
            mt-10
            inline-flex
            items-center
            gap-4
            rounded-full
            border
            border-white/15
            bg-white/[0.04]
            px-6
            py-3
            text-xs
            font-medium
            uppercase
            tracking-[0.25em]
            text-white/80
            backdrop-blur-sm
            transition-all
            duration-500
            hover:border-cyan-300/40
            hover:bg-cyan-300/[0.06]
            hover:text-white
          "
        >
          Start a Conversation

          <span
            className="
              text-base
              text-cyan-300/70
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            ↗
          </span>
        </a>

        {/* Bottom Indicator */}

        <div
          className="
            mt-12
            flex
            items-center
            gap-3
            text-[9px]
            uppercase
            tracking-[0.35em]
            text-white/20
          "
        >
          <span
            className="
              h-px
              w-8
              bg-white/10
            "
          />

          <span>
            End of Selected Work
          </span>

          <span
            className="
              h-px
              w-8
              bg-white/10
            "
          />
        </div>
      </div>
    </div>
  );
}