"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

/* ---------------------------------------------------------------- types */

type Project = {
  id: string;
  name: string;
  year: string;
  headline: string;
  /** compact header: short display title + one-line blurb replace the
      headline sentence, stats row, and stack line */
  title?: string;
  blurb?: string;
  stats: string[];
  tint: string;
  chipBg: string;
  chipGlyph: "spark" | "shield" | "route" | "cube" | "check-shield" | "layers";
  comingSoon?: boolean;
  /** card sheet background; text flips light when `darkCard` is set */
  cardBg: string;
  darkCard?: boolean;
  /** real tech stack, rendered as a mono line under the stats */
  stack?: string;
  /** route for the case study page; falls back to an anchor */
  caseStudyHref?: string;
  /** real app screenshots; when present the marquee renders image tiles */
  screenshots?: { src: string; alt: string; aspect?: string }[];
};

/* ----------------------------------------------------------------- data */

const PROJECTS: Project[] = [
  {
    id: "dvlp",
    name: "DVLP Studio \u00b7 Platform",
    year: "2024-Present",
    title: "DVLP Studio",
    blurb:
      "An AI platform that drafts pharmaceutical proposals from structured and unstructured data, with agentic pipelines and real-time collaboration.",
    headline:
      "An AI platform that drafts pharmaceutical proposals from structured and unstructured data",
    stats: [
      "Full design system",
      "MUI \u2192 Tailwind migration",
      "Agentic document pipelines",
      "Real-time Matrix collaboration",
    ],
    tint: "#fff4ec",
    chipBg: "#f97316",
    chipGlyph: "spark",
    cardBg: "#ffffff",
    stack: "Next.js 16 \u00b7 React 19 \u00b7 Go (Gin) \u00b7 Python (FastAPI \u00b7 LangChain) \u00b7 PostgreSQL \u00b7 Neo4j \u00b7 Matrix \u00b7 Hyperledger \u00b7 AWS",
    caseStudyHref: "/work/dvlp-studio",
    screenshots: [
      {
        src: "/work/studio-01.webp",
        alt: "DVLP asset home with AI drug context inquiry panel",
        aspect: "3576 / 2080",
      },
      {
        src: "/work/studio-04.webp",
        alt: "DVLP development plan explorer",
        aspect: "3576 / 2080",
      },
      {
        src: "/work/studio-02.webp",
        alt: "DVLP entity data connections graph",
        aspect: "3576 / 2080",
      },
      {
        src: "/work/studio-09.webp",
        alt: "DVLP portfolio scenario modeling timeline",
        aspect: "3576 / 2080",
      },
      {
        src: "/work/studio-03.webp",
        alt: "DVLP virtual data room with document viewer",
        aspect: "3576 / 2080",
      },
      {
        src: "/work/studio-05.webp",
        alt: "DVLP blockchain explorer",
        aspect: "3576 / 2080",
      },
      {
        src: "/work/studio-06.webp",
        alt: "DVLP AI document builder",
        aspect: "3576 / 2080",
      },
      {
        src: "/work/studio-08.webp",
        alt: "DVLP asset messaging",
        aspect: "3576 / 2080",
      },
    ],
  },
  {
    id: "dvlp-studio",
    name: "DVLP Studio \u00b7 Design System",
    year: "2025-26",
    title: "DVLP Design System",
    blurb:
      "A lab-paper design system with one oxidized accent powering every DVLP surface: components, tokens with dark mode, type scale, and domain icons.",
    headline:
      "A lab-paper design system with one oxidized accent, powering every DVLP product surface",
    stats: [
      "Reusable component library",
      "Design tokens + dark mode",
      "Type scale + domain icons",
      "Consistent cross-team UI",
    ],
    tint: "#faf6ec",
    chipBg: "#dd4a05",
    chipGlyph: "layers",
    cardBg: "#ffffff",
    stack: "Figma \u00b7 Tailwind v4 \u00b7 shadcn/ui \u00b7 Storybook \u00b7 Design tokens \u00b7 Lexical",
    caseStudyHref: "/work/dvlp-design-system",
    screenshots: [
      {
        src: "/work/ds-cover.webp",
        alt: "DVLP lab-paper design system cover",
        aspect: "16 / 9",
      },
      {
        src: "/work/ds-palette.webp",
        alt: "DVLP design system core color palette",
        aspect: "4 / 3",
      },
      {
        src: "/work/ds-wall.webp",
        alt: "DVLP design system component wall",
        aspect: "2 / 1",
      },
      {
        src: "/work/ds-typeface.webp",
        alt: "DVLP design system typeface specimen",
        aspect: "4 / 3",
      },
      {
        src: "/work/ds-typescale.webp",
        alt: "DVLP design system type scale",
        aspect: "16 / 9",
      },
      {
        src: "/work/ds-buttons.webp",
        alt: "DVLP design system action buttons in all states",
        aspect: "4 / 3",
      },
      {
        src: "/work/ds-cards.webp",
        alt: "DVLP design system card components",
        aspect: "4 / 3",
      },
    ],
  },
  {
    id: "vidi",
    name: "VIDI \u00b7 Agent Governance",
    year: "2025-26",
    title: "DVLP Agency",
    blurb:
      "A governance platform that puts policies, audit trails, and signed receipts around AI agents, with gated invocations and a live playground.",
    headline:
      "A governance and runtime platform that puts policies, audit trails, and signatures around AI agents",
    stats: [
      "Policy-gated invocations",
      "Signed execution receipts",
      "Full agent audit trail",
      "Agent playground + live run graphs",
    ],
    tint: "#fff7ed",
    chipBg: "#c2410c",
    chipGlyph: "check-shield",
    cardBg: "#ffffff",
    caseStudyHref: "/work/vidi",
    stack: "Next.js 16 \u00b7 React Flow \u00b7 GSAP \u00b7 Go (Echo) \u00b7 Cerbos \u00b7 CEL \u00b7 AWS KMS + Bedrock \u00b7 PostgreSQL \u00b7 Redis",
    screenshots: [
      {
        src: "/work/vidi-new-01.webp",
        alt: "VIDI overview: registry health, invocations, and policy decisions",
        aspect: "3576 / 2080",
      },
      {
        src: "/work/vidi-new-02.webp",
        alt: "VIDI Guild agent detail with QA pipeline and trust posture",
        aspect: "3576 / 2080",
      },
      {
        src: "/work/vidi-new-03.webp",
        alt: "VIDI playground formula run with live agent flow graph",
        aspect: "3576 / 2080",
      },
      {
        src: "/work/vidi-new-04.webp",
        alt: "VIDI agent tool graph for direct invocation",
        aspect: "3576 / 2080",
      },
      {
        src: "/work/vidi-new-05.webp",
        alt: "VIDI agents kanban in dark mode",
        aspect: "3576 / 2080",
      },
      {
        src: "/work/vidi-new-06.webp",
        alt: "VIDI playground run setup in dark mode",
        aspect: "3576 / 2080",
      },
    ],
  },
  {
    id: "hackaprompt",
    name: "HackAPrompt 2.0 · Learn Prompting",
    year: "2024-25",
    title: "HackAPrompt 2.0",
    blurb:
      "The world's largest AI red-teaming competition with a $100K prize pool, thousands of live participants, and real-time leaderboards.",
    headline:
      "The world's largest AI red-teaming competition, built to hold thousands of live participants",
    stats: [
      "$100K prize pool",
      "Dynamic scoring engine",
      "Team formation + leaderboards",
      "Real-time progress tracking",
    ],
    tint: "#eef2ff",
    chipBg: "#1e3a8a",
    chipGlyph: "shield",
    cardBg: "#ffffff",
    stack: "Next.js \u00b7 Supabase \u00b7 WebSockets \u00b7 TypeScript \u00b7 Tailwind \u00b7 Storybook",
    caseStudyHref: "/work/hackaprompt",
    screenshots: [
      {
        src: "/work/hackaprompt-03.webp",
        alt: "HackAPrompt landing: Hack AI, win money",
        aspect: "3576 / 2080",
      },
      {
        src: "/work/hackaprompt-05.webp",
        alt: "HackAPrompt Emoji Defense challenge with live model chat",
        aspect: "3576 / 2080",
      },
      {
        src: "/work/hackaprompt-04.webp",
        alt: "HackAPrompt competition tracks",
        aspect: "3576 / 2080",
      },
      {
        src: "/work/hackaprompt-01.webp",
        alt: "HackAPrompt 2.0 dashboard with competition tracks",
      },
      {
        src: "/work/hackaprompt-02.webp",
        alt: "HackAPrompt 2.0 competition leaderboard",
      },
    ],
  },
  {
    id: "myra",
    name: "Myra ERP \u00b7 Rara Labs",
    year: "2021-23",
    title: "Myra ERP",
    blurb:
      "A core banking system for cooperatives, shipped to production in six months and launched with 26 organizations.",
    headline:
      "A core banking system for cooperatives, first production release shipped in six months",
    stats: [
      "26 organizations at launch",
      "Core banking + accounting",
      "NX monorepo frontend",
      "Multi-tenant RBAC",
    ],
    tint: "#effaf4",
    chipBg: "#16a34a",
    chipGlyph: "route",
    cardBg: "#ffffff",
    stack: "Go \u00b7 React \u00b7 NX Monorepo \u00b7 NestJS \u00b7 PostgreSQL \u00b7 GraphQL \u00b7 Docker \u00b7 Kubernetes",
    caseStudyHref: "/work/myra",
    screenshots: [
      {
        src: "/work/myra-03.webp",
        alt: "MYRA application hub with core banking dashboard",
        aspect: "1920 / 875",
      },
      {
        src: "/work/myra-02.webp",
        alt: "Myra ERP member list with export and profile actions",
        aspect: "3072 / 2008",
      },
      {
        src: "/work/myra-01.webp",
        alt: "Myra ERP member onboarding form with KYM checklist",
        aspect: "1874 / 1628",
      },
      {
        src: "/work/myra-05.webp",
        alt: "Myra ERP share register report with print and export",
        aspect: "3072 / 2220",
      },
      {
        src: "/work/myra-04.webp",
        alt: "Generated Nepali share certificate",
        aspect: "842 / 595",
      },
      {
        src: "/work/myra-06.webp",
        alt: "Myra employee app training calendar with event details",
        aspect: "16 / 9",
      },
    ],
  },
];

/* scroll room per card, in svh — cards themselves are 100svh tall */
const SCROLL_PER_CARD_SVH = 115;

/* ------------------------------------------------------------ logo chip */

function LogoChip({ bg, glyph }: { bg: string; glyph: Project["chipGlyph"] }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect width="24" height="24" rx="7" fill={bg} />
      {glyph === "spark" && (
        <path
          d="M12 5.5 L13.7 10.3 L18.5 12 L13.7 13.7 L12 18.5 L10.3 13.7 L5.5 12 L10.3 10.3 Z"
          fill="#fff"
        />
      )}
      {glyph === "shield" && (
        <path
          d="M12 5.5 L17.5 7.8 V12 C17.5 15.2 15.2 17.6 12 18.5 C8.8 17.6 6.5 15.2 6.5 12 V7.8 Z"
          fill="none"
          stroke="#fff"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      )}
      {glyph === "route" && (
        <>
          <circle cx="8" cy="16" r="2.2" fill="#fff" />
          <circle cx="16" cy="8" r="2.2" fill="#fff" />
          <path
            d="M8 13.8 C8 10.5 16 13.5 16 10.2"
            fill="none"
            stroke="#fff"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </>
      )}
      {glyph === "check-shield" && (
        <>
          <path
            d="M12 5.5 L17.5 7.8 V12 C17.5 15.2 15.2 17.6 12 18.5 C8.8 17.6 6.5 15.2 6.5 12 V7.8 Z"
            fill="none"
            stroke="#fff"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M9.4 12.1 L11.3 14 L14.7 10.3"
            fill="none"
            stroke="#fff"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
      {glyph === "layers" && (
        <>
          <path
            d="M12 5.8 L18 9 L12 12.2 L6 9 Z"
            fill="none"
            stroke="#fff"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M6 12.2 L12 15.4 L18 12.2 M6 15.4 L12 18.6 L18 15.4"
            fill="none"
            stroke="#fff"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
      {glyph === "cube" && (
        <>
          <path
            d="M12 5.5 L17.5 8.75 V15.25 L12 18.5 L6.5 15.25 V8.75 Z"
            fill="none"
            stroke="#fff"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M6.5 8.75 L12 12 L17.5 8.75 M12 12 V18.5"
            fill="none"
            stroke="#fff"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
}

/* --------------------------------------------------------- marquee tile */

/**
 * Abstract UI mocks, varied deterministically by index:
 * cycles through phone / desktop / wide-board shapes with different
 * arrangements of white cards, list rows, bars and dots.
 */
function MarqueeTile({
  index,
  tint,
  accent,
}: {
  index: number;
  tint: string;
  accent: string;
}) {
  const variant = index % 6;

  /* shared bits */
  const dot = (color: string, size = 8) => (
    <span
      className="inline-block rounded-full"
      style={{ width: size, height: size, background: color }}
    />
  );

  const listRow = (w: string, key: number) => (
    <div key={key} className="flex items-center gap-2.5">
      <span
        className="h-5 w-5 shrink-0 rounded-md"
        style={{ background: tint }}
      />
      <span
        className="h-2 rounded-full bg-zinc-200/90"
        style={{ width: w }}
      />
      <span className="ml-auto h-2 w-6 rounded-full bg-zinc-100" />
    </div>
  );

  /* 0 — phone: settings-style toggles */
  if (variant === 0) {
    return (
      <div
        className="relative h-[clamp(380px,50svh,540px)] w-[250px] shrink-0 overflow-hidden rounded-[14px] p-6"
        style={{ background: tint }}
      >
        <div className="mx-auto flex h-full w-[172px] flex-col gap-3 rounded-[22px] border border-black/5 bg-white p-4 shadow-sm">
          <div className="h-2 w-16 rounded-full bg-zinc-200" />
          <div className="h-2 w-24 rounded-full bg-zinc-100" />
          <div className="mt-2 flex flex-col gap-3">
            {[0, 1, 2].map((r) => (
              <div key={r} className="flex items-center justify-between">
                <span className="h-2 w-16 rounded-full bg-zinc-200" />
                <span
                  className="flex h-4 w-7 items-center rounded-full px-0.5"
                  style={{
                    background: r === 1 ? "#e4e4e7" : accent,
                    justifyContent: r === 1 ? "flex-start" : "flex-end",
                  }}
                >
                  <span className="h-3 w-3 rounded-full bg-white" />
                </span>
              </div>
            ))}
          </div>
          <div
            className="mt-auto h-9 rounded-lg"
            style={{ background: accent }}
          />
        </div>
      </div>
    );
  }

  /* 1 — desktop: table with filter chips */
  if (variant === 1) {
    return (
      <div
        className="relative h-[clamp(380px,50svh,540px)] w-[430px] shrink-0 overflow-hidden rounded-[14px] p-6"
        style={{ background: tint }}
      >
        <div className="flex h-full flex-col gap-3 rounded-xl border border-black/5 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2">
            {dot(accent, 10)}
            <span className="h-2 w-20 rounded-full bg-zinc-200" />
            <span
              className="ml-auto h-6 w-16 rounded-full"
              style={{ background: accent }}
            />
          </div>
          <div className="flex gap-2">
            {["3.2rem", "4rem", "2.6rem"].map((w, r) => (
              <span
                key={r}
                className="h-5 rounded-full border border-zinc-200 bg-zinc-50"
                style={{ width: w }}
              />
            ))}
          </div>
          <div className="flex flex-col gap-3 pt-1">
            {["55%", "70%", "45%", "62%", "50%"].map((w, r) => listRow(w, r))}
          </div>
        </div>
      </div>
    );
  }

  /* 2 — small tile: single floating notification card */
  if (variant === 2) {
    return (
      <div
        className="relative flex h-[clamp(380px,50svh,540px)] w-[250px] shrink-0 items-center justify-center overflow-hidden rounded-[14px]"
        style={{ background: tint }}
      >
        <div className="flex w-[180px] flex-col gap-2.5 rounded-xl border border-black/5 bg-white p-4 shadow-md">
          <div className="flex items-center gap-2">
            <span
              className="h-6 w-6 rounded-md"
              style={{ background: accent }}
            />
            <span className="h-2 w-20 rounded-full bg-zinc-200" />
          </div>
          <span className="h-2 w-full rounded-full bg-zinc-100" />
          <span className="h-2 w-3/4 rounded-full bg-zinc-100" />
          <div className="mt-1 flex gap-1.5">
            {dot(accent)}
            {dot("#e4e4e7")}
            {dot("#e4e4e7")}
          </div>
        </div>
      </div>
    );
  }

  /* 3 — wide board: grid of mini cards + chart bars */
  if (variant === 3) {
    const bars = [34, 58, 44, 72, 52, 80, 40];
    return (
      <div
        className="relative h-[clamp(380px,50svh,540px)] w-[530px] shrink-0 overflow-hidden rounded-[14px] p-6"
        style={{ background: tint }}
      >
        <div className="grid h-full grid-cols-3 gap-3">
          {[0, 1].map((c) => (
            <div
              key={c}
              className="flex flex-col gap-2 rounded-xl border border-black/5 bg-white p-4 shadow-sm"
            >
              <span
                className="h-5 w-5 rounded-md"
                style={{ background: c === 0 ? accent : "#f4f4f5" }}
              />
              <span className="h-2 w-14 rounded-full bg-zinc-200" />
              <span className="h-2 w-10 rounded-full bg-zinc-100" />
              <span className="mt-auto h-2 w-full rounded-full bg-zinc-100" />
            </div>
          ))}
          <div className="row-span-2 flex flex-col justify-end gap-2 rounded-xl border border-black/5 bg-white p-4 shadow-sm">
            <span className="mb-auto h-2 w-16 rounded-full bg-zinc-200" />
            <div className="flex h-28 items-end gap-1.5">
              {bars.map((h, r) => (
                <span
                  key={r}
                  className="w-full rounded-t"
                  style={{
                    height: `${h}%`,
                    background: r === 5 ? accent : "#e4e4e7",
                  }}
                />
              ))}
            </div>
          </div>
          <div className="col-span-2 flex items-center gap-3 rounded-xl border border-black/5 bg-white p-4 shadow-sm">
            <span
              className="h-9 w-9 shrink-0 rounded-full"
              style={{ background: accent }}
            />
            <div className="flex w-full flex-col gap-2">
              <span className="h-2 w-2/3 rounded-full bg-zinc-200" />
              <span className="h-2 w-1/3 rounded-full bg-zinc-100" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* 4 — phone: feed of media cards */
  if (variant === 4) {
    return (
      <div
        className="relative h-[clamp(380px,50svh,540px)] w-[250px] shrink-0 overflow-hidden rounded-[14px] p-6"
        style={{ background: tint }}
      >
        <div className="mx-auto flex h-full w-[172px] flex-col gap-3 rounded-[22px] border border-black/5 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="h-2 w-12 rounded-full bg-zinc-200" />
            {dot(accent, 10)}
          </div>
          {[0, 1].map((r) => (
            <div
              key={r}
              className="flex flex-col gap-2 rounded-lg border border-zinc-100 p-2.5"
            >
              <span
                className="h-12 w-full rounded-md"
                style={{ background: r === 0 ? tint : "#f4f4f5" }}
              />
              <span className="h-2 w-3/4 rounded-full bg-zinc-200" />
              <span className="h-2 w-1/2 rounded-full bg-zinc-100" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* 5 — desktop: split panel with donut + list */
  return (
    <div
      className="relative h-[clamp(380px,50svh,540px)] w-[430px] shrink-0 overflow-hidden rounded-[14px] p-6"
      style={{ background: tint }}
    >
      <div className="flex h-full gap-3">
        <div className="flex w-2/5 flex-col items-center justify-center gap-3 rounded-xl border border-black/5 bg-white p-4 shadow-sm">
          <span
            className="block h-20 w-20 rounded-full"
            style={{
              background: `conic-gradient(${accent} 0 68%, #f4f4f5 68% 100%)`,
              WebkitMask:
                "radial-gradient(circle, transparent 55%, black 56%)",
              mask: "radial-gradient(circle, transparent 55%, black 56%)",
            }}
          />
          <span className="h-2 w-14 rounded-full bg-zinc-200" />
        </div>
        <div className="flex w-3/5 flex-col gap-3 rounded-xl border border-black/5 bg-white p-4 shadow-sm">
          <span className="h-2 w-20 rounded-full bg-zinc-200" />
          <div className="flex flex-col gap-3 pt-1">
            {["70%", "50%", "62%", "44%"].map((w, r) => listRow(w, r))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------ screenshot tile */

function ScreenshotTile({
  src,
  alt,
  dark,
  aspect,
}: {
  src: string;
  alt: string;
  dark?: boolean;
  aspect?: string;
}) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-2xl border-2 shadow-[0_12px_32px_-16px_rgba(9,9,11,0.35)] ${dark ? "border-white/25" : "border-zinc-200"}`}
      style={{
        height: "clamp(380px, 52svh, 560px)",
        aspectRatio: aspect ?? "16 / 9",
      }}
    >
      <img
        src={src}
        alt={alt}
        width={2560}
        height={1440}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

/* -------------------------------------------------------------- marquee */

const MARQUEE_SPEED = 28; // px per second, matched to the reference site

function MarqueeBand({ project }: { project: Project }) {
  const reducedMotion = useReducedMotion();
  const tiles = [0, 1, 2, 3, 4, 5];
  // repeat short screenshot sets so each copy is comfortably wider than the viewport
  const shots = project.screenshots
    ? Array.from(
        { length: Math.max(1, Math.ceil(4 / project.screenshots.length)) },
        () => project.screenshots!
      ).flat()
    : null;

  /* draggable infinite track: three copies give drag headroom on both
     sides; x is wrapped back into the middle copy whenever idle */
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const bandRef = useRef<HTMLDivElement>(null);
  const copyWidth = useRef(0);
  const dragging = useRef(false);
  const [hovering, setHovering] = useState(false);
  const [grabbing, setGrabbing] = useState(false);

  /* custom cursor follows the pointer with a soft spring */
  const cx = useMotionValue(-200);
  const cy = useMotionValue(-200);
  const sx = useSpring(cx, { stiffness: 420, damping: 36, mass: 0.6 });
  const sy = useSpring(cy, { stiffness: 420, damping: 36, mass: 0.6 });

  useEffect(() => {
    const measure = () => {
      const el = trackRef.current;
      if (!el) return;
      const w = el.scrollWidth / 3;
      copyWidth.current = w;
      if (x.get() === 0 && w > 0) x.set(-w);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, [x]);

  useAnimationFrame((_, delta) => {
    const w = copyWidth.current;
    if (!w) return;
    if (!dragging.current && !reducedMotion) {
      x.set(x.get() - (MARQUEE_SPEED * delta) / 1000);
    }
    if (!dragging.current) {
      const v = x.get();
      if (v <= -2 * w) x.set(v + w);
      else if (v > -w) x.set(v - w);
    }
  });

  /* direct horizontal scrolling: trackpad swipes / shift+wheel move the
     track natively; vertical scroll passes through to the page. React's
     delegated onWheel is passive, so attach with passive: false. */
  useEffect(() => {
    const el = bandRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        x.set(x.get() - e.deltaX);
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [x]);

  return (
    <div
      ref={bandRef}
      role="presentation"
      className="relative flex min-h-0 flex-1 items-center overflow-hidden [@media(pointer:fine)]:cursor-none"
      style={{ background: project.tint }}
      onMouseMove={(e) => {
        cx.set(e.clientX);
        cy.set(e.clientY);
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <motion.div
        ref={trackRef}
        drag="x"
        dragMomentum={false}
        onDragStart={() => {
          dragging.current = true;
          setGrabbing(true);
        }}
        onDragEnd={() => {
          dragging.current = false;
          setGrabbing(false);
        }}
        style={{ x }}
        className="flex w-max py-8 will-change-transform"
      >
        {[0, 1, 2].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy > 0 ? "true" : undefined}
            className="flex gap-4 pr-4"
          >
            {shots
              ? shots.map((shot, i) => (
                  <ScreenshotTile
                    key={`${shot.src}-${i}`}
                    src={shot.src}
                    alt={copy > 0 ? "" : shot.alt}
                    dark={project.darkCard}
                    aspect={shot.aspect}
                  />
                ))
              : tiles.map((i) => (
                  <MarqueeTile
                    key={i}
                    index={i}
                    tint={project.cardBg === "#ffffff" ? "#f4f4f5" : project.tint}
                    accent={project.chipBg}
                  />
                ))}
          </div>
        ))}
      </motion.div>

      {/* large drag cursor, fine pointers only */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-40 hidden [@media(pointer:fine)]:block"
        style={{ x: sx, y: sy }}
      >
        <motion.div
          className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1.5 rounded-full text-white"
          style={{
            width: 88,
            height: 88,
            background: "rgba(9, 9, 11, 0.9)",
            fontFamily: "var(--font-mono-accent)",
          }}
          initial={false}
          animate={{
            scale: hovering ? (grabbing ? 0.85 : 1) : 0,
            opacity: hovering ? 1 : 0,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <span>&lsaquo;</span>
          <span className="text-[12px] uppercase tracking-[0.08em]">Drag</span>
          <span>&rsaquo;</span>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ----------------------------------------------------------------- card */

function ProjectCard({ project }: { project: Project }) {
  const reducedMotion = useReducedMotion();
  const ink = project.darkCard ? "#f8fafc" : "var(--ink, #09090b)";
  const muted = project.darkCard
    ? "rgba(226, 232, 240, 0.78)"
    : "var(--gray, #71717a)";
  const ease = [0.25, 1, 0.5, 1] as const; // ease-out quart

  /* opacity-only when the user prefers reduced motion */
  const fadeUp = {
    initial: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 28 },
    whileInView: reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
  } as const;
  return (
    <div
      className="sticky top-0 flex h-[100svh] w-full flex-col overflow-hidden"
      style={{
        background: project.cardBg,
        borderRadius: "var(--radius-card) var(--radius-card) 0 0",
        boxShadow: "var(--shadow-sheet)",
      }}
    >
      {/* header */}
      <div className="shrink-0 px-6 pb-6 pt-9 sm:px-10 sm:pb-8 sm:pt-12">
        <div className="relative mx-auto w-full max-w-[1820px]">
        {project.title ? (
          /* compact header: chip + year, short title, one-line blurb */
          <>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, ease }}
              className="flex items-center gap-3"
            >
              <LogoChip bg={project.chipBg} glyph={project.chipGlyph} />
              <span
                className="text-[14px]"
                style={{ color: muted, fontFamily: "var(--font-body)" }}
              >
                {project.year}
              </span>
            </motion.div>

            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.6, ease, delay: 0.08 }}
              className="mt-4 font-semibold"
              style={{
                color: ink,
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              {project.title}
            </motion.h2>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, ease, delay: 0.16 }}
              className="mt-3 max-w-[75ch] text-[16px] leading-relaxed"
              style={{ color: muted, fontFamily: "var(--font-body)" }}
            >
              {project.blurb}
            </motion.p>

            {project.stack && (
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.6, ease, delay: 0.22 }}
                className="mt-4 hidden text-[12px] uppercase tracking-[0.08em] md:block"
                style={{
                  color: "var(--gray, #71717a)",
                  fontFamily: "var(--font-mono-accent)",
                }}
              >
                {project.stack}
              </motion.p>
            )}
          </>
        ) : (
          <>
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-3"
        >
          <LogoChip bg={project.chipBg} glyph={project.chipGlyph} />
          <span
            className="text-[14px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <span className="font-medium" style={{ color: project.chipBg }}>
              {project.name}
            </span>
            <span style={{ color: muted }}>
              {" "}
              · {project.year}
            </span>
          </span>
        </motion.div>

        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.6, ease, delay: 0.08 }}
          className="mt-4 font-semibold sm:max-w-[72%]"
          style={{
            color: ink,
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1.5rem, 3.2vw, 2.5rem)",
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
          }}
        >
          {project.headline}
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, ease, delay: 0.16 }}
          className="mt-3 text-[15px]"
          style={{
            color: muted,
            fontFamily: "var(--font-body)",
          }}
        >
          {project.stats.map((stat, i) => (
            <span key={stat}>
              {i > 0 && <span aria-hidden="true">{"  ·  "}</span>}
              {stat}
            </span>
          ))}
        </motion.p>

        {project.stack && (
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="mt-3 hidden text-[12px] uppercase tracking-[0.08em] md:block"
            style={{
              color: "var(--gray, #71717a)",
              fontFamily: "var(--font-mono-accent)",
            }}
          >
            {project.stack}
          </motion.p>
        )}
          </>
        )}

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, ease, delay: 0.24 }}
          className="mt-6 sm:absolute sm:right-0 sm:top-0 sm:mt-0"
        >
          {project.comingSoon || !project.caseStudyHref ? (
            <span
              aria-disabled="true"
              className="inline-flex cursor-default items-center gap-2 rounded-full px-6 py-3 text-[13px] uppercase tracking-[0.08em]"
              style={{
                background: "#f4f4f5",
                color: "var(--gray, #71717a)",
                fontFamily: "var(--font-body)",
              }}
            >
              Coming soon
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="shrink-0"
              >
                {/* hourglass */}
                <path
                  d="M4.5 2h7M4.5 14h7M5.5 2v2c0 1.8 2.5 2.9 2.5 4s-2.5 2.2-2.5 4v2M10.5 2v2c0 1.8-2.5 2.9-2.5 4s2.5 2.2 2.5 4v2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          ) : (
            <a
              href={project.caseStudyHref}
              className={
                project.darkCard
                  ? "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[13px] uppercase tracking-[0.08em] text-[color:var(--ink)] transition-[background-color,transform] duration-200 ease-out hover:scale-[1.02] hover:bg-zinc-100 active:scale-[0.98]"
                  : "inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-[13px] uppercase tracking-[0.08em] text-white transition-[background-color,transform] duration-200 ease-out hover:scale-[1.02] hover:bg-[#27272a] active:scale-[0.98]"
              }
              style={{ fontFamily: "var(--font-body)" }}
            >
              View case study <span aria-hidden="true">›</span>
            </a>
          )}
        </motion.div>
        </div>
      </div>

      {/* marquee */}
      <MarqueeBand project={project} />
    </div>
  );
}

/* ------------------------------------------------------------ component */

export default function ProjectCards() {
  return (
    <section
      id="work"
      aria-label="Selected projects"
      className="relative"
      style={{ height: `${PROJECTS.length * SCROLL_PER_CARD_SVH}svh` }}
    >
      {PROJECTS.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
