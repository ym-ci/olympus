import React from 'react';
import SlideUp from "@/components/framer/slide-up";
import { FaArrowDown } from "react-icons/fa";
import { gradient } from '@/app/ccc/ui';
import { Button } from '@/components/ui/button';

const mobileBorder = "border-b-gray-400 border-b-1 pb-4 md:border-none";
const Details = () => {
  return (
    <div className={"flex flex-col gap-8"}>
      <SlideUp duration={0.5} delay={0.3}>
        <h1 className={`text-5xl font-bold ${gradient}`}>Details</h1>
      </SlideUp>
      <SlideUp duration={0.5} delay={0.5}>
        <div className={"flex flex-row w-full justify-center"}>
          <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 px-4 w-2/3 md:w-1/2"}>
            <div className={`flex flex-col gap-4 ${mobileBorder}`}>
              <h1 className={"text-2xl font-bold"}>Date</h1>
              <p className={"text-xl"}>
                Feb 19th
              </p>
            </div>
            <div className={`flex flex-col gap-4 ${mobileBorder}`}>
              <h1 className={"text-2xl font-bold"}>Location</h1>
              <p className={"text-xl"}>
                Room 204/206 @ YMCI
              </p>
            </div>

            <div className={`flex flex-col gap-4 ${mobileBorder}`}>
              <h1 className={"text-2xl font-bold"}>Registration Deadline</h1>
              <p className={"text-xl"}>
                Feb 7th
              </p>
            </div>
            <div className={`flex flex-col gap-4 ${mobileBorder}`}>
              <h1 className={"text-2xl font-bold"}>Duration</h1>
              <p className={"text-xl"}>
                12:15-3:15 PM (Please arrive by 12:00 PM!)
              </p>
            </div>
            <div className={`flex flex-col gap-4 ${mobileBorder}`}>
              <h1 className={"text-2xl font-bold"}>Price</h1>
              <p className={"text-xl"}>
                $10
              </p>
            </div>
            <div className={`flex flex-col gap-4 ${mobileBorder}`}>
              <h1 className={"text-2xl font-bold"}>Food</h1>
              <p className={"text-xl"}>
                TBD (extra cost)
              </p>
            </div>
          </div>
        </div>
      </SlideUp>
      <SlideUp duration={0.5} delay={0.6}>
        <a href={"#register"}>
          <Button color={"primary"}>
            <FaArrowDown />
            Register
          </Button>
        </a>
      </SlideUp>
    </div>
  );
};

export default Details;