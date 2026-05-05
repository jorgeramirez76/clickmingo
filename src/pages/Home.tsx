import { Link } from "react-router-dom"
import { motion } from "motion/react"
import Reveal from "../components/Reveal"
import { BUSINESS, SERVICES, CASE_STUDIES, STATS, PROCESS, TECH_LOGOS, TESTIMONIALS } from "../lib/data"

export default function Home() {
  return (
    <>
      {/* HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] grain-ink text-[var(--color-paper)] overflow-hidden flex items-center pt-24">
        {/* Floating flamingo silhouette accent — top right */}
        <motion.img
          src="./logo-v2-line.svg"
          alt=""
          aria-hidden
          initial={{ opacity: 0, scale: 0.85, rotate: 5 }}
          animate={{ opacity: 0.16, scale: 1, rotate: 0 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:block absolute -right-20 top-20 w-[640px] pointer-events-none"
        />

        <div className="relative mx-auto w-full max-w-[1500px] px-6 md:px-10 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="label flex items-center gap-3"
          >
            <span className="block w-10 h-px bg-[var(--color-pink)]" />
            Long Branch · NJ · Remote nationwide
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display mt-7 text-[clamp(3.2rem,9vw,9rem)] leading-[0.9] max-w-6xl tracking-tight"
          >
            We don't build websites.<br />
            We build <span className="pink-shimmer">revenue engines.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 max-w-2xl text-lg md:text-xl text-[var(--color-chrome)] font-light leading-relaxed"
          >
            Sites, apps, marketing, and integrations built by an operator who's actually closed deals — not a developer who watched a course on conversion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col sm:flex-row gap-4 sm:items-center"
          >
            <Link to="/contact" className="btn-pink">
              Start a project
              <span className="block w-4 h-px bg-current" />
            </Link>
            <Link to="/work" className="btn-ghost">
              See the work
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
          >
            {STATS.map((s) => (
              <div key={s.label} className="border-l-2 border-[var(--color-pink)] pl-4">
                <div className="stat-num text-3xl md:text-5xl pink-text">{s.value}</div>
                <div className="label-chrome mt-2">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Marquee tech logos */}
        <div className="absolute bottom-0 inset-x-0 overflow-hidden border-t border-[var(--color-pink)]/20 py-4 bg-[var(--color-ink)]/60 backdrop-blur">
          <div className="marquee whitespace-nowrap flex gap-12">
            {[...TECH_LOGOS, ...TECH_LOGOS].map((t, i) => (
              <span key={i} className="font-mono text-[var(--color-chrome)]/60 text-sm tracking-[0.2em] font-semibold">
                {t} <span className="text-[var(--color-pink)] mx-3">●</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* POSITIONING / WHY ME ────────────────────────────── */}
      <section className="grain-paper py-32 md:py-44">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <div className="label">The unfair advantage</div>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            <Reveal as="div" className="md:col-span-7" delay={0.1}>
              <h2 className="font-display text-5xl md:text-8xl leading-[0.9] tracking-tight">
                Most "web guys" can <em className="font-light italic font-display">build.</em><br />
                Almost none of them <span className="pink-text">can sell.</span>
              </h2>
            </Reveal>
            <Reveal as="div" className="md:col-span-5 md:pt-6" delay={0.3}>
              <p className="text-lg md:text-xl text-[var(--color-ink)]/70 leading-relaxed font-light">
                We've built and sold real estate, AI sales pipelines, GoHighLevel snapshots, full restaurant ordering systems, and luxury med spas. The site is just one piece of the machine. We design the <strong>whole machine.</strong>
              </p>
              <Link to="/about" className="inline-flex items-center gap-3 label-ink mt-8 group">
                See the track record
                <span className="block w-8 h-px bg-current origin-left transition-transform duration-500 group-hover:scale-x-150" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES — 4-up tiles ────────────────────────── */}
      <section className="grain-ink text-[var(--color-paper)] py-32 md:py-44">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
              <div>
                <div className="label">What we build</div>
                <h2 className="font-display text-5xl md:text-7xl mt-4 leading-[0.95]">
                  Four ways to <span className="pink-shimmer">make you money.</span>
                </h2>
              </div>
              <Link to="/services" className="label inline-flex items-center gap-3 group" style={{ color: "var(--color-pink)" }}>
                Full services
                <span className="block w-8 h-px bg-[var(--color-pink)] origin-left transition-transform duration-500 group-hover:scale-x-150" />
              </Link>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-pink)]/20">
            {SERVICES.map((s, i) => (
              <Reveal as="div" key={s.id} delay={i * 0.08} className="grain-ink p-8 md:p-10 lift group">
                <div className="flex items-start justify-between gap-4">
                  <div className="numeral font-mono font-bold text-[var(--color-pink)] text-xl">{s.numeral}</div>
                  <span className="block w-8 h-8 rounded-full border border-[var(--color-pink)]/40 group-hover:border-[var(--color-pink)] group-hover:rotate-45 transition-all duration-500" />
                </div>
                <h3 className="font-display text-3xl md:text-4xl mt-6 leading-tight">{s.title}</h3>
                <p className="mt-4 text-[var(--color-chrome)] font-light leading-relaxed">{s.oneLiner}</p>
                <ul className="mt-6 space-y-2 text-sm text-[var(--color-chrome)]/80">
                  {s.bullets.slice(0, 3).map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-[var(--color-pink)]">→</span>
                      <span className="font-light">{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES BAND ──────────────────────────────── */}
      <section className="grain-paper py-32 md:py-44">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
              <div>
                <div className="label">Receipts</div>
                <h2 className="font-display text-5xl md:text-7xl mt-4 leading-[0.95]">
                  Real builds. <span className="pink-text">Real revenue.</span>
                </h2>
              </div>
              <Link to="/work" className="label-ink inline-flex items-center gap-3 group">
                Full portfolio
                <span className="block w-8 h-px bg-[var(--color-ink)] origin-left transition-transform duration-500 group-hover:scale-x-150" />
              </Link>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {CASE_STUDIES.map((c, i) => (
              <Reveal as="article" key={c.id} delay={i * 0.1} className="border-l-2 border-[var(--color-pink)] pl-6 lift">
                <div className="label">{c.vertical}</div>
                <h3 className="font-display text-3xl md:text-4xl mt-3 leading-tight">{c.brand}</h3>
                <p className="mt-5 text-[var(--color-ink)]/70 font-light text-sm leading-relaxed">
                  <span className="font-semibold text-[var(--color-ink)]">Problem · </span>{c.problem}
                </p>
                <p className="mt-3 text-[var(--color-ink)]/70 font-light text-sm leading-relaxed">
                  <span className="font-semibold text-[var(--color-ink)]">Result · </span>{c.result}
                </p>
                {c.url && (
                  <a href={c.url} target="_blank" rel="noreferrer" className="label inline-flex items-center gap-3 mt-5 group">
                    See it live
                    <span className="block w-6 h-px bg-[var(--color-pink)] origin-left transition-transform duration-500 group-hover:scale-x-150" />
                  </a>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS ───────────────────────────────────────── */}
      <section className="grain-ink text-[var(--color-paper)] py-32 md:py-44">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <div className="label">How it works</div>
            <h2 className="font-display text-5xl md:text-7xl mt-4 max-w-3xl leading-[0.95]">
              From hello to <span className="pink-shimmer">launched in days.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-4 gap-px bg-[var(--color-pink)]/30">
            {PROCESS.map((p, i) => (
              <Reveal as="div" key={p.step} delay={i * 0.08} className="grain-ink p-8 md:p-10">
                <div className="font-mono font-bold text-[var(--color-pink)] text-sm">{p.step}</div>
                <h3 className="font-display text-2xl md:text-3xl mt-4 leading-tight">{p.title}</h3>
                <p className="mt-4 text-[var(--color-chrome)] font-light leading-relaxed text-sm">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / SOCIAL PROOF ─────────────────────── */}
      <section className="pink-surface py-24 md:py-32 text-[var(--color-ink)]">
        <div className="mx-auto max-w-5xl px-6 md:px-12 text-center">
          <Reveal>
            <p className="font-display italic text-3xl md:text-5xl leading-tight font-medium">
              "{TESTIMONIALS[0].quote}"
            </p>
            <div className="label mt-8 inline-flex items-center gap-3" style={{ color: "var(--color-ink)" }}>
              <span className="block w-10 h-px bg-[var(--color-ink)]" />
              {TESTIMONIALS[0].name} · {TESTIMONIALS[0].role}
              <span className="block w-10 h-px bg-[var(--color-ink)]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA BAND ──────────────────────────────────────── */}
      <section className="grain-ink text-[var(--color-paper)] py-32 md:py-44">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center">
          <Reveal as="div" className="md:col-span-8">
            <div className="label">The next step</div>
            <h2 className="font-display text-5xl md:text-8xl mt-4 leading-[0.9]">
              Got a project?<br />
              <span className="pink-shimmer">Let's build it.</span>
            </h2>
            <p className="mt-8 max-w-xl text-lg text-[var(--color-chrome)] font-light leading-relaxed">
              30-minute discovery call. No pitch deck, no pressure. We talk about what you're trying to grow and whether we're the right fit.
            </p>
          </Reveal>
          <Reveal as="div" className="md:col-span-4 flex flex-col gap-4" delay={0.2}>
            <Link to="/contact" className="btn-pink">Book a call</Link>
            <a href={`mailto:${BUSINESS.email}`} className="btn-ghost">{BUSINESS.email}</a>
            <a href={`tel:${BUSINESS.phoneE164}`} className="font-display text-3xl pink-text mt-2">
              {BUSINESS.phone}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
