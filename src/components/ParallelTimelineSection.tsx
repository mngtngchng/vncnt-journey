"use client";

import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";
import { GraduationCap, Briefcase } from "lucide-react";

const educationData = [
  {
    title: "M.S. in Applied Security and Analytics",
    subtitle: "University of Findlay, Ohio",
    date: "Anticipated Dec 2025 | GPA: 3.92/4.0",
    details: [
      "Capstone project: Malware detection using machine learning",
      "Key courses: Data Mining (R), Data Visualization (SQL), Secure Coding (C++)",
      "Honors: Phi Kappa Phi (Top 10%), Dean's List Spring 2023",
    ],
  },
  {
    title: "B.S. in Information Management",
    subtitle: "National Taipei University of Business",
    date: "June 2021 | GPA: 3.60/4.0",
    details: [
      "Key courses: Database Management (SQL), Machine Learning & Deep Learning",
      "Award: Moral Education Excellence Award",
    ],
  },
];

const workData = [
  {
    title: "Research Assistant",
    subtitle: "University of Findlay",
    date: "Aug 2023 – Present",
    details: [
      "Performed statistical analyses (ANOVA, Chi-Square, T-tests) on academic datasets",
      "Applied ML techniques (clustering, scikit-learn, pandas) to identify peer institutions",
      "Developed PowerApp for collecting withdrawn student experiences",
      "Visualized data with Power BI and Excel",
      "Organized VR setup for 300+ high school students at Career Expo",
    ],
  },
  {
    title: "Android Application Developer",
    subtitle: "Times Transform Taiwan Co., Ltd.",
    date: "Feb 2021 – Aug 2022",
    details: [
      "Developed full B2C e-commerce Android platform (Kotlin & Java)",
      "Collaborated with UI/UX designers and backend developers",
      "Applied Agile (Scrum) practices and code reviews via GitHub",
      "Ensured database integrity and queries using SQL",
    ],
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ParallelTimelineSection() {
  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
          Timeline
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Central vertical line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-400 dark:bg-gray-600 hidden md:block"></div>

          {/* Left Column - Education */}
          <div className="flex flex-col space-y-12 relative">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <TimelineItem
                  {...edu}
                  icon={
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 border-2 border-indigo-400">
                      <GraduationCap className="w-8 h-8 text-indigo-500" />
                    </div>
                  }
                  side="left"
                />
              </motion.div>
            ))}
          </div>

          {/* Right Column - Work */}
          <div className="flex flex-col space-y-12 relative">
            {workData.map((job, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <TimelineItem
                  {...job}
                  icon={
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 border-2 border-green-400">
                      <Briefcase className="w-6 h- text-green-500" />
                    </div>
                  }
                  side="right"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
