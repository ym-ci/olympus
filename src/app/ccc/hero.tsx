"use client";

import SlideUp from "@/components/framer/slide-up";
import { gradient } from "@/app/ccc/ui";
import PopIn from "@/components/framer/pop-in";
import React from "react";
import { Button } from "@/components/ui/button";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <PopIn duration={0.4}>
      <div className="flex h-screen justify-center items-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-8 text-center gap-4">
              <PopIn duration={0.5}>
                <h1 className={`text-6xl font-bold ${gradient} pb-4`}>Canadian Computing Competition</h1>
              </PopIn>
              <PopIn duration={0.65}>
                <h1 className={"text-4xl font-bold text-gray-400 pb-4"}>@ York Mills CI</h1>
              </PopIn>
              <div className={"flex flex-row self-center gap-4 scale-125"}>
                <SlideUp duration={0.5} delay={0.5}>
                  <a href={"#info"}>
                    <Button color={"primary"}>
                      <FaArrowDown />
                      Learn More
                    </Button>
                  </a>
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