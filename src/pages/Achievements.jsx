import React from 'react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { achievements } from '../constants/achievements'
import { GlassCard } from '../components/ui/GlassCard'
import { CounterUp } from '../components/effects/CounterUp'
import { motion } from 'framer-motion'

export default function Achievements(){
  return (
    <section className="pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Achievements"
          title="Momentum you can measure"
          description="Animated counters for GitHub, Trailhead, projects, and more."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, idx) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: idx * 0.05 }}
            >
              <GlassCard className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CounterUp value={a.value} suffix={a.suffix} />
                    <div className="mt-3 text-sm font-semibold text-white/70">{a.label}</div>
                  </div>
                  <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-primary/25 via-secondary/20 to-accent/20 border border-white/10" />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

