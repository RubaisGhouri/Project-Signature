"use client";

const projects = [
  {
    number: "01",
    title: "Web Experiences",
    type: "Frontend",
  },
  {
    number: "02",
    title: "WordPress Builds",
    type: "CMS",
  },
  {
    number: "03",
    title: "E-Commerce",
    type: "Commerce",
  },
  {
    number: "04",
    title: "Creative Interfaces",
    type: "UI / Motion",
  },
];

export default function SelectedWorks() {
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
          bottom-[-300px]
          left-1/2
          h-[650px]
          w-[650px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/[0.05]
          blur-[170px]
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
        {/* Header */}

        <div
          className="
            mb-10
            flex
            flex-col
            justify-between
            gap-6
            md:flex-row
            md:items-end
          "
        >
          <div>
            <div
              className="
                mb-5
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
                03 / 06
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
                Capabilities
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
              Selected
              <br />
              <span className="text-white/25">
                Works
              </span>
            </h3>
          </div>

          <p
            className="
              max-w-sm
              text-sm
              leading-relaxed
              text-white/40
              md:pb-1
            "
          >
            From high-converting websites to
            immersive interfaces, each project
            combines design, technology and
            purposeful interaction.
          </p>
        </div>

        {/* Project Categories */}

        <div
          className="
            grid
            border-t
            border-white/10
            md:grid-cols-2
          "
        >
          {projects.map((project) => (
            <div
              key={project.number}
              className="
                group
                relative
                flex
                min-h-[110px]
                items-center
                justify-between
                border-b
                border-white/10
                py-6
                transition-all
                duration-500
                hover:bg-white/[0.025]
                md:px-6
                md:first:border-r
                md:nth-child(3):border-r
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-5
                "
              >
                <span
                  className="
                    text-[10px]
                    tracking-[0.2em]
                    text-white/20
                  "
                >
                  {project.number}
                </span>

                <div>
                  <h4
                    className="
                      text-lg
                      font-semibold
                      uppercase
                      tracking-[-0.02em]
                      text-white/80
                      transition-colors
                      duration-300
                      group-hover:text-white
                      sm:text-xl
                    "
                  >
                    {project.title}
                  </h4>

                  <p
                    className="
                      mt-1
                      text-[9px]
                      uppercase
                      tracking-[0.3em]
                      text-white/25
                    "
                  >
                    {project.type}
                  </p>
                </div>
              </div>

              <span
                className="
                  text-xl
                  text-white/20
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-cyan-300/70
                "
              >
                ↗
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}