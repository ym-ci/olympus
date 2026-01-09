"use client";

import Link from "next/link";
import { Calendar, MapPin, Clock, DollarSign, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";

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
            <div className="mb-6 inline-flex items-center rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300 border border-blue-500/30">
              About the Event
            </div>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl tracking-tight">
              Discover the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Challenge</span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              The Canadian Computing Competition (CCC) is an engaging programming challenge that tests your coding abilities. 
              Whether you&apos;re taking your first steps in coding or you&apos;re an experienced programmer, the CCC offers a perfect 
              platform to enhance your algorithmic thinking and problem-solving skills.
            </p>
          </div>
          <div className="mt-8">
             <Link href="https://cemc.uwaterloo.ca/contests/ccc-cco.html" target="_blank">
              <Button variant="link" className="p-0 text-blue-400 hover:text-blue-300 text-lg">
                Read more on official website <ArrowRight className="ml-2 h-5 w-5" />
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
                <p className="text-slate-400">Feb 18th</p>
              </div>
            </div>
            <div className="w-full h-[1px] bg-white/5" />
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-pink-500/20 p-3 text-pink-400 ring-1 ring-pink-500/30">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg">Time</h3>
                <p className="text-slate-400">12:15 - 3:15 PM</p>
                <p className="text-xs text-slate-500">Arrive by 12:00 PM</p>
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
                <p className="text-slate-400">Room 204 @ YMCI</p>
              </div>
            </div>
            <div className="w-full h-[1px] bg-white/5" />
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-yellow-500/20 p-3 text-yellow-400 ring-1 ring-yellow-500/30">
                <DollarSign className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg">Price</h3>
                <p className="text-slate-400">$10 due <strong>February 5th</strong></p>
              </div>
            </div>
          </div>
        </InfoCard>

        {/* Registration CTA */}
        <InfoCard className="md:col-span-3 bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border-indigo-500/30" delay={0.4}>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-6">
              <div className="hidden md:flex rounded-full bg-indigo-500/20 p-4 text-indigo-400 ring-1 ring-indigo-500/40">
                <AlertCircle className="h-8 w-8" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Registration Deadline Approaching</h3>
                <p className="text-slate-300">Sign up before <span className="text-white font-semibold">February 5th</span> to secure your spot.</p>
              </div>
            </div>
            <Link href="https://forms.gle/WBoeA3RqyVEKtJx46" target="_blank" className="w-full md:w-auto">
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
