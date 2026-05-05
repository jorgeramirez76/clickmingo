import { Link } from "react-router-dom"
import { BUSINESS } from "../lib/data"

export default function MobileBar() {
  return (
    <>
      <div className="md:hidden h-20" aria-hidden />
      <nav
        className="md:hidden fixed bottom-0 inset-x-0 z-50 grain-ink border-t border-[var(--color-pink)]/40"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="grid grid-cols-2 divide-x divide-[var(--color-pink)]/30">
          <a
            href={`tel:${BUSINESS.phoneE164}`}
            className="flex items-center justify-center gap-2 py-4 active:bg-[var(--color-ink-2)]"
            aria-label={`Call ${BUSINESS.phone}`}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-pink)]">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span className="label" style={{ color: "var(--color-pink)" }}>Call Now</span>
          </a>
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 py-4 active:bg-[var(--color-ink-2)] pink-surface"
            aria-label="Start a project"
          >
            <span className="label-ink" style={{ color: "var(--color-ink)" }}>Start a project</span>
            <span className="text-[var(--color-ink)]">→</span>
          </Link>
        </div>
      </nav>
    </>
  )
}
