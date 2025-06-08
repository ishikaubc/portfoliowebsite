"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { type } from "node:os";
import { useActiveSectionContext } from "@/context/active-section-context";

// <div
//     className="bg-gradient-to-br from-teal-100 to-rose-100 h-full w-screen relative -z-10 blur-[10rem] ">
// </div>
export default function Header() {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  return (
    <header className="z-[999] relative ">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-screen sm:w-[36rem]
    rounded-none sm:rounded-full border border-white/10
    bg-white/30 dark:bg-[#0a0e1a]/60 shadow-lg backdrop-blur-md z-50"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:h-[initial] sm:py-0">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-slate-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <li
                className="h-3/4 flex items-center justify-center relative"
                key={link.hash}
                // initial={{y: -100, opacity: 0}}
                // animate={{y: 0, opacity: 1}}
              >
                <Link
                  href={link.hash}
                  onClick={() => setActiveSection(link.name)}
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-2 rounded-full transition-colors duration-300",
                    "hover:text-black dark:hover:text-white",
                    activeSection === link.name
                      ? "text-black dark:text-white"
                      : "text-slate-500 dark:text-slate-400"
                  )}
                >
                  {link.name}
                  {link.name === activeSection && (
                    <span className="absolute inset-0 -z-10 bg-gradient-to-r from-rose-100 to-teal-100 dark:from-slate-700 dark:to-slate-900 rounded-full"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
