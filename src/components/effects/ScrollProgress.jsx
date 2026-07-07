import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function ScrollProgress(){
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrollTop = doc.scrollTop
      const height = doc.scrollHeight - doc.clientHeight
      const next = height > 0 ? scrollTop / height : 0
      setProgress(next)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[9998] h-1 w-full">
      <motion.div
        className="h-1 origin-left bg-gradient-to-r from-primary via-secondary to-accent"
        style={{ width: `${Math.min(100, Math.max(0, progress * 100))}%` }}
        initial={false}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.15 }}
      />
    </div>
  )
}

