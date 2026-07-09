import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../dvlp-studio/Reveal";

export const metadata: Metadata = {
  title: "HackAPrompt 2.0 — Case Study · Anup Shrestha",
  description:
    "HackAPrompt 2.0 at Learn Prompting: the world's largest AI red-teaming competition. I led engineering on the platform: Next.js and Supabase, a dynamic scoring engine judging jailbreak attempts, teams, live leaderboards over WebSockets, and $100K+ in prizes awarded.",
};

const MONO = "var(--font-mono-accent)";
const SERIF = "var(--font-display)";

/* Product palette, referenced (not adopted) by this page. */
const NAVY = "#080c18";
const SIGNAL = "#4d9fff";

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

export default function HackapromptPage() {
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
              HackAPrompt 2.0 · Learn Prompting
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
              The arena for breaking AI
            </h1>
            <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.7] text-[color:var(--ink-soft)]">
              HackAPrompt 2.0 is the world&apos;s largest AI red-teaming
              competition: thousands of hackers live at once, trying to
              jailbreak 20+ models for a share of more than $100,000 in
              prizes. I was the lead engineer for the year it ran, and I built
              the platform underneath it on Next.js and Supabase: the scoring
              engine that judges every attempt, teams, live leaderboards, and
              challenges where the model can fight back with tools of its own.
            </p>
            <a
              href="https://www.hackaprompt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-[15px] text-white transition-[background-color,transform] duration-200 ease-out hover:scale-[1.02] hover:bg-[#27272a] active:scale-[0.98]"
            >
              Visit live site <span aria-hidden="true">↗</span>
            </a>
          </Reveal>

          <Reveal delay={0.1} amount={0.4}>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-zinc-200 pt-6 sm:grid-cols-4">
              {[
                ["Role", "Lead engineer"],
                ["Years", "2024–25"],
                ["Stack", "Next.js · Supabase · WebSockets"],
                ["Scope", "$100K in prizes, 4 tracks"],
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
            src="/work/hackaprompt-03.webp"
            width={3576}
            height={2080}
            alt="HackAPrompt landing page on a dark navy ground: the headline Hack AI. Win Money., copy noting over $100,000 already given away in prizes, a Start Hacking Now button, a 20+ Models chip with provider logos, and a Discord community card"
            caption="The front door. One promise in two sentences, one button, and the two proofs that matter: 20+ target models and $100,000 already paid out."
            preload
          />
        </Reveal>

        {/* --------------------------------------------- 02 · four ways in -- */}
        <section className="mt-24 sm:mt-32">
          <SectionHeading index="02" title="Four ways in">
            <p>
              A competition this size gets absolute beginners and professional
              red-teamers in the same hour, so the tracks are a difficulty
              ladder rather than a menu. Tutorial teaches prompt injection from
              zero. CBRNE raises the stakes to genuinely harmful elicitation,
              the category labs actually worry about. MATS x Trails is the
              advanced tier, indirect prompt injection against agents, where
              the attack rides in through the data instead of the chat box.
            </p>
            <p>
              The fourth track was a partnership with PointCrow, a streamer
              with an audience that had never heard of red-teaming. His
              challenges wrapped the same mechanics in scenarios like botched
              surgeries and a murder mystery, and the countdown on the card
              did more for sign-ups than any banner we ran. Each track is just
              configuration on the same challenge engine, which is what let us
              stand a new one up in days.
            </p>
          </SectionHeading>
          <Reveal scale className="mt-10" amount={0.15}>
            <Figure
              index="02"
              src="/work/hackaprompt-04.webp"
              width={3576}
              height={2080}
              alt="Compete In One of Four Tracks: a Tutorial card tagged beginner, a CBRNE card tagged intermediate for chemical, biological, radiological, and explosives elicitation, a MATS x Trails card tagged advanced for indirect prompt injection, and a featured HackAPrompt x PointCrow partnership card with a live countdown"
              caption="The four tracks. A ladder from tutorial to indirect prompt injection, plus the PointCrow partnership track with its countdown running."
            />
          </Reveal>
        </section>

        {/* ------------------------------- 03 · a challenge is a conversation -- */}
        <section className="mt-24 sm:mt-32">
          <SectionHeading index="03" title="A challenge is a conversation">
            <p>
              The core loop is a split screen: the brief on the left, a live
              model on the right. The one shown here allows only emoji as
              input and asks you to make the model say an exact phrase, and at
              the time of the screenshot nobody in the world had solved it.
              Attempts are cheap by design. You talk to the model as long as
              you like, start over freely, and only submit for judging when
              you think you have it.
            </p>
            <p>
              Judging is where most of my engineering time went. A single
              regex cannot decide whether a model was actually jailbroken, so
              I built a dynamic scoring algorithm: each challenge declares its
              own success criteria, from exact-match phrases with formatting
              stripped to model-graded evaluations of whether harmful content
              was really produced, and points scale with difficulty and
              token spend. Some challenges hand the model tools of its own,
              which means the judge has to reason about what the model did,
              not just what it said. Every verdict had money on it, so the
              same submission had to score the same way every time.
            </p>
          </SectionHeading>
          <Reveal scale className="mt-10" amount={0.15}>
            <Figure
              index="03"
              src="/work/hackaprompt-05.webp"
              width={3576}
              height={2080}
              alt="The Emoji Defense challenge: a brief explaining the model must say an exact phrase while the attacker may use only emoji, a live model chat panel beside it, counters for 10,000 points available and 0 earned, a token budget, and buttons to start a new attempt or submit the current response for judging"
              caption="The Emoji Defense. Brief on the left, live model on the right, 10,000 points on the table. Attempts are free; judging is the commitment."
            />
          </Reveal>
        </section>

        {/* ------------------------------------------- 04 · thousands at once -- */}
        <section className="mt-24 sm:mt-32">
          <SectionHeading index="04" title="Thousands at once">
            <p>
              Launch days put thousands of participants on the platform
              simultaneously, all hammering the same models and all wanting to
              know where they stand right now. Standings, points, and
              completed-challenge counts stream over WebSockets, so a solve on
              one continent moves the leaderboard on another without anyone
              refreshing. Supabase carries the state; the realtime layer
              carries the mood.
            </p>
            <p>
              Fairness at that scale is a product feature, not a policy page.
              Teams form inside the platform and score as one entry,
              usernames stay masked on public boards, and every submission
              keeps its full transcript so a disputed prize can be replayed
              end to end. The dashboard ties it together: pick a track, see
              your progress, and jump back in where you left off.
            </p>
          </SectionHeading>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal scale amount={0.15}>
              <Figure
                index="04"
                src="/work/hackaprompt-01.webp"
                width={2561}
                height={1440}
                alt="HackAPrompt dashboard: a Prompt Arena is Live banner announcing the PvP public beta, competition track cards for Tutorial, HackAPrompt 1.0, CBRNE Practice, and PointCrow's track, and a HackAPromptle daily puzzle card"
                caption="The dashboard. Tracks as cards, the daily puzzle, and the Prompt Arena banner announcing PvP jailbreaking against live players."
                sizes="(min-width: 1264px) 588px, (min-width: 768px) 50vw, 100vw"
              />
            </Reveal>
            <Reveal scale delay={0.08} amount={0.15}>
              <Figure
                index="05"
                src="/work/hackaprompt-02.webp"
                width={2561}
                height={1440}
                alt="MATS x Trails global leaderboard: a top score of 717,876, a rank table with masked usernames, team entries, points, and completed challenge counts out of 27 total challenges"
                caption="The MATS x Trails leaderboard, live. Teams and solo entries in one table, usernames masked, 27 challenges in the track."
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
                { label: "20+ target models" },
                { label: "Dynamic scoring" },
                { label: "Live leaderboards" },
                { label: "Tool-calling challenges" },
                { label: "$100K awarded" },
                { label: "Arena navy", swatch: NAVY },
                { label: "Signal blue", swatch: SIGNAL },
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
              href="/work/vidi"
              className="group mt-3 inline-flex items-baseline gap-3 text-[color:var(--ink)]"
              style={{
                fontFamily: SERIF,
                fontWeight: 400,
                fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                letterSpacing: "-0.01em",
              }}
            >
              VIDI · Agent governance
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
