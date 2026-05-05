import { motion } from "motion/react"

// Animated gradient mesh — four floating colored blobs that drift slowly.
// Sits behind hero/section content. Pure CSS/SVG, no canvas needed.
export default function MeshBackground() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base ink layer */}
      <div className="absolute inset-0 bg-[var(--color-ink)]" />

      {/* Drifting blobs */}
      <motion.div
        className="absolute -top-40 -left-40 w-[640px] h-[640px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(91,168,255,0.55) 0%, transparent 70%)" }}
        animate={{ x: [0, 200, -50, 0], y: [0, 100, 200, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 -right-40 w-[720px] h-[720px] rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(30,95,255,0.65) 0%, transparent 70%)" }}
        animate={{ x: [0, -150, 50, 0], y: [0, -120, 80, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      <motion.div
        className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(10,45,188,0.55) 0%, transparent 70%)" }}
        animate={{ x: [0, 100, -100, 0], y: [0, -80, 40, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 8 }}
      />
      <motion.div
        className="absolute top-20 right-1/4 w-[480px] h-[480px] rounded-full blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(211,255,54,0.18) 0%, transparent 70%)" }}
        animate={{ x: [0, -80, 80, 0], y: [0, 80, -50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Subtle dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.32) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at center, transparent 30%, rgba(10,14,26,0.55) 100%)",
      }} />
    </div>
  )
}
