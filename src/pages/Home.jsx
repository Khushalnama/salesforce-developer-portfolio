import React from 'react'
import { motion } from 'framer-motion'

import { AppleLinearHeroEffects } from '../components/hero/AppleLinearHeroEffects'

import { GlowButton } from '../components/ui/GlowButton'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ProjectCard } from '../components/projects/ProjectCard'
import { projects } from '../constants/projects'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Mail } from 'lucide-react'
import LINKS from '../constants/links'


export default function Home(){
  const featured = projects.slice(0, 2)

  return (
    <section className="relative pt-24 pb-10">

      <div className="absolute inset-0 pointer-events-none">
        {/* kept for visual depth parity; effects are rendered inside the hero wrapper */}
      </div>
      <AppleLinearHeroEffects />


      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-white/70">
              <span className="h-2 w-2 rounded-full bg-primary/80 shadow-[0_0_16px_rgba(59,130,246,0.5)]" aria-hidden="true" />
              Available for Salesforce work

            </div>

            <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent">
                Hi, I&apos;m Khushal Namdev
              </span>
              <span className="mt-2 block text-white/80">Salesforce Developer</span>

            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
              Building scalable CRM solutions using Apex, Lightning Web Components, Flow Automation, and the Salesforce Platform.
            </p>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
              I develop modern Salesforce applications that help businesses automate processes, improve productivity, and build scalable CRM solutions using Salesforce best practices.
            </p>


            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <GlowButton as={motion.a} href="/resume.pdf" download variant="primary">
                Download Resume
              </GlowButton>
              <GlowButton as={motion.a} href="/contact" variant="secondary">
                Contact Me
              </GlowButton>
              <GlowButton as={motion.a} href="/projects" variant="accent">
                View Projects
              </GlowButton>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 shadow-sm transition duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white hover:shadow-[0_0_24px_rgba(59,130,246,0.25)] focus:outline-none focus:ring-2 focus:ring-primary/40"
                aria-label="GitHub"
              >
                <motion.span whileHover={{ y: -1 }} className="inline-flex">
                  <FaGithub className="text-white/80 transition duration-300 group-hover:text-white" />
                </motion.span>
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 shadow-sm transition duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white hover:shadow-[0_0_24px_rgba(139,92,246,0.25)] focus:outline-none focus:ring-2 focus:ring-secondary/40"
                aria-label="LinkedIn"
              >
                <motion.span whileHover={{ y: -1 }} className="inline-flex">
                  <FaLinkedin className="text-white/80 transition duration-300 group-hover:text-white" />
                </motion.span>
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href={`mailto:${LINKS.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 shadow-sm transition duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white hover:shadow-[0_0_24px_rgba(6,182,212,0.25)] focus:outline-none focus:ring-2 focus:ring-accent/40"
                aria-label="Email"
              >
                <motion.span whileHover={{ y: -1 }} className="inline-flex">
                  <Mail size={16} className="text-white/80 transition duration-300 group-hover:text-white" />
                </motion.span>
                <span className="hidden sm:inline">Email</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md">
              <motion.div
                className="pointer-events-none absolute -inset-6 rounded-[48px] blur-2xl"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(59,130,246,0.22), rgba(139,92,246,0.18), rgba(6,182,212,0.16))',
                }}
                animate={{ opacity: [0.75, 1, 0.8] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden="true"
              />

              {/* Glass card + animated gradient border (subtle) */}
              <div className="relative overflow-hidden rounded-[30px] p-[1px]">
                <motion.div
                  className="absolute inset-0 rounded-[30px] bg-[linear-gradient(110deg,rgba(59,130,246,0.55),rgba(139,92,246,0.45),rgba(6,182,212,0.40))]"
                  animate={{ opacity: [0.55, 0.85, 0.55], filter: ['blur(0px)', 'blur(1px)', 'blur(0px)'] }}
                  transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
                  aria-hidden="true"
                />

                <div className="relative rounded-[29px] border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-xs font-semibold tracking-[0.22em] text-white/60">SALESFORCE DEVELOPER</div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 shadow-[0_0_24px_rgba(59,130,246,0.20)]">

                      🟢 Available for Work
                    </div>
                  </div>

                  <div className="relative mt-5 overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(900px_320px_at_10%_0%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(820px_320px_at_90%_20%,rgba(139,92,246,0.25),transparent_55%),radial-gradient(640px_320px_at_50%_100%,rgba(6,182,212,0.18),transparent_55%)]">
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100" aria-hidden="true">
                      <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-[rgba(255,255,255,0.06)] blur-2xl" />
                    </div>

                    <div className="flex h-[220px] items-center justify-center p-4">
                      <div className="text-center">
                        <motion.div
                          className="group relative mx-auto h-28 w-28 overflow-hidden rounded-full bg-white/5 ring-1 ring-white/10 grid place-items-center"
                          whileHover={{ y: -3, scale: 1.03 }}
                          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                          aria-hidden="true"
                        >
                          {/* animated gradient border */}
                          <motion.div
                            className="absolute -inset-1 rounded-full bg-[conic-gradient(from_90deg,rgba(59,130,246,0.9),rgba(139,92,246,0.8),rgba(6,182,212,0.8),rgba(59,130,246,0.9))] blur-[1px]"
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                          />

                          {/* soft glow */}
                          <motion.div
                            className="absolute inset-0 rounded-full shadow-[0_0_22px_rgba(59,130,246,0.35)] opacity-60 transition-opacity duration-300 group-hover:opacity-90"
                            animate={{ opacity: [0.55, 0.85, 0.6] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                          />

                          {/* glass reflection */}
                          <div className="absolute -top-8 left-0 h-24 w-full bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.15)_45%,transparent_70%)] opacity-70" />

                          <img
                            src="/background1.JPG"
                            alt="Khushal Namdev"
                            className="relative h-full w-full rounded-full object-cover"
                            loading="eager"
                          />
                        </motion.div>

                        <div className="mt-3 text-sm font-semibold text-white/85 sm:text-[14px]">Khushal Namdev</div>
                        <div className="mt-1 text-[12px] font-medium text-white/65 sm:text-[12.5px]">Salesforce Developer</div>
                        <div className="mt-2 text-[11px] text-white/60">📍 Rajasthan, India</div>
                        <div className="mt-1 text-[11px] leading-relaxed text-white/55">Preparing for Salesforce Platform Developer I Certification</div>
                      </div>
                    </div>

                    <motion.div
                      className="absolute -bottom-14 -left-14 h-44 w-44 rounded-full bg-gradient-to-tr from-primary/30 via-secondary/20 to-accent/20 blur-2xl"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                      aria-hidden="true"
                    />
                    <motion.div
                      className="absolute -top-14 -right-14 h-44 w-44 rounded-full bg-gradient-to-tr from-secondary/25 via-accent/20 to-primary/20 blur-2xl"
                      animate={{ x: [0, 12, 0] }}
                      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      {
                        t: 'Apex',
                        s: 'Business Logic',
                        i: 'Code',
                      },
                      {
                        t: 'Lightning Web Components',
                        s: 'Reusable UI',
                        i: 'Layers',
                      },
                      {
                        t: 'Flow Automation',
                        s: 'Business Process',
                        i: 'Workflow',
                      },
                    ].map((card, idx) => (
                      <motion.div
                        key={card.t}
                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 transition duration-300 hover:border-white/20 hover:bg-white/10"
                        whileHover={{ y: -2, boxShadow: '0 0 34px rgba(59,130,246,0.18)' }}
                        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                      >
                        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true">
                          <div className={`h-full w-full bg-[radial-gradient(450px_130px_at_20%_0%,rgba(59,130,246,0.25),transparent_55%)]`} />
                        </div>

                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <div className="text-[12px] font-semibold leading-tight text-white/85 truncate">{card.t}</div>
                            <div className="mt-1 text-[11px] leading-snug text-white/60">{card.s}</div>
                            <div className="mt-2 text-[11px] text-white/55">{card.i}</div>
                          </div>
                          <motion.div
                            className={`mt-0.5 h-2.5 w-2.5 rounded-full opacity-80 ${
                              idx === 0 ? 'bg-primary' : idx === 1 ? 'bg-secondary' : 'bg-accent'
                            }`} 
                            whileHover={{ scale: 1.15 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                            aria-hidden="true"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-14">
          <SectionHeading
            eyebrow="Featured"
            title="Projects that show impact"
            description="A premium preview of systems, UX, and engineering craft."
          />

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {featured.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


