"use client"

import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroProps {
  image: string
  title: React.ReactNode
  strTitle: string
}

export function Hero({ image, title, strTitle }: HeroProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 50) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToNextSection = () => {
    const heroHeight = window.innerHeight
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    })
  }
  return (
    <section className="h-screen w-full overflow-hidden relative snap-start">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={strTitle}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
      <div
        className="relative z-10 flex items-center justify-center h-full"
      >
        <Card className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/30 p-6 backdrop-blur-md border-0">
          <h1 className="text-center text-2xl font-bold text-white md:text-4xl">
            {title}
          </h1>
        </Card>
      </div>
      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white text-purple-700 rounded-full p-2 shadow-lg"
        onClick={scrollToNextSection}
        initial={{ y: 0 }}
        animate={{
          y: isVisible ? [0, -10, 0] : 0,
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          y: {
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut"
          },
          opacity: { duration: 0.2 }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to next section"
      >
        <ChevronDown size={24} />
      </motion.button>
    </section>
  )
}

