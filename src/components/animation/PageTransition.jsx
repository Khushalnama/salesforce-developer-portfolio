import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

export function PageTransition(){
  const { pathname } = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 10000,
          background:
            'radial-gradient(1000px 400px at 50% 0%, rgba(59,130,246,0.18), transparent 65%)',
          mixBlendMode: 'screen'
        }}
        aria-hidden="true"
      />
    </AnimatePresence>
  )
}

