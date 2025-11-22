"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  github?: string;
}

export default function ProjectCard({ title, description, link, github }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse movement to rotation angles
  const rotateX = useTransform(y, [0, 1], [5, -5]);
  const rotateY = useTransform(x, [0, 1], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;  // 0 to 1
    const py = (e.clientY - rect.top) / rect.height;  // 0 to 1

    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      className="flex flex-col bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 backdrop-blur-md cursor-pointer"
    >
      {/* Title & Description */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mt-1">{description}</p>
      </div>

      {/* Links */}
      <div className="mt-auto flex items-center justify-between">
        {/* Project Detail Link */}
        <a
          href={link}
          className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline flex items-center"
        >
          View Details
        </a>

        {/* GitHub Link */}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
          >
            <Github className="w-5 h-5 mr-1" />
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}
