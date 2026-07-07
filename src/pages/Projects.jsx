import React from 'react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ProjectCard } from '../components/projects/ProjectCard'
import { projects } from '../constants/projects'
import { motion } from 'framer-motion'
import { SuggestedProjects } from '../components/projects/SuggestedProjects'

export default function Projects(){
  return (
    <section className="pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Premium projects with clear engineering narratives"
          description="Problem → solution → features → tech stack. Hover for tilt and glow."
        />

        <div className="mt-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-14">
          <SectionHeading
            eyebrow="Suggested"
            title="More systems worth exploring"
            description="Curated project previews with premium motion." 
          />
          <div className="mt-6">
            <SuggestedProjects projects={projects.slice(0, 4)} />
          </div>
        </div>
      </div>
    </section>
  )
}

