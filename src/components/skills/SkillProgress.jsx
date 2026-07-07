import React from 'react'
import { motion } from 'framer-motion'

export function SkillProgress({ value }){
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold tracking-wider text-white/60">Progress</div>
        <div className="text-xs font-semibold text-white/70">{value}%</div>
      </div>
      <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

