export default function MenuHeader() {
  return (
    <div
       data-menu="header"
      className="
        mb-20
        flex
        items-center
        justify-between
        border-b
        border-white/10
        pb-8
      "
    >
      <span
        className="
          text-xs
          uppercase
          tracking-[0.45em]
          text-white/40
        "
      >
        Navigation
      </span>

      <h2
        className="
          font-[family:var(--font-space-grotesk)]
          text-lg
          font-medium
          tracking-[0.18em]
          text-white
        "
      >
        {"<Rubais Ghouri/>"}
      </h2>
    </div>
  );
}