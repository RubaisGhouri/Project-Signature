"use client";

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

export default function HeroStats() {
  return (
    <div
      data-hero="stats"
      className="
        mt-16
        grid
        w-full
        max-w-3xl
        grid-cols-1
        gap-8
        sm:grid-cols-3
      "
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="
            flex
            flex-col
            items-center
            justify-center
          "
        >
          <span
            className="
              text-5xl
              font-black
              leading-none
              text-white
            "
          >
            {stat.value}
          </span>

          <span
            className="
              mt-3
              text-xs
              uppercase
              tracking-[0.35em]
              text-white/50
              text-center
            "
          >
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}