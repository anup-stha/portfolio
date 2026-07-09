import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export const metadata: Metadata = {
  title: "DVLP Studio — Case Study · Anup Shrestha",
  description:
    "Redesigning DVLP, a pharmaceutical drug-development platform, onto a lab-paper system: warm bone canvas, one oxidized accent, nine product surfaces of dense scientific data made calm.",
};

/* All product screenshots share one export size. */
const IMG_W = 3576;
const IMG_H = 2080;

const MONO = "var(--font-mono-accent)";
const SERIF = "var(--font-display)";

/* Product palette, referenced (not adopted) by this page. */
const PAPER = "#faf6ec";
const OXIDE = "#dd4a05";

/* ------------------------------------------------------------- figure -- */

function Figure({
  src,
  alt,
  caption,
  index,
  priority = false,
  sizes = "(min-width: 1264px) 1200px, 100vw",
}: {
  src: string;
  alt: string;
  caption: string;
  index: string;
  priority?: boolean;
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
          width={IMG_W}
          height={IMG_H}
          sizes={sizes}
          priority={priority}
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

export default function DvlpStudioPage() {
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
            {/* logo chip, matching the homepage project card */}
            <svg width="32" height="32" viewBox="0 0 24 24" aria-hidden="true">
              <rect width="24" height="24" rx="7" fill={OXIDE} />
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
            </svg>
            <h1
              className="mt-5 text-[color:var(--ink)]"
              style={{
                fontFamily: SERIF,
                fontWeight: 400,
                fontSize: "clamp(2.75rem, 6vw, 4.5rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.015em",
              }}
            >
              DVLP Studio
            </h1>
            <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.7] text-[color:var(--ink-soft)]">
              DVLP is a platform where pharmaceutical teams plan drug programs,
              assemble the evidence, and eventually trade the assets themselves.
              Across 2025 and 2026 I redesigned it end to end onto a lab-paper
              system: a warm bone canvas, a single oxidized orange, one grotesk
              doing all the talking. Nine surfaces of dense scientific data,
              made calm enough to work in all day.
            </p>
          </Reveal>

          <Reveal delay={0.1} amount={0.4}>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-zinc-200 pt-6 sm:grid-cols-4">
              {[
                ["Role", "Design engineer"],
                ["Years", "2025–26"],
                ["Stack", "Next.js · Tailwind · Design system"],
                ["Scope", "9 product surfaces"],
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
            src="/work/studio-01.webp"
            alt="DVLP Studio asset home on a bone-paper canvas: sidebar navigation, phase IIa progress bar, a recent activity feed of verified documents, and a Drug Context Information Inquiry panel on the right showing an AI conclusion with supporting sources"
            caption="The asset home. Phase progress and recent activity on the left; on the right, the drug context inquiry panel answers questions from the asset's own records and cites its sources."
            priority
          />
        </Reveal>

        {/* --------------------------------------- 02 · one surface -- */}
        <section className="mt-24 sm:mt-32">
          <SectionHeading index="02" title="One surface for the science">
            <p>
              Every asset gets a home that answers three questions the moment it
              loads: where the program stands, what needs attention next, and
              what changed while you were away. The AI panel sits alongside
              rather than in a separate chat product, because in this domain an
              answer without citations is worthless.
            </p>
            <p>
              The development plan lives one click deeper. Clinical, commercial,
              non-clinical evaluation, pharm ops, CMC, and regulatory
              workstreams share a single board, cut by stage gates. Each
              deliverable carries its evidence status, so a program lead can
              spot the thin spots without opening a single document.
            </p>
          </SectionHeading>
          <Reveal scale className="mt-10" amount={0.15}>
            <Figure
              index="02"
              src="/work/studio-04.webp"
              alt="Development plan explorer showing six swimlanes for Clinical, Commercial, non-clinical drug evaluation, Pharm Ops, CMC process development, and Regulatory, with stage gate markers and deliverable cards colored by verification status"
              caption="The plan explorer. Six workstreams against shared stage gates, every deliverable showing whether its evidence is verified, partial, or missing."
            />
          </Reveal>
        </section>

        {/* ------------------------------------- 03 · data you can walk -- */}
        <section className="mt-24 sm:mt-32">
          <SectionHeading index="03" title="Data you can walk through">
            <p>
              A drug asset is thousands of files and the entities they describe.
              I built two ways through it. The connections view draws the asset
              as a graph, drug product to container closure to quality control,
              filterable by domain. The data room keeps the regulatory sources
              in a plain file tree with the PDF open right beside it, so
              checking a citation never means leaving the platform.
            </p>
          </SectionHeading>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal scale amount={0.15}>
              <Figure
                index="03"
                src="/work/studio-02.webp"
                alt="Data connections view: a React Flow graph of asset entities including drug product, container closure systems, and quality control nodes, with domain filter chips along the top"
                caption="Data connections. The asset's entities as a filterable graph, built on React Flow."
                sizes="(min-width: 1264px) 588px, (min-width: 768px) 50vw, 100vw"
              />
            </Reveal>
            <Reveal scale delay={0.08} amount={0.15}>
              <Figure
                index="04"
                src="/work/studio-03.webp"
                alt="Virtual data room: a regulatory folder tree on the left and an inline PDF viewer on the right showing an MHRA questions document"
                caption="The virtual data room. Regulatory file tree beside an inline viewer, here an MHRA questions document."
                sizes="(min-width: 1264px) 588px, (min-width: 768px) 50vw, 100vw"
              />
            </Reveal>
          </div>
        </section>

        {/* --------------------------------- 04 · documents that draft -- */}
        <section className="mt-24 sm:mt-32">
          <SectionHeading index="04" title="Documents that draft themselves">
            <p>
              Regulatory and commercial documents are where drug programs lose
              their weeks. The document builder starts from the asset's own
              data, drafts the whole thing, and then walks the author through
              three honest stages: generate, iterate, finishing touches. The
              report shown here runs 32 pages. Starting one takes a description
              and whatever reference files you want it to lean on.
            </p>
          </SectionHeading>
          <Reveal scale className="mt-10" amount={0.15}>
            <Figure
              index="05"
              src="/work/studio-06.webp"
              alt="AI document builder showing a 32-page Market Scan Report open in an editor, with a stepper tracking the generate, iterate, and finishing-touches stages"
              caption="The document builder mid-flight on a 32-page market scan report."
            />
          </Reveal>
          <Reveal scale className="mx-auto mt-10 max-w-[760px]" amount={0.2}>
            <Figure
              index="06"
              src="/work/studio-07.webp"
              alt="Create New Document modal with a free-text description field and an upload area for reference files"
              caption="New documents start small: a description and a stack of reference files."
              sizes="(min-width: 800px) 760px, 100vw"
            />
          </Reveal>
        </section>

        {/* ----------------------------------------- 05 · trust built in -- */}
        <section className="mt-24 sm:mt-32">
          <SectionHeading index="05" title="Trust built in">
            <p>
              Drug assets change hands, and a buyer inherits the record along
              with the science. Every consequential action on the platform is
              committed to a ledger, and the explorer presents those blocks as
              plain accounting rather than cryptography theater. Conversation
              stays inside the same walls too: asset-scoped channels and direct
              messages, carried by Matrix, living next to the data they discuss.
            </p>
          </SectionHeading>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal scale amount={0.15}>
              <Figure
                index="07"
                src="/work/studio-05.webp"
                alt="Blockchain explorer with transaction statistics, a breakdown of operations by type, and a list of ledger blocks with their hashes"
                caption="The blockchain explorer. Operations broken down by type, ledger blocks and hashes below."
                sizes="(min-width: 1264px) 588px, (min-width: 768px) 50vw, 100vw"
              />
            </Reveal>
            <Reveal scale delay={0.08} amount={0.15}>
              <Figure
                index="08"
                src="/work/studio-08.webp"
                alt="Messages view with asset-scoped channels and direct messages in a sidebar and an open conversation thread"
                caption="Messages. Channels are scoped to the asset, so context never needs re-explaining."
                sizes="(min-width: 1264px) 588px, (min-width: 768px) 50vw, 100vw"
              />
            </Reveal>
          </div>
        </section>

        {/* ------------------------------------ 06 · the whole portfolio -- */}
        <section className="mt-24 sm:mt-32">
          <SectionHeading index="06" title="The whole portfolio at a glance">
            <p>
              Leadership asks a different question: not how one program is
              doing, but what the whole pipeline is worth. Scenario modeling
              lays every asset on a single timeline that runs out to 2067, with
              net present value attached to each program. Drag a phase and the
              downstream numbers follow. It turns a spreadsheet argument into
              something you can point at.
            </p>
          </SectionHeading>
          <Reveal scale className="mt-10" amount={0.15}>
            <Figure
              index="09"
              src="/work/studio-09.webp"
              alt="Portfolio scenario modeling: a multi-asset gantt timeline reaching to 2067, with NPV figures per asset and a tooltip open on one development phase"
              caption="Portfolio scenario modeling. Every asset on one timeline to 2067, NPV attached, phases draggable."
            />
          </Reveal>
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
                { label: "Bone paper canvas", swatch: PAPER },
                { label: "One accent · oxidized orange", swatch: OXIDE },
                { label: "Tables tuned for scanning" },
                { label: "Dark mode variant shipped" },
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
              href="/"
              className="group mt-3 inline-flex items-baseline gap-3 text-[color:var(--ink)]"
              style={{
                fontFamily: SERIF,
                fontWeight: 400,
                fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                letterSpacing: "-0.01em",
              }}
            >
              Back to all projects
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
