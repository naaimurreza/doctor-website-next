"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "left" | "right";

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 28 },
  left: { x: -28 },
  right: { x: 28 },
};

type RevealProps = {
  children: ReactNode;
  /** Seconds to wait before animating — used to stagger sibling cards. */
  delay?: number;
  direction?: Direction;
  className?: string;
};

/** Fades and slides its children into view the first time they are scrolled to. */
export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      // Marks the element for the no-JavaScript fallback in `layout.tsx`,
      // which forces it visible so the content is never stuck at opacity 0.
      data-reveal=""
      className={className}
      // Keep `initial` identical on server and client. `useReducedMotion()`
      // is `null` during SSR, so branching styles on it causes hydration
      // mismatches for visitors who prefer reduced motion.
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}
