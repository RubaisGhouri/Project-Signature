export default function WorksHeading() {
  return (
    <div
      data-work-heading
      className="
        flex
        items-end
        justify-between
        gap-8
        flex-wrap
      "
    >
      <div>

        <span
          className="
            text-sm
            uppercase
            tracking-[0.35em]
            text-cyan-300
          "
        >
          Selected Projects
        </span>

        <h2
          className="
            mt-5
            text-5xl
            md:text-7xl
            font-black
            leading-none
          "
        >
          Featured
          <br />
          Work
        </h2>

      </div>

      <p
        className="
          max-w-md
          text-white/55
          leading-8
        "
      >
        Premium websites crafted with modern technologies,
        immersive interactions and performance-focused user
        experiences.
      </p>
    </div>
  );
}