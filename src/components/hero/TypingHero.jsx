import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

export function TypingHero({
  words = ['Salesforce Developer', 'Full Stack Web Developer', 'React Developer', 'Problem Solver'],
  typingSpeed = 52,
  deletingSpeed = 28,
  pauseMs = 900
}){
  const [wordIndex, setWordIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  const activeWord = words[wordIndex] ?? ''

  useEffect(() => {
    const full = activeWord
    const isDoneTyping = !deleting && subIndex === full.length
    const isDoneDeleting = deleting && subIndex === 0

    const t = window.setTimeout(() => {
      if(isDoneTyping){
        window.setTimeout(() => setDeleting(true), pauseMs)
        return
      }
      if(isDoneDeleting){
        setDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
        return
      }

      const nextSub = deleting ? subIndex - 1 : subIndex + 1
      setSubIndex(Math.max(0, Math.min(full.length, nextSub)))
    }, deleting ? deletingSpeed : typingSpeed)

    return () => window.clearTimeout(t)
  }, [activeWord, deleting, pauseMs, subIndex, typingSpeed, deletingSpeed, words.length])

  const shown = activeWord.slice(0, subIndex)

  const variants = useMemo(
    () => ({
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease: 'easeOut' }
    }),
    []
  )

  return (
    <motion.div className="min-h-[1.25rem]" {...variants}>
      <span className="text-white/80">{shown}</span>
      <motion.span
        className="ml-1 inline-block h-4 w-1 rounded bg-accent align-middle"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}

