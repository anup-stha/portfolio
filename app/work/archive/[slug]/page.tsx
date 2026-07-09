import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../dvlp-studio/Reveal";
import { ARCHIVE, getArchiveEntry } from "@/lib/archive";

const MONO = "var(--font-mono-accent)";
const SERIF = "var(--font-display)";

export function generateStaticParams() {
  return ARCHIVE.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getArchiveEntry(slug);
  if (!entry) {
    return { title: "Archive · Anup Shrestha" };
  }
  return {
    title: `${entry.name} — Archive · Anup Shrestha`,
    description: entry.standfirst,
  };
}

export default async function ArchiveEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getArchiveEntry(slug);
  if (!entry) notFound();

  const index = ARCHIVE.findIndex((e) => e.slug === entry.slug);
  const prev = ARCHIVE[(index - 1 + ARCHIVE.length) % ARCHIVE.length];
  const next = ARCHIVE[(index + 1) % ARCHIVE.length];

  return (
    <main className="w-full pb-6">
      {/* ------------------------------------------------------ top bar -- */}
      <header className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-5 pt-8 sm:px-8">
        <Link
          href="/#"
          className="-mx-2 flex min-h-11 items-center gap-2 px-2 text-[15px] text-[color:var(--ink-soft)] transition-colors duration-200 ease-out hover:text-[color:var(--ink)]"
        >
          <span aria-hidden="true">←</span>
          Anup Shrestha
        </Link>
        <span
          className="text-[12px] uppercase"
          style={{ fontFamily: MONO, letterSpacing: "0.08em", color: "var(--gray)" }}
        >
          Archive
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
              {entry.origin} · {entry.year}
            </p>
            <h1
              className="mt-4 text-[color:var(--ink)]"
              style={{
                fontFamily: SERIF,
                fontWeight: 400,
                fontSize: "clamp(2.75rem, 6vw, 4.25rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.015em",
              }}
            >
              {entry.name}
            </h1>
            <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.7] text-[color:var(--ink-soft)]">
              {entry.standfirst}
            </p>
            {entry.liveUrl && (
              <a
                href={entry.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-[15px] text-white transition-[background-color,transform] duration-200 ease-out hover:scale-[1.02] hover:bg-[#27272a] active:scale-[0.98]"
              >
                Visit live site <span aria-hidden="true">↗</span>
              </a>
            )}
          </Reveal>

          {/* ----------------------------------------------------- meta -- */}
          <Reveal delay={0.1} amount={0.4}>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-zinc-200 pt-6 sm:grid-cols-4">
              {[
                ["Role", entry.role],
                ["Year", entry.year],
                ["Origin", entry.origin],
                ["Stack", entry.stackSummary],
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

        {/* ----------------------------------------------------- sections -- */}
        {entry.sections.map((section, i) => (
          <section key={section.heading} className="mt-20 sm:mt-24">
            <Reveal amount={0.3}>
              <p
                className="text-[12px] uppercase"
                style={{
                  fontFamily: MONO,
                  letterSpacing: "0.08em",
                  color: "var(--gray)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
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
                {section.heading}
              </h2>
              {section.paragraphs && (
                <div className="mt-4 flex max-w-[66ch] flex-col gap-4 text-[16px] leading-[1.7] text-[color:var(--ink-soft)]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              )}
              {section.bullets && (
                <ul className="mt-6 max-w-[66ch]">
                  {section.bullets.map((bullet, j) => (
                    <li
                      key={bullet}
                      className="flex gap-5 border-t border-zinc-200 py-4 last:border-b"
                    >
                      <span
                        className="shrink-0 pt-0.5 text-[12px]"
                        style={{
                          fontFamily: MONO,
                          letterSpacing: "0.08em",
                          color: "var(--gray)",
                        }}
                      >
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[16px] leading-[1.7] text-[color:var(--ink-soft)]">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </section>
        ))}

        {/* --------------------------------------------------- stack strip -- */}
        <Reveal className="mt-20 sm:mt-24" amount={0.4}>
          <section aria-label="Stack" className="border-y border-zinc-200 py-8">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
              <h2
                className="mr-2 text-[12px] uppercase"
                style={{
                  fontFamily: MONO,
                  letterSpacing: "0.08em",
                  color: "var(--gray)",
                }}
              >
                Stack
              </h2>
              {entry.stack.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-[12px] uppercase text-[color:var(--ink)]"
                  style={{ fontFamily: MONO, letterSpacing: "0.05em" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ---------------------------------------------------- prev/next -- */}
        <Reveal className="mt-20 sm:mt-24" amount={0.4}>
          <nav
            aria-label="More from the archive"
            className="grid gap-10 sm:grid-cols-2"
          >
            <div>
              <p
                className="text-[12px] uppercase"
                style={{
                  fontFamily: MONO,
                  letterSpacing: "0.08em",
                  color: "var(--gray)",
                }}
              >
                Previous
              </p>
              <Link
                href={`/work/archive/${prev.slug}`}
                className="group mt-3 inline-flex items-baseline gap-3 text-[color:var(--ink)]"
                style={{
                  fontFamily: SERIF,
                  fontWeight: 400,
                  fontSize: "clamp(1.4rem, 2.6vw, 1.9rem)",
                  letterSpacing: "-0.01em",
                }}
              >
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 ease-out group-hover:-translate-x-1"
                >
                  ←
                </span>
                {prev.name}
              </Link>
            </div>
            <div className="sm:text-right">
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
                href={`/work/archive/${next.slug}`}
                className="group mt-3 inline-flex items-baseline gap-3 text-[color:var(--ink)]"
                style={{
                  fontFamily: SERIF,
                  fontWeight: 400,
                  fontSize: "clamp(1.4rem, 2.6vw, 1.9rem)",
                  letterSpacing: "-0.01em",
                }}
              >
                {next.name}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 ease-out group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </nav>
          <p className="mt-10">
            <Link
              href="/#"
              className="-mx-2 inline-flex min-h-11 items-center px-2 text-[12px] uppercase text-[color:var(--ink-soft)] transition-colors duration-200 ease-out hover:text-[color:var(--ink)]"
              style={{ fontFamily: MONO, letterSpacing: "0.08em" }}
            >
              All projects →
            </Link>
          </p>
        </Reveal>

        {/* -------------------------------------------------- footer CTA -- */}
        <footer className="pb-20 pt-16 sm:pb-28 sm:pt-20">
          <Reveal amount={0.5}>
            <div className="flex flex-wrap items-center gap-4 border-t border-zinc-200 pt-10">
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
