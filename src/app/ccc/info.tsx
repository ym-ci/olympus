import React from 'react';
import SlideUp from "@/components/framer/slide-up";
import { FaArrowDown } from "react-icons/fa";
import { gradient } from '@/app/ccc/ui';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Info = () => {
  return (
    <div className={"flex flex-col gap-8"}>
      <SlideUp duration={0.5} delay={0.3}>
        <h1 className={`text-5xl font-bold ${gradient}`}>Info</h1>
      </SlideUp>
      <SlideUp duration={0.5} delay={0.5}>
        <p className="text-xl md:text-2xl px-4">
          The Canadian Computing Competition (CCC) is a fun challenge for participants with an interest in programming. Designed to be both accessible to participants with some programming experience and to challenge the keenest programmers at the secondary school level, the CCC helps participants build confidence and grow their ability to design, understand and implement algorithms.
        </p>
        <Link href={"https://cemc.uwaterloo.ca/contests/ccc-cco.html"} target="_blank">
          <button className="text-blue-500 text-xl">Learn More {">>>"}</button>
        </Link>
      </SlideUp>
      <SlideUp duration={0.5} delay={0.6}>
        <a href={"#details"}>
          <Button color={"primary"}>
            <FaArrowDown />
            When?
          </Button>
        </a>
      </SlideUp>
    </div>
  );
};

export default Info;