"use client";

import { works } from "@/data/works";
import ProjectCard from "./ProjectCard";

export default function ProjectScene() {
  return (
    <div
      data-project-scene
      className="
        relative
        h-screen
        w-full
        overflow-hidden
        perspective-[2000px]
      "
    >
      {works.map((project, index) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          category={project.category}
          year={project.year}
          description={project.description}
          image={project.image}
          tech={project.tech}
          live={project.live}
          index={index}
        />
      ))}
    </div>
  );
}