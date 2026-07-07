import React from 'react'
import { classNames } from '../../utils/classNames'

export function Tag({ children, className = '' }){
  return (
    <span
      className={classNames(
        'inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70',
        'backdrop-blur-xl',
        className
      )}
    >
      {children}
    </span>
  )
}

