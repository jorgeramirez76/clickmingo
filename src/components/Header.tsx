import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"

const NAV = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[var(--color-ink)]/85 backdrop-blur-xl border-b border-[var(--color-pink)]/30"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center group" aria-label="ClickMingo home">
            <img
              src="./logo.svg"
              alt="ClickMingo"
              className="h-10 md:h-14 w-auto transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "label-chrome px-4 py-2 transition-colors duration-300",
                    isActive ? "text-[var(--color-pink)]" : "hover:text-[var(--color-pink)]",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/contact" className="hidden md:inline-flex btn-pink">
            Start a project
            <span className="inline-block w-4 h-px bg-current" />
          </Link>

          {/* Mobile menu */}
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen(v => !v)}
            className="md:hidden flex flex-col gap-1.5 w-10 h-10 items-center justify-center text-[var(--color-paper)]"
          >
            <span className={"block w-6 h-0.5 bg-current transition-transform " + (open ? "translate-y-2 rotate-45" : "")} />
            <span className={"block w-6 h-0.5 bg-current transition-opacity " + (open ? "opacity-0" : "")} />
            <span className={"block w-6 h-0.5 bg-current transition-transform " + (open ? "-translate-y-2 -rotate-45" : "")} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden grain-ink border-t border-[var(--color-pink)]/30"
          >
            <ul className="px-6 py-8 flex flex-col gap-5">
              {NAV.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} className="font-display font-extrabold text-4xl text-[var(--color-paper)]">
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-4 border-t border-[var(--color-pink)]/30">
                <Link to="/contact" className="btn-pink">Start a project</Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
