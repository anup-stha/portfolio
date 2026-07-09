"use client";

import { motion, useScroll } from "motion/react";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 h-[5px] w-full origin-left bg-[var(--yellow)]"
      style={{ scaleX: scrollYProgress, zIndex: "var(--z-progress)" }}
    />
  );
}
