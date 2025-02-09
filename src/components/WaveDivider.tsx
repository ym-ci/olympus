"use client";

import { motion } from "framer-motion";

export function WaveDivider() {
  return (
    <motion.div
      className="absolute -left-[50px] bottom-0 top-0 w-[100px] cursor-col-resize"
      style={{
        background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 80' preserveAspectRatio='none'%3E%3Cpath d='M0,0 Q10,40 0,80 Q10,40 20,80 Q10,40 20,0' fill='%23020817' stroke='none'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat-y",
        backgroundSize: "100% 80px",
      }}
      animate={{
        backgroundPositionY: ["0px", "80px"],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}
