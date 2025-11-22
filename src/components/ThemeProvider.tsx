"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Compute initial theme synchronously on the client so React's initial
  // render matches the inline script that runs before hydration.
  const getInitialTheme = (): Theme => {
    try {
      if (typeof window === "undefined") return "light";
      const saved = localStorage.getItem("theme") as Theme | null;
      if (saved) return saved;
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } catch (e) {
      return "light";
    }
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Persist theme and apply class
  useEffect(() => {
    try {
      document.documentElement.classList.toggle("dark", theme === "dark");
      // maintain a .light class for explicit light mode rules
      document.documentElement.classList.toggle("light", theme === "light");
      localStorage.setItem("theme", theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
