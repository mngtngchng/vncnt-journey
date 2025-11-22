"use client";
import { Code } from "lucide-react";
import { motion } from "framer-motion";

interface SkillsSectionProps {
  skills: Record<string, string[]>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <motion.section
      id="skills"
      className="max-w-5xl mx-auto bg-white dark:bg-gray-700 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      <motion.h1
        className="text-4xl font-bold mb-12 text-[rgb(var(--primary-rgb))] dark:text-[rgb(var(--primary-dark-rgb))] flex items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Code className="w-8 h-8 text-[rgb(var(--accent-rgb))] dark:text-[rgb(var(--accent-dark-rgb))]" />
        Skills & Tools
      </motion.h1>

      {Object.keys(skills).map((category, idx) => (
        <div key={idx} className="mb-10">
          <h2 className="text-2xl font-semibold text-[rgb(var(--primary-rgb))] dark:text-[rgb(var(--primary-dark-rgb))] mb-4">{category}</h2>
          <div className="flex flex-wrap gap-3">
            {skills[category].map((skill) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-[rgb(var(--accent-rgb))] text-[rgb(var(--accent-foreground-rgb))] rounded-lg cursor-pointer"
                whileHover={{ scale: 1.1, backgroundColor: "rgb(var(--accent-dark-rgb))", transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Skill: ${skill}`}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      ))}
    </motion.section>
  );
}