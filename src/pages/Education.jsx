import React from 'react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { GlassCard } from '../components/ui/GlassCard'
import { motion } from 'framer-motion'
import { education } from '../constants/education'

export default function Education(){
  return (
    <section className="pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Education"
          title="Structured learning"
          description="Academic timeline with premium cards."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {education.map((e, idx) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: idx * 0.05 }}
            >
              <GlassCard className="p-7 h-full">
                <div className="text-xs font-semibold tracking-widest text-white/60">{e.year}</div>
                <h3 className="mt-2 font-heading text-2xl font-extrabold tracking-tight">{e.degree}</h3>
                <div className="mt-2 text-sm text-white/65">{e.college}</div>
                <div className="mt-1 text-sm text-white/65">{e.university}</div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs text-white/60">CGPA</div>
                    <div className="mt-2 font-heading text-xl font-extrabold">{e.cgpa}</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs text-white/60">Focus</div>
                    <div className="mt-2 font-heading text-xl font-extrabold">CS Systems</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

