import React from 'react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { GlassCard } from '../components/ui/GlassCard'
import { motion } from 'framer-motion'
import { certifications } from '../constants/certifications'
import { CheckCircle2, ExternalLink } from 'lucide-react'


export default function Certifications(){
  return (
    <section className="pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Salesforce Certifications"
          title="Verification-ready credential cards"
          description="Add official links and verification details when ready."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {certifications.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: idx * 0.05 }}
            >
              <GlassCard className="p-6 h-full shadow-[0_25px_90px_rgba(0,0,0,0.35)]">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="text-xs font-semibold tracking-widest text-white/60">{c.issued}</div>
                    <h3 className="mt-2 font-heading text-xl font-extrabold tracking-tight">{c.title}</h3>
                    <p className="mt-2 text-sm text-white/65">{c.status}</p>
                    {c.description && (
                      <p className="mt-3 text-sm leading-relaxed text-white/55">{c.description}</p>
                    )}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/70">
                    <CheckCircle2 size={14} className="text-accent/90" />
                    Verified-ready
                  </div>
                </div>


              <div className="mt-5 aspect-[16/10] rounded-2xl border border-white/10 bg-[radial-gradient(700px_220px_at_10%_10%,rgba(59,130,246,0.35),transparent_60%),radial-gradient(600px_240px_at_90%_20%,rgba(139,92,246,0.25),transparent_60%)] flex items-center justify-center overflow-hidden">
                  <motion.div
                    className="relative w-full h-full flex items-center justify-center px-4"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                  >
                    <div className="absolute -top-8 -left-8 h-28 w-28 rounded-full bg-primary/20 blur-2xl" aria-hidden="true" />
                    <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-accent/15 blur-2xl" aria-hidden="true" />

                    <div className="text-center relative">
                      <div className="mx-auto h-12 w-12 rounded-2xl border border-white/10 bg-white/5 grid place-items-center shadow-[0_0_28px_rgba(59,130,246,0.18)]">
                        <span className="font-heading font-extrabold">SF</span>
                      </div>
                      <div className="mt-3 text-sm font-semibold text-white/80">Certificate Preview</div>
                      <div className="mt-1 text-xs text-white/55">Update media when official assets are ready</div>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-5">
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent/40"
                  >
                    View Verification
                    <ExternalLink size={16} />
                  </a>
                </div>

              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

