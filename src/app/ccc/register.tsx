"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SlideUp from '@/components/framer/slide-up';
import { gradient } from '@/app/ccc/ui';
import { Button } from '@/components/ui/button';

const Register = () => {
  return (
    <div className="container text-center w-full flex flex-col gap-8 mx-2 md:w-1/2">
      <SlideUp duration={0.5} delay={0.3}>
        <h1 className={`text-4xl font-bold ${gradient} py-1`}>Register</h1>
      </SlideUp>
      <SlideUp duration={0.5} delay={0.5}>
        <Accordion type="single" collapsible defaultValue='1'>
          <AccordionItem value="1">
            <AccordionTrigger>
              Step 1 - Register
            </AccordionTrigger>
            <AccordionContent>
              <div className={"w-full flex flex-col gap-4"}>
                  <p className={"col-span-1 md:col-span-5 text-xl"}>
                  Please register online via the google form below.
                </p>
                <Button color={"primary"} onClick={() => {
                  const link = "/ccc-signup?ref=site";
                  const ua = window.navigator.userAgent;
                  const iOS = !!(/iPad/i.exec(ua)) || !!(/iPhone/i.exec(ua));
                  if (iOS){
                    window.location.href = link;
                  } else {
                    window.open(link, "_blank");
                  }
                }}>Register</Button>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionTrigger>
              Step 2 - Pay
            </AccordionTrigger>
            <AccordionContent>
            <div className={"w-full grid-cols-1 md:grid-cols-11 grid pb-2"/*py-4*/}>
              {/*
              <div className={"col-span-1 md:col-span-5 flex flex-col items-center justify-center gap-2"}>
                <h1 className={"text-2xl font-bold"}>School Cash Online</h1>
                <p className={"text-xl"}>Pay online with School Cash Online</p>
                <a href={"#"}>
                  <Button color={"primary"}>Pay Online</Button>
                </a>
              </div>
              <div className={"hidden md:flex md:col-span-1 flex-col grid-rows-3 items-center justify-center"}>
                <div className={"w-px h-full bg-gray-400 row-span-1"}/>
                <span className={"w-full h-fit row-span-1"}>
                OR
              </span>
                <div className={"w-px h-full bg-gray-400 row-span-1"}/>
              </div>
              <div className={"md:hidden flex flex-row items-center justify-center gap-2 my-4"}>
                <div className={"w-full h-px bg-gray-400"}/>
                <span className={"w-fit h-fit"}>
                OR
              </span>
                <div className={"w-full h-px bg-gray-400"}/>
              </div>
              */}
              <div className={/*col-span-5*/"col-span-1 md:col-span-11 flex flex-col items-center justify-center gap-1"}>
                <h1 className={"text-2xl font-bold"}>Pay In Person</h1>
                <p className={"text-xl"}>Pay in person with cash ($10)</p>
                <p className={"text-xl"}>See Ms. Marie in Room 204</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SlideUp>
    </div>
  );
};

export default Register;