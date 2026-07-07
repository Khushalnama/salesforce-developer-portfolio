import React from 'react'
import { classNames } from '../../utils/classNames'
import { motion } from 'framer-motion'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left'
}){
  const alignClass = align === 'center' ? 'text-center items-center' : 'items-start'

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={classNames('flex flex-col gap-3', alignClass)}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
          <span className="text-xs font-semibold tracking-widest text-white/60">{eyebrow}</span>
        </div>
      )}
      <h2 className="font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-sm leading-relaxed text-white/60">{description}</p>
      )}
    </motion.div>
  )
}

