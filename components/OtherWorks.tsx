"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

type Work = {
  name: string;
  year: string;
  description: string;
  origin: "Whitehat" | "Rara Labs" | "Side project";
  href: string;
};

const ORIGIN_TINT: Record<Work["origin"], string> = {
  Whitehat: "#fff4ec",
  "Rara Labs": "#effaf4",
  "Side project": "#f5f2ff",
};

const ORIGIN_ACCENT: Record<Work["origin"], string> = {
  Whitehat: "#ea580c",
  "Rara Labs": "#16a34a",
  "Side project": "#7c3aed",
};

const WORKS: Work[] = [
  {
    name: "ACT 3 AI",
    year: "2024",
    description:
      "Automated pipeline for generating Blender videos with motion capture and audio-driven lip-sync on distributed compute.",
    origin: "Whitehat",
    href: "/work/archive/act3-ai",
  },
  {
    name: "End The Rig Game",
    year: "2024",
    description:
      "Interactive 3D game shipped to Android and iOS, with in-game video generation.",
    origin: "Whitehat",
    href: "/work/archive/end-the-rig-game",
  },
  {
    name: "End The Rig Web",
    year: "2024",
    description:
      "Companion web app with payments, IFTTT-style game logic, and task scheduling.",
    origin: "Whitehat",
    href: "/work/archive/end-the-rig-web",
  },
  {
    name: "Rara Design System",
    year: "2023",
    description:
      "Component library behind Rara's enterprise apps: tables, date pickers, charts, published to NPM.",
    origin: "Rara Labs",
    href: "/work/archive/rara-design-system",
  },
  {
    name: "Ledger Dynamics",
    year: "2023",
    description:
      "No-code ledger engine managing real-time money movement, up to 1,000 transactions per second per account.",
    origin: "Rara Labs",
    href: "/work/archive/ledger-dynamics",
  },
  {
    name: "Mixim Drafts",
    year: "2023",
    description: "Simple, fast note-taking app for productive minds.",
    origin: "Side project",
    href: "/work/archive/mixim-drafts",
  },
  {
    name: "Tailwind Preview",
    year: "2023",
    description:
      "Write HTML and Tailwind, see the design render in real time.",
    origin: "Side project",
    href: "/work/archive/tailwind-preview",
  },
  {
    name: "Mixim Icons",
    year: "2023",
    description:
      "Community-driven icon library where users request the icons they are missing.",
    origin: "Side project",
    href: "/work/archive/mixim-icons",
  },
];

export default function OtherWorks() {
  const reducedMotion = useReducedMotion();

  const fadeUp = {
    initial: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    whileInView: reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
  } as const;

  return (
    <section
      id="archive"
      aria-label="Other works"
      className="relative bg-white px-6 pb-32 pt-24 sm:px-10 sm:pb-36 sm:pt-32"
      style={{ borderRadius: "0 0 var(--radius-card) var(--radius-card)" }}
    >
      <div className="mx-auto w-full max-w-[1820px]">
        {/* header */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)",
              lineHeight: 1.05,
              color: "var(--ink, #09090b)",
            }}
          >
            Other works
          </h2>
          <p
            className="mt-4 max-w-[52ch] text-[15px] leading-relaxed"
            style={{ color: "var(--gray, #71717a)" }}
          >
            Games, engines, and side projects that did not need a full case
            study but earned their keep.
          </p>
        </motion.div>

        {/* index */}
        <ul className="mt-14">
          {WORKS.map((work, i) => {
            const accent = ORIGIN_ACCENT[work.origin];
            const tint = ORIGIN_TINT[work.origin];
            return (
              <motion.li
                key={work.name}
                {...fadeUp}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 1, 0.5, 1],
                  delay: Math.min(i * 0.05, 0.35),
                }}
                className="border-t border-zinc-200 last:border-b"
              >
                <Link
                  href={work.href}
                  className="group relative grid grid-cols-[1fr_auto] items-center gap-x-5 py-7 transition-[padding] duration-300 ease-out sm:grid-cols-[64px_minmax(220px,1fr)_1.2fr_150px_56px] sm:gap-x-8 sm:group-hover:px-2"
                >
                  {/* hover tint sweep */}
                  <span
                    aria-hidden="true"
                    className="absolute -inset-x-4 inset-y-1 -z-10 origin-left scale-x-0 rounded-2xl opacity-0 transition-[transform,opacity] duration-300 ease-out group-hover:scale-x-100 group-hover:opacity-100 sm:-inset-x-8"
                    style={{ background: tint }}
                  />

                  {/* index number */}
                  <span
                    className="hidden text-[13px] sm:block"
                    style={{
                      color: "var(--gray, #71717a)",
                      fontFamily: "var(--font-mono-accent)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* name */}
                  <span
                    className="transition-colors duration-200 ease-out"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: "clamp(1.25rem, 1.8vw, 1.5rem)",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.2,
                      color: "var(--ink, #09090b)",
                    }}
                  >
                    {work.name}
                  </span>

                  {/* description */}
                  <span
                    className="col-span-2 col-start-1 mt-1.5 text-[15px] leading-relaxed sm:col-span-1 sm:col-start-auto sm:mt-0"
                    style={{ color: "var(--gray, #71717a)" }}
                  >
                    {work.description}
                  </span>

                  {/* origin · year */}
                  <span
                    className="hidden text-[12px] uppercase tracking-[0.08em] sm:block"
                    style={{
                      color: accent,
                      fontFamily: "var(--font-mono-accent)",
                    }}
                  >
                    {work.origin}
                    <span style={{ color: "var(--gray, #71717a)" }}>
                      {" "}
                      · {work.year}
                    </span>
                  </span>

                  {/* arrow */}
                  <span
                    aria-hidden="true"
                    className="col-start-2 row-start-1 flex h-11 w-11 items-center justify-center justify-self-end rounded-full border border-zinc-200 text-[16px] transition-[background-color,border-color,color,transform] duration-200 ease-out group-hover:-rotate-45 group-hover:text-white sm:col-start-auto sm:row-start-auto"
                    style={
                      {
                        color: "var(--ink-soft, #52525b)",
                        "--tw-accent": accent,
                      } as React.CSSProperties
                    }
                  >
                    <span className="transition-colors duration-200 ease-out group-hover:hidden">
                      →
                    </span>
                    <span
                      className="hidden h-full w-full items-center justify-center rounded-full group-hover:flex"
                      style={{ background: accent }}
                    >
                      →
                    </span>
                  </span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
