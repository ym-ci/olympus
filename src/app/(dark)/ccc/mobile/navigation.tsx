import { motion } from "framer-motion";
import { MenuItem } from "@/app/(dark)/ccc/mobile/menu-item";
import { nav } from "@/app/(dark)/ccc/nav";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ show, close }: { show: boolean, close: () => void }) => (
  <motion.ul variants={variants} className={"w-full absolute top-[100px]"}>
    {nav.map((stuff, i: number) => (
      <MenuItem i={i} key={i} show={show} {...stuff} closeMenu={() => {
        close();
      }} />
    ))}
  </motion.ul>
);