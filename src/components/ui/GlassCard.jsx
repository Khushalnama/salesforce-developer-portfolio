import React from 'react'
import { motion } from 'framer-motion'
import { classNames } from '../../utils/classNames'

export function GlassCard({ children, className = '', as: Component = motion.div, ...props }){
  return (
    <Component
      className={classNames('glass rounded-3xl', className)}
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      {...props}
    >
      {children}
    </Component>
  )
}

