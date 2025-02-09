"use client";

import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroProps {
  image: string;
  title: React.ReactNode;
  strTitle: string;
}

export function Hero({ image, title, strTitle }: HeroProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const heroHeight = window.innerHeight;
    window.scrollTo({
      top: heroHeight,
      behavior: "smooth",
    });
  };
  return (
    <section className="relative h-screen w-full snap-start overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <Image
            src={image}
            alt={strTitle}
            fill
            priority
            className="object-cover"
            quality={100}
          />
        </div>
      </div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <Card className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-0 bg-black/30 p-6 backdrop-blur-md">
          <h1 className="text-center text-2xl font-bold text-white md:text-4xl">
            {title}
          </h1>
        </Card>
      </div>
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform rounded-full bg-white p-2 text-purple-700 shadow-lg"
        onClick={scrollToNextSection}
        initial={{ y: 0 }}
        animate={{
          y: isVisible ? [0, -10, 0] : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          y: {
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          },
          opacity: { duration: 0.2 },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to next section"
      >
        <ChevronDown size={24} />
      </motion.button>
    </section>
  );
}
