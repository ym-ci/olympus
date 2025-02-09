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
      <div className="flex h-screen items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6">
            <div className="flex flex-col justify-center gap-4 space-y-1 text-center md:space-y-8">
              <PopIn duration={0.5}>
                <h1
                  className={`text-5xl font-bold md:text-6xl ${gradient} pb-4`}
                >
                  Canadian Computing Competition
                </h1>
              </PopIn>
              <PopIn duration={0.65}>
                <h1
                  className={
                    "pb-4 text-2xl font-bold text-gray-400 md:text-4xl"
                  }
                >
                  @ York Mills CI
                </h1>
              </PopIn>
              <div className={"flex scale-125 flex-row gap-4 self-center"}>
                <SlideUp duration={0.5} delay={0.5}>
                  <Link href={"#info"} className="group">
                    <Button
                      variant="default"
                      className="bg-blue-600 px-6 py-2 font-semibold text-white transition-all duration-200 hover:bg-blue-700"
                    >
                      <span>About the CCC</span>
                      <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
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
