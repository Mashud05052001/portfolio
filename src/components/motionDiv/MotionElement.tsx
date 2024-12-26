"use client";
import { motion, MotionProps } from "framer-motion";
import React, { MouseEventHandler } from "react";

type MotionElements = keyof typeof motion;

interface TProps extends MotionProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
  className?: string;
  index?: number | string;
  as?: MotionElements;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const MotionElement: React.FC<TProps> = ({
  as = "div",
  initial,
  animate,
  transition,
  whileInView,
  viewport,
  style,
  children,
  className,
  index,
  whileHover,
  href,
  onClick,
}) => {
  const Element = motion[as] as React.ElementType;

  return (
    <Element
      key={index}
      animate={animate}
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={viewport}
      whileHover={whileHover}
      style={style}
      className={className}
      href={href}
      onClick={onClick}
    >
      {children}
    </Element>
  );
};

export default MotionElement;
