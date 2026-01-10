"use client";

import SlideUp from "@/components/framer/slide-up";
import PopIn from "@/components/framer/pop-in";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          
          {/* Badge */}
          <PopIn duration={0.5}>
            <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-300 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
              Registration Opens in March 2026
            </div>
          </PopIn>

          {/* Main Title */}
          <div className="space-y-4">
            <PopIn duration={0.6}>
              <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl">
                <span className="bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-transparent">
                  CETA
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-500 via-blue-300 to-blue-100 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Robotics Competition
                </span>
              </h1>
            </PopIn>
            
            <PopIn duration={0.7}>
              <p className="mx-auto max-w-[700px] text-lg text-slate-400 md:text-xl">
                Build it, code it, race it! Showcase your skills in this robotics challenge!
              </p>
            </PopIn>
          </div>

          {/* Buttons */}
          <SlideUp duration={0.5} delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link href="#info">
                <Button size="lg" className="h-12 px-8 rounded-full bg-white text-black hover:bg-slate-200 font-semibold transition-all hover:scale-105">
                  Learn More
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://forms.gle/2Rk444EKBbCQcWdZ7" target="_blank">
                 <Button size="lg" variant="outline" className="h-12 px-8 rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm transition-all hover:scale-105">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </SlideUp>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-slate-500 to-transparent"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
