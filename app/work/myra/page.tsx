import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../dvlp-studio/Reveal";

export const metadata: Metadata = {
  title: "Myra ERP — Case Study · Anup Shrestha",
  description:
    "Myra, a cloud ERP for Nepal's savings and credit cooperatives: a core banking system shipped six months after the first commit, live with 26 co-ops at launch, bilingual and multi-tenant, built at Rara Labs as the development team's first hire.",
};

const MONO = "var(--font-mono-accent)";
const SERIF = "var(--font-display)";

/* Product palette, referenced (not adopted) by this page. */
const MYRA_GREEN = "#14532d";

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

export default function MyraPage() {
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
              Myra ERP · Rara Labs
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
              Banking for the co-op down the street
            </h1>
            <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.7] text-[color:var(--ink-soft)]">
              Savings and credit cooperatives in Nepal run on paper ledgers
              and the trust of people who know each other by name. Myra moved
              26 of them onto a real core banking system in its first release,
              shipped six months after the first commit. I was the first hire
              on the development team at Rara Labs, which meant the first
              architecture decisions were mine to get right: an NX monorepo
              on the front, Go and NestJS services behind it, one codebase
              serving every tenant in Nepali and English.
            </p>
          </Reveal>

          <Reveal delay={0.1} amount={0.4}>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-zinc-200 pt-6 sm:grid-cols-4">
              {[
                ["Role", "Senior software engineer, first hire"],
                ["Years", "2021–23"],
                ["Stack", "Go · React · NX · NestJS"],
                ["Scope", "26 co-ops at launch"],
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
            src="/work/myra-03.webp"
            width={1920}
            height={875}
            alt="Myra application hub beside the brand panel: app tiles for Core Banking System, Inventory, Loan Management, and Accounting, quick links, My Day tiles for deposits, withdrawals, and cash in hand, and pending request queues"
            caption="The hub a teller lands on. Core Banking, Inventory, Loan Management, and Accounting as separate apps, with the day's deposits, withdrawals, and cash in hand up front and pending requests queued below."
            preload
          />
        </Reveal>

        {/* ------------------------------------- 02 · one member, whole story -- */}
        <section className="mt-24 sm:mt-32">
          <SectionHeading index="02" title="One member, whole story">
            <p>
              A cooperative's whole business is its members, so the member
              record is where Myra had to earn its keep. Everything a member
              holds, shares, savings, loans, transfers, requests, hangs off one
              profile, and the list view has to stay quick when a co-op crosses
              ten thousand of them. Search, filters, and exports run
              server-side; the reporting queries and APIs behind that table
              were mine, tuned so a branch manager pulling a month-end list is
              never waiting on the software.
            </p>
            <p>
              Getting a member in is the harder design problem. Regulators
              require Know Your Member paperwork, and the people typing it in
              are clerks with a queue at the counter, not data-entry
              specialists. So the onboarding form keeps score in the margin: a
              checklist sidebar shows each section's progress, validation
              flags what is missing without blocking the rest, and a
              half-finished application can be saved and picked up after
              lunch. The spec below is annotated with the spacing redlines we
              held the build to.
            </p>
          </SectionHeading>
          <Reveal scale className="mt-10" amount={0.15}>
            <Figure
              index="02"
              src="/work/myra-02.webp"
              width={3072}
              height={2008}
              alt="Myra member list in the English UI showing 10,005 members, a dark green navigation bar with Member, Share, Saving, Loan, Transaction, Transfer, Requests, Withdraw Slip, Microfinance, and Reports, an open export menu, and per-row profile actions"
              caption="The member list at 10,005 members. The dark green nav carries the whole banking side; exports and per-row profile actions sit where a clerk's hand already is."
            />
          </Reveal>
          <Reveal scale className="mx-auto mt-10 max-w-[860px]" amount={0.2}>
            <Figure
              index="03"
              src="/work/myra-01.webp"
              width={1874}
              height={1628}
              alt="Add New Member form design spec with a progress checklist sidebar showing Personal Information at 3 of 7, Professional Details, SACCOS Membership at 5 of 5, and Declaration at 4 of 4, KYM-style validation states, and redline spacing annotations"
              caption="The onboarding spec. A checklist sidebar keeps count per section, 3/7 here, 5/5 there, so KYM compliance reads as progress instead of punishment. Redlines mark the spacing the build had to match."
              sizes="(min-width: 900px) 860px, 100vw"
            />
          </Reveal>
        </section>

        {/* ----------------------------------------- 03 · shares you can hold -- */}
        <section className="mt-24 sm:mt-32">
          <SectionHeading index="03" title="Shares you can hold">
            <p>
              Co-op members own the co-op, and that ownership is paper they
              expect to hold. Myra's share register prints under the
              cooperative's own letterhead, issue and return rows with their
              kitta ranges laid out the way the registrar's office already
              reads them, because a report that looks unfamiliar to a
              regulator might as well be wrong. Filters, print preferences,
              and saved exports live beside the table, not in a separate
              reporting product.
            </p>
            <p>
              The certificate itself comes out of the same data: a generated
              शेयर प्रमाण-पत्र with registration numbers, the amount written
              out in words, and signature blocks where the committee expects
              them. Bilingual output was not a toggle bolted on at the end;
              every document template carries both scripts, and the numbers
              reconcile with the register either way.
            </p>
          </SectionHeading>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal scale amount={0.15}>
              <Figure
                index="04"
                src="/work/myra-05.webp"
                width={3072}
                height={2220}
                alt="Share Register report under a cooperative letterhead: a share issue and return table with kitta ranges, a filters panel, print preferences, and save and export controls"
                caption="The share register. Cooperative letterhead, issue and return rows with kitta ranges, and print preferences beside the table."
                sizes="(min-width: 1264px) 588px, (min-width: 768px) 50vw, 100vw"
              />
            </Reveal>
            <Reveal scale delay={0.08} amount={0.15}>
              <Figure
                index="05"
                src="/work/myra-04.webp"
                width={842}
                height={595}
                alt="Generated Nepali share certificate, sheyar pramanpatra, with registration numbers, the share amount written out in words, and signature blocks for the committee"
                caption="A generated share certificate in Nepali, registration numbers and amount in words filled from the register, signature blocks ready for ink."
                sizes="(min-width: 1264px) 588px, (min-width: 768px) 50vw, 100vw"
              />
            </Reveal>
          </div>
        </section>

        {/* --------------------------------------- 04 · beyond the counter -- */}
        <section className="mt-24 sm:mt-32">
          <SectionHeading index="04" title="Beyond the counter">
            <p>
              Once the banking core held, the suite kept growing: Accounting,
              Inventory, Alternative Channels for the members who bank by
              phone, and an employee app for the staff running it all. The
              training calendar below is that last one, course objectives,
              trainers, and enrollment behind a single event click. The NX
              monorepo is what made this pace survivable; a new app started
              from shared libraries for auth, tables, forms, and translations
              instead of from zero.
            </p>
            <p>
              The other half of the job never screenshots well. Every tenant
              is isolated, every screen sits behind role-based access, and I
              carried the production DevOps, Docker and Kubernetes on AWS,
              with PostgreSQL and MongoDB underneath and GraphQL in between.
              When your users are cooperatives holding their neighbors'
              savings, boring reliability is the feature.
            </p>
          </SectionHeading>
          <Reveal scale className="mt-10" amount={0.15}>
            <Figure
              index="06"
              src="/work/myra-06.webp"
              width={1920}
              height={1080}
              alt="Myra employee app training calendar with an event detail modal open, showing course objectives, a trainers table, and enrollment controls"
              caption="The employee app. A training calendar with the event detail one click deep: objectives, trainers, and enrollment in a single modal."
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
                { label: "26 co-ops at launch" },
                { label: "Shipped in 6 months" },
                { label: "Bilingual UI · नेपाली + English" },
                { label: "Multi-tenant RBAC" },
                { label: "NX monorepo front" },
                { label: "Myra green", swatch: MYRA_GREEN },
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
