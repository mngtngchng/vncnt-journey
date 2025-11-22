"use client";

import { X } from "lucide-react";
import { useRef, useState } from "react";

interface UpdateItem {
  date: string;
  title: string;
  description: string;
}

const updates: UpdateItem[] = [
  {
    date: "Nov 2025",
    title: "Redesign personal website",
    description:
      "Revamped UI/UX, added dark mode, improved responsiveness and navigation.",
  },
  {
    date: "Nov 2025",
    title: "Added Capstone Project",
    description:
      "Included a detailed capstone project section in the projects page.",
  },
  {
    date: "Nov 2025",
    title: "Added Skills Section",
    description:
      "Showcased programming, security, and analytics skills with interactive components.",
  },
];

interface InfoPanelProps {
  open: boolean;
  onClose: () => void;
}

export default function InfoPanel({ open, onClose }: InfoPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [touchStartY, setTouchStartY] = useState(0);
  const [touchMoveY, setTouchMoveY] = useState(0);

  // Swipe down detection for mobile
  const handleTouchStart = (e: React.TouchEvent) => setTouchStartY(e.touches[0].clientY);
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchMoveY(e.touches[0].clientY);
    const delta = e.touches[0].clientY - touchStartY;
    if (panelRef.current && delta > 0) {
      panelRef.current.style.transform = `translateY(${delta}px)`;
    }
  };
  const handleTouchEnd = () => {
    const delta = touchMoveY - touchStartY;
    if (delta > 100) {
      onClose();
    } else if (panelRef.current) {
      panelRef.current.style.transform = `translateY(0)`;
    }
    setTouchStartY(0);
    setTouchMoveY(0);
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300 z-[1000] ${
          open ? "opacity-100 pointer-events-auto scale-100" : "opacity-0 pointer-events-none scale-95"
        }`}
      />

      {/* Side Panel / Bottom Drawer */}
      <aside
        ref={panelRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`fixed top-0 right-0 md:top-0 md:right-0 h-full w-full md:w-80 md:backdrop-blur-md bg-white/95 dark:bg-gray-900/95
          shadow-2xl rounded-t-2xl md:rounded-l-2xl z-[1001] transform transition-all duration-300 flex flex-col p-6
          ${open ? "translate-x-0 translate-y-0 scale-100" : "translate-x-full md:translate-x-full translate-y-full md:translate-y-0 scale-95"}`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 dark:bg-gray-900/95 z-10 flex justify-between items-center mb-4 py-2 rounded-t-xl">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Recent Updates
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <X className="w-5 h-5 text-gray-800 dark:text-gray-100" />
          </button>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-300 dark:border-gray-700 mb-4" />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-3 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
          {updates.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <p className="font-medium text-gray-900 dark:text-gray-100">
                • {item.date} — {item.title}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
