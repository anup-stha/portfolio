"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendContact, type ContactState } from "@/app/actions/contact";

const field =
  "w-full rounded-xl border border-black/10 bg-[var(--zinc)] px-4 py-3 text-[15px] text-[color:var(--ink)] placeholder:text-[color:var(--gray-light)] outline-none transition-colors duration-200 focus:border-black/40";

/**
 * Native <dialog>, mounted once in the root layout. Any link to `#contact`
 * opens it; closing clears the hash so the same link works again.
 */
export default function ContactDialog() {
  const ref = useRef<HTMLDialogElement>(null);
  const [state, action, pending] = useActionState<ContactState, FormData>(
    sendContact,
    null,
  );

  useEffect(() => {
    const sync = () => {
      const el = ref.current;
      if (!el) return;
      if (window.location.hash === "#contact") {
        if (!el.open) el.showModal();
      } else if (el.open) {
        el.close();
      }
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const close = () => ref.current?.close();

  const onClose = () => {
    if (window.location.hash === "#contact") {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) close(); // backdrop click
      }}
      aria-labelledby="contact-title"
      className="m-auto w-[calc(100vw-32px)] max-w-[560px] rounded-[24px] bg-white p-0 text-[color:var(--ink)] shadow-2xl backdrop:bg-[#050505]/60 backdrop:backdrop-blur-sm"
    >
      <div className="p-7 sm:p-9">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2
              id="contact-title"
              className="text-[26px] leading-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "-0.02em" }}
            >
              Say hello
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "var(--gray)" }}>
              Lands in my inbox. I reply to every real one.
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="-mr-2 -mt-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[color:var(--gray)] transition-colors hover:bg-[var(--zinc)] hover:text-[color:var(--ink)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {state?.ok ? (
          <div className="mt-8">
            <p role="status" className="text-[16px] leading-relaxed">
              Got it. I&rsquo;ll reply to you soon.
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-6 inline-flex items-center rounded-full bg-[var(--black)] px-6 py-3 text-[13px] uppercase tracking-[0.08em] text-white"
            >
              Done
            </button>
          </div>
        ) : (
          <form action={action} className="mt-7 flex flex-col gap-3">
            {/* honeypot: hidden from people, tempting to bots */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
            />
            <div className="grid gap-3 sm:grid-cols-2">
              <input name="name" required placeholder="Your name" autoComplete="name" className={field} />
              <input name="email" type="email" required placeholder="you@example.com" autoComplete="email" className={field} />
            </div>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="What are you building?"
              className={`${field} resize-y`}
            />
            {state?.error && (
              <p role="alert" className="text-[14px] text-[#b91c1c]">
                {state.error}
              </p>
            )}
            <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
              <span className="text-[13px]" style={{ color: "var(--gray)" }}>
                or works.anupstha@gmail.com
              </span>
              <button
                type="submit"
                disabled={pending}
                className="inline-flex items-center rounded-full bg-[var(--black)] px-6 py-3 text-[13px] uppercase tracking-[0.08em] text-white transition-[opacity,transform] duration-200 ease-out hover:scale-[1.02] active:scale-[0.98] disabled:cursor-wait disabled:opacity-60"
              >
                {pending ? "Sending…" : "Send message"}
              </button>
            </div>
          </form>
        )}
      </div>
    </dialog>
  );
}
