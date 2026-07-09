import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../dvlp-studio/Reveal";

export const metadata: Metadata = {
  title: "VIDI — Case Study · Anup Shrestha",
  description:
    "VIDI, the agent governance and runtime platform behind DVLP: a registry with KYA tiers, Cerbos policy gates on every invocation, KMS-signed receipts, and a full audit trail, across an admin side and the Guild authoring side.",
};

const MONO = "var(--font-mono-accent)";
const SERIF = "var(--font-display)";

/* Product palette, referenced (not adopted) by this page. */
const PAPER = "#faf6ec";
const NIGHT = "#141210";

/* ------------------------------------------------------------- figure -- */

function Figure({
  src,
  alt,
  caption,
  index,
  width,
  height,
  preload = false,
  sizes = "(min-width: 1264px) 1200px, 100vw",
}: {
  src: string;
  alt: string;
  caption: string;
  index: string;
  width: number;
  height: number;
  preload?: boolean;
  sizes?: string;
}) {
  return (
    <figure>
      <div
        className="overflow-hidden rounded-[16px] border border-zinc-200 bg-white"
        style={{
          boxShadow:
            "0 1px 3px rgba(9,9,11,0.05), 0 20px 44px -30px rgba(9,9,11,0.22)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          preload={preload}
          className="block h-auto w-full"
        />
      </div>
      <figcaption className="mt-3 flex items-baseline gap-3 px-1">
        <span
          className="shrink-0 text-[11px] uppercase"
          style={{ fontFamily: MONO, letterSpacing: "0.08em", color: "var(--gray)" }}
        >
          Fig. {index}
        </span>
        <span className="max-w-[68ch] text-[14px] leading-relaxed text-[color:var(--gray)]">
          {caption}
        </span>
      </figcaption>
    </figure>
  );
}

/* ----------------------------------------------------- section heading -- */

function SectionHeading({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal amount={0.3}>
      <p
        className="text-[12px] uppercase"
        style={{ fontFamily: MONO, letterSpacing: "0.08em", color: "var(--gray)" }}
      >
        {index}
      </p>
      <h2
        className="mt-2 text-[color:var(--ink)]"
        style={{
          fontFamily: SERIF,
          fontWeight: 400,
          fontSize: "clamp(1.7rem, 3vw, 2.35rem)",
          lineHeight: 1.2,
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h2>
      <div className="mt-4 flex max-w-[66ch] flex-col gap-4 text-[16px] leading-[1.7] text-[color:var(--ink-soft)]">
        {children}
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------ the page -- */

export default function VidiPage() {
  return (
    <main className="w-full pb-6">
      {/* ------------------------------------------------------ top bar -- */}
      <header className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-5 pt-8 sm:px-8">
        <Link
          href="/"
          className="-mx-2 flex min-h-11 items-center gap-2 px-2 text-[15px] text-[color:var(--ink-soft)] transition-colors duration-200 ease-out hover:text-[color:var(--ink)]"
        >
          <span aria-hidden="true">←</span>
          Anup Shrestha
        </Link>
        <span
          className="text-[12px] uppercase"
          style={{ fontFamily: MONO, letterSpacing: "0.08em", color: "var(--gray)" }}
        >
          Case study
        </span>
      </header>

      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        {/* --------------------------------------------------------- hero -- */}
        <section className="pt-16 sm:pt-24">
          <Reveal amount={0.4}>
            <p
              className="text-[12px] uppercase"
              style={{
                fontFamily: MONO,
                letterSpacing: "0.08em",
                color: "var(--gray)",
              }}
            >
              VIDI · Agent governance
            </p>
            <h1
              className="mt-4 text-[color:var(--ink)]"
              style={{
                fontFamily: SERIF,
                fontWeight: 400,
                fontSize: "clamp(2.75rem, 6vw, 4.5rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.015em",
              }}
            >
              Agents you can audit
            </h1>
            <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.7] text-[color:var(--ink-soft)]">
              DVLP runs AI agents against real drug programs, and an agent that
              drafts regulatory documents needs receipts, not vibes. VIDI is
              the registry, the policy gate, and the audit trail around every
              one of them. Each agent is registered and tiered, every
              invocation passes a Cerbos policy check before it runs, every
              execution comes back with a KMS-signed receipt, and all of it
              lands in a trail you can hand to an auditor. I designed and built
              the front of both faces: the admin side that governs, and the
              Guild side where agents are authored and tested.
            </p>
          </Reveal>

          <Reveal delay={0.1} amount={0.4}>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-zinc-200 pt-6 sm:grid-cols-4">
              {[
                ["Role", "Design engineer"],
                ["Years", "2025–26"],
                ["Stack", "Next.js · Go · Cerbos"],
                ["Scope", "Admin + Guild, 2 themes"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt
                    className="text-[11px] uppercase"
                    style={{
                      fontFamily: MONO,
                      letterSpacing: "0.08em",
                      color: "var(--gray)",
                    }}
                  >
                    {label}
                  </dt>
                  <dd className="mt-1.5 text-[15px] leading-snug text-[color:var(--ink)]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        {/* --------------------------------------------------- lead image -- */}
        <Reveal scale className="mt-14 sm:mt-16" amount={0.15}>
          <Figure
            index="01"
            src="/work/vidi-new-01.webp"
            width={3576}
            height={2080}
            alt="VIDI governance overview on a lab-paper canvas: stat cards for active agents, quarantined agents, policy denials, invocations, and spend; an agent registry health bar split by KYA tier; a recent invocations table; and a live policy decision feed showing entries like Allow, ingest agent facts, signature verified"
            caption="The overview. Fleet health by KYA tier on the left, recent invocations in the middle, and the policy decision feed on the right, every entry an allow or deny with its reason."
            preload
          />
        </Reveal>

        {/* --------------------------------------- 02 · know your agents -- */}
        <section className="mt-24 sm:mt-32">
          <SectionHeading index="02" title="Know your agents">
            <p>
              Banks have know-your-customer. VIDI has know-your-agent. Nothing
              runs against a drug program until it has been registered, tiered,
              and signed, and the tier is not decoration: it caps what the
              agent may touch and how autonomously it may act. An agent&apos;s
              detail page reads like a passport, its declared tools, its trust
              posture, its domain, and the exact pipeline it walked to get
              here.
            </p>
            <p>
              That pipeline is the spine of the Guild side. An agent moves from
              draft through QA review to sign and register to live, and each
              published version is minted immutably, so &ldquo;which version
              produced this output&rdquo; always has one answer. The trust
              posture meters put autonomy and scope on the same card, because
              those two numbers are what a reviewer actually weighs.
            </p>
          </SectionHeading>
          <Reveal scale className="mt-10" amount={0.15}>
            <Figure
              index="02"
              src="/work/vidi-new-02.webp"
              width={3576}
              height={2080}
              alt="Guild agent detail page: a lifecycle pipeline running draft, QA review, sign and register, live; a note on immutable version minting; trust posture meters showing L4 autonomy and G1 scope; and domain tags for the agent"
              caption="An agent's passport in Guild. The lifecycle pipeline across the top, immutable version minting, and trust posture meters for autonomy and scope."
            />
          </Reveal>
          <Reveal scale className="mx-auto mt-10 max-w-[860px]" amount={0.2}>
            <Figure
              index="03"
              src="/work/vidi-04.webp"
              width={2560}
              height={1440}
              alt="Admin agent registry table listing agents with their KYA tiers, governance levels, domains, and statuses"
              caption="The admin registry. Every agent in one table with its KYA tier and governance level, filterable when the fleet passes fifty."
              sizes="(min-width: 900px) 860px, 100vw"
            />
          </Reveal>
        </section>

        {/* --------------------------------- 03 · every run has a receipt -- */}
        <section className="mt-24 sm:mt-32">
          <SectionHeading index="03" title="Every run leaves a receipt">
            <p>
              The gate itself is Cerbos. Every invocation is checked against
              policy before it executes, with CEL conditions deciding on the
              agent&apos;s tier, the resource it wants, and the environment it
              is running in. Writing policy UI is mostly a translation job: the
              rules stay readable as rules, and the decision feed shows each
              allow and deny in the same plain grammar, action, resource,
              reason.
            </p>
            <p>
              When a run completes, the backend signs the execution record with
              AWS KMS, so a receipt is not just a log line but a claim someone
              can verify years later. The invocation log carries those
              signatures inline, and the audit trail behind it is anchored to a
              Hyperledger Fabric chain. The design job was keeping all of this
              legible: an auditor should read the trail like a bank statement,
              not a stack trace.
            </p>
          </SectionHeading>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal scale amount={0.15}>
              <Figure
                index="04"
                src="/work/vidi-05.webp"
                width={2560}
                height={1440}
                alt="Invocation log: a table of agent executions with timestamps, invoked actions, policy outcomes, and signature status per run"
                caption="The invocation log. Each run with its policy outcome and its signature status side by side."
                sizes="(min-width: 1264px) 588px, (min-width: 768px) 50vw, 100vw"
              />
            </Reveal>
            <Reveal scale delay={0.08} amount={0.15}>
              <Figure
                index="05"
                src="/work/vidi-06.webp"
                width={2560}
                height={1440}
                alt="Policies view: Cerbos policies listed with their CEL conditions, target resources, and the tiers they apply to"
                caption="Policies. Cerbos rules with their CEL conditions kept readable as rules, not buried in YAML."
                sizes="(min-width: 1264px) 588px, (min-width: 768px) 50vw, 100vw"
              />
            </Reveal>
          </div>
          <Reveal scale className="mx-auto mt-10 max-w-[860px]" amount={0.2}>
            <Figure
              index="06"
              src="/work/vidi-07.webp"
              width={2560}
              height={1440}
              alt="Audit trail view: a chronological ledger of governance events including registrations, policy changes, and invocations, each entry anchored to the audit chain"
              caption="The audit trail. Registrations, policy changes, and runs in one ledger, anchored to a Fabric chain underneath."
              sizes="(min-width: 900px) 860px, 100vw"
            />
          </Reveal>
        </section>

        {/* ---------------------------------------- 04 · the playground -- */}
        <section className="mt-24 sm:mt-32">
          <SectionHeading index="04" title="The playground">
            <p>
              Governance without a place to run things would just be paperwork,
              so Guild ships a playground. Point a formula at an asset and a
              supervisor agent delegates to clinical, regulatory, and
              supply-chain experts while a live React Flow graph draws the run
              as it happens: which agent is thinking, which tool it is calling,
              what it handed back. The plan checklist ticks off beside the
              graph, and the full recommendations report lands underneath when
              the run completes.
            </p>
            <p>
              Direct invocation is the quieter mode. Pick one agent and the
              graph shows only its declared tools, the same declaration the
              policy gate enforces, so what you watch in the playground is
              exactly what production will permit.
            </p>
          </SectionHeading>
          <Reveal scale className="mt-10" amount={0.15}>
            <Figure
              index="07"
              src="/work/vidi-new-03.webp"
              width={3576}
              height={2080}
              alt="Playground formula run: a live React Flow orchestration graph with a supervisor agent delegating to clinical, regulatory, and supply-chain expert agents, a completed plan checklist, and a full recommendations report below"
              caption="A formula run mid-flight. The supervisor delegates across three experts on the live graph, with the plan checklist and the final report alongside."
            />
          </Reveal>
          <Reveal scale className="mx-auto mt-10 max-w-[860px]" amount={0.2}>
            <Figure
              index="08"
              src="/work/vidi-new-04.webp"
              width={3576}
              height={2080}
              alt="Direct agent invocation: a tool graph showing the agent's declared tools, including documents get page, research search literature, and assets get drug context"
              caption="Direct invocation. One agent, its declared tools on the graph: documents.get_page, research.search_literature, assets.get_drug_context."
              sizes="(min-width: 900px) 860px, 100vw"
            />
          </Reveal>
        </section>

        {/* ------------------------------------ 05 · two rooms, one system -- */}
        <section className="mt-24 sm:mt-32">
          <SectionHeading index="05" title="Two rooms, one system">
            <p>
              The admin side reads like the rest of DVLP, lab paper and one
              oxidized orange, because governance belongs next to the science
              it governs. Guild got a dark variant: it is where agents are
              authored and broken on purpose, and the people living in it asked
              for a room that feels like a workshop rather than a filing
              cabinet. Both run from the same tokens, so a kanban card or an
              environment picker is the same component in either room, just on
              a different ground.
            </p>
          </SectionHeading>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal scale amount={0.15}>
              <Figure
                index="09"
                src="/work/vidi-new-05.webp"
                width={3576}
                height={2080}
                alt="Dark-theme agents kanban board in Guild with columns for Draft, QA, Published, KYA verified, and Archived, tracking 52 agents"
                caption="The Guild kanban, dark. Fifty-two agents across draft, QA, published, KYA verified, and archived."
                sizes="(min-width: 1264px) 588px, (min-width: 768px) 50vw, 100vw"
              />
            </Reveal>
            <Reveal scale delay={0.08} amount={0.15}>
              <Figure
                index="10"
                src="/work/vidi-new-06.webp"
                width={3576}
                height={2080}
                alt="Dark-theme playground run setup: a choice between formula and single-agent mode, an environment selector for QA, Staging, and Production, and an asset picker"
                caption="Run setup, dark. Formula or single agent, an environment gate, and the asset the run will touch."
                sizes="(min-width: 1264px) 588px, (min-width: 768px) 50vw, 100vw"
              />
            </Reveal>
          </div>
        </section>

        {/* ------------------------------------------------ system notes -- */}
        <Reveal className="mt-24 sm:mt-28" amount={0.4}>
          <section
            aria-label="System notes"
            className="border-y border-zinc-200 py-8"
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
              <h2
                className="mr-2 text-[12px] uppercase"
                style={{
                  fontFamily: MONO,
                  letterSpacing: "0.08em",
                  color: "var(--gray)",
                }}
              >
                System notes
              </h2>
              {[
                { label: "Policy-gated by Cerbos" },
                { label: "CEL conditions" },
                { label: "KMS-signed receipts" },
                { label: "Fabric audit chain" },
                { label: "Lab paper admin", swatch: PAPER },
                { label: "Guild dark", swatch: NIGHT },
              ].map((note) => (
                <span
                  key={note.label}
                  className="inline-flex items-center gap-2.5 rounded-full border border-zinc-200 bg-white px-4 py-2 text-[12px] uppercase text-[color:var(--ink)]"
                  style={{ fontFamily: MONO, letterSpacing: "0.05em" }}
                >
                  {note.swatch && (
                    <span
                      aria-hidden="true"
                      className="h-3 w-3 shrink-0 rounded-full border border-black/10"
                      style={{ background: note.swatch }}
                    />
                  )}
                  {note.label}
                </span>
              ))}
            </div>
          </section>
        </Reveal>

        {/* -------------------------------------------------- footer CTA -- */}
        <footer className="pb-20 pt-20 sm:pb-28 sm:pt-24">
          <Reveal amount={0.5}>
            <p
              className="text-[12px] uppercase"
              style={{
                fontFamily: MONO,
                letterSpacing: "0.08em",
                color: "var(--gray)",
              }}
            >
              Next
            </p>
            <Link
              href="/work/dvlp-studio"
              className="group mt-3 inline-flex items-baseline gap-3 text-[color:var(--ink)]"
              style={{
                fontFamily: SERIF,
                fontWeight: 400,
                fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                letterSpacing: "-0.01em",
              }}
            >
              DVLP Studio · Platform
              <span
                aria-hidden="true"
                className="transition-transform duration-200 ease-out group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="mailto:works.anupstha@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-[15px] text-white transition-[background-color,transform] duration-200 ease-out hover:scale-[1.02] hover:bg-[#27272a] active:scale-[0.98]"
              >
                works.anupstha@gmail.com
              </a>
              <span className="text-[14px] text-[color:var(--gray)]">
                Always happy to talk shop.
              </span>
            </div>
          </Reveal>
        </footer>
      </div>
    </main>
  );
}
