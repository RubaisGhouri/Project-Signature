"use client";

export default function QuantNova() {
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
          -left-40
          top-1/2
          h-[600px]
          w-[600px]
          -translate-y-1/2
          rounded-full
          bg-violet-400/[0.07]
          blur-[170px]
        "
      />

      {/* Content */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[1440px]
          items-center
          gap-12
          lg:grid-cols-[1.15fr_1fr]
          lg:gap-20
        "
      >
        {/* Project Visual */}

        <div
          className="
            relative
            order-2
            aspect-[16/10]
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-white/[0.025]
            lg:order-1
          "
        >
          {/* Grid */}

          <div
            className="
              absolute
              inset-0
              opacity-40
            "
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(255,255,255,0.05) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(255,255,255,0.05) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "48px 48px",
            }}
          />

          {/* Dashboard */}

          <div
            className="
              absolute
              inset-[7%]
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-[#090b12]
            "
          >
            <div
              className="
                flex
                h-10
                items-center
                justify-between
                border-b
                border-white/10
                px-5
              "
            >
              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-violet-300/70
                "
              >
                QuantNova
              </span>

              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-violet-300/60
                "
              />
            </div>

            <div
              className="
                grid
                grid-cols-2
                gap-3
                p-5
              "
            >
              <div
                className="
                  col-span-2
                  h-24
                  rounded-lg
                  border
                  border-violet-300/10
                  bg-violet-300/[0.025]
                "
              />

              <div
                className="
                  h-16
                  rounded-lg
                  border
                  border-white/5
                  bg-white/[0.025]
                "
              />

              <div
                className="
                  h-16
                  rounded-lg
                  border
                  border-white/5
                  bg-white/[0.025]
                "
              />

              <div
                className="
                  col-span-2
                  h-20
                  rounded-lg
                  border
                  border-white/5
                  bg-white/[0.02]
                "
              />
            </div>
          </div>

          <span
            className="
              absolute
              bottom-5
              left-6
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-white/20
            "
          >
            QN / 002
          </span>
        </div>

        {/* Project Information */}

        <div
          className="
            order-1
            max-w-xl
            lg:order-2
          "
        >
          <div
            className="
              mb-7
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
                text-violet-300/70
              "
            >
              02 / 06
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
              Digital Platform
            </span>
          </div>

          <h3
            className="
              text-5xl
              font-black
              uppercase
              leading-[0.86]
              tracking-[-0.05em]
              text-white
              sm:text-6xl
              md:text-7xl
            "
          >
            Quant
            <br />
            <span className="text-white/25">
              Nova
            </span>
          </h3>

          <p
            className="
              mt-8
              max-w-lg
              text-sm
              leading-relaxed
              text-white/45
              sm:text-base
            "
          >
            A modern digital platform focused on
            data, analytics and intelligent financial
            experiences with a strong visual system.
          </p>

          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-2
            "
          >
            {[
              "Next.js",
              "TypeScript",
              "Dashboard",
              "Data UI",
            ].map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-3
                  py-1.5
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-white/45
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}