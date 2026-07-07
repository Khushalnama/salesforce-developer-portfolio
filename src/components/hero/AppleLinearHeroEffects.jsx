import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { MouseGlow } from '../effects/MouseGlow'
import { AnimatedBackground } from '../effects/AnimatedBackground'

// Elegant, layered hero lighting ONLY (no profile card content).
export function AppleLinearHeroEffects() {
  const particles = useMemo(() => {
    const count = 16
    return Array.from({ length: count }).map((_, i) => {
      const left = 10 + (i * 57) % 80
      const top = 12 + (i * 71) % 70
      const size = 1 + (i % 3)
      const delay = (i % 7) * 0.12
      const dur = 4 + (i % 5)
      return { i, left, top, size, delay, dur }
    })
  }, [])

  return (
    <>
      <MouseGlow />

      <AnimatedBackground intensity={0.8} />


      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.35)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <motion.div
          className="absolute -top-10 left-1/4 h-72 w-72 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle at 30% 30%, rgba(59,130,246,0.45), rgba(139,92,246,0.18) 55%, transparent 70%)' }}
          animate={{ y: [0, -16, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />

        <motion.div
          className="absolute -bottom-10 right-1/4 h-80 w-80 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle at 30% 30%, rgba(6,182,212,0.35), rgba(139,92,246,0.15) 55%, transparent 70%)' }}
          animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />

        <motion.div
          className="absolute top-1/3 left-[18%] h-36 w-36 rounded-[30px] blur-2xl"
          style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.28), rgba(139,92,246,0.14), rgba(6,182,212,0.10))' }}
          animate={{ rotate: [0, 18, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />

        <motion.div
          className="absolute top-[22%] right-[16%] h-44 w-44 rounded-[35px] blur-2xl"
          style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.22), rgba(6,182,212,0.14), rgba(59,130,246,0.08))' }}
          animate={{ rotate: [0, -14, 0], scale: [1, 1.03, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />

        {particles.map(p => (
          <motion.div
            key={p.i}
            className="absolute rounded-full bg-white/70"
            style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size, opacity: 0.22 }}
            animate={{ y: [0, -10, 0], opacity: [0.12, 0.35, 0.12] }}
            transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          />
        ))}
      </div>
    </>
  )
}

