import { Link } from "react-router-dom"
import Reveal from "../components/Reveal"
import { SERVICES, PRICING } from "../lib/data"

export default function Services() {
  return (
    <>
      <section className="grain-ink text-[var(--color-paper)] pt-40 md:pt-52 pb-20 md:pb-28">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <div className="label flex items-center gap-3">
              <span className="block w-10 h-px bg-[var(--color-pink)]" />
              Services
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 className="font-display mt-7 text-[clamp(3.2rem,8vw,8rem)] leading-[0.9] max-w-5xl">
              The full toolkit for <span className="pink-shimmer">growing a business online.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-10 max-w-2xl text-lg text-[var(--color-chrome)] font-light leading-relaxed">
              Pick what you need today. Add the rest as you grow. Every engagement is fixed-price, fixed-timeline, and fully transparent.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="grain-paper">
        <div className="mx-auto max-w-[1500px]">
          {SERVICES.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className={
                "px-6 md:px-10 py-20 md:py-32 grid md:grid-cols-12 gap-10 md:gap-16 items-start scroll-mt-24 " +
                (i !== 0 ? "border-t border-[var(--color-pink)]/30" : "")
              }
            >
              <Reveal as="div" className="md:col-span-4 md:sticky md:top-32">
                <div className="font-mono font-bold text-[var(--color-pink)] text-sm">{s.numeral}</div>
                <h2 className="font-display text-5xl md:text-6xl mt-4 leading-[0.95]">{s.title}</h2>
                <div className="mt-5 w-12 h-1 bg-[var(--color-pink)]" />
              </Reveal>

              <Reveal as="div" className="md:col-span-8" delay={0.1}>
                <p className="font-light text-xl md:text-2xl leading-relaxed text-[var(--color-ink)]/80">
                  {s.oneLiner}
                </p>
                <ul className="mt-10 space-y-4">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-4 border-b border-[var(--color-ink)]/10 pb-4">
                      <span className="text-[var(--color-pink)] text-2xl font-bold leading-none mt-1">→</span>
                      <span className="font-light text-[var(--color-ink)]/85 text-lg leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link to="/contact" className="btn-ink">Talk about this</Link>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="grain-ink text-[var(--color-paper)] py-32 md:py-44">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <div className="label">Pricing</div>
            <h2 className="font-display text-5xl md:text-7xl mt-4 leading-[0.95] max-w-3xl">
              Fixed price. <span className="pink-text">Fixed scope.</span> No surprises.
            </h2>
            <p className="mt-6 max-w-2xl text-[var(--color-chrome)] font-light text-lg">
              Every quote is itemized. Optional payment plans available. Cancel monthly maintenance any time.
            </p>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
            {PRICING.map((p, i) => (
              <Reveal as="div" key={p.tier} delay={i * 0.08}>
                <div
                  className={
                    "h-full p-8 md:p-10 lift " +
                    (p.feature
                      ? "pink-surface border-2 border-[var(--color-pink-light)] pink-glow"
                      : "border border-[var(--color-pink)]/30 bg-[var(--color-ink-2)]")
                  }
                >
                  <div
                    className="label"
                    style={{ color: p.feature ? "var(--color-ink)" : "var(--color-pink)" }}
                  >
                    {p.cta}
                  </div>
                  <div className={"font-display text-4xl mt-3 " + (p.feature ? "" : "text-[var(--color-paper)]")}>
                    {p.tier}
                  </div>
                  <div className={"font-display font-extrabold text-6xl mt-6 " + (p.feature ? "" : "pink-text")}>
                    {p.price}
                  </div>
                  <p className={"mt-3 text-sm font-light " + (p.feature ? "text-[var(--color-ink)]/80" : "text-[var(--color-chrome)]")}>
                    {p.when}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className={"flex gap-3 text-sm font-light leading-relaxed " + (p.feature ? "text-[var(--color-ink)]/85" : "text-[var(--color-chrome)]")}
                      >
                        <span className={p.feature ? "text-[var(--color-ink)]" : "text-[var(--color-pink)]"}>✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={p.href}
                    className={"mt-10 block text-center " + (p.feature ? "btn-ink" : "btn-ghost")}
                    style={p.feature ? {} : {}}
                  >
                    {p.feature ? "Get started" : "Learn more"}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
