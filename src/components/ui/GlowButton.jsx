import React from 'react'
import { motion } from 'framer-motion'
import { classNames } from '../../utils/classNames'

export function GlowButton({
  children,
  className,
  variant = 'primary',
  as: Component = motion.button,
  ...props
}){
  const gradient =
    variant === 'secondary'
      ? 'from-secondary/60 via-secondary/40 to-accent/50'
      : variant === 'accent'
        ? 'from-accent/60 via-accent/40 to-primary/40'
        : 'from-primary/60 via-secondary/50 to-accent/50'

  return (
    <Component
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={classNames(
        'relative inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold',
        'border border-white/10 bg-white/5 text-white/90',
        'shadow-glow backdrop-blur-xl',
        'transition focus:outline-none focus:ring-2 focus:ring-primary/40',
        className
      )}
      {...props}
    >
      <span
        className={classNames(
          'pointer-events-none absolute inset-0 rounded-2xl',
          'opacity-0 blur-sm transition-opacity duration-200',
          'group-hover:opacity-100'
        )}
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(500px 120px at 50% 0%, rgba(59,130,246,0.35), transparent 55%)'
        }}
      />

      <span
        className={classNames(
          'pointer-events-none absolute inset-[1px] rounded-2xl',
          'bg-gradient-to-r opacity-80',
          gradient
        )}
        aria-hidden="true"
        style={{ mask: 'linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)' }}
      />

      <span className="relative z-10">{children}</span>
    </Component>
  )
}

