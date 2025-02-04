"use client";

import Link from "next/link";
import SlideDown from "@/components/framer/slide-down";
import { useMemo, useState } from "react";
import MobileNav from "@/app/(dark)/ccc/mobile/nav";

export const nav = [
  { href: "#home", label: "Home" },
  { href: "#details", label: "Details" },
];

const Navbar = () => {
  const isMobile = useMemo(() => {
    return window.innerWidth < 768;
  }, []);
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header
      className={`fixed top-0 z-50 px-0 md:px-6 py-0 md:py-4 ${
        mobileOpen ? "w-full h-full" : ""
      }`}
    >
      {isMobile ? (
        <>
          <MobileNav openChange={(o) => setMobileOpen(o)} />
        </>
      ) : (
        <SlideDown
          duration={0.5}
          delay={1}
          transition={{
            type: "spring",
          }}
        >
          <nav className="space-x-4 p-2 rounded-xl">
            {nav.map((item, i) => {
              return (
                <Link
                  href={item.href}
                  key={i}
                  className={
                    "text-base font-medium text-zinc-200 hover:text-zinc-400 transition-all duration-200"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </SlideDown>
      )}
    </header>
  );
};

export default Navbar;