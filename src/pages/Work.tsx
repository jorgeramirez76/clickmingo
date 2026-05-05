import Reveal from "../components/Reveal"
import { Link } from "react-router-dom"
import { CASE_STUDIES } from "../lib/data"

export default function Work() {
  return (
    <>
      <section className="grain-ink text-[var(--color-paper)] pt-40 md:pt-52 pb-20 md:pb-28">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <div className="label flex items-center gap-3">
              <span className="block w-10 h-px bg-[var(--color-pink)]" />
              The work
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 className="font-display mt-7 text-[clamp(3.2rem,8vw,8rem)] leading-[0.9] max-w-5xl">
              Receipts, not <span className="pink-shimmer">portfolio shots.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-10 max-w-2xl text-lg text-[var(--color-chrome)] font-light leading-relaxed">
              Each of these is a real client, a real problem, and a real outcome. We don't show "concepts" — only what's shipped and earning.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="grain-paper">
        <div className="mx-auto max-w-[1500px]">
          {CASE_STUDIES.map((c, i) => (
            <article
              key={c.id}
              className={
                "px-6 md:px-10 py-20 md:py-32 grid md:grid-cols-12 gap-10 md:gap-16 " +
                (i !== 0 ? "border-t border-[var(--color-pink)]/30" : "")
              }
            >
              <Reveal as="div" className="md:col-span-4">
                <div className="label">{c.vertical}</div>
                <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[0.95]">{c.brand}</h2>
                {c.url && (
                  <a href={c.url} target="_blank" rel="noreferrer" className="btn-pink mt-8">
                    Visit live site
                    <span>↗</span>
                  </a>
                )}
              </Reveal>

              <Reveal as="div" className="md:col-span-8 space-y-8" delay={0.1}>
                <Block label="Problem">{c.problem}</Block>
                <Block label="Solution">{c.solution}</Block>
                <Block label="Result" highlight>{c.result}</Block>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <section className="grain-ink text-[var(--color-paper)] py-24 md:py-32 text-center">
        <Reveal>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            Want to be the next case study?
          </h2>
          <Link to="/contact" className="btn-pink mt-10 inline-flex">Start a project →</Link>
        </Reveal>
      </section>
    </>
  )
}

function Block({ label, children, highlight }: { label: string; children: React.ReactNode; highlight?: boolean }) {
  return (
    <div className={highlight ? "pl-6 border-l-4 border-[var(--color-pink)]" : ""}>
      <div className="label-ink">{label}</div>
      <p className={"mt-3 font-light text-[var(--color-ink)]/85 leading-relaxed " + (highlight ? "text-2xl md:text-3xl font-display tracking-tight font-medium text-[var(--color-ink)]" : "text-lg")}>
        {children}
      </p>
    </div>
  )
}
