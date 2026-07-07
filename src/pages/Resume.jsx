import React from 'react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { GlassCard } from '../components/ui/GlassCard'
import { GlowButton } from '../components/ui/GlowButton'
import { motion } from 'framer-motion'

export default function Resume(){
  return (
    <section className="pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Resume"
          title="Preview & download"
          description="A premium resume card with a working download button."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <GlassCard className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold tracking-widest text-white/60">PREVIEW</div>
                  <h3 className="mt-2 font-heading text-2xl font-extrabold tracking-tight">Resume</h3>
                  {/* <p className="mt-2 text-sm text-white/65">Replace `public/resume.pdf` with your real resume anytime.</p> */}
                </div>
              </div>

              <div className="mt-6 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto h-14 w-14 rounded-2xl border border-white/10 bg-white/5 grid place-items-center">
                    <span className="font-heading font-extrabold">PDF</span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white/80">Resume preview placeholder</p>
                  <p className="mt-1 text-xs text-white/55">Open download for full file</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <GlassCard className="p-6">
              <div className="text-xs font-semibold tracking-widest text-white/60">ACTIONS</div>
              <h3 className="mt-2 font-heading text-2xl font-extrabold tracking-tight">Get the file</h3>

              <div className="mt-6 flex flex-col gap-3">
                <GlowButton as={motion.a} href="/resume.pdf" download variant="primary">
                  Download Resume
                </GlowButton>
                <GlowButton as={motion.a} href="/contact" variant="secondary">
                  Request a tailored version
                </GlowButton>
              </div>

              {/* <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="text-xs font-semibold tracking-widest text-white/60">What to update</div>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-accent" />Replace `resume.pdf` in /public</li>
                  <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-accent" />Update links in constants</li>
                  <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-accent" />Swap verification placeholders</li>
                </ul>
              </div> */}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

