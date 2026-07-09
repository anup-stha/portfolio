/**
 * Archive entries behind the "Other works" index on the homepage.
 * Each entry renders at /work/archive/[slug].
 */

export type ArchiveOrigin = "Whitehat" | "Rara Labs" | "Side project";

export type ArchiveSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ArchiveEntry = {
  slug: string;
  name: string;
  year: string;
  origin: ArchiveOrigin;
  role: string;
  standfirst: string;
  /** short stack line for the meta row */
  stackSummary: string;
  /** public product URL, when one exists */
  liveUrl?: string;
  /** full stack for the pill strip */
  stack: string[];
  sections: ArchiveSection[];
};

export const ARCHIVE: ArchiveEntry[] = [
  {
    slug: "act3-ai",
    name: "ACT 3 AI",
    year: "2024",
    origin: "Whitehat",
    role: "Software engineer",
    standfirst:
      "A pipeline at Whitehat that turned user data into finished character videos without an artist touching Blender. Data became YAML patterns, patterns became scenes, and a farm of office PCs rendered them around the clock.",
    stackSummary: "Blender · Python · Temporal",
    stack: [
      "Blender",
      "Python",
      "C++",
      "ComfyUI",
      "ffmpeg",
      "FastAPI",
      "Nvidia Omniverse",
      "Unreal Engine",
      "Temporal",
    ],
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "ACT 3 AI generated personalized 3D character videos at scale. Instead of someone assembling every video by hand, the system derived YAML patterns from user data and used them to build Blender scenes automatically: characters, props, cameras, and timing, all described in the pattern.",
          "The characters themselves were animated with full-body motion capture, and their mouths were driven straight from the audio track, so a new script meant a new video, not a new animation pass.",
        ],
      },
      {
        heading: "What I built",
        bullets: [
          "The pattern-to-video pipeline: YAML in, rendered Blender video out, with ffmpeg handling assembly at the end.",
          "Character animation: full-body motion capture retargeted onto 3D characters, with lip-sync driven by the audio itself.",
          "Distributed rendering: a master-worker setup on Temporal that turned on-prem office PCs into compute nodes, with job state and retries handled by the workflow engine instead of hand-rolled scripts.",
        ],
      },
    ],
  },
  {
    slug: "end-the-rig-game",
    name: "End The Rig Game",
    year: "2023–24",
    origin: "Whitehat",
    role: "Software engineer",
    standfirst:
      "A mobile game at Whitehat, shipped to Google Play and the App Store. I worked across the engine, the 3D content, and the native SDK layer that connected the game to the rest of the product.",
    stackSummary: "Unreal · Blender · C++",
    stack: [
      "Unreal Engine",
      "Blender",
      "Python",
      "C++",
      "Android SDK",
      "iOS SDK",
      "OpenGL",
      "Vulkan",
      "WebGL",
      "AWS",
    ],
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "End The Rig is an interactive game built in Unreal Engine. The world and its assets were modeled in Blender and brought into Unreal as playable game elements, with rendering paths across OpenGL, Vulkan, and WebGL targets.",
          "It also had a trick up its sleeve: the game could produce videos of its own characters, generated through a Blender and Python flow with lip-sync, so content did not have to be filmed or animated by hand.",
        ],
      },
      {
        heading: "What I built",
        bullets: [
          "Interactive game elements and 3D assets, moving between Blender for modeling and Unreal Engine for gameplay.",
          "Android and iOS SDK integration, plus the release work to get the game onto Google Play and the App Store.",
          "The in-game video generation flow: Blender driven by Python, with character lip-sync synced to audio.",
        ],
      },
    ],
  },
  {
    slug: "end-the-rig-web",
    name: "End The Rig Web",
    year: "2024",
    origin: "Whitehat",
    role: "Design engineer",
    standfirst:
      "The companion web app for End The Rig: payments, scheduling, and an IFTTT-style rules system that drives game logic from the browser.",
    stackSummary: "Next.js · Nest.js · Stripe",
    stack: [
      "React",
      "Next.js",
      "Material UI",
      "Nest.js",
      "Stripe",
      "BullMQ",
      "Redis",
      "PostgreSQL",
      "AWS Lambda",
      "API Gateway",
    ],
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "A React and Next.js front end on a Nest.js back end. The interesting part is the condition and check system: game logic expressed as if-this-then-that rules, composed in the browser the way you would wire up an automation, instead of hard-coded in the game.",
        ],
      },
      {
        heading: "What I built",
        bullets: [
          "The IFTTT-style condition and check system that drives the game logic.",
          "A standardized UI across every page with Material UI, so the app reads as one product rather than a pile of screens.",
          "Stripe payments, BullMQ task scheduling, and the AWS Lambda plus API Gateway layer, with Redis and PostgreSQL underneath.",
        ],
      },
    ],
  },
  {
    slug: "rara-design-system",
    name: "Rara Design System",
    year: "2023",
    origin: "Rara Labs",
    role: "Design engineer",
    standfirst:
      "One design system for every Rara product. I helped build the component library, the monorepo it lives in, and the pipeline that publishes it to NPM.",
    stackSummary: "React · Storybook · NPM",
    stack: [
      "React",
      "TypeScript",
      "Monorepo",
      "Storybook",
      "Chromatic",
      "React Testing Library",
      "NPM",
    ],
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "Rara Labs shipped several enterprise products, and their interfaces had drifted apart. The design system pulled them back onto one set of components, from primitives up to the pieces that usually break design systems: data tables, date pickers, and charts.",
        ],
      },
      {
        heading: "What I built",
        bullets: [
          "The complex reusable components: tables, date pickers, and charts that hold up under real enterprise data.",
          "A monorepo layout that lets every product consume the same components without forking them.",
          "The quality loop: Storybook as the catalog, Chromatic catching visual regressions, React Testing Library covering behavior, and versioned releases published to NPM.",
        ],
      },
    ],
  },
  {
    slug: "ledger-dynamics",
    name: "Ledger Dynamics",
    year: "2023",
    origin: "Rara Labs",
    role: "Design engineer",
    standfirst:
      "The admin portal for a no-code ledger engine: define accounting rules, tariffs, and controls without writing code, and run them at up to 1,000 transactions per second per ledger account.",
    stackSummary: "React · Go · gRPC",
    stack: [
      "React",
      "TypeScript",
      "Go",
      "gRPC",
      "Envoy",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Kubernetes",
      "Prometheus",
      "Grafana",
    ],
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "Ledger Dynamics is a real-time money movement engine. The portal I worked on is where operators configure it: hierarchical accounts across multiple assets and currencies, pay-per-use products with a built-in tariff engine for pricing, interest, commissions, and rebates, and accounting events published for downstream apps to consume.",
          "None of that configuration required code. The point of the portal was to make a serious accounting engine operable by the people who understand the accounting, not just the people who understand Go.",
        ],
      },
      {
        heading: "What I built",
        bullets: [
          "The admin portal in React and TypeScript: no-code accounting rules, tariffs, and controls.",
          "The API bridge: gRPC services converted to REST through Envoy, with codegen tooling so the front end stayed typed against the Go back end.",
          "Screens for multi-asset, multi-currency hierarchical accounts and the tariff engine behind pay-per-use products.",
        ],
      },
    ],
  },
  {
    slug: "mixim-drafts",
    name: "Mixim Drafts",
    year: "2023",
    origin: "Side project",
    role: "Everything",
    standfirst:
      "A small, fast note-taking app I built for people who think in drafts. It opens instantly, works offline, and stays out of the way.",
    stackSummary: "Next.js · Editor.js · Go",
    liveUrl: "https://drafts.mixim.cc",
    stack: ["Next.js", "Tailwind CSS", "Editor.js", "Clerk", "Go", "PWA"],
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "Drafts is a minimal note app: capture the thought now, organize it later. It is a progressive web app, so notes keep working with no connection at all, and it is free to use.",
          "I built it because most note apps ask you to decide where a thought belongs before you have finished having it. Drafts flips that: writing first, filing later, nothing in between.",
        ],
      },
      {
        heading: "What I built",
        bullets: [
          "A block-based editor on Editor.js, tuned for fast capture rather than heavy formatting.",
          "Offline-first PWA behavior, so writing never waits on the network.",
          "Next.js and Tailwind on the front, a Go backend behind it, and Clerk handling auth.",
        ],
      },
    ],
  },
  {
    slug: "tailwind-preview",
    name: "Tailwind Preview",
    year: "2023",
    origin: "Side project",
    role: "Everything",
    standfirst:
      "Write HTML and Tailwind on the left, watch the design render on the right. No build step, no project setup, just the feedback loop.",
    stackSummary: "Next.js · Tailwind",
    liveUrl: "https://tailwind-play-wine.vercel.app",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel", "Open source"],
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "A split-pane playground for Tailwind CSS. I wanted the shortest possible distance between typing a class and seeing what it does, both for learning Tailwind and for sketching real components before they enter a codebase.",
          "It turned out to be useful at both ends: beginners get instant feedback while they learn the utility names, and people who already know Tailwind get a scratchpad for iterating a layout until it is pixel-perfect.",
        ],
      },
      {
        heading: "What I built",
        bullets: [
          "The editor and preview panes, with the render updating as you type instead of on save.",
          "Zero compile wait: the preview reflects your markup immediately, which is the whole point of the tool.",
          "Shipped as an open source Next.js app, with the code on GitHub.",
        ],
      },
    ],
  },
  {
    slug: "mixim-icons",
    name: "Mixim Icons",
    year: "2023",
    origin: "Side project",
    role: "Everything",
    standfirst:
      "A community-driven icon library. If the icon you need does not exist yet, you request it, and the library grows around real demand instead of guesses.",
    stackSummary: "Next.js · Radix · Firebase",
    liveUrl: "https://icons.mixim.cc",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Radix UI",
      "Firebase",
      "React package on npm",
      "SVG / PNG",
    ],
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "Every icon search ends the same way: close enough, but not it. Mixim Icons is a searchable icon library with a request system built in. Users submit the icon they are missing, it gets drawn, and it ships for everyone.",
          "Icons are organized by category and tag, downloadable as SVG or PNG, and available as a React package on npm for dropping straight into a project.",
        ],
      },
      {
        heading: "What I built",
        bullets: [
          "The browsing and search experience, with keyword and tag filtering across categories.",
          "The request flow that turns a missing icon into a form submission and, eventually, a shipped asset.",
          "Next.js, Tailwind, and Radix UI on the front, Firebase behind the library and request data, plus the React npm package.",
        ],
      },
    ],
  },
];

export function getArchiveEntry(slug: string): ArchiveEntry | undefined {
  return ARCHIVE.find((entry) => entry.slug === slug);
}
