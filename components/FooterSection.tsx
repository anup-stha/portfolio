"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

/* ---------------------------------- */
/*  Googly eye — pupil chases cursor  */
/* ---------------------------------- */

const PUPIL_MAX_OFFSET = 10;
const PUPIL_REST = { x: 0, y: PUPIL_MAX_OFFSET }; // rest at bottom-center

function GooglyEye() {
  const reducedMotion = useReducedMotion();
  const eyeRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(PUPIL_REST.x);
  const rawY = useMotionValue(PUPIL_REST.y);
  const pupilX = useSpring(rawX, { stiffness: 320, damping: 26, mass: 0.6 });
  const pupilY = useSpring(rawY, { stiffness: 320, damping: 26, mass: 0.6 });

  useEffect(() => {
    // Reduced motion: pupils stay static at rest, no listener at all.
    if (reducedMotion) return;
    const handleMove = (event: MouseEvent) => {
      const el = eyeRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      const dist = Math.hypot(dx, dy);
      if (dist === 0) return;
      const scale = Math.min(dist, PUPIL_MAX_OFFSET) / dist;
      rawX.set(dx * scale);
      rawY.set(dy * scale);
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [rawX, rawY, reducedMotion]);

  return (
    <div
      ref={eyeRef}
      className="relative flex items-center justify-center bg-white"
      style={{ width: 34, height: 56, borderRadius: "50%" }}
      aria-hidden="true"
    >
      <motion.span
        className="block rounded-full"
        style={{
          width: 11,
          height: 11,
          background: "var(--black, #050505)",
          x: pupilX,
          y: pupilY,
        }}
      />
    </div>
  );
}

/* --------------------------- */
/*  Social buttons (envelope,  */
/*  document, linkedin)        */
/* --------------------------- */

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#fafafa",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const socials = [
  {
    label: "Email",
    ariaLabel: "Email Anup",
    href: "mailto:works.anupstha@gmail.com",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="M3.5 7l8.5 6 8.5-6" />
      </svg>
    ),
  },
  {
    label: "Resume",
    ariaLabel: "Download CV",
    href: "/anup-shrestha-cv.pdf",
    icon: (
      <svg {...iconProps}>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6M9 17h6" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    ariaLabel: "Anup on LinkedIn",
    href: "#",
    icon: (
      <svg {...iconProps}>
        <path d="M7 10v7" />
        <circle cx="7" cy="6.5" r="0.5" fill="#fafafa" />
        <path d="M11.5 17v-4a2.75 2.75 0 0 1 5.5 0v4" />
        <path d="M11.5 10v3" />
      </svg>
    ),
  },
];

/* ----------------- */
/*  Footer section   */
/* ----------------- */

export default function FooterSection() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <>
      {/* -------- Black footer -------- */}
      <footer
        className="relative"
        style={{ background: "var(--black, #050505)", color: "#fafafa" }}
      >
        <motion.div
          className="mx-auto flex w-full max-w-[1820px] flex-col px-6 pb-10 pt-20 sm:px-10 sm:pb-16 sm:pt-24"
          style={{ minHeight: "100svh" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* googly-eyes logo */}
          <div className="flex items-center" style={{ gap: 8 }} aria-hidden="true">
            <GooglyEye />
            <GooglyEye />
          </div>

          {/* connect row — viewport-proportional gap keeps it upper-middle
              at both short (700px) and tall (1200px) viewports */}
          <div
            className="flex flex-wrap items-end justify-between gap-8"
            style={{ marginTop: "clamp(56px, 12svh, 140px)" }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                lineHeight: 1.7,
                color: "var(--footer-secondary, #d4d4d8)",
              }}
            >
              Let&apos;s connect.
              <br />
              Always up for a good chat.
            </p>

            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.ariaLabel}
                  className="flex items-center justify-center rounded-full focus-visible:outline-[#fafafa]"
                  style={{ width: 56, height: 56, background: "#18181b" }}
                  whileHover={
                    reducedMotion
                      ? { backgroundColor: "#27272a" }
                      : { scale: 1.06, backgroundColor: "#27272a" }
                  }
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* giant name — mt-auto absorbs spare height so the wordmark
              sits toward the bottom and the legal row stays pinned */}
          <h2 className="mt-auto w-full" style={{ paddingTop: 64 }}>
            {/* Source Serif 4 300 at 150px, measured in-browser:
                natural advance width 1004, ascent 155, descent 50 →
                viewBox matches so textLength barely adjusts spacing. */}
            <svg
              viewBox="0 0 1004 205"
              className="block w-full"
              role="img"
              aria-label="Anup Shrestha"
            >
              <text
                x="0"
                y="155"
                textLength="1004"
                lengthAdjust="spacing"
                fill="#fafafa"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontSize: 150,
                  letterSpacing: "-0.02em",
                }}
              >
                Anup Shrestha
              </text>
            </svg>
          </h2>

          {/* bottom row */}
          <div
            className="flex flex-wrap items-center justify-between gap-2"
            style={{
              marginTop: 40,
              fontFamily: "var(--font-body)",
              fontSize: 14,
              lineHeight: 1.6,
              color: "var(--footer-muted, #8b8b94)",
            }}
          >
            <span>&copy; 2026 Anup Shrestha</span>
            <span>Built with love</span>
          </div>
        </motion.div>
      </footer>
    </>
  );
}
