import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

function mulberry32(a){
  return function(){
    let t = a += 0x6D2B79F5
    t = Math.imul(t ^ t >>> 15, t | 1)
    t ^= t + Math.imul(t ^ t >>> 7, t | 61)
    return ((t ^ t >>> 14) >>> 0) / 4294967296
  }
}

export function AnimatedBackground({ intensity = 1 }){
  const [seed] = useState(() => Math.floor(Math.random() * 1e9))
  const rand = useMemo(() => mulberry32(seed), [seed])

  const blobs = useMemo(() => {
    const count = Math.round(10 * intensity)
    return Array.from({ length: count }).map((_, i) => {
      const x = rand() * 100
      const y = rand() * 100
      const size = 140 + rand() * 220
      const delay = rand() * 3
      const dur = 10 + rand() * 10
      const hue = 200 + rand() * 120
      return { i, x, y, size, delay, dur, hue }
    })
  }, [intensity, rand])

  useEffect(() => {
    // no-op: placeholder for future parallax binding
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {blobs.map((b) => (
        <motion.div
          key={b.i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1
          }}
          transition={{ duration: 0.6, delay: b.delay }}
          className="absolute rounded-full blur-3xl"
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            width: b.size,
            height: b.size,
            background: `radial-gradient(circle at 30% 30%, rgba(59,130,246,0.45), rgba(139,92,246,0.2) 45%, rgba(6,182,212,0.12) 70%, transparent 75%)`
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(800px_280px_at_50%_0%,rgba(59,130,246,0.18),transparent_60%)]" />
    </div>
  )
}

