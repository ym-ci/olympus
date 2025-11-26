"use client";

import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { useDimensions } from "@/components/dimensions";
import { Navigation } from "@/app/(dark)/ceta/mobile/navigation";
import { MenuToggle } from "@/app/(dark)/ceta/menu-toggle";

const sidebar = {
  open: {
    clipPath: "circle(150% at calc(100% - 40px) 40px)",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(0px at calc(100% - 40px) 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MobileNav = ({
  openChange,
}: {
  openChange?: (isOpen: boolean) => void;
}) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  useEffect(() => {
    if (openChange) openChange(isOpen);
  }, [isOpen, openChange]);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={`fixed inset-0 z-50 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <motion.div 
        className="absolute inset-0 bg-[#030014]/95 backdrop-blur-xl" 
        variants={sidebar} 
      />
      <AnimatePresence>
        {isOpen && (
          <Navigation
            show={isOpen}
            close={() => {
              toggleOpen();
            }}
          />
        )}
      </AnimatePresence>
      <MenuToggle 
        toggle={() => toggleOpen()} 
        className="absolute top-4 right-4 pointer-events-auto"
      />
    </motion.nav>
  );
};

export default MobileNav;
