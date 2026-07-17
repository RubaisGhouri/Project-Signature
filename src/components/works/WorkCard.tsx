"use client";

import { Work } from "@/data/works";

import WorkImage from "./WorkImage";
import WorkContent from "./WorkContent";

type Props = {
  work: Work;
};

export default function WorkCard({ work }: Props) {
  return (
    <article
      data-work-card
      className="
        group
        grid
        items-center
        gap-16
        py-24
        lg:grid-cols-2
      "
    >
      <WorkImage work={work} />

      <WorkContent work={work} />
    </article>
  );
}