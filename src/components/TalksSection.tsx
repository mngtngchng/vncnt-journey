"use client";

import { motion, Variants } from "framer-motion";

interface Talk {
  title: string;
  event: string;
  date: string;
  description: string;
}

interface TalksSectionProps {
  talks?: Talk[];
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // fade each talk sequentially
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function TalksSection({
  talks = [
    {
      title: "Generative AI & Its Impact on Existing Phishing Detection",
      event: "Ohio Information Security Conference, Dayton, OH",
      date: "March 2025",
      description:
        "Conducted comparative analysis of supervised learning models on AI-generated phishing emails using LLMs (Mistral) and LangChain to enhance security insights.",
    },
    {
      title: "CERIAS Annual Security Symposium",
      event: "Purdue University, West Lafayette, IN",
      date: "April 2024",
      description:
        "Engaged with cybersecurity professionals on trends and emerging technologies in information security.",
    },
    {
      title: "Information Assurance Forum",
      event: "University of Findlay, Findlay, OH",
      date: "September 2023",
      description:
        "Participated in sessions focused on information security and assurance practices.",
    },
  ],
}: TalksSectionProps) {
  return (
    <section className="max-w-5xl mx-auto mt-12 md:mt-16 lg:mt-20 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-gray-700 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl">
      <h1 className="text-4xl font-bold mb-10 text-[rgb(var(--primary-rgb))] dark:text-[rgb(var(--primary-dark-rgb))] text-center">
        Presentations & Conference Participation
      </h1>

      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {talks.map((talk, idx) => (
          <motion.div
            key={idx}
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white/50 dark:bg-gray-900/50 shadow-sm transition-shadow duration-300 cursor-pointer"
            variants={fadeUp}
            whileHover={{ scale: 1.03, boxShadow: "0 12px 24px rgba(0,0,0,0.15)" }}
          >
            <h2 className="text-2xl font-semibold mb-2 text-[rgb(var(--primary-rgb))] dark:text-[rgb(var(--primary-dark-rgb))]">
              {talk.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-400 mb-2 font-medium">
              {talk.event} | {talk.date}
            </p>
            <p className="text-gray-700 dark:text-gray-300">{talk.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
