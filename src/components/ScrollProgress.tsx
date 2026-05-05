import { motion, useScroll, useSpring } from "motion/react"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, mass: 0.4 })

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left"
    >
      <div className="w-full h-full bg-gradient-to-r from-[var(--color-pink-light)] via-[var(--color-pink)] to-[var(--color-pink-deep)] shadow-[0_0_18px_rgba(30,95,255,0.85)]" />
    </motion.div>
  )
}
