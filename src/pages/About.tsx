import { Link } from "react-router-dom"
import Reveal from "../components/Reveal"
import { STATS } from "../lib/data"

export default function About() {
  return (
    <>
      <section className="grain-ink text-[var(--color-paper)] pt-40 md:pt-52 pb-24 md:pb-32 relative overflow-hidden">
        <img src="./logo-v2-line.svg" alt="" aria-hidden className="hidden md:block absolute -right-20 top-32 w-[640px] opacity-10 pointer-events-none" />
        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <div className="label flex items-center gap-3">
              <span className="block w-10 h-px bg-[var(--color-pink)]" />
              About
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 className="font-display mt-7 text-[clamp(3.2rem,8vw,8rem)] leading-[0.9] max-w-5xl">
              An operator who <span className="pink-shimmer">happens to build.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="grain-paper py-32 md:py-44">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <Reveal>
            <p className="font-display text-3xl md:text-5xl leading-[1.1] tracking-tight font-medium text-[var(--color-ink)]">
              Most agencies sell pretty pixels. <span className="pink-text">We sell pipelines that close.</span>
            </p>
          </Reveal>

          <div className="mt-14 space-y-7 text-lg leading-relaxed font-light text-[var(--color-ink)]/85">
            <Reveal delay={0.1}>
              <p>
                ClickMingo is run by <strong className="font-semibold text-[var(--color-ink)]">Jorge Ramirez</strong> — a New Jersey real estate agent and founder who's spent nearly a decade closing deals before writing a single line of code.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                That order matters. Most web designers learned to <em>build</em>, then tried to figure out marketing and sales as a bolt-on. Jorge learned to <em>sell</em> — flipping houses, building real-estate teams, running automated CRMs — and then built the technical chops to wire those systems himself.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                The result: every site, app, and integration ClickMingo ships is judged by one question — <strong className="font-semibold text-[var(--color-ink)]">does it generate revenue?</strong> If the answer is no, we don't ship it.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="grain-ink text-[var(--color-paper)] py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <div className="label">Track record</div>
            <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-3xl leading-[0.95]">
              Numbers that <span className="pink-shimmer">matter.</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {STATS.map((s) => (
              <Reveal as="div" key={s.label} className="border-l-2 border-[var(--color-pink)] pl-4">
                <div className="stat-num text-4xl md:text-6xl pink-text">{s.value}</div>
                <div className="label-chrome mt-2">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="grain-paper py-32 md:py-44">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <Reveal>
            <div className="label">What you get when you hire us</div>
            <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[0.95]">
              The <span className="pink-text">whole machine</span> — not just the front-end.
            </h2>
          </Reveal>

          <div className="mt-12 space-y-px bg-[var(--color-pink)]/30">
            {WHY.map((w, i) => (
              <Reveal as="div" key={w.title} delay={i * 0.06} className="grain-paper p-8 grid md:grid-cols-12 gap-6">
                <div className="md:col-span-3 font-mono text-sm font-bold text-[var(--color-pink)]">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="md:col-span-4 font-display text-2xl md:text-3xl leading-tight">{w.title}</h3>
                <p className="md:col-span-5 font-light text-[var(--color-ink)]/75 leading-relaxed">{w.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-16 text-center">
              <Link to="/contact" className="btn-pink">Start a project</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

const WHY = [
  {
    title: "Strategy before pixels",
    body: "We start with the funnel — who's buying, what triggers them, where they fall off. The design serves that, not the other way around.",
  },
  {
    title: "Real integrations, not iframes",
    body: "Stripe, Clover, GoHighLevel, HubSpot, Twilio — wired in properly so your tools talk to each other and your data doesn't live in 7 silos.",
  },
  {
    title: "Mobile-first, conversion-first",
    body: "Most of your traffic is on a phone. Every page is designed mobile-first, tested across devices, and optimized for the tap-and-buy moment.",
  },
  {
    title: "Speed = revenue",
    body: "We ship in days, not months. Then we iterate. You get a working asset earning sooner — and we keep tuning it for free in the support window.",
  },
  {
    title: "Sales-trained copywriting",
    body: "Every page has a buyer in mind and a verb in the headline. No 'world-class solutions' filler. Read it out loud and it sounds like a closer talking, not a brochure.",
  },
]
