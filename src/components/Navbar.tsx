"use client";

import { useRef, useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import ThemeSwitch from "./ThemeSwitch";
import { Info } from "lucide-react";
import InfoPanel from "../components/InfoPanel";
import Image from "next/image";

type NavItem = {
  label: string;
  href: string;
};

export default function Navbar({
  navItems = [
    { label: "Home", href: "#intro" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experiences", href: "#timeline" },
    { label: "Talks", href: "#talks" },
    { label: "Contact", href: "#contact" },
  ],
}: { navItems?: NavItem[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [infoOpen, setInfoOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#intro");

  const { theme } = useTheme();
  const refNavbar = useRef<HTMLDivElement | null>(null);

  useEffect(() => setMounted(true), []);

  // Handle sticky navbar background and shadow
  useEffect(() => {
    if (!isDesktop) return;
    const handleScroll = () => {
      if (!refNavbar.current) return;
      const scrollY = window.scrollY;
      const opacity = Math.min(scrollY / 120, 1);
      refNavbar.current.style.backgroundColor = `rgba(255,255,255,${opacity * 0.15})`;
      refNavbar.current.style.backdropFilter = `blur(${opacity * 15}px)`;
      refNavbar.current.style.boxShadow =
        opacity > 0.2 ? "0 8px 24px rgba(0,0,0,0.15)" : "none";
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  // Responsive check
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1280);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth scroll for internal sections
  const handleScrollClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const sectionId = href.replace("#", "");
      const target = document.getElementById(sectionId);
      if (target) {
        const offset = 80; // sticky navbar offset
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
        setIsMenuOpen(false); // Close mobile menu
        setActiveSection(href);
      }
    }
  };

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 90; // offset for sticky navbar
      let current = activeSection;

      for (const item of navItems) {
        if (!item.href.startsWith("#")) continue;
        const section = document.getElementById(item.href.replace("#", ""));
        if (section && scrollPos >= section.offsetTop) {
          current = item.href;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

 return (
    <>
      <nav
        ref={refNavbar}
        className={`sticky top-0 z-50 flex flex-col items-center w-full px-6 transition-colors duration-500 ${
          isDesktop ? "bg-transparent backdrop-blur-0" : "bg-white/20 dark:bg-gray-800/20 backdrop-blur-md"
        }`}
      >
        <div className="flex justify-between items-center w-full py-4">
          {/* Logos */}
          <div className="flex items-center gap-6">
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              width={100}
              height={37}
              priority
            />
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={70}
              height={24}
              priority
            />
          </div>

          {/* Desktop menu */}
          {isDesktop ? (
            <ul className="flex gap-6 justify-end flex-1">
              {navItems.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleScrollClick(e, href)}
                    className={`px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gray-200/40 dark:hover:bg-gray-700/40 hover:text-cyan-500 ${
                      activeSection === href ? "bg-gray-200/60 dark:bg-gray-700/60 text-cyan-500" : ""
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            // Mobile menu button
            <button
              className="flex flex-col gap-1 p-2 rounded-md focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span
                className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          )}

          {/* Info & Theme */}
          {mounted && (
            <div className="flex items-center gap-3 ml-4">
              <button
                onClick={() => setInfoOpen(true)}
                className="relative inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <Info
                  className={`h-5 w-5 ${theme === "dark" ? "text-white" : "text-gray-800"}`}
                  size={18}
                  strokeWidth={2}
                />
              </button>
              <ThemeSwitch />
            </div>
          )}
        </div>

        {/* Mobile menu */}
        {!isDesktop && (
          <ul
            className={`flex flex-col gap-2 w-full overflow-hidden transition-all duration-300 ${
              isMenuOpen ? "max-h-96 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
            }`}
          >
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleScrollClick(e, href)}
                  className={`block text-center px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-200/40 dark:hover:bg-gray-700/40 hover:text-cyan-500 ${
                    activeSection === href ? "bg-gray-200/60 dark:bg-gray-700/60 text-cyan-500" : ""
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
      {mounted && <InfoPanel open={infoOpen} onClose={() => setInfoOpen(false)} />}
    </>
  );
}