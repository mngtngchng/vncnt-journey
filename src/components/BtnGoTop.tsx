"use client";

import React from 'react';

export default function BtnGoTop() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
        aria-label="Scroll to top"
        title="Scroll to top"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            scrollToTop();
            e.currentTarget.blur();
        }}
        className="group fixed bottom-20 right-6 z-50 inline-flex items-center justify-center w-12 h-12
                    dark:bg-gray-100 backdrop-blur-md
                    rounded-full shadow-md shadow-black/30 transform-gpu
                    hover:scale-105 active:scale-110 focus:outline-none focus:ring-4 focus:ring-offset-2 
                    focus:ring-cyan-400 dark:focus:ring-cyan-200 dark:focus:ring-offset-0 text-white"
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill='#000000a8'
            className="w-12 h-12 transition-transform duration-700 ease-in-out group-hover:rotate-[1080deg]"
            aria-hidden="true"
        >
            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
        </svg>
        </button>
    )
}