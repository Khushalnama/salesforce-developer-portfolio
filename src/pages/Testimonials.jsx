import React from 'react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { GlassCard } from '../components/ui/GlassCard'
import { testimonials } from '../constants/testimonials'
import { motion } from 'framer-motion'

export default function Testimonials(){
  return (
    <section className="pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by teams and mentors"
          description="Real-world style feedback for Salesforce delivery—swap with actual names and quotes when ready."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: idx * 0.05 }}
            >
              <GlassCard className="p-6 h-full">
                <p className="text-sm leading-relaxed text-white/70">“{t.quote}”</p>
                <div className="mt-6">
                  <div className="font-heading text-sm font-extrabold text-white/90">{t.name}</div>
                  <div className="mt-1 text-xs text-white/55">{t.role}</div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

