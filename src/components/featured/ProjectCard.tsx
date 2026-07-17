"use client";

import Image from "next/image";

type Props = {
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  tech: string[];
  live: string;
  index: number;
};

export default function ProjectCard({
  title,
  category,
  year,
  description,
  image,
  tech,
  live,
  index,
}: Props) {
  return (
    <article
      data-project-card
      data-index={index}
      className="
        absolute
        left-1/2
        top-1/2
        h-[720px]
        w-[1200px]
        max-w-[90vw]
        -translate-x-1/2
        -translate-y-1/2
        overflow-hidden
        rounded-[36px]
        border
        border-white/10
        bg-[#090909]
        shadow-[0_40px_120px_rgba(0,0,0,.55)]
        will-change-transform
      "
    >
      <Image
        src={image}
        alt={title}
        fill
        priority={index === 0}
        className="
          object-cover
          scale-105
          transition-transform
          duration-700
        "
      />

      {/* Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/40
          to-black/10
        "
      />

      {/* Top */}

      <div
        className="
          absolute
          left-12
          top-12
          right-12
          z-20
          flex
          items-start
          justify-between
        "
      >
        <span
          className="
            text-[80px]
            font-black
            leading-none
            text-white/10
          "
        >
          {(index + 1).toString().padStart(2, "0")}
        </span>

        <span
          className="
            text-sm
            tracking-[0.35em]
            uppercase
            text-cyan-300
          "
        >
          {year}
        </span>
      </div>

      {/* Bottom */}

      <div
        className="
          absolute
          left-14
          bottom-14
          z-20
          max-w-[700px]
        "
      >
        <p
          className="
            text-xs
            uppercase
            tracking-[0.4em]
            text-cyan-300
          "
        >
          {category}
        </p>

        <h2
          className="
            mt-4
            text-6xl
            font-black
            leading-none
            text-white
          "
        >
          {title}
        </h2>

        <p
          className="
            mt-6
            max-w-xl
            text-lg
            leading-8
            text-white/65
          "
        >
          {description}
        </p>

        <div
          className="
            mt-8
            flex
            flex-wrap
            gap-3
          "
        >
          {tech.map((item) => (
            <span
              key={item}
              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-4
                py-2
                text-sm
                text-white/80
                backdrop-blur-md
              "
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}

      <a
        href={live}
        target="_blank"
        rel="noreferrer"
        className="
          absolute
          bottom-16
          right-14
          z-20
          text-sm
          uppercase
          tracking-[0.35em]
          text-cyan-300
          transition-all
          duration-300
          hover:translate-x-2
        "
      >
        View Live →
      </a>
    </article>
  );
}