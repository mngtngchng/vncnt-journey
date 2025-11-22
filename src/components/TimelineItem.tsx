"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  details: string[];
  icon: React.ReactNode;
  side?: "left" | "right";
}

export default function TimelineItem({
  title,
  subtitle,
  date,
  details,
  icon,
  side = "left",
}: TimelineItemProps) {
  const fadeFromSide = side === "left"
    ? { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }
    : { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } };

  return (
    <motion.div
      variants={fadeFromSide}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      className="relative md:flex md:items-center"
    >
      {/* Icon centered on the vertical timeline */}
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 z-10 ${
          side === "left"
            ? "right-0 right-[-38.8]" // right edge of left column
            : "left-0 left-[-38.8]"   // left edge of right column
        } flex items-center justify-center`}
      >
        {icon}
      </div>

      {/* Timeline content */}
      <div
        className={`mt-6 md:mt-0 px-4 md:pr-8 z-[10] ${side === "left" ? "md:mr-8" : "md:ml-8"} 
          text-left bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow duration-300`}
      >
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{subtitle}</p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-2">{date}</p>
        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
          {details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
      </div>

      {/* Connector line from icon to content */}
      <div
        className={`hidden md:block absolute top-1/2 h-0.5 bg-gray-400 dark:bg-gray-600 ${
          side === "left"
            ? "right-0 w-1/6 translate-x-0"    // extend right from center
            : "left-0 w-1/6 -translate-x-0" // extend left from center
        }
        z-[8]`}
      ></div>
    </motion.div>
  );
}
