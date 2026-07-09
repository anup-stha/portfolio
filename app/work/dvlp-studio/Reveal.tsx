"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.25, 1, 0.5, 1] as const; // ease-out quart, matches the homepage

/**
 * Scroll-reveal wrapper: a small fade-up (plus an optional 0.98 → 1 settle
 * for imagery), fired once. Falls back to opacity-only when the user
 * prefers reduced motion.
 */
export default function Reveal({
  children,
  delay = 0,
  scale = false,
  amount = 0.2,
  className,
}: {
  children: ReactNode;
  delay?: number;
  /** adds a subtle scale settle, meant for figures */
  scale?: boolean;
  /** portion of the element that must enter the viewport */
  amount?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? { opacity: 0 }
          : { opacity: 0, y: 22, ...(scale ? { scale: 0.98 } : {}) }
      }
      whileInView={
        reduceMotion
          ? { opacity: 1 }
          : { opacity: 1, y: 0, ...(scale ? { scale: 1 } : {}) }
      }
      viewport={{ once: true, amount }}
      transition={{ duration: 0.6, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
