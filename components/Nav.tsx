"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

const MENU_LINKS: { label: string; href: string }[] = [
	{ label: "Work", href: "#work" },
	{ label: "Archive", href: "#archive" },
	{ label: "About", href: "#about" },
	{ label: "CV", href: "/anup-shrestha-cv.pdf" },
];

/**
 * Minimal in-flow bar (wordmark / Email / Menu) at the top of the hero,
 * plus a full-screen takeover menu that drops as a black curtain with
 * staggered giant links. The bar scrolls away with the hero.
 */
export default function Nav() {
	const reduceMotion = useReducedMotion();
	const [open, setOpen] = useState(false);
	const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
	const menuButtonRef = useRef<HTMLButtonElement | null>(null);

	const close = useCallback(() => {
		setOpen(false);
		menuButtonRef.current?.focus();
	}, []);

	/* body scroll lock + escape while the menu is open */
	useEffect(() => {
		if (!open) return;
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") close();
		};
		window.addEventListener("keydown", onKey);
		firstLinkRef.current?.focus();
		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener("keydown", onKey);
		};
	}, [open, close]);

	return (
		<>
			<motion.header
				initial={{ opacity: 0, y: reduceMotion ? 0 : -12 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
				className="relative w-full shrink-0"
				style={{
					zIndex: open ? "calc(var(--z-menu) + 1)" : "var(--z-nav)",
				}}
			>
				<nav className="mx-auto flex h-[76px] w-full max-w-[1220px] items-center justify-between px-6 sm:px-10">
					<a
						href="#top"
						onClick={open ? close : undefined}
						className="group relative isolate text-[17px] font-bold leading-none transition-colors duration-300"
						style={{
							fontFamily: "var(--font-display)",
							letterSpacing: "-0.01em",
							color: open ? "#fafafa" : "var(--ink)",
						}}
					>
						<span
							aria-hidden="true"
							className="absolute -inset-x-1.5 bottom-[4%] -z-10 h-[40%] origin-left scale-x-0 rounded-sm bg-[var(--yellow)] transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
							style={{ rotate: "-1.5deg" }}
						/>
						Anup<span className="hidden sm:inline"> Shrestha</span>
					</a>

					<div className="flex items-center gap-3">
						<motion.a
							href="mailto:works.anupstha@gmail.com"
							whileHover={reduceMotion ? undefined : { scale: 1.04 }}
							whileTap={reduceMotion ? undefined : { scale: 0.97 }}
							className="flex min-h-11 items-center rounded-full bg-[var(--yellow)] px-4 text-[12px] uppercase tracking-[0.08em] text-[color:var(--ink)] sm:text-[13px]"
						>
							Email me
						</motion.a>

						<button
							ref={menuButtonRef}
							type="button"
							aria-expanded={open}
							aria-controls="site-menu"
							onClick={() => (open ? close() : setOpen(true))}
							className="flex min-h-11 items-center gap-2.5 rounded-full px-4 text-[12px] uppercase tracking-[0.08em] transition-colors duration-300 sm:text-[13px]"
							style={{
								background: open ? "#fafafa" : "var(--ink)",
								color: open ? "var(--ink)" : "#fafafa",
							}}
						>
							{open ? "Close" : "Menu"}
							<span
								aria-hidden="true"
								className="relative block h-[10px] w-[16px]"
							>
								<span
									className="absolute left-0 top-0 h-[2px] w-full rounded-full bg-current transition-transform duration-300 ease-out"
									style={{
										transform: open
											? "translateY(4px) rotate(45deg)"
											: "none",
									}}
								/>
								<span
									className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-current transition-transform duration-300 ease-out"
									style={{
										transform: open
											? "translateY(-4px) rotate(-45deg)"
											: "none",
									}}
								/>
							</span>
						</button>
					</div>
				</nav>
			</motion.header>

			{/* full-screen takeover */}
			<AnimatePresence>
				{open && (
					<motion.div
						id="site-menu"
						role="dialog"
						aria-modal="true"
						aria-label="Site menu"
						initial={
							reduceMotion
								? { opacity: 0 }
								: { clipPath: "inset(0 0 100% 0)" }
						}
						animate={
							reduceMotion ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }
						}
						exit={
							reduceMotion
								? { opacity: 0 }
								: { clipPath: "inset(0 0 100% 0)" }
						}
						transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
						className="fixed inset-0 z-[var(--z-menu)] flex flex-col bg-[#050505] px-6 sm:px-10"
					>
						<div className="mx-auto flex w-full max-w-[1220px] flex-1 flex-col justify-center pt-[76px]">
							<ul className="flex flex-col gap-1">
								{MENU_LINKS.map((link, i) => (
									<motion.li
										key={link.label}
										initial={
											reduceMotion
												? { opacity: 0 }
												: { opacity: 0, y: 32 }
										}
										animate={{ opacity: 1, y: 0 }}
										transition={{
											duration: 0.5,
											ease: [0.22, 1, 0.36, 1],
											delay: reduceMotion ? 0 : 0.18 + i * 0.06,
										}}
									>
										<a
											ref={i === 0 ? firstLinkRef : undefined}
											href={link.href}
											onClick={close}
											className="group relative isolate inline-block py-1 font-bold text-[#fafafa]"
											style={{
												fontFamily: "var(--font-display)",
												fontSize: "clamp(2.75rem, 8vw, 5.5rem)",
												lineHeight: 1.05,
												letterSpacing: "-0.02em",
											}}
										>
											<span
												aria-hidden="true"
												className="absolute inset-x-[-0.15em] top-[6%] -z-10 h-[88%] origin-left scale-x-0 rounded-lg bg-[var(--yellow)] transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
												style={{ rotate: "-1.5deg" }}
											/>
											<span className="transition-colors duration-300 group-hover:text-[#050505] group-focus-visible:text-[#050505]">
												{link.label}
											</span>
										</a>
									</motion.li>
								))}
							</ul>
						</div>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.45 }}
							className="mx-auto flex w-full max-w-[1220px] flex-col gap-2 pb-10 text-[12px] uppercase tracking-[0.08em] sm:flex-row sm:items-center sm:justify-between"
							style={{
								color: "var(--footer-muted, #8b8b94)",
								fontFamily: "var(--font-mono-accent)",
							}}
						>
							<a
								href="mailto:works.anupstha@gmail.com"
								onClick={close}
								className="transition-colors duration-200 hover:text-[#fafafa] focus-visible:outline-[#fafafa]"
							>
								works.anupstha@gmail.com
							</a>
							<span>Kathmandu, Nepal</span>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
