"use client";

import Image from "next/image";
import { Work } from "@/data/works";

type Props = {
  work: Work;
};

export default function WorkImage({ work }: Props) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.02]
      "
    >
      <Image
        src={work.image}
        alt={work.title}
        width={1200}
        height={800}
        className="
          h-auto
          w-full
          transition-all
          duration-700
          group-hover:scale-105
        "
      />
    </div>
  );
}