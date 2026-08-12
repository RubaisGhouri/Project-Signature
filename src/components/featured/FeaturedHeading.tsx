export default function FeaturedHeading() {
  return (
    <div
      className="
        relative
        z-20
        mx-auto
        w-full
        max-w-[1440px]
        px-6
        pb-16
        pt-28
        lg:px-12
        lg:pt-36
      "
    >
      <p
        className="
          mb-5
          text-xs
          font-medium
          uppercase
          tracking-[0.4em]
          text-cyan-300/70
        "
      >
        Selected Work
      </p>

      <h2
        className="
          max-w-4xl
          text-5xl
          font-black
          uppercase
          leading-[0.88]
          tracking-[-0.045em]
          text-white
          sm:text-6xl
          md:text-7xl
          lg:text-8xl
        "
      >
        Featured
        <br />
        Projects
      </h2>
    </div>
  );
}