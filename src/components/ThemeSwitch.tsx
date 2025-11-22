"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeSwitch() {
  const { theme, toggle } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // now we can safely render client-dependent UI
  }, []);

  if (!mounted) return null; // prevent SSR mismatch

  return (
    <button
      role="switch"
      aria-checked={theme === "dark"}
      aria-label="Toggle color theme"
      onClick={toggle}
      className="relative inline-flex items-center h-8 w-16 rounded-full p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-gray-200 dark:bg-gray-700"
    >
      <span className="sr-only">Toggle theme</span>

      {/* Toggle knob */}
      <span
        className={`inline-block h-6 w-6 transform rounded-full bg-white dark:bg-gray-900 shadow transition-transform ${
          theme === "dark" ? "translate-x-8" : "translate-x-0"
        }`}
      />

      {/* Icons */}
      <span className="absolute left-2 text-gray-600 dark:text-gray-300 pointer-events-none">
        <Sun size={16} />
      </span>
      <span className="absolute right-2 text-gray-600 dark:text-gray-300 pointer-events-none">
        <Moon size={16} />
      </span>
    </button>
  );
}
