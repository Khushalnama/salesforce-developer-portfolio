import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor(){
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    const onResize = () => {
      // disable on touch screens
      setEnabled(window.matchMedia('(pointer: coarse)').matches ? false : true)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const on = enabled

  if(!on) return null

  return (
    <>
      <motion.div className="bb-cursor" aria-hidden="true" />
    </>
  )
}

