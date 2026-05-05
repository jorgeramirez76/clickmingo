import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import Reveal from "../components/Reveal"
import { BUSINESS } from "../lib/data"

const PROJECT_TYPES = [
  "New website",
  "Phone app / PWA",
  "Marketing campaign",
  "Custom integration",
  "Online ordering / e-commerce",
  "GoHighLevel build",
  "Just exploring",
]

const BUDGETS = [
  "Under $5K",
  "$5K – $10K",
  "$10K – $25K",
  "$25K – $50K",
  "$50K+",
  "Not sure yet",
]

const TIMELINES = [
  "ASAP — within 2 weeks",
  "Within a month",
  "1 – 3 months",
  "Just researching",
]

export default function Contact() {
  const [params] = useSearchParams()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [company, setCompany] = useState("")
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0])
  const [budget, setBudget] = useState(BUDGETS[2])
  const [timeline, setTimeline] = useState(TIMELINES[1])
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const tier = params.get("tier")
    if (tier === "starter") setProjectType("New website")
    if (tier === "engine") setProjectType("Custom integration")
    if (tier === "custom") setProjectType("Just exploring")
  }, [params])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `New project inquiry — ${name || "Lead"} · ${projectType}`
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Company: ${company || "—"}`,
      `Project type: ${projectType}`,
      `Budget: ${budget}`,
      `Timeline: ${timeline}`,
      ``,
      `Project details:`,
      message || "—",
      ``,
      `— Sent from clickmingo.com`,
    ].join("\n")
    window.location.href = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  return (
    <>
      <section className="grain-ink text-[var(--color-paper)] pt-40 md:pt-52 pb-16 md:pb-24">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <div className="label flex items-center gap-3">
              <span className="block w-10 h-px bg-[var(--color-pink)]" />
              Contact
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 className="font-display mt-7 text-[clamp(3.2rem,8vw,8rem)] leading-[0.9] max-w-5xl">
              Tell us what you're <span className="pink-shimmer">trying to grow.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-10 max-w-2xl text-lg text-[var(--color-chrome)] font-light leading-relaxed">
              Fill the form, send a text, or book a 30-min call. We respond within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="grain-paper py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid md:grid-cols-12 gap-12">
          {/* Form */}
          <div className="md:col-span-8">
            <Reveal>
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[var(--color-ink)] text-[var(--color-paper)] p-8 md:p-12 space-y-8"
                  >
                    <Field label="Your name" required>
                      <input type="text" required value={name} onChange={e => setName(e.target.value)} placeholder="Jane Doe" autoComplete="name" className={inputCx} />
                    </Field>
                    <div className="grid md:grid-cols-2 gap-8">
                      <Field label="Email" required>
                        <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" autoComplete="email" className={inputCx} />
                      </Field>
                      <Field label="Phone" required>
                        <input type="tel" required value={phone} onChange={e => setPhone(e.target.value)} placeholder="(732) 555-0123" autoComplete="tel" className={inputCx} />
                      </Field>
                    </div>
                    <Field label="Company / project name">
                      <input type="text" value={company} onChange={e => setCompany(e.target.value)} placeholder="Optional" className={inputCx} />
                    </Field>

                    <Field label="What kind of project?">
                      <Pills value={projectType} options={PROJECT_TYPES} onChange={setProjectType} />
                    </Field>
                    <Field label="Budget range">
                      <Pills value={budget} options={BUDGETS} onChange={setBudget} />
                    </Field>
                    <Field label="Timeline">
                      <Pills value={timeline} options={TIMELINES} onChange={setTimeline} />
                    </Field>

                    <Field label="Anything else we should know?">
                      <textarea value={message} onChange={e => setMessage(e.target.value)} rows={5} placeholder="Quick rundown of what you're trying to build / fix / grow." className={inputCx + " resize-y leading-relaxed"} />
                    </Field>

                    <div className="pt-4 border-t border-[var(--color-pink)]/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                      <p className="text-sm font-light italic text-[var(--color-chrome)]">
                        Submitting opens your email app with the message ready to send.
                      </p>
                      <button type="submit" className="btn-pink">
                        Send inquiry →
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="ok"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[var(--color-ink)] text-[var(--color-paper)] p-12 md:p-16 text-center"
                  >
                    <div className="font-display text-7xl pink-text">✓</div>
                    <h3 className="font-display text-3xl md:text-5xl mt-6">Thank you.</h3>
                    <p className="mt-6 text-[var(--color-chrome)] font-light max-w-md mx-auto leading-relaxed">
                      Your email app should now be open with the inquiry pre-filled. Hit send and we'll respond within one business day.
                    </p>
                    <p className="mt-6 text-sm italic text-[var(--color-chrome)]/70">
                      If your email app didn't open, text us at <a className="pink-text underline" href={`tel:${BUSINESS.phoneE164}`}>{BUSINESS.phone}</a>
                    </p>
                    <button type="button" onClick={() => setSubmitted(false)} className="mt-10 label">Send another</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          </div>

          {/* Sidebar — direct contact */}
          <div className="md:col-span-4">
            <Reveal as="div" className="sticky top-32 space-y-10">
              <div>
                <div className="label-ink">Direct line</div>
                <a href={`tel:${BUSINESS.phoneE164}`} className="block font-display text-3xl mt-3 pink-text">{BUSINESS.phone}</a>
                <a href={`mailto:${BUSINESS.email}`} className="block font-display text-2xl mt-2 text-[var(--color-ink)]">{BUSINESS.email}</a>
              </div>
              <div>
                <div className="label-ink">Service area</div>
                <p className="font-light text-[var(--color-ink)]/75 mt-3">
                  {BUSINESS.city}<br />
                  {BUSINESS.service_area}
                </p>
              </div>
              <div>
                <div className="label-ink">Response time</div>
                <p className="font-light text-[var(--color-ink)]/75 mt-3">
                  Within <strong>1 business day</strong>. Most days, same hour.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

const inputCx = "w-full bg-transparent border-0 border-b border-[var(--color-pink)]/40 focus:border-[var(--color-pink)] outline-none px-0 py-3 font-body font-light text-lg text-[var(--color-paper)] placeholder:text-[var(--color-chrome)]/40 transition-colors"

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="label-chrome block mb-2">
        {label}{required && <span className="text-[var(--color-pink)] ml-1">*</span>}
      </span>
      {children}
    </label>
  )
}

function Pills({ value, options, onChange }: { value: string; options: string[]; onChange: (v: string) => void }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
      {options.map(o => (
        <label
          key={o}
          className={[
            "block cursor-pointer text-center font-mono text-xs uppercase tracking-wider py-3 px-3 border transition-colors duration-300 select-none",
            o === value
              ? "bg-[var(--color-pink)] text-[var(--color-ink)] border-[var(--color-pink)]"
              : "bg-transparent text-[var(--color-chrome)] border-[var(--color-pink)]/40 hover:border-[var(--color-pink)]",
          ].join(" ")}
        >
          <input type="radio" value={o} checked={o === value} onChange={() => onChange(o)} className="sr-only" />
          {o}
        </label>
      ))}
    </div>
  )
}
