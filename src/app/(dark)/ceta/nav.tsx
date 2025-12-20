"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import MobileNav from "@/app/(dark)/ceta/mobile/nav";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const nav = [
  { href: "/ceta", label: "CETA" },
  { href: "#info", label: "Details" },
  // { href: "/ceta-2026", label: "Watch"},
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("/ceta");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="hidden md:block">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-2 backdrop-blur-xl transition-all duration-300 ${
            scrolled ? "bg-black/40 shadow-lg shadow-indigo-500/10" : ""
          }`}
        >
          <Link
            href="/"
            className="rounded-full px-4 py-2 text-sm font-bold text-slate-300 hover:bg-white/20 transition-colors"
          >
            YMCI
          </Link>

          <nav className="flex items-center gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActive(item.href)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium text-slate-300 transition-all hover:bg-white/10 hover:text-white",
                  active === item.href && "bg-white/10 text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Divider with even spacing */}
          <div className="mx-1 h-8 w-px bg-white/10" />
          {/* <Link href="/ceta-2026" target="_blank">
            <button className="rounded-full bg-lime-600 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-lime-500 hover:scale-105">
              Watch
            </button>
          </Link> */}
          <Link href="https://forms.gle/Qi6wvBmajwB5B1J56" target="_blank">
            <button className="rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-600 hover:scale-105">
              Register
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Mobile Nav Toggle Position */}
      <div className="absolute right-4 top-4 md:hidden">
         <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
