import { Link } from "react-router-dom"
import { BUSINESS } from "../lib/data"

export default function Footer() {
  return (
    <footer className="grain-ink text-[var(--color-paper)] relative overflow-hidden">
      <div className="pink-rule" />

      <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <img src="./logo.svg" alt="ClickMingo" className="h-14 w-auto" />
          <p className="mt-6 text-[var(--color-chrome)] max-w-md font-light leading-relaxed">
            Revenue-first websites, apps, marketing, and integrations — built by an operator who's actually closed deals.
          </p>
          <p className="mt-6 label">{BUSINESS.tagline}</p>
        </div>

        <div className="md:col-span-3">
          <div className="label mb-5">Site</div>
          <ul className="space-y-3 font-light text-[var(--color-chrome)]">
            <li><Link to="/" className="hover:text-[var(--color-pink)]">Home</Link></li>
            <li><Link to="/services" className="hover:text-[var(--color-pink)]">Services</Link></li>
            <li><Link to="/work" className="hover:text-[var(--color-pink)]">Work</Link></li>
            <li><Link to="/about" className="hover:text-[var(--color-pink)]">About</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--color-pink)]">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="label mb-5">Reach us</div>
          <a href={`mailto:${BUSINESS.email}`} className="block font-display text-2xl text-[var(--color-paper)] hover:text-[var(--color-pink)] transition-colors">
            {BUSINESS.email}
          </a>
          <a href={`tel:${BUSINESS.phoneE164}`} className="block font-display text-2xl pink-text mt-2">
            {BUSINESS.phone}
          </a>
          <p className="mt-6 text-sm text-[var(--color-chrome)] font-light">
            {BUSINESS.city}<br />
            {BUSINESS.service_area}
          </p>
          <Link to="/contact" className="btn-ghost mt-8">Start a project</Link>
        </div>
      </div>

      <div className="border-t border-[var(--color-pink)]/20">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-5 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between text-xs text-[var(--color-chrome)] font-mono">
          <div>© {new Date().getFullYear()} ClickMingo. All rights reserved.</div>
          <div>Stand out. Get clicks. Close deals.</div>
        </div>
      </div>
    </footer>
  )
}
