"use client";

import { motion, useReducedMotion } from "motion/react";
import Avatar from "./Avatar";

/** Editorial line-art figure, same treatment as the hero artwork:
    wipe-in on mount, slow float loop, sits behind the text. */
function AboutFigure({
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

const PROCESS: { title: string; body: string }[] = [
	{
		title: "Domain first",
		body: "Weeks inside the problem space before any UI: banking rules, trial protocols, prompt attacks.",
	},
	{
		title: "Prototype in code",
		body: "Real data and real interactions over static mockups, so decisions get tested, not debated.",
	},
	{
		title: "System, then screens",
		body: "Tokens, components, and docs early, so the fiftieth screen ships as fast as the first.",
	},
	{
		title: "Polish the corners",
		body: "Motion, empty states, keyboard paths. The details that make a product feel obvious.",
	},
];

const STACK: { label: string; tools: string }[] = [
	{ label: "Design", tools: "Figma · Design tokens · Storybook" },
	{
		label: "Frontend",
		tools: "React 19 · Next.js · TypeScript · Tailwind · Motion",
	},
	{ label: "Backend", tools: "Go · Python · PostgreSQL · Neo4j" },
	{ label: "AI", tools: "LangChain · Agentic pipelines · AWS Bedrock" },
	{ label: "Infra", tools: "AWS · Docker · Kubernetes" },
];

/**
 * Identity interlude between the archive and the footer.
 * Echoes the hero: centered display type, one yellow-marker highlight,
 * line-art marginalia, then a side-by-side process / stack block.
 */
export default function About() {
	const reducedMotion = useReducedMotion();
	const ease = [0.25, 1, 0.5, 1] as const;

	const fadeUp = {
		initial: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
		whileInView: reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
		viewport: { once: true, amount: 0.4 },
	} as const;

	return (
		<section
			id="about"
			aria-label="About Anup"
			className="relative flex min-h-[100svh] items-center px-6 py-16 sm:px-10"
		>
			<AboutFigure
				src="/about/poker-hand.webp"
				className="bottom-[6%] left-[2vw] w-[clamp(190px,15vw,260px)]"
				rotate={-4}
				delay={0.6}
				floatDuration={8}
				reduceMotion={reducedMotion}
			/>
			<AboutFigure
				src="/about/drone-mountains.webp"
				className="right-[1vw] top-[8%] w-[clamp(260px,22vw,380px)]"
				rotate={3}
				delay={0.4}
				floatDuration={7}
				reduceMotion={reducedMotion}
			/>

			<div className="mx-auto flex w-full max-w-[880px] flex-col items-center text-center">
				<motion.div {...fadeUp} transition={{ duration: 0.6, ease }}>
					<Avatar size={64} alt="Portrait of Anup Shrestha" />
				</motion.div>

				<motion.h2
					{...fadeUp}
					transition={{ duration: 0.6, ease, delay: 0.08 }}
					className="mt-5 text-[color:var(--ink)]"
					style={{
						fontFamily: "var(--font-display)",
						fontWeight: 600,
						fontSize: "clamp(2rem, 4vw, 3rem)",
						lineHeight: 1.1,
						letterSpacing: "-0.02em",
					}}
				>
					I design the product,
					<br />
					then I{" "}
					<span className="relative inline-block whitespace-nowrap">
						<motion.span
							aria-hidden="true"
							className="absolute -inset-x-2 bottom-[8%] -z-10 h-[42%] origin-left rounded-md bg-[var(--yellow)]"
							style={{ rotate: "-1.5deg" }}
							initial={{ scaleX: reducedMotion ? 1 : 0 }}
							whileInView={{ scaleX: 1 }}
							viewport={{ once: true, amount: 0.6 }}
							transition={{
								duration: 0.6,
								ease: [0.22, 1, 0.36, 1],
								delay: 0.5,
							}}
						/>
						build
					</span>{" "}
					it.
				</motion.h2>

				{/* about me | how I ship, split by a vertical hairline */}
				<motion.div
					{...fadeUp}
					transition={{ duration: 0.6, ease, delay: 0.16 }}
					className="mt-10 grid w-full gap-10 text-left md:grid-cols-2 md:gap-0"
				>
					{/* left: about me */}
					<div className="md:pr-12">
						<h3
							className="text-[17px] font-semibold text-[color:var(--ink)]"
							style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
						>
							About me
						</h3>
						<p
							className="mt-4 text-[15px] leading-relaxed"
							style={{ color: "var(--gray)" }}
						>
							Six years of shipping products end to end: a core banking
							system that launched with 26 cooperative organizations, the
							world&rsquo;s largest AI red-teaming competition with thousands
							of live participants, and now AI-assisted drug development at
							DVLP Medicines, where I design the platform and build its front
							end. Every one of those shipped with a design system I built
							along the way. I like when things match.
						</p>
						<p
							className="mt-3 text-[15px] leading-relaxed"
							style={{ color: "var(--gray)" }}
						>
							Away from the screen I fly drones over Himalayan trails and
							bring back more footage than I&rsquo;ll ever edit, plan trips
							around places I haven&rsquo;t photographed yet, and spend long
							evenings at the poker table. The mountains and the cards teach
							the same lesson: read the situation carefully, then commit.
						</p>
					</div>

					{/* right: process + stack */}
					<div className="md:border-l md:border-black/10 md:pl-12">
						<h3
							className="text-[17px] font-semibold text-[color:var(--ink)]"
							style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
						>
							How I ship
						</h3>
						<ul className="mt-4 flex flex-col gap-3">
							{PROCESS.map((step) => (
								<li key={step.title}>
									<p className="text-[15px] font-semibold text-[color:var(--ink)]">
										{step.title}
									</p>
									<p
										className="mt-0.5 text-[14px] leading-relaxed"
										style={{ color: "var(--gray)" }}
									>
										{step.body}
									</p>
								</li>
							))}
						</ul>

						<h3
							className="mt-8 text-[17px] font-semibold text-[color:var(--ink)]"
							style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
						>
							What I reach for
						</h3>
						<ul className="mt-4 flex flex-col gap-2">
							{STACK.map((group) => (
								<li
									key={group.label}
									className="text-[14px] leading-relaxed"
									style={{ color: "var(--gray)" }}
								>
									<span className="font-semibold text-[color:var(--ink)]">
										{group.label}
									</span>{" "}
									{group.tools}
								</li>
							))}
						</ul>
					</div>
				</motion.div>

				<motion.p
					{...fadeUp}
					transition={{ duration: 0.6, ease, delay: 0.34 }}
					className="mt-10 text-[12px] uppercase tracking-[0.08em]"
					style={{
						color: "var(--gray)",
						fontFamily: "var(--font-mono-accent)",
					}}
				>
					Based in Kathmandu, Nepal
				</motion.p>
			</div>
		</section>
	);
}
