import { motion, type Variants } from "motion/react"
import type { ReactNode } from "react"

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

type Props = {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  as?: "div" | "span" | "section" | "article" | "header"
}

export default function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  className,
  as = "div",
}: Props) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  )
}
