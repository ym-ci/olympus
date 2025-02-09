"use client";
import { motion, type Transition } from "framer-motion";
import React from "react";

type StaggerConfig = {
  staggerChildren: number;
  delayChildren: number;
  childrenComponent?: React.ElementType;
  childrenClassName?: string;
};
export type SlideProps = {
  children: React.ReactNode[] | React.ReactNode;
  duration: number;
  once?: boolean;
  fade?: boolean;
  delay?: number; // TODO: stagger children
  stagger?: StaggerConfig;
  translateY?: number;
  component?: React.ElementType;
  className?: string;
  transition?: Transition;
};

const Slide = ({
  once = true,
  component = motion.div,
  ...props
}: SlideProps) => {
  const Component = component;
  // the children should be hidden, and then while fading in, slide up
  if (props.stagger) {
    const container = {
      show: {
        transition: {
          staggerChildren: props.stagger.staggerChildren,
          delayChildren: props.stagger.delayChildren,
        },
      },
    };
    const variants = {
      visible: { opacity: 1, scale: 1 },
      hidden: { opacity: 0, scale: 0 },
    };
    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-explicit-any
    const ChildComponent: typeof motion.div | any =
      props.stagger.childrenComponent ?? motion.div;
    return (
      <>
        <Component
          className={props.className}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once }}
          variants={container}
          animate={"visible"}
          transition={props.transition}
        >
          {Array.isArray(props.children) ? (
            props.children.map((child, i) => (
              <ChildComponent
                key={i}
                variants={variants}
                className={props.stagger?.childrenClassName}
                transition={props.transition}
              >
                {child}
              </ChildComponent>
            ))
          ) : (
            <ChildComponent
              variants={variants}
              className={props.stagger?.childrenClassName}
              transition={props.transition}
            >
              {props.children}
            </ChildComponent>
          )}
        </Component>
      </>
    );
  }
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once }}
      transition={{
        duration: props.duration,
        delay: props.delay,
        ...props.transition,
      }}
      variants={{
        visible: { opacity: 1, translateY: 0 },
        hidden: { opacity: 0, translateY: props.translateY },
      }}
    >
      {props.children}
    </motion.div>
  );
};

export default Slide;
