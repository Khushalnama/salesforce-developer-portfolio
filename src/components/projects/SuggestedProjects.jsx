import React from 'react'
import { ProjectCard } from './ProjectCard'

export function SuggestedProjects({ projects }){
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </div>
  )
}

