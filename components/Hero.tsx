"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import Avatar from "./Avatar";
import Nav from "./Nav";

const ROLES = [
	"Software Engineer",
	"Designer",
	"Design Engineer",
	"Drone Pilot",
];

/** Vertical role ticker: words roll up and out on a fixed 1-line window. */
function RoleTicker({ reduceMotion }: { reduceMotion: boolean | null }) {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (reduceMotion) return;
		const id = setInterval(
			() => setIndex((i) => (i + 1) % ROLES.length),
			2400,
		);
		return () => clearInterval(id);
	}, [reduceMotion]);

	if (reduceMotion) {
		return <span>{ROLES[0]}</span>;
	}

	return (
		<span className="relative inline-grid h-[1.5em] items-center justify-items-start overflow-hidden align-bottom">
			{/* invisible ghosts lock the window to the widest role so the
			    centered greeting row never shifts as words cycle */}
			{ROLES.map((role) => (
				<span
					key={role}
					aria-hidden="true"
					className="invisible whitespace-nowrap [grid-area:1/1]"
				>
					{role}
				</span>
			))}
			<AnimatePresence mode="popLayout" initial={false}>
				<motion.span
					key={ROLES[index]}
					initial={{ y: "105%" }}
					animate={{ y: 0 }}
					exit={{ y: "-105%" }}
					transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
					className="whitespace-nowrap [grid-area:1/1]"
				>
					{ROLES[index]}
				</motion.span>
			</AnimatePresence>
		</span>
	);
}

/**
 * Editorial exploded-view line art flanking the headline. White image
 * backgrounds disappear into the canvas via multiply blending; entrance is a
 * top-down wipe (the drawing "completes" itself), then a slow float loop.
 */
function HeroFigure({
	src,
	className,
	rotate,
	delay,
	floatDuration,
	reduceMotion,
}: {
	src: string;
	className: string;
	rotate: number;
	delay: number;
	floatDuration: number;
	reduceMotion: boolean | null;
}) {
	return (
		<motion.div
			aria-hidden="true"
			initial={
				reduceMotion
					? { opacity: 0 }
					: { opacity: 0, clipPath: "inset(0 0 100% 0)" }
			}
			animate={
				reduceMotion
					? { opacity: 1 }
					: { opacity: 1, clipPath: "inset(0 0 0% 0)" }
			}
			transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay }}
			className={`pointer-events-none absolute -z-10 hidden select-none lg:block ${className}`}
			style={{ rotate: `${rotate}deg` }}
		>
			<motion.img
				src={src}
				alt=""
				className="h-auto w-full"
				animate={reduceMotion ? undefined : { y: [-7, 7] }}
				transition={{
					duration: floatDuration,
					ease: "easeInOut",
					repeat: Infinity,
					repeatType: "mirror",
				}}
			/>
		</motion.div>
	);
}

export default function Hero() {
	const reduceMotion = useReducedMotion();

	return (
		<section className="relative flex min-h-[100svh] w-full flex-col">
			<Nav />

			{/* -------- Editorial line art --------
          Two figures in dialogue: the pen draws the idea (top-left), the lamp
          leans in from the top-right, lighting the statement. */}

			{/* -------- Hero content -------- */}
			<div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-24 pt-6 text-center">
				<motion.div
					initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
					className="flex flex-wrap items-center justify-center gap-[10px] text-[16px] text-[color:var(--gray)]"
				>
					<span>Hello</span>
					<Avatar />
					<span>I&rsquo;m Anup,</span>
					<span className="font-medium text-[color:var(--ink-soft)]">
						<RoleTicker reduceMotion={reduceMotion} />
					</span>
				</motion.div>

				<div className="relative">
					<motion.h1
						initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
						className="mt-5 max-w-[1100px] text-[color:var(--ink)]"
						style={{
							fontFamily: "var(--font-display)",
							fontWeight: 600,
							fontSize: "clamp(2.5rem, 5vw, 4rem)",
							lineHeight: 1.1,
							letterSpacing: "-0.02em",
						}}
					>
						Every <em className="not-italic font-extrabold">obvious </em>product
						hides a hundred decisions you&rsquo;ll never{" "}
						<span className="relative inline-block whitespace-nowrap">
							<motion.span
								aria-hidden="true"
								className="absolute -inset-x-2 bottom-[6%] -z-10 h-[42%] origin-left rounded-md bg-[var(--yellow)]"
								style={{ rotate: "-1.5deg" }}
								initial={{ scaleX: reduceMotion ? 1 : 0 }}
								animate={{ scaleX: 1 }}
								transition={{
									duration: 0.6,
									ease: [0.22, 1, 0.36, 1],
									delay: 1,
								}}
							/>
							think
						</span>{" "}
						about.
					</motion.h1>

					<HeroFigure
						src="/hero/code-ai.webp"
						className="-left-12 -bottom-80 rotate-45 w-[clamp(240px,20vw,360px)]"
						rotate={3}
						delay={0.8}
						floatDuration={7}
						reduceMotion={reduceMotion}
					/>
					<HeroFigure
						src="/hero/exploded-lamp.webp"
						className="-right-24 -top-64 w-[clamp(240px,22vw,360px)]"
						rotate={-4}
						delay={1}
						floatDuration={7.5}
						reduceMotion={reduceMotion}
					/>
				</div>

				<motion.p
					initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
					className="mt-7 text-[16px] leading-relaxed text-[color:var(--gray)]"
				>
					Currently building{" "}
					<strong className="font-medium text-[color:var(--ink-soft)]">
						AI drug-development workflows
					</strong>{" "}
					and a reusable{" "}
					<strong className="font-medium text-[color:var(--ink-soft)]">
						design system
					</strong>
					.
				</motion.p>

				<motion.a
					href="#work"
					initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
					whileHover={reduceMotion ? undefined : { scale: 1.02 }}
					whileTap={reduceMotion ? undefined : { scale: 0.98 }}
					className="mt-10 inline-flex items-center rounded-full px-7 py-3.5 text-[13px] uppercase tracking-[0.08em] text-white"
					style={{
						backgroundColor: "var(--black)",
						boxShadow: "var(--shadow-chip)",
					}}
				>
					See the work
				</motion.a>
			</div>
		</section>
	);
}
