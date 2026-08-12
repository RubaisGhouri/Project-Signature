"use client";

const principles = [
  "Clarity",
  "Precision",
  "Motion",
];

export default function Philosophy() {
  return (
    <div
      className="
        relative
        flex
        h-full
        w-full
        items-center
        overflow-hidden
        px-6
        lg:px-16
      "
    >
      {/* Ambient Glow */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-250px]
          top-1/2
          h-[700px]
          w-[700px]
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.045]
          blur-[180px]
        "
      />

      {/* Content */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
        "
      >
        {/* Label */}

        <div
          className="
            mb-10
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
            05 / 06
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
            Philosophy
          </span>
        </div>

        {/* Main Statement */}

        <div
          className="
            grid
            gap-12
            lg:grid-cols-[1.35fr_0.65fr]
            lg:gap-20
          "
        >
          <div>
            <h3
              className="
                max-w-5xl
                text-5xl
                font-black
                uppercase
                leading-[0.88]
                tracking-[-0.055em]
                text-white
                sm:text-6xl
                md:text-7xl
                lg:text-[6.5rem]
              "
            >
              Design with
              <br />
              <span className="text-white/25">
                intention.
              </span>
            </h3>

            <p
              className="
                mt-8
                max-w-2xl
                text-sm
                leading-relaxed
                text-white/40
                sm:text-base
              "
            >
              Good digital experiences should feel
              effortless. Every interaction, transition
              and visual decision has a purpose — nothing
              exists simply for decoration.
            </p>
          </div>

          {/* Principles */}

          <div
            className="
              flex
              flex-col
              justify-end
              border-t
              border-white/10
              lg:border-t-0
              lg:border-l
              lg:pl-10
            "
          >
            {principles.map((principle, index) => (
              <div
                key={principle}
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  py-5
                "
              >
                <span
                  className="
                    text-lg
                    font-medium
                    uppercase
                    tracking-[-0.02em]
                    text-white/70
                  "
                >
                  {principle}
                </span>

                <span
                  className="
                    text-[9px]
                    tracking-[0.25em]
                    text-white/20
                  "
                >
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}