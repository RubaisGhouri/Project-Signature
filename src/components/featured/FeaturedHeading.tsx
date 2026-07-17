export default function FeaturedHeading() {
  return (
    <div
      className="
        mx-auto
        max-w-7xl
        px-6
        pt-32
        pb-20
      "
    >
      <p
        className="
          mb-4
          text-sm
          uppercase
          tracking-[0.4em]
          text-cyan-400
        "
      >
        Portfolio
      </p>

      <h2
        className="
          text-6xl
          font-black
          leading-none
          text-white
          md:text-8xl
        "
      >
        Featured
        <br />
        Projects
      </h2>
    </div>
  );
}