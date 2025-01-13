"use client";
import React from "react";
import Slide, { type SlideProps } from "@/components/framer/slide";

const SlideDown = (props: SlideProps & Omit<SlideProps, "translateY">) => {
  return <Slide {...props} translateY={-10} />;
};

export default SlideDown;