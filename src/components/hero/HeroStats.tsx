const stats = [
  {
    value: "40+",
    label: "Projects",
  },
  {
    value: "4+",
    label: "Years Learning",
  },
  {
    value: "10+",
    label: "Technologies",
  },
];

export default function HeroStats() {
  return (
    <div
      data-hero="stats"
      className="
        mt-14
        flex
        flex-wrap
        justify-center
        gap-12
      "
    >
      {stats.map((item) => (
        <div
          key={item.label}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white">
            {item.value}
          </h3>

          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-400">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}