import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "motion/react"
import Header from "./Header"
import Footer from "./Footer"
import MobileBar from "./MobileBar"
import CustomCursor from "./CustomCursor"
import ScrollProgress from "./ScrollProgress"

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-paper)] text-[var(--color-ink)]">
      <ScrollProgress />
      <CustomCursor />
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={pathname}
          className="flex-1"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <MobileBar />
    </div>
  )
}
