import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export function useInViewReveal(options = {}){
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if(!el) return

    const io = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting){
        setIsInView(true)
        io.disconnect()
      }
    }, { threshold: 0.15, ...options })

    io.observe(el)
    return () => io.disconnect()
  }, [options.root])

  return { ref, isInView, motion }
}

