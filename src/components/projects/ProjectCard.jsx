import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { Tag } from '../ui/Tag'
import { classNames } from '../../utils/classNames'

export function ProjectCard({ project }){
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })

  const stack = project.tech?.length ? project.tech : []

  const canTilt = Boolean(project?.tilt)

  const onMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height

    const ry = (px - 0.5) * 10
    const rx = -(py - 0.5) * 10
    setTilt({ rx, ry })
  }

  const onLeave = () => setTilt({ rx: 0, ry: 0 })

  return (
    <motion.article
      className={classNames(
        'group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5',
        'backdrop-blur-xl shadow-card-soft'
      )}
      onMouseMove={canTilt ? onMove : undefined}
      onMouseLeave={canTilt ? onLeave : undefined}
      style={{
        transform: canTilt ? `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` : undefined,
        transition: canTilt ? 'transform 120ms ease' : undefined,
      }}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
    >
      {/* premium glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-16 bg-[radial-gradient(600px_220px_at_30%_0%,rgba(59,130,246,0.35),transparent_60%)]" />
        <div className="absolute -inset-16 bg-[radial-gradient(520px_200px_at_80%_30%,rgba(139,92,246,0.25),transparent_60%)]" />
      </div>

      {/* subtle animated border */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl p-[1px]"
        aria-hidden="true"
        initial={false}
        animate={{
          opacity: 0.9,
          background:
            'linear-gradient(110deg, rgba(59,130,246,0.45), rgba(139,92,246,0.35), rgba(6,182,212,0.30))',
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-heading text-xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
                {project.title}
              </span>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{project.problem}</p>
          </div>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Live Demo"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80 shadow-[0_0_0_rgba(59,130,246,0)] transition focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <ExternalLink size={18} />
              </motion.a>
            )}

            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80 shadow-[0_0_0_rgba(139,92,246,0)] transition focus:outline-none focus:ring-2 focus:ring-secondary/40"
              >
                <Github size={18} />
              </motion.a>
            )}
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
          <div className="text-xs font-semibold tracking-widest text-white/60">SOLUTION</div>
          <p className="mt-2 text-sm text-white/75">{project.solution}</p>

          <div className="mt-4">
            <div className="text-xs font-semibold tracking-widest text-white/60">FEATURES</div>
            <ul className="mt-2 space-y-2 text-sm text-white/70">
              {project.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {stack.map((t) => (
            <Tag key={t}>
              <span className="relative z-10">{t}</span>
            </Tag>
          ))}
        </div>


      </div>
    </motion.article>
  )
}


