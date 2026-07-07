import React from 'react'
import { motion } from 'framer-motion'

export function ScrollReveal({ children, className, delay = 0 }){
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14, scale: 0.99 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

