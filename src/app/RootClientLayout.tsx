"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import BtnGoTop from "../components/BtnGoTop";
import { ThemeProvider } from "../components/ThemeProvider";

import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  const { windowWidth, windowHeight } = useWindowSize();
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Hydration-safe client-only logic
  useEffect(() => {
    setMounted(true);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <ThemeProvider>
          <main className="flex-1 min-h-screen bg-gray-300 dark:bg-gray-800 pb-16">{children}</main>
          <BtnGoTop />

          {/* Footer inside body */}
          <footer className="bg-gray-900 text-gray-400 text-center py-4 border-t border-gray-700">
            © 2025 Meng Ting Chung. All rights reserved.
          </footer>

          {/* Hydration-safe debug panel */}
          {mounted && (
            <div className="fixed bottom-6 left-20 z-50 bg-black/50 px-3 py-2 rounded text-sm text-gray-100">
              W: {windowWidth} H: {windowHeight} ScrollY: {scrollY}
            </div>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}

// ------------------------------
// useWindowSize Hook
// ------------------------------
function useWindowSize() {
  const isClient = typeof window !== "undefined";
  const [windowSize, setWindowSize] = useState({
    windowWidth: isClient ? window.innerWidth : 0,
    windowHeight: isClient ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  return windowSize;
}
