import React from 'react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { skills } from '../constants/skills'
import { SkillCard } from '../components/skills/SkillCard'
import { motion } from 'framer-motion'

export default function Skills(){
  const groups = [
    { key: 'frontend', title: 'Frontend' },
    { key: 'backend', title: 'Backend' },
    { key: 'salesforce', title: 'Salesforce' },
    { key: 'tools', title: 'Tools' }
  ]

  return (
    <section className="pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Core"
          title="Skills with real engineering depth"
          description="Premium skill cards with animated progress and hover glow."
        />

        <div className="mt-10 space-y-12">
          {groups.map((g, idx) => (
            <div key={g.key}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                className="flex items-center justify-between gap-6"
              >
                <h3 className="font-heading text-2xl font-extrabold tracking-tight">{g.title}</h3>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20" />
              </motion.div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {skills[g.key].map((s) => (
                  <SkillCard key={s.key} group={g.key} skill={s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

