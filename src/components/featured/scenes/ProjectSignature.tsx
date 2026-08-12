"use client";

export default function ProjectSignature() {
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
          -right-40
          top-1/2
          h-[600px]
          w-[600px]
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.07]
          blur-[160px]
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
          lg:grid-cols-[1fr_1.15fr]
          lg:gap-20
        "
      >
        {/* Project Information */}

        <div className="max-w-xl">
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
                text-cyan-300/70
              "
            >
              01 / 06
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
              Personal Portfolio
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
            Project
            <br />
            <span className="text-white/25">
              Signature
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
            A cinematic personal portfolio built
            around creative frontend engineering,
            immersive motion and modern digital
            experiences.
          </p>

          {/* Tech Stack */}

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
              "GSAP",
              "Tailwind",
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

        {/* Project Visual */}

        <div
          className="
            relative
            aspect-[16/10]
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-white/[0.025]
            shadow-2xl
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

          {/* Browser Frame */}

          <div
            className="
              absolute
              inset-[8%]
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-[#0a0d12]
            "
          >
            <div
              className="
                flex
                h-9
                items-center
                gap-1.5
                border-b
                border-white/10
                px-4
              "
            >
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/15" />
              <span className="h-2 w-2 rounded-full bg-white/10" />
            </div>

            <div
              className="
                flex
                h-[calc(100%-36px)]
                flex-col
                justify-center
                px-8
              "
            >
              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.35em]
                  text-cyan-300/60
                "
              >
                Creative Frontend Engineer
              </span>

              <div
                className="
                  mt-4
                  h-2
                  w-3/4
                  rounded-full
                  bg-white/10
                "
              />

              <div
                className="
                  mt-3
                  h-2
                  w-1/2
                  rounded-full
                  bg-white/5
                "
              />

              <div
                className="
                  mt-8
                  h-24
                  w-full
                  rounded-lg
                  border
                  border-cyan-300/10
                  bg-cyan-300/[0.025]
                "
              />
            </div>
          </div>

          {/* Project Number */}

          <span
            className="
              absolute
              bottom-5
              right-6
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-white/20
            "
          >
            PS / 001
          </span>
        </div>
      </div>
    </div>
  );
}