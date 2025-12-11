"use client";

import Link from "next/link";
import { Calendar, MapPin, Clock, DollarSign, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const InfoCard = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay }}
    className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-md transition-all hover:bg-white/10 ${className}`}
  >
    {children}
  </motion.div>
);

const Info = () => {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-[auto_auto_auto] lg:gap-6">
        
        {/* Main About Card */}
        <InfoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-between min-h-[300px]" delay={0.1}>
          <div>
            <div className="mb-2 inline-flex items-center rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300 border border-blue-500/30">
              About the Event
            </div>
            <div className="mb-4 flex flex-col gap-4">
              <div className="flex justify-center">
                <div className="relative h-24 w-24 md:h-32 md:w-32 mb-4">
                  <Image
                    src="/assets/ceta/CETA-logo-v2025-light.png"
                    alt="CETA Logo"
                    fill
                    className="h-24 w-auto object-contain"
                    priority
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight whitespace-nowrap md:-mt-3">
                Discover the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">
                  Challenge
                </span>
              </h2>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Get ready to put your engineering skills to the test! 
              This robotics competition invites students from Computer Engineering 
              and other tech programs to design and build their own autonomous line-following robot. 
              You’ll combine mechanical know-how, electrical design, and programming skills to create 
              a robot that can sense its environment and navigate challenges with precision. 
              Strong communication and teamwork are a must as you bring your ideas to life. 
              The competition is open to all experience levels, whether you’re a beginner or 
              a seasoned builder! Come showcase your creativity, problem-solving, and passion for robotics!
            </p>
          </div>
          <div className="mt-8">
             <Link href="https://drive.google.com/file/d/1_ZirhW0QXu0W5Kt_R5A0C5A5oYDiESAW/view?usp=sharing" target="_blank">
              <Button variant="link" className="p-0 text-blue-400 hover:text-blue-300 text-lg">
                Read more in the official documentation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </InfoCard>

        {/* Date & Time */}
        <InfoCard className="md:col-span-1" delay={0.2}>
          <div className="flex flex-col gap-6 h-full justify-center">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-purple-500/20 p-3 text-purple-400 ring-1 ring-purple-500/30">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg">Date</h3>
                <p className="text-slate-400">May 6th, 2026</p>
              </div>
            </div>
            <div className="w-full h-[1px] bg-white/5" />
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-pink-500/20 p-3 text-pink-400 ring-1 ring-pink-500/30">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg">Time</h3>
                <p className="text-slate-400">08:15 - 3:15 PM</p>
                <p className="text-xs text-slate-500">Arrive by 8:15 AM</p>
              </div>
            </div>
          </div>
        </InfoCard>

        {/* Location & Price */}
        <InfoCard className="md:col-span-1" delay={0.3}>
           <div className="flex flex-col gap-6 h-full justify-center">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-emerald-500/20 p-3 text-emerald-400 ring-1 ring-emerald-500/30">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg">Location</h3>
                <p className="text-slate-400">490 York Mills Rd, North York, ON M3B 1W6 - Exit #8 - Double Gym</p>
                <Link href="https://drive.google.com/file/d/1GIbBJrXvU30nxl0EKxTppqx6k9XW4N0W/view?usp=sharing" target="_blank">
                  <Button variant="link" className="p-0 text-blue-400 hover:text-blue-300 text-lg">
                    See parking info here <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="w-full h-[1px] bg-white/5" />
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-yellow-500/20 p-3 text-yellow-400 ring-1 ring-yellow-500/30">
                <DollarSign className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg">Price</h3>
                <p className="text-slate-400">$20 per team</p>
              </div>
            </div>
          </div>
        </InfoCard>

        {/* Registration CTA */}
        <InfoCard className="md:col-span-3 bg-gradient-to-r from-indigo-00/40 to-blue-900/40 border-indigo-500/30" delay={0.4}>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-6">
              <div className="hidden md:flex rounded-full bg-indigo-500/20 p-4 text-indigo-400 ring-1 ring-indigo-500/40">
                <AlertCircle className="h-8 w-8" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Registration Deadline Approaching</h3>
                <p className="text-slate-300">Sign up before <span className="text-white font-semibold">April 24th, 2026</span> to secure your spot.</p>
              </div>
            </div>
            <Link href="https://forms.gle/Qi6wvBmajwB5B1J56" target="_blank" className="w-full md:w-auto">
              <Button size="lg" className="w-full md:w-auto bg-white text-indigo-950 hover:bg-slate-200 font-bold px-8 h-12 text-lg transition-transform hover:scale-105">
                Register Now
              </Button>
            </Link>
          </div>
        </InfoCard>

      </div>
    </section>
  );
};

export default Info;
