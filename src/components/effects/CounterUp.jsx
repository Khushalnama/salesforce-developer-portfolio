import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export function CounterUp({ value, suffix = '', duration = 1100 }){
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const el = ref.current
    if(!el) return

    const io = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting){
        const start = performance.now()
        const from = 0
        const to = value

        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - t, 3)
          setDisplay(Math.round(from + (to - from) * eased))
          if(t < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
        io.disconnect()
      }
    }, { threshold: 0.3 })

    io.observe(el)
    return () => io.disconnect()
  }, [duration, value])

  return (
    <motion.div ref={ref} className="font-heading text-3xl font-extrabold tracking-tight">
      {display}
      {suffix}
    </motion.div>
  )
}

