"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const EXPANDED_SIZE = 60;
  const CONTRACTED_SIZE = 40;
  const DEFAULT_SIZE = 50;

  const getAnimation = (side: "left" | "right") =>
    isMobile
      ? {
          height:
            hoveredSide === side
              ? `${EXPANDED_SIZE}%`
              : hoveredSide && hoveredSide !== side
                ? `${CONTRACTED_SIZE}%`
                : `${DEFAULT_SIZE}%`,
        }
      : {
          width:
            hoveredSide === side
              ? `${EXPANDED_SIZE}%`
              : hoveredSide && hoveredSide !== side
                ? `${CONTRACTED_SIZE}%`
                : `${DEFAULT_SIZE}%`,
        };

  return (
    <div className="flex h-screen flex-col overflow-hidden font-sans antialiased md:flex-row">
      <motion.a
        className="group relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden bg-primary text-white"
        animate={getAnimation("left")}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        onMouseEnter={() => setHoveredSide("left")}
        onMouseLeave={() => setHoveredSide(null)}
        href="/classes"
      >
        <div className="absolute inset-0">
          <Image
            src="/assets/landing/classes.jpg"
            alt="Classes"
            fill
            className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-6">
          <h1 className="text-7xl font-bold tracking-tight transition-all duration-500 group-hover:scale-110">
            Classes
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: hoveredSide === "left" ? 1 : 0,
              y: hoveredSide === "left" ? 0 : 10,
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex items-center gap-2 text-xl"
          >
            Explore Classes <ArrowRight className="h-5 w-5" />
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
      </motion.a>

      <motion.a
        className="group relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden bg-secondary text-gray-900"
        animate={getAnimation("right")}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        onMouseEnter={() => setHoveredSide("right")}
        onMouseLeave={() => setHoveredSide(null)}
        href="/clubs"
      >
        <div className="absolute inset-0">
          <Image
            src="/assets/landing/clubs.jpg"
            alt="Clubs"
            fill
            className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-6">
          <h1 className="text-7xl font-bold tracking-tight text-white transition-all duration-500 group-hover:scale-110">
            Clubs
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: hoveredSide === "right" ? 1 : 0,
              y: hoveredSide === "right" ? 0 : 10,
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex items-center gap-2 text-xl text-white"
          >
            Discover Clubs <ArrowRight className="h-5 w-5" />
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
      </motion.a>
    </div>
  );
}
