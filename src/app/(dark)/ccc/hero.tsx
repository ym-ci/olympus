"use client";

import SlideUp from "@/components/framer/slide-up";
import { gradient } from "@/app/(dark)/ccc/ui";
import PopIn from "@/components/framer/pop-in";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <PopIn duration={0.4}>
      <div className="flex h-screen justify-center items-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-1 md:space-y-8 text-center gap-4">
              <PopIn duration={0.5}>
                <h1 className={`text-5xl md:text-6xl font-bold ${gradient} pb-4`}>Canadian Computing Competition</h1>
              </PopIn>
              <PopIn duration={0.65}>
                <h1 className={"text-2xl md:text-4xl font-bold text-gray-400 pb-4"}>@ York Mills CI</h1>
              </PopIn>
              <div className={"flex flex-row self-center gap-4 scale-125"}>
                <SlideUp duration={0.5} delay={0.5}>
                  <Link href={"#info"} className="group">
                    <Button
                      variant="default"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 transition-all duration-200"
                    >
                      <span>About the CCC</span>
                      <ArrowDown className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-1" />
                    </Button>
                  </Link>
                </SlideUp>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PopIn>
  );
};

export default Hero;