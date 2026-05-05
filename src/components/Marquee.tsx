import type { ReactNode } from "react"

type Props = {
  children: ReactNode
  reverse?: boolean
  speed?: number // seconds for one loop
  className?: string
}

export default function Marquee({ children, reverse, speed = 30, className }: Props) {
  return (
    <div className={"overflow-hidden " + (className || "")}>
      <div
        className="flex gap-12 whitespace-nowrap will-change-transform"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="flex gap-12 shrink-0">{children}</div>
        <div className="flex gap-12 shrink-0" aria-hidden>{children}</div>
      </div>
    </div>
  )
}
