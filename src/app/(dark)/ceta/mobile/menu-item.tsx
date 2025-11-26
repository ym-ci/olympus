import { motion } from "framer-motion";

type MenuItemProps = {
  i: number;
  show: boolean;
  href: string;
  label: string;
  closeMenu?: () => void;
};
export const MenuItem = ({ i, show, href, label, ...props }: MenuItemProps) => {
  if (!show) return null;
  return (
    <motion.li
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{
        delay: show ? (i + 1) * 0.1 : 0,
        y: { stiffness: 1000 }
      }}
      className="mb-8 flex w-full cursor-pointer list-none items-center justify-center"
    >
      <a
        href={href}
        onClick={() => {
          if (props.closeMenu) props.closeMenu();
        }}
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-white hover:from-indigo-400 hover:to-purple-400 transition-all duration-300"
      >
        {label}
      </a>
    </motion.li>
  );
};
