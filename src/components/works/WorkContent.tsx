"use client";

import { Work } from "@/data/works";

import WorkNumber from "./WorkNumber";
import WorkTags from "./WorkTags";

type Props = {
  work: Work;
};

export default function WorkContent({ work }: Props) {
  return (
    <div>

      <WorkNumber number={work.id} />

      <h3
        className="
          mt-6
          text-5xl
          font-bold
        "
      >
        {work.title}
      </h3>

      <p
        className="
          mt-8
          max-w-xl
          leading-8
          text-white/60
        "
      >
        {work.description}
      </p>

      <div className="mt-8">
        <WorkTags tags={work.tech} />
      </div>

    </div>
  );
}