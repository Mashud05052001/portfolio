"use client";
import { motion, MotionProps } from "framer-motion";
import { MouseEventHandler } from "react";

interface TProps extends MotionProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const MotionButton = ({
  className,
  children,
  onClick,
  whileHover,
  whileTap,
  transition,
}: TProps) => {
  return (
    <motion.button
      whileHover={whileHover}
      whileTap={whileTap}
      transition={transition}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default MotionButton;
