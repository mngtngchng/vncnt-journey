"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  link: string;
  github?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-5xl mx-auto mb-16 px-4"
    >
      <h2 className="text-4xl font-bold mb-10 text-center text-[rgb(var(--primary-rgb))] dark:text-[rgb(var(--primary-dark-rgb))]">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </motion.section>
  );
}
