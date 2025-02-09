"use client";

import React from "react";
import { motion } from "framer-motion";

type PopInProps = {
  duration: number;
  once?: boolean;
  children: React.ReactNode;
  delay?: number; // TODO: stagger children
  className?: string;
};
const PopIn = ({ once = true, ...props }: PopInProps) => {
  return (
    <motion.div
      className={props.className}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once }}
      transition={{ duration: props.duration, delay: props.delay }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {props.children}
    </motion.div>
  );
};

export default PopIn;
