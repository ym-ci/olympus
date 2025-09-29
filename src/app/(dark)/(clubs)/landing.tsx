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
    const heroSection = document.querySelector('section');
    const nextSection = heroSection?.nextElementSibling as HTMLElement;
    
    if (nextSection) {
      // Scroll to the next section
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else {
      // Fallback to viewport height if no next section found
      const heroHeight = window.innerHeight;
      console.log('Fallback scroll to:', heroHeight);
      window.scrollTo({
        top: heroHeight,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="relative h-screen w-full snap-start overflow-hidden">
      {/* Background Image */}
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
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <Card className="border-0 bg-black/40 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl max-w-4xl w-full mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {title}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full" />
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Building the future through innovation, teamwork, and cutting-edge robotics technology.
            </p>
          </div>
        </Card>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-50 pointer-events-none">
        <motion.button
          className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-3 text-white shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer pointer-events-auto"
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
      </div>
    </section>
  );
}
