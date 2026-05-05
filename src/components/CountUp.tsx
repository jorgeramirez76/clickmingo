import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "motion/react"

type Props = {
  value: string
  duration?: number
  className?: string
}

// CountUp animates the numeric portion of a string from 0 to its number value.
// Non-numeric prefix/suffix is preserved (e.g. "60+" → counts to 60, keeps "+")
export default function CountUp({ value, duration = 1.6, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    if (!inView) return
    const match = value.match(/(-?[\d,.]+)/)
    if (!match) { setDisplay(value); return }
    const numStr = match[1].replace(/,/g, "")
    const target = parseFloat(numStr)
    if (Number.isNaN(target)) { setDisplay(value); return }
    const prefix = value.slice(0, match.index)
    const suffix = value.slice((match.index || 0) + match[1].length)
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000))
      const eased = 1 - Math.pow(1 - t, 3)
      const current = target * eased
      // preserve formatting: integer if no decimal in source
      const isInt = !numStr.includes(".")
      const formatted = isInt
        ? Math.round(current).toLocaleString()
        : current.toFixed(numStr.split(".")[1].length)
      setDisplay(prefix + formatted + suffix)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  )
}
