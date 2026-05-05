import { Link } from "react-router-dom"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import Reveal from "../components/Reveal"
import CountUp from "../components/CountUp"
import MeshBackground from "../components/MeshBackground"
import Marquee from "../components/Marquee"
import { BUSINESS, SERVICES, CASE_STUDIES, STATS, PROCESS, TECH_LOGOS, TESTIMONIALS } from "../lib/data"

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroY = useTransform(heroProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(heroProgress, [0, 0.6], [1, 0])

  return (
    <>
      {/* HERO ─────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-[100svh] text-[var(--color-paper)] overflow-hidden flex items-center pt-24">
        <MeshBackground />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 mx-auto w-full max-w-[1500px] px-6 md:px-10 py-16 md:py-24">
          {/* Top row: location + status */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-10 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="label flex items-center gap-3"
            >
              <span className="block w-10 h-px bg-[var(--color-pink)]" />
              {BUSINESS.city} · est. 2026
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="hidden md:flex items-center gap-2 label-chrome"
            >
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex w-full h-full rounded-full bg-[var(--color-pink)] opacity-75" />
                <span className="relative rounded-full w-2 h-2 bg-[var(--color-pink)]" />
              </span>
              Booking projects · Q3 2026
            </motion.div>
          </div>

          {/* MASSIVE kinetic headline */}
          <div className="font-display tracking-[-0.04em] leading-[0.85]">
            <KineticLine delay={0.4}>
              <span className="text-[clamp(3.5rem,11vw,12rem)]">We don't build</span>
            </KineticLine>
            <KineticLine delay={0.55}>
              <span className="text-[clamp(3.5rem,11vw,12rem)] italic font-light">websites.</span>
            </KineticLine>
            <KineticLine delay={0.7}>
              <span className="text-[clamp(3.5rem,11vw,12rem)]">We build</span>
              <span className="inline-block w-3" />
              <span className="text-[clamp(3.5rem,11vw,12rem)] pink-shimmer">revenue</span>
            </KineticLine>
            <KineticLine delay={0.85}>
              <span className="text-[clamp(3.5rem,11vw,12rem)] pink-shimmer">engines.</span>
              <Cursor />
            </KineticLine>
          </div>

          <div className="mt-14 grid md:grid-cols-12 gap-10 items-end">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.2 }}
              className="md:col-span-7"
            >
              <p className="text-lg md:text-2xl text-[var(--color-chrome)] font-light leading-relaxed max-w-2xl">
                Sites, apps, marketing & integrations built by an operator who's actually <span className="pink-text font-medium">closed deals</span> — not a developer who watched a course on conversion.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.4 }}
              className="md:col-span-5 flex flex-col sm:flex-row md:justify-end gap-4"
            >
              <Link to="/contact" className="btn-pink">
                Start a project
                <span>→</span>
              </Link>
              <Link to="/work" className="btn-ghost">See the work</Link>
            </motion.div>
          </div>

          {/* Floating award/stat badge — adds polish */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: -6 }}
            transition={{ duration: 1.2, delay: 1.8, ease: [0.34, 1.56, 0.64, 1] }}
            className="hidden md:block absolute right-10 top-32 lg:right-20 lg:top-40"
          >
            <div className="relative w-40 h-40 lg:w-48 lg:h-48">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <path id="circle" d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
                  </defs>
                  <text className="font-mono text-[14px] tracking-[0.18em] fill-[var(--color-pink-light)] uppercase" letterSpacing="2">
                    <textPath href="#circle">STAND OUT · GET CLICKS · CLOSE DEALS · </textPath>
                  </text>
                </svg>
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display font-extrabold text-4xl lg:text-5xl pink-text leading-none">100%</div>
                  <div className="font-mono text-[10px] tracking-[0.2em] text-[var(--color-chrome)] mt-1">CUSTOM<br/>NO TEMPLATES</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom marquee strip — tech logos */}
        <div className="absolute bottom-0 inset-x-0 z-10 border-t border-[var(--color-pink)]/30 py-4 bg-[var(--color-ink)]/70 backdrop-blur-md">
          <Marquee speed={45}>
            {TECH_LOGOS.map((t, i) => (
              <span key={i} className="font-mono text-[var(--color-chrome)]/70 text-sm tracking-[0.2em] font-semibold flex items-center gap-12">
                {t} <span className="text-[var(--color-pink)] inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-pink)]" />
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* GIANT MARQUEE BAND — kinetic transition into next section */}
      <section className="bg-[var(--color-pink)] text-[var(--color-ink)] py-6 overflow-hidden border-y-2 border-[var(--color-ink)]">
        <Marquee speed={28}>
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-none whitespace-nowrap flex items-center gap-12">
              BUILT BY CLOSERS
              <span className="text-[var(--color-paper)]">★</span>
              DESIGNED TO CONVERT
              <span className="text-[var(--color-paper)]">★</span>
            </span>
          ))}
        </Marquee>
      </section>

      {/* POSITIONING ────────────────────────────── */}
      <section className="grain-paper py-32 md:py-44 relative">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <div className="label">The unfair advantage</div>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            <Reveal as="div" className="md:col-span-7" delay={0.1}>
              <h2 className="font-display text-5xl md:text-8xl leading-[0.88] tracking-tight">
                Most <em className="font-light italic">"web guys"</em> can build.<br />
                Almost <span className="pink-text">none of them</span> can sell.
              </h2>
            </Reveal>
            <Reveal as="div" className="md:col-span-5 md:pt-6" delay={0.3}>
              <p className="text-lg md:text-xl text-[var(--color-ink)]/70 leading-relaxed font-light">
                We've built and sold real estate, AI sales pipelines, GoHighLevel snapshots, full restaurant ordering systems, and luxury med spas. The site is just one piece of the machine. <strong className="text-[var(--color-ink)]">We design the whole machine.</strong>
              </p>
              <Link to="/about" className="inline-flex items-center gap-3 label-ink mt-8 group">
                See the track record
                <span className="block w-8 h-px bg-current origin-left transition-transform duration-500 group-hover:scale-x-150" />
              </Link>
            </Reveal>
          </div>

          {/* Stats — animated count-up */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {STATS.map((s, i) => (
              <Reveal as="div" key={s.label} delay={i * 0.08} className="border-l-2 border-[var(--color-pink)] pl-5">
                <div className="stat-num text-5xl md:text-7xl pink-text">
                  <CountUp value={s.value} duration={2} />
                </div>
                <div className="label-ink mt-3">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BENTO SERVICES GRID ─────────────────────── */}
      <section className="grain-ink text-[var(--color-paper)] py-32 md:py-44 relative overflow-hidden">
        {/* Decorative blob */}
        <div aria-hidden className="absolute -left-40 top-1/2 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: "radial-gradient(circle, rgba(91,168,255,0.35) 0%, transparent 70%)" }} />

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
              <div>
                <div className="label">What we build</div>
                <h2 className="font-display text-5xl md:text-8xl mt-4 leading-[0.9]">
                  Four ways to<br /><span className="pink-shimmer">make you money.</span>
                </h2>
              </div>
              <Link to="/services" className="label inline-flex items-center gap-3 group" style={{ color: "var(--color-pink-light)" }}>
                Full services
                <span className="block w-8 h-px bg-[var(--color-pink)] origin-left transition-transform duration-500 group-hover:scale-x-150" />
              </Link>
            </div>
          </Reveal>

          {/* Bento grid: hero card + 3 smaller */}
          <div className="grid md:grid-cols-12 grid-rows-2 gap-4 md:gap-5">
            {/* Big hero card */}
            <BentoCard className="md:col-span-7 md:row-span-2" service={SERVICES[0]} feature />
            <BentoCard className="md:col-span-5" service={SERVICES[1]} />
            <BentoCard className="md:col-span-3" service={SERVICES[2]} compact />
            <BentoCard className="md:col-span-2" service={SERVICES[3]} compact tiny />
          </div>
        </div>
      </section>

      {/* CASE STUDIES — with live preview iframes ──── */}
      <section className="grain-paper py-32 md:py-44">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
              <div>
                <div className="label">Receipts</div>
                <h2 className="font-display text-5xl md:text-8xl mt-4 leading-[0.9]">
                  Real builds.<br />
                  <span className="pink-text">Real revenue.</span>
                </h2>
              </div>
              <Link to="/work" className="label-ink inline-flex items-center gap-3 group">
                Full portfolio
                <span className="block w-8 h-px bg-[var(--color-ink)] origin-left transition-transform duration-500 group-hover:scale-x-150" />
              </Link>
            </div>
          </Reveal>

          <div className="space-y-32">
            {CASE_STUDIES.map((c, i) => (
              <Reveal as="article" key={c.id} delay={0.05} className="grid md:grid-cols-12 gap-10 items-center">
                <div className={"md:col-span-5 " + (i % 2 === 1 ? "md:order-2" : "")}>
                  <div className="font-mono font-bold text-[var(--color-pink)] text-sm">{String(i + 1).padStart(2, "0")} · {c.vertical}</div>
                  <h3 className="font-display text-5xl md:text-6xl mt-4 leading-[0.9]">{c.brand}</h3>
                  <p className="mt-6 text-[var(--color-ink)]/70 font-light leading-relaxed">
                    <span className="font-semibold text-[var(--color-ink)]">Problem · </span>{c.problem}
                  </p>
                  <p className="mt-4 text-[var(--color-ink)]/70 font-light leading-relaxed">
                    <span className="font-semibold text-[var(--color-ink)]">Solution · </span>{c.solution}
                  </p>
                  <p className="mt-4 pl-5 border-l-4 border-[var(--color-pink)] font-display text-2xl md:text-3xl tracking-tight font-medium text-[var(--color-ink)] leading-tight">
                    {c.result}
                  </p>
                  {c.url && (
                    <a href={c.url} target="_blank" rel="noreferrer" className="btn-pink mt-8">
                      Visit live →
                    </a>
                  )}
                </div>

                {/* Live preview window */}
                <div className={"md:col-span-7 " + (i % 2 === 1 ? "md:order-1" : "")}>
                  <BrowserFrame title={c.brand}>
                    {c.url ? (
                      <iframe
                        src={c.url}
                        title={`${c.brand} live preview`}
                        loading="lazy"
                        className="w-full h-full border-0 bg-white"
                      />
                    ) : (
                      <div className="w-full h-full grain-ink flex items-center justify-center">
                        <div className="text-center px-8">
                          <div className="font-display text-4xl md:text-5xl pink-text">{c.brand}</div>
                          <div className="label-chrome mt-3">{c.vertical}</div>
                        </div>
                      </div>
                    )}
                  </BrowserFrame>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — horizontal pinned-style cards ─── */}
      <section className="grain-ink text-[var(--color-paper)] py-32 md:py-44 relative overflow-hidden">
        <div aria-hidden className="absolute right-1/3 -bottom-40 w-[600px] h-[600px] rounded-full blur-[140px]" style={{ background: "radial-gradient(circle, rgba(30,95,255,0.4) 0%, transparent 70%)" }} />

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <div className="label">How it works</div>
            <h2 className="font-display text-5xl md:text-8xl mt-4 max-w-4xl leading-[0.9]">
              From hello to <span className="pink-shimmer">launched in days.</span>
            </h2>
          </Reveal>

          <div className="mt-20 grid md:grid-cols-4 gap-6">
            {PROCESS.map((p, i) => (
              <Reveal as="div" key={p.step} delay={i * 0.08}>
                <div className="border-t-2 border-[var(--color-pink)] pt-6 lift">
                  <div className="font-mono font-bold text-[var(--color-pink)] text-sm">{p.step} / 04</div>
                  <h3 className="font-display text-3xl md:text-4xl mt-4 leading-tight">{p.title}</h3>
                  <p className="mt-4 text-[var(--color-chrome)] font-light leading-relaxed text-sm">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL pink band ──────────────────── */}
      <section className="pink-surface py-24 md:py-32 text-[var(--color-ink)] relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }} />
        <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-12 text-center">
          <Reveal>
            <div className="font-display text-7xl md:text-9xl leading-none opacity-30">"</div>
            <p className="font-display italic text-3xl md:text-5xl leading-tight font-medium -mt-8">
              {TESTIMONIALS[0].quote}
            </p>
            <div className="label mt-8 inline-flex items-center gap-3" style={{ color: "var(--color-ink)" }}>
              <span className="block w-10 h-px bg-[var(--color-ink)]" />
              {TESTIMONIALS[0].name} · {TESTIMONIALS[0].role}
              <span className="block w-10 h-px bg-[var(--color-ink)]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA ──────────────────────────────────── */}
      <section className="grain-ink text-[var(--color-paper)] py-32 md:py-44 relative overflow-hidden">
        <div aria-hidden className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full blur-[140px]" style={{ background: "radial-gradient(circle, rgba(91,168,255,0.45) 0%, transparent 70%)" }} />
        <div className="relative z-10 mx-auto max-w-[1500px] px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center">
          <Reveal as="div" className="md:col-span-8">
            <div className="label">The next step</div>
            <h2 className="font-display text-5xl md:text-9xl mt-4 leading-[0.85]">
              Got a project?<br />
              <span className="pink-shimmer">Let's build it.</span>
            </h2>
            <p className="mt-8 max-w-xl text-lg text-[var(--color-chrome)] font-light leading-relaxed">
              30-minute discovery call. No pitch deck, no pressure. We talk about what you're trying to grow and whether we're the right fit.
            </p>
          </Reveal>
          <Reveal as="div" className="md:col-span-4 flex flex-col gap-4" delay={0.2}>
            <Link to="/contact" className="btn-pink">Book a call →</Link>
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

// ─── Helpers ────────────────────────────────────

function KineticLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, skewY: 4 }}
      animate={{ opacity: 1, y: 0, skewY: 0 }}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden flex items-baseline flex-wrap"
    >
      {children}
    </motion.div>
  )
}

function Cursor() {
  return (
    <motion.span
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
      className="inline-block ml-3 w-3 md:w-5 lg:w-6 h-[0.85em] bg-[var(--color-pink)] align-baseline"
    />
  )
}

function BentoCard({
  service,
  className = "",
  feature = false,
  compact = false,
  tiny = false,
}: {
  service: typeof SERVICES[number]
  className?: string
  feature?: boolean
  compact?: boolean
  tiny?: boolean
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 22 }}
      className={
        "relative overflow-hidden p-7 md:p-10 group cursor-default border border-[var(--color-pink)]/20 hover:border-[var(--color-pink)] transition-colors duration-500 " +
        (feature ? "pink-surface text-[var(--color-ink)]" : "bg-[var(--color-ink-2)] text-[var(--color-paper)]") +
        " " + className
      }
    >
      {/* Number + circle */}
      <div className="flex items-start justify-between gap-4">
        <div className={"font-mono text-sm font-bold " + (feature ? "text-[var(--color-ink)]" : "text-[var(--color-pink)]")}>
          {service.numeral}
        </div>
        <span className={
          "block rounded-full transition-all duration-700 group-hover:rotate-45 " +
          (tiny ? "w-6 h-6 border" : "w-10 h-10 border") +
          " " +
          (feature ? "border-[var(--color-ink)]/40 group-hover:border-[var(--color-ink)]" : "border-[var(--color-pink)]/40 group-hover:border-[var(--color-pink)]")
        } />
      </div>

      <h3 className={
        "font-display mt-6 leading-[0.95] " +
        (feature ? "text-5xl md:text-7xl" : compact ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl")
      }>
        {service.title}
      </h3>

      {!tiny && (
        <p className={
          "mt-4 font-light leading-relaxed " +
          (feature ? "text-[var(--color-ink)]/85 text-lg md:text-xl" : "text-[var(--color-chrome)]")
        }>
          {service.oneLiner}
        </p>
      )}

      {feature && (
        <ul className="mt-8 space-y-2 text-sm">
          {service.bullets.slice(0, 4).map((b) => (
            <li key={b} className="flex gap-2 text-[var(--color-ink)]/85">
              <span className="text-[var(--color-ink)] font-bold">→</span>
              <span className="font-light">{b}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}

function BrowserFrame({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="relative bg-[var(--color-ink-2)] rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4),0_0_0_1px_rgba(91,168,255,0.2)]">
      {/* Top bar */}
      <div className="bg-[var(--color-ink)] px-4 py-3 flex items-center gap-2 border-b border-[var(--color-pink)]/20">
        <span className="block w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="block w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="block w-3 h-3 rounded-full bg-[#28c840]" />
        <div className="flex-1 mx-3 px-3 py-1 bg-[var(--color-ink-2)] rounded-md text-xs font-mono text-[var(--color-chrome)] truncate">
          🔒 {title.toLowerCase().replace(/\s+/g, "")}.com
        </div>
      </div>
      {/* Frame body */}
      <div className="aspect-[16/10] bg-white">{children}</div>
    </div>
  )
}
