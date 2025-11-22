"use client";

import { motion } from "framer-motion";
import IntroSection from "@/components/IntroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import TalksSection from "@/components/TalksSection";
import ParallelTimelineSection from "@/components/ParallelTimelineSection";

export default function HomeSection() {
  const projects = [
    {
      title: "Malware Detection Using Deep Learning",
      description: "Binary classification using CNN-LSTM & PyTorch.",
      link: "/projects/malware-detection",
      github: "https://github.com/msasa-mengtingchung/CaptoneProject_MalwareDetection_DL",
    },
    {
      title: "Phishing Detection Using LLMs",
      description: "LangChain + Ollama pipeline for phishing intent classification.",
      link: "/projects/phishing-llm",
      github: "https://github.com/msasa-mengtingchung/OISC_PhishingDetection",
    },
    {
      title: "Android E-Commerce App",
      description: "Full B2C Android app built in Kotlin + REST API backend.",
      link: "projects/android-ecommerce",
    },
  ];

  const skills = {
    "Data Analysis & Machine Learning": ["Python (pandas, NumPy)", "R", "SPSS", "Minitab", "scikit-learn", "PyTorch"],
    "Dashboarding & Visualization": ["Power BI", "Tableau", "Excel (Power Query)"],
    "Software Development & DevOps": ["Python","Java","JavaScript","Kotlin","React","Next.js","FastAPI","Git","Docker"],
    "Large Language Model Toolkits": ["LangChain", "Ollama"],
  };

  const talks = [
    {
      title: "Generative AI & Its Impact on Existing Phishing Detection",
      event: "Ohio Information Security Conference, Dayton, OH",
      date: "March 2025",
      description: "Conducted comparative analysis of supervised learning models on AI-generated phishing emails using LLMs (Mistral) and LangChain to enhance security insights.",
    },
    {
      title: "CERIAS Annual Security Symposium",
      event: "Purdue University, West Lafayette, IN",
      date: "April 2024",
      description: "Engaged with cybersecurity professionals on trends and emerging technologies in information security.",
    },
    {
      title: "Information Assurance Forum",
      event: "University of Findlay, Findlay, OH",
      date: "September 2023",
      description: "Participated in sessions focused on information security and assurance practices.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main>
      {/* Intro Section */}
      <motion.section
        id="home"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <IntroSection />
      </motion.section>

      {/* Parallel Timeline Section (now motion-enabled) */}
      <motion.section
        id="timeline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <ParallelTimelineSection />
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <ProjectsSection projects={projects} />
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <SkillsSection skills={skills} />
      </motion.section>

      {/* Talks Section */}
      <motion.section
        id="talks"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <TalksSection talks={talks} />
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <ContactSection email="vincentchung0801@gmail.com" />
      </motion.section>
    </main>
  );
}
