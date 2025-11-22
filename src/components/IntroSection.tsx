"use client";
import { motion } from "framer-motion";
import HeaderTitle from './HeaderTitle';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function IntroSection() {
  return (
    <motion.section
      id="intro" 
      className="max-w-5xl mx-auto mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
      <HeaderTitle title="MENG TING CHUNG" />
      </motion.div>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Security-focused Data Analyst & Software Developer | Specialized in Malware Detection, Data Mining, and Android Development
      </p>
    </motion.section>
  );
}
