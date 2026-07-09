import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../dvlp-studio/Reveal";

export const metadata: Metadata = {
  title: "DVLP Design System — Case Study · Anup Shrestha",
  description:
    "Lab Paper, the design system behind DVLP Studio: a bone-paper canvas, one oxidized orange, a single grotesk, and dense scientific tables tuned for scanning. 26 boards across light and dark.",
};

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

export default function DvlpDesignSystemPage() {
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
              DVLP Studio · Design system
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
              Lab Paper
            </h1>
            <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.7] text-[color:var(--ink-soft)]">
              DVLP is a pharmaceutical drug-development platform, which means
              its screens are mostly tables, statuses, and citations. I built
              the system that keeps all of that calm: a warm bone-paper canvas,
              exactly one accent, a single grotesk, and a type scale sized
              around the data rather than the marketing page. Twenty-six
              boards, light and dark, from color tokens down to the sign-in
              screen.
            </p>
          </Reveal>

          <Reveal delay={0.1} amount={0.4}>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-zinc-200 pt-6 sm:grid-cols-4">
              {[
                ["Role", "Design engineer"],
                ["Years", "2025–26"],
                ["Stack", "Figma · Tailwind · Storybook"],
                ["Scope", "26 boards, 2 themes"],
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
            src="/work/ds-cover.webp"
            width={3840}
            height={2160}
            alt="Cover board for the Lab Paper design system: the DVLP wordmark and system title set on a warm bone-paper background with a single oxidized orange accent"
            caption="The cover board. Bone paper, one oxidized orange, and the grotesk that carries everything else."
            preload
          />
        </Reveal>

        {/* ------------------------------------------- 02 · foundations -- */}
        <section className="mt-24 sm:mt-32">
          <SectionHeading index="02" title="Foundations">
            <p>
              The canvas is a warm bone paper rather than white, so a day of
              staring at tables feels closer to reading a printed protocol than
              a spreadsheet. On top of it sits one accent, an oxidized orange,
              reserved for the primary action and the current selection.
              Everything else that needs color gets it from a small semantic
              set for states and domains, kept muted so a page full of statuses
              never turns into a fruit salad.
            </p>
            <p>
              Underneath, the boring tokens do the real work: a 4px spacing
              grid, three radii, and shadows soft enough to read as paper
              lifting off paper instead of cards floating in space.
            </p>
          </SectionHeading>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal scale amount={0.15}>
              <Figure
                index="02"
                src="/work/ds-palette.webp"
                width={3200}
                height={2400}
                alt="Core palette board: bone-paper surface tones, an ink ramp for text, and the single oxidized orange accent with usage notes"
                caption="The core palette. Paper tones, an ink ramp, and one orange with strict rules about where it may appear."
                sizes="(min-width: 1264px) 588px, (min-width: 768px) 50vw, 100vw"
              />
            </Reveal>
            <Reveal scale delay={0.08} amount={0.15}>
              <Figure
                index="03"
                src="/work/ds-accents.webp"
                width={3200}
                height={2400}
                alt="Semantic accents board: muted greens, ambers, reds, and blues mapped to verification states and scientific domains"
                caption="Semantic accents. Status and domain colors, desaturated so they inform without shouting."
                sizes="(min-width: 1264px) 588px, (min-width: 768px) 50vw, 100vw"
              />
            </Reveal>
          </div>
          <Reveal scale className="mx-auto mt-10 max-w-[860px]" amount={0.2}>
            <Figure
              index="04"
              src="/work/ds-space.webp"
              width={3200}
              height={2400}
              alt="Spacing, radius, and shadow board: a 4px spacing scale, three corner radii, and a small set of soft elevation shadows"
              caption="Spacing, radius, and shadow tokens. The 4px grid everything on the platform snaps to."
              sizes="(min-width: 900px) 860px, 100vw"
            />
          </Reveal>
        </section>

        {/* ------------------------------------- 03 · type carries data -- */}
        <section className="mt-24 sm:mt-32">
          <SectionHeading index="03" title="Type that carries data">
            <p>
              One typeface does all the talking: ABC Diatype, in the product at
              every size. A drug program page can hold a heading, a dense
              table, a citation, and a timestamp within one viewport, so the
              scale was tuned from the small end up. The 12 and 13px steps had
              to survive a forty-row table before anything else was decided,
              and tabular figures are on by default anywhere a number can
              appear.
            </p>
            <p>
              The steps are fewer than most scales I have shipped. When every
              size earns its place, a screen with six data densities still
              reads as one voice.
            </p>
          </SectionHeading>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal scale amount={0.15}>
              <Figure
                index="05"
                src="/work/ds-typeface.webp"
                width={3200}
                height={2400}
                alt="Typeface board introducing ABC Diatype: character set, weights, and notes on tabular figures for data-heavy screens"
                caption="ABC Diatype, the only typeface in the product. Weights, character set, and the tabular-figures rule."
                sizes="(min-width: 1264px) 588px, (min-width: 768px) 50vw, 100vw"
              />
            </Reveal>
            <Reveal scale delay={0.08} amount={0.15}>
              <Figure
                index="06"
                src="/work/ds-typescale.webp"
                width={3840}
                height={2160}
                alt="Type scale board: the full run of sizes from 12px table text up to page titles, each step shown with line height and usage"
                caption="The scale, built from the table text upward. Every step names the surface it exists for."
                sizes="(min-width: 1264px) 588px, (min-width: 768px) 50vw, 100vw"
              />
            </Reveal>
          </div>
          <Reveal scale className="mx-auto mt-10 max-w-[480px]" amount={0.2}>
            <Figure
              index="07"
              src="/work/ds-type-poster.webp"
              width={2160}
              height={3840}
              alt="Portrait typographic poster set entirely in ABC Diatype on bone paper, mixing display sizes with fine specimen text"
              caption="A specimen poster from the same tokens. If the system can hold a poster, it can hold a table."
              sizes="(min-width: 520px) 480px, 100vw"
            />
          </Reveal>
        </section>

        {/* --------------------------------------------- 04 · components -- */}
        <section className="mt-24 sm:mt-32">
          <SectionHeading index="04" title="Components">
            <p>
              The component set is deliberately small and deliberately
              documented. Buttons, cards, forms, badges, feedback, and a family
              of domain icons cover almost every screen in the platform, and
              each one exists in Storybook with the same names it has in Figma.
              I wrote anatomy notes for the pieces engineers touch most, so a
              button is a spec you can build from, not a picture you have to
              interpret.
            </p>
          </SectionHeading>
          <Reveal scale className="mt-10" amount={0.15}>
            <Figure
              index="08"
              src="/work/ds-wall.webp"
              width={4800}
              height={2400}
              alt="Component wall: the full set of Lab Paper components laid out on one board, including buttons, inputs, cards, tables, badges, and navigation"
              caption="The component wall. Everything in the system on one board, in its real states."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal scale amount={0.15}>
              <Figure
                index="09"
                src="/work/ds-buttons.webp"
                width={3200}
                height={2400}
                alt="Buttons and actions board: primary oxidized orange, secondary, ghost, and destructive buttons across default, hover, focus, and disabled states"
                caption="Buttons and actions. One orange primary per view; the rest stay on paper tones."
                sizes="(min-width: 1264px) 588px, (min-width: 768px) 50vw, 100vw"
              />
            </Reveal>
            <Reveal scale delay={0.08} amount={0.15}>
              <Figure
                index="10"
                src="/work/ds-button-anatomy.webp"
                width={2400}
                height={2400}
                alt="Button anatomy board: an exploded button with measured padding, icon gap, corner radius, and label style annotations"
                caption="Button anatomy. Padding, gap, and radius measured so the build matches the board."
                sizes="(min-width: 1264px) 588px, (min-width: 768px) 50vw, 100vw"
              />
            </Reveal>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal scale amount={0.15}>
              <Figure
                index="11"
                src="/work/ds-cards.webp"
                width={3200}
                height={2400}
                alt="Cards board: asset cards, summary cards, and list cards with headers, metadata rows, and verification badges"
                caption="Cards. The asset card pattern that most of the platform is assembled from."
                sizes="(min-width: 1264px) 588px, (min-width: 768px) 50vw, 100vw"
              />
            </Reveal>
            <Reveal scale delay={0.08} amount={0.15}>
              <Figure
                index="12"
                src="/work/ds-forms.webp"
                width={3200}
                height={2400}
                alt="Forms board: text inputs, selects, textareas, checkboxes, and radio groups with label, helper, error, and disabled states"
                caption="Forms. Every field state written out, because regulatory data entry has no room for guesswork."
                sizes="(min-width: 1264px) 588px, (min-width: 768px) 50vw, 100vw"
              />
            </Reveal>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal scale amount={0.15}>
              <Figure
                index="13"
                src="/work/ds-badges.webp"
                width={3200}
                height={3200}
                alt="Badges and chips board: verification states, phase labels, domain tags, and count chips in the muted semantic palette"
                caption="Badges and chips. Verification and phase states, sized to sit inside a table row."
                sizes="(min-width: 1264px) 588px, (min-width: 768px) 50vw, 100vw"
              />
            </Reveal>
            <Reveal scale delay={0.08} amount={0.15}>
              <Figure
                index="14"
                src="/work/ds-icons.webp"
                width={3200}
                height={3200}
                alt="Domain icons board: a custom icon family for clinical, CMC, regulatory, commercial, and other drug-development domains, drawn on one grid"
                caption="Domain icons. Clinical, CMC, regulatory, and friends, all drawn on the same grid and stroke."
                sizes="(min-width: 1264px) 588px, (min-width: 768px) 50vw, 100vw"
              />
            </Reveal>
          </div>
          <Reveal scale className="mx-auto mt-10 max-w-[860px]" amount={0.2}>
            <Figure
              index="15"
              src="/work/ds-feedback.webp"
              width={3200}
              height={2400}
              alt="Feedback board: toasts, banners, empty states, and loading patterns using the semantic accent colors"
              caption="Feedback. Toasts, banners, and empty states that stay quiet unless something actually needs you."
              sizes="(min-width: 900px) 860px, 100vw"
            />
          </Reveal>
        </section>

        {/* ------------------------------------------------ 05 · applied -- */}
        <section className="mt-24 sm:mt-32">
          <SectionHeading index="05" title="Applied">
            <p>
              A system is only proven on a real screen, so the boards end where
              the product begins. The asset home and the development plan are
              the two densest surfaces in DVLP, and both are assembled entirely
              from the components above. Nothing custom, nothing off-grid. The
              sign-in screen is the small test I hold every system to: with
              only two fields and a button, it should still be unmistakably
              this product.
            </p>
          </SectionHeading>
          <Reveal scale className="mt-10" amount={0.15}>
            <Figure
              index="16"
              src="/work/ds-applied-home.webp"
              width={3840}
              height={2160}
              alt="The asset home screen built from the design system: sidebar navigation, phase progress, activity feed, and inquiry panel, all on bone paper"
              caption="The asset home, assembled from system parts. The one orange on screen is the primary action."
            />
          </Reveal>
          <Reveal scale className="mt-10" amount={0.15}>
            <Figure
              index="17"
              src="/work/ds-applied-plan.webp"
              width={3840}
              height={2160}
              alt="The development plan screen built from the design system: six workstream swimlanes with stage gates and deliverable cards carrying verification badges"
              caption="The development plan. Badges, cards, and the semantic set doing their job across six workstreams."
            />
          </Reveal>
          <Reveal scale className="mx-auto mt-10 max-w-[760px]" amount={0.2}>
            <Figure
              index="18"
              src="/work/ds-signin.webp"
              width={3200}
              height={2400}
              alt="Sign-in screen: two fields and one oxidized orange button on the bone-paper canvas"
              caption="Sign in. Two fields, one button, and it still could not belong to any other product."
              sizes="(min-width: 800px) 760px, 100vw"
            />
          </Reveal>
        </section>

        {/* ---------------------------------------------- 06 · dark mode -- */}
        <section className="mt-24 sm:mt-32">
          <SectionHeading index="06" title="Dark mode">
            <p>
              Dark mode is not the palette inverted. Paper becomes a warm
              near-black, ink becomes bone, and the oxidized orange stays put,
              re-checked for contrast against the new ground. The semantic
              accents were re-mixed by hand, because status colors that pass on
              paper can vanish or scream on dark. Both themes ship from the
              same tokens, so a component never knows which one it is in.
            </p>
          </SectionHeading>
          <Reveal scale className="mt-10" amount={0.15}>
            <Figure
              index="19"
              src="/work/ds-dark.webp"
              width={3840}
              height={2160}
              alt="Dark mode board: the core palette and components restated on a warm near-black ground, with the oxidized orange accent retained"
              caption="The dark variant. Warm near-black instead of gray, with every accent re-mixed for the new ground."
            />
          </Reveal>
          <Reveal scale className="mx-auto mt-10 max-w-[560px]" amount={0.2}>
            <Figure
              index="20"
              src="/work/ds-dark-stack.webp"
              width={2160}
              height={2700}
              alt="A stack of dark-mode components: cards, badges, and buttons layered on the near-black surface"
              caption="A dark component stack. Same tokens, same parts, different ground."
              sizes="(min-width: 600px) 560px, 100vw"
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
                { label: "One accent only", swatch: OXIDE },
                { label: "26 boards" },
                { label: "Light + dark" },
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
