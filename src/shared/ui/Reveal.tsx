"use client";

import { motionTokens, springs } from "@/shared/lib/motion-tokens";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/** Scroll-reveal wrapper: once:true, respects prefers-reduced-motion. */
export function Reveal({ children, delay = 0, y, className }: RevealProps) {
  const reduce = useReducedMotion();
  const distance = y ?? motionTokens.distance.lg;

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: motionTokens.duration.slow,
        ease: motionTokens.easing.smooth,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export { motionTokens, springs };
