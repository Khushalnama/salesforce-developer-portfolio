import React from 'react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { GlassCard } from '../components/ui/GlassCard'
import { ScrollReveal } from '../components/effects/ScrollReveal'

export default function About(){
  return (
    <section className="pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="About"
          title="About My Salesforce Journey"
          description="Story, objective, strengths, and what I’m learning right now."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <ScrollReveal className="lg:col-span-2">
            <GlassCard className="p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h3 className="font-heading text-xl font-extrabold tracking-tight">About Me</h3>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-widest text-white/60">
                  Salesforce • Automation • Best Practices
                </div>

              </div>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
                I’m a Salesforce Developer passionate about building scalable CRM solutions that simplify business processes through automation, custom development, and platform best practices.
              </p>


              <div className="mt-6 grid gap-5 sm:grid-cols-2">

                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.25)] transition">
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-primary/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-accent/15 blur-2xl" />
                  </div>
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <div className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                        <span className="h-2 w-2 rounded-full bg-primary/80" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold tracking-widest text-white/60">Career Objective</div>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-white/70">Build scalable Salesforce CRM solutions that streamline operations through automation and secure custom development.</p>
                  </div>
                </div>


                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.25)] transition">
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-secondary/18 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-primary/12 blur-2xl" />
                  </div>
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <div className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 shadow-[0_0_20px_rgba(139,92,246,0.15)]">
                        <span className="h-2 w-2 rounded-full bg-secondary/80" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold tracking-widest text-white/60">Passion</div>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-white/70">Turning complex requirements into clean Salesforce workflows, Apex logic, and Lightning experiences.</p>

                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.25)] transition">
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-accent/18 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-secondary/10 blur-2xl" />
                  </div>
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <div className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                        <span className="h-2 w-2 rounded-full bg-accent/80" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold tracking-widest text-white/60">Current Learning</div>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-white/70">Advanced Salesforce architecture, Agentforce capabilities, and Lightning UI performance best practices.</p>

                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.25)] transition">
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-primary/14 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-accent/10 blur-2xl" />
                  </div>
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <div className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 shadow-[0_0_20px_rgba(59,130,246,0.12)]">
                        <span className="h-2 w-2 rounded-full bg-white/70" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold tracking-widest text-white/60">Strengths</div>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-white/70">Governance-aware Apex design, secure data modeling, and UX-focused Salesforce implementations.</p>

                  </div>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs font-semibold tracking-widest text-white/60">Timeline Focus</div>
                  <div className="text-xs text-white/50">Refined in small iterations</div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {[
                    { t: 'Salesforce CRM Delivery', d: 'Automation that simplifies business processes' },
                    { t: 'Apex & Integration', d: 'Robust triggers, Apex, and secure data handling' },
                    { t: 'Lightning UX', d: 'Lightning experiences that drive adoption and productivity' },
                  ].map((x, idx) => (

                    <div key={x.t} className="relative rounded-xl border border-white/10 bg-white/5 p-4">

                      {/* subtle timeline dot */}
                      <div className="absolute left-4 top-4 h-2 w-2 rounded-full bg-primary/80" aria-hidden="true" />
                      <div className="pl-4">
                        <div className="font-heading text-sm font-extrabold text-white/90">{x.t}</div>
                        <div className="mt-2 text-sm text-white/60">{x.d}</div>
                      </div>
                      {idx !== 2 && (
                        <div className="pointer-events-none absolute -bottom-3 left-8 h-0.5 w-[60%] bg-gradient-to-r from-primary/20 via-secondary/15 to-accent/10" aria-hidden="true" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal>
              <GlassCard className="p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-heading text-lg font-extrabold">About Statistics</h3>
                  <div className="text-xs text-white/50">Salesforce-focused progress</div>

                </div>

                <p className="mt-2 text-sm text-white/60">Salesforce outcomes you can feel—automation coverage, platform depth, and continuous learning.</p>



                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[{ label: 'Salesforce Projects', v: '6+' }, { label: 'Salesforce Technologies', v: '10+' }, { label: 'Trailhead Learning', v: 'Active' }, { label: 'Platform Developer I', v: 'Preparing' }].map((s) => (


                    <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.22)]">
                      <div className="font-heading text-2xl font-extrabold tracking-tight">{s.v}</div>
                      <div className="mt-1 text-xs text-white/60">{s.label}</div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal>
              <GlassCard className="p-6">
                <h3 className="font-heading text-lg font-extrabold">Professional Highlights</h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {['Salesforce CRM Development', 'Apex Programming', 'Lightning Web Components (LWC)', 'Flow Automation', 'SOQL & SOSL', 'Business Process Automation', 'Sales & Service Cloud', 'Salesforce Best Practices'].map((t) => (

                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70 shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
                      {t}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}


