"use client";

import { Github } from "lucide-react";

export default function PhishingDetectionSection() {
    const githubRepo = {
        label: "GitHub Repository - Phishing Detection",
        href: "https://github.com/msasa-mengtingchung/OISC_PhishingDetection"
    };

    const sections = [
        {
            title: "Motivation",
            content: "AI-generated phishing emails are increasingly sophisticated. This project aims to study these threats and evaluate detection methods to strengthen organizational security posture."
        },
        {
            title: "Tools & Technologies",
            content: [
                "LangChain & Ollama for LLM integration",
                "Python for data processing and analysis",
                "Machine learning models (supervised classifiers)",
                "Visualization with matplotlib and seaborn"
            ]
        },
        {
            title: "Methodology",
            content: [
                "Generated phishing emails using LLMs with diverse personas to increase dataset variety.",
                "Created labeled datasets of AI-generated phishing emails.",
                "Trained supervised learning models to detect phishing content.",
                "Evaluated models using accuracy, precision, recall, and F1-score metrics."
            ]
        },
        {
            title: "Results & Key Takeaways",
            content: "Enhanced detection of AI-generated phishing threats, showcasing the importance of LLMs in cybersecurity research. Learned methods to diversify training data and improve model performance using personas."
        }
    ];

    return (
        <section className="max-w-7xl mx-auto bg-white dark:bg-gray-700 mt-6 md:mt-8 lg:mt-12 p-8 mb-12 rounded-2xl shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl">
            
            <h1 className="text-4xl font-bold mb-4 text-[rgb(var(--primary-rgb))] dark:text-[rgb(var(--primary-dark-rgb))]">
                Generative AI for Phishing Detection
            </h1>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
                Applied Large Language Models (LLMs) to generate phishing emails and analyze their impact on cybersecurity defenses, providing insights for AI-driven security strategies.
            </p>

            {/* Sections */}
            {sections.map((section, idx) => (
                <div key={idx} className="mb-6">
                    <h2 className="text-2xl font-semibold text-[rgb(var(--primary-rgb))] dark:text-[rgb(var(--primary-dark-rgb))] mb-2">
                        {section.title}
                    </h2>
                    {Array.isArray(section.content) ? (
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                            {section.content.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-700 dark:text-gray-300">{section.content}</p>
                    )}
                </div>
            ))}

            {/* GitHub Repo */}
            <div className="mt-6 flex justify-end">
                <a
                    href={githubRepo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
                                bg-gray-200 hover:bg-gray-300 text-gray-900
                                dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100"
                >
                    <Github size={20} /> {githubRepo.label}
                </a>
            </div>
        </section>
    );
}
