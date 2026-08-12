"use client";

export default function HeroDescription() {
  return (
    <div
      data-hero="description"
      className="
        mt-8
        w-full
        max-w-4xl
        px-4
        sm:px-6
      "
    >
      <p
        className="
          text-center
          text-base
          leading-7
          text-white/60
          sm:text-lg
          sm:leading-8
          lg:text-xl
          lg:leading-9
        "
      >
        I build premium digital experiences for modern brands using
        <span className="text-white"> Next.js</span>,
        <span className="text-white"> WordPress</span> and modern frontend
        technologies with a strong focus on performance, scalability and
        exceptional user experience.
      </p>
    </div>
  );
}