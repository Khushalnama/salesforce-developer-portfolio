import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function LoadingScreen(){
  const [open, setOpen] = useState(true)

  useEffect(() => {
    const t = window.setTimeout(() => setOpen(false), 900)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg"
          aria-label="Loading"
        >
          <div className="relative">
            <div className="absolute -inset-5 rounded-[28px] bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 blur-xl" />
            <div className="relative rounded-[22px] border border-white/10 bg-white/5 px-8 py-6">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 animate-pulse rounded-full bg-accent shadow-glow" />
                <p className="font-heading text-sm font-semibold tracking-wide text-white/90">
                  Initializing portfolio...
                </p>
              </div>
              <div className="mt-4 h-1 w-56 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

