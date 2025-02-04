"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function LandingPage() {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null)

  const EXPANDED_WIDTH = 60
  const CONTRACTED_WIDTH = 100 - EXPANDED_WIDTH
  const DEFAULT_WIDTH = 50

  return (
    <div className="flex h-screen overflow-hidden font-sans antialiased">
      <motion.a
        className="relative bg-primary text-white flex items-center justify-center group w-full cursor-pointer"
        animate={{
          width:
            hoveredSide === "left"
              ? `${EXPANDED_WIDTH}%`
              : hoveredSide === "right"
                ? `${CONTRACTED_WIDTH}%`
                : `${DEFAULT_WIDTH}%`,
        }}
        transition={{
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1],
        }}
        onMouseEnter={() => setHoveredSide("left")}
        onMouseLeave={() => setHoveredSide(null)}
        href="/classes"
      >
        <div className="relative z-10 flex flex-col items-center gap-6">
          <h1 className="text-7xl font-bold tracking-tight group-hover:scale-110 transition-all duration-500">
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
            Explore Classes <ArrowRight className="w-5 h-5" />
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/20" />
      </motion.a>

      <motion.a
        className="relative bg-secondary text-gray-900 flex items-center justify-center group w-full cursor-pointer"
        animate={{
          width:
            hoveredSide === "right"
              ? `${EXPANDED_WIDTH}%`
              : hoveredSide === "left"
                ? `${CONTRACTED_WIDTH}%`
                : `${DEFAULT_WIDTH}%`,
        }}
        transition={{
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1],
        }}
        onMouseEnter={() => setHoveredSide("right")}
        onMouseLeave={() => setHoveredSide(null)}
        href="/clubs"
      >
        <div className="relative z-10 flex flex-col items-center gap-6">
          <h1 className="text-7xl font-bold tracking-tight group-hover:scale-110 transition-all duration-500">Clubs</h1>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: hoveredSide === "right" ? 1 : 0,
              y: hoveredSide === "right" ? 0 : 10,
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex items-center gap-2 text-xl"
          >
            Discover Clubs <ArrowRight className="w-5 h-5" />
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/10" />
      </motion.a>
    </div>
  )
}