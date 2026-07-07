import React from 'react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { GlassCard } from '../components/ui/GlassCard'
import { motion } from 'framer-motion'
import { experience } from '../constants/experience'

export default function Experience(){
  return (
    <section className="pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="A timeline built for learning"
          description="Salesforce learning journey, internships, and freelance placeholders."
        />

        <div className="mt-10">
          <div className="relative">
            {/* timeline line */}
            <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-primary/55 via-secondary/25 to-accent/55" />
            {/* subtle glow */}
            <div className="pointer-events-none absolute left-3 top-0 h-full w-px bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35),transparent_60%)]" aria-hidden="true" />

            <div className="space-y-6">
              {experience.map((x, idx) => (
                <motion.div
                  key={x.role}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative pl-8"
                >
                  <div className="absolute left-1.5 top-6 h-4 w-4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />

                  <GlassCard className="p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <div className="text-xs font-semibold tracking-widest text-white/60">{x.period}</div>
                        <h3 className="mt-1 font-heading text-xl font-extrabold tracking-tight">{x.role}</h3>
                        <p className="mt-1 text-sm text-white/65">{x.org}</p>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {x.details.map((d) => (
                        <li key={d} className="flex gap-3 text-sm text-white/75">
                          <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.div
                      className="mt-4 h-px w-full bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.5, delay: idx * 0.03 }}
                      aria-hidden="true"
                    />
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


