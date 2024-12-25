"use client";
import { motion, MotionProps } from "framer-motion";

interface MotionDivProps extends MotionProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
  className?: string;
  index?: number | string;
}

const MotionDiv: React.FC<MotionDivProps> = ({
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
}) => {
  return (
    <motion.div
      key={index}
      animate={animate}
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={viewport}
      whileHover={whileHover}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
