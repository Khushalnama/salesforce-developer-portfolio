import React, { useEffect, useState } from 'react'

export function MouseGlow(){
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
      style={{
        background: `radial-gradient(600px 260px at ${pos.x}px ${pos.y}px, rgba(6,182,212,0.18), transparent 55%)`,
        mixBlendMode: 'screen'
      }}
    />
  )
}

