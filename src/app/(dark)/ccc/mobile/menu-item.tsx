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
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: show ? (i + 1) * 0.2 : 0,
      }}
      className={
        "mb-[20px] flex w-full cursor-pointer list-none items-center justify-center py-8"
      }
    >
      <a
        href={href}
        onClick={() => {
          if (props.closeMenu) props.closeMenu();
        }}
        className={"text-white"}
      >
        {label}
      </a>
    </motion.li>
  );
};
