import React from 'react'
import { motion } from 'framer-motion'
import { Tag } from '../ui/Tag'
import { SkillProgress } from './SkillProgress'

const iconBg = {
  frontend: 'from-primary/25 via-secondary/15 to-accent/10',
  backend: 'from-secondary/25 via-primary/15 to-accent/10',
  salesforce: 'from-accent/25 via-secondary/15 to-primary/10',
  tools: 'from-primary/25 via-accent/15 to-secondary/10'
}

function IconPlaceholder({ name, group }){
  const bg = iconBg[group] ?? 'from-primary/20 via-secondary/15 to-accent/10'
  return (
    <div className="relative">
      <div className={`absolute -inset-4 rounded-full bg-gradient-to-tr ${bg} blur-xl`} aria-hidden="true" />
      <div className="relative grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5">
        <span className="text-sm font-heading font-extrabold">{name.slice(0, 2).toUpperCase()}</span>
      </div>
    </div>
  )
}

export function SkillCard({ group, skill }){
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-card-soft"
    >
      <div className="absolute -inset-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className={`absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-gradient-to-tr ${iconBg[group]} blur-3xl`} />
      </div>

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <IconPlaceholder name={skill.key} group={group} />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-heading text-lg font-extrabold tracking-tight">{skill.key}</h3>
                <Tag>{group}</Tag>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{skill.description}</p>
            </div>
          </div>
        </div>

        <SkillProgress value={skill.level} />
      </div>
    </motion.div>
  )
}

