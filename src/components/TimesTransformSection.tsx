"use client";


import { Store, AlertTriangle } from "lucide-react";
import { useRef } from "react";

export default function TimesTransformSection() {
    const alertRef = useRef<HTMLDivElement | null>(null);

    const showAlert = () => {
        if (alertRef.current) {
        alertRef.current.style.opacity = "1";
        }
    };

    return (
        <section className="max-w-7xl mx-auto bg-white dark:bg-gray-700 mt-6 md:mt-8 lg:mt-12 p-8 mb-12 rounded-2xl shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl">
            
            <h1 className="text-4xl font-bold mb-4 text-[rgb(var(--primary-rgb))] dark:text-[rgb(var(--primary-dark-rgb))]">
                Android E-commerce App
            </h1>

            {/* Banner Image with Facebook Link */}
            <div className="relative w-full flex justify-center mt-8 mb-12 group">
                <a
                    href="https://www.facebook.com/hkshopu/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full max-w-4xl overflow-hidden rounded-3xl shadow-xl shadow-black/40 relative block"
                >
                    <img
                    src="../../hkshopu/hkshopu_banner.jpg"
                    alt="HKSHOPU"
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center rounded-3xl">
                    <span className="text-white text-2xl font-bold text-center">
                        Visit our Facebook page
                    </span>
                    </div>
                </a>
            </div>

            {/* Overview Text */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
            Developed a full-featured B2C Android native application with product browsing, purchasing, and membership management, backed by a SQL database to ensure data integrity.
            </p>

            {/* Sections */}
            {[
            {
                title: "Motivation",
                content: "Aimed to provide a seamless, mobile-first shopping experience, focusing on functionality, UX, and reliable data management."
            },
            {
                title: "Tools & Technologies",
                content: [
                "Kotlin & Java for native Android development",
                "Android Studio",
                "SQL for database management",
                "GitHub for version control & code review",
                "Agile (Scrum) methodology"
                ]
            },
            {
                title: "Key Features & Contributions",
                content: [
                "Product browsing, shopping cart, order tracking, and membership management.",
                "Collaborated with UI/UX designers to enhance the interface and user experience.",
                "Integrated backend functionality and ensured data consistency via SQL queries.",
                "Followed version control best practices and performed peer code reviews on GitHub."
                ]
            },
            {
                title: "Results & Key Takeaways",
                content: "Built a fully functional Android e-commerce app demonstrating mobile development skills and cross-functional collaboration. The project was eventually discontinued, but it highlights the implementation of core features and practical teamwork experience."
            }
            ].map((section, idx) => (
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

            {/* Action Buttons & Alert */}
            <div className="mt-8 flex flex-col md:flex-row flex-wrap gap-4 justify-end items-end">

                {/* Alert Message */}
                <div
                    ref={alertRef}
                    className="opacity-0 transition-opacity duration-300 p-4 rounded-xl flex items-center gap-3 bg-yellow-100/80 dark:bg-yellow-800/80"
                >
                    <AlertTriangle className="w-5 h-5 text-yellow-500 dark:text-yellow-300" />
                    <p className="text-sm text-yellow-700 dark:text-yellow-200">
                        The application is no longer accessible on the Play Store.
                    </p>
                </div>

                {/* Play Store Button */}
                <button
                    onClick={showAlert}
                    className="p-4 rounded-xl border bg-white/20 dark:bg-gray-700/20 hover:bg-white/30 dark:hover:bg-gray-600/40 transition flex items-center justify-center"
                >
                    <Store className="w-6 h-6 text-cyan-500" />
                </button>

            </div>
        </section>
    );
}
