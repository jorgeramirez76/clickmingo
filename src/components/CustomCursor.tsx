import { useEffect, useState } from "react"
import { motion } from "motion/react"

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)
  const [coarse, setCoarse] = useState(false)

  useEffect(() => {
    // Disable on touch devices
    const mq = window.matchMedia("(pointer: coarse)")
    setCoarse(mq.matches)
    const onChange = () => setCoarse(mq.matches)
    mq.addEventListener?.("change", onChange)

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      setHovering(!!t.closest("a, button, [role='button'], input, textarea, label"))
    }
    window.addEventListener("mousemove", move)
    window.addEventListener("mouseover", over)
    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseover", over)
      mq.removeEventListener?.("change", onChange)
    }
  }, [])

  if (coarse) return null

  return (
    <>
      {/* Big soft glow follows the cursor everywhere */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[100] mix-blend-screen"
        style={{ left: 0, top: 0 }}
        animate={{ x: pos.x - 250, y: pos.y - 250 }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.6 }}
      >
        <div
          className="w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(91,168,255,0.25) 0%, rgba(30,95,255,0.12) 30%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Crisp dot cursor */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[101]"
        style={{ left: 0, top: 0 }}
        animate={{
          x: pos.x - (hovering ? 24 : 6),
          y: pos.y - (hovering ? 24 : 6),
          scale: hovering ? 1 : 0.7,
        }}
        transition={{ type: "spring", damping: 28, stiffness: 600, mass: 0.4 }}
      >
        <div
          className="rounded-full"
          style={{
            width: hovering ? 48 : 12,
            height: hovering ? 48 : 12,
            border: hovering ? "2px solid var(--color-pink-light)" : "0",
            background: hovering ? "transparent" : "var(--color-pink-light)",
            transition: "background 200ms, border 200ms, width 250ms, height 250ms",
            boxShadow: "0 0 18px rgba(91,168,255,0.65)",
          }}
        />
      </motion.div>
    </>
  )
}
