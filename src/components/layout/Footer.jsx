import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Mail, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'
import LINKS from '../../constants/links'


export function Footer(){
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-bg/40 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

          <div>

            <div className="font-heading text-sm font-bold tracking-wide text-white/90">Khushal Namdev</div>
            <p className="mt-2 max-w-sm text-sm text-white/60">
              Building scalable CRM solutions using Apex, Lightning Web Components, Flow Automation, and Salesforce best practices.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            <div>
              <div className="text-xs font-semibold tracking-wider text-white/70">Quick Links</div>
              <div className="mt-3 grid gap-2 text-sm">
                <Link className="text-white/70 hover:text-white" to="/">Home</Link>
                <Link className="text-white/70 hover:text-white" to="/about">About</Link>
                <Link className="text-white/70 hover:text-white" to="/skills">Skills</Link>
                <Link className="text-white/70 hover:text-white" to="/projects">Projects</Link>
                <Link className="text-white/70 hover:text-white" to="/experience">Experience</Link>
                <Link className="text-white/70 hover:text-white" to="/certifications">Certifications</Link>
                <Link className="text-white/70 hover:text-white" to="/contact">Contact</Link>
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold tracking-wider text-white/70">Social</div>
              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href={LINKS.github}

                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70 shadow-[0_0_0_rgba(0,0,0,0)] transition hover:border-white/20 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary/40"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 transition group-hover:ring-primary/30">
                    <FaGithub size={15} className="text-white/80 transition group-hover:text-white" />
                  </span>
                  <span className="hidden sm:inline">GitHub</span>
                </a>
                  <a
                  href={LINKS.linkedin}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70 shadow-[0_0_0_rgba(0,0,0,0)] transition hover:border-white/20 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary/40"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 transition group-hover:ring-secondary/30">
                    <FaLinkedin size={15} className="text-white/80 transition group-hover:text-white" />
                  </span>
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
                <a
                  href={`mailto:${LINKS.email}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70 shadow-[0_0_0_rgba(0,0,0,0)] transition hover:border-white/20 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent/40"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 transition group-hover:ring-accent/30">
                    <Mail size={15} className="text-white/80 transition group-hover:text-white" />
                  </span>
                  <span className="hidden sm:inline">Email</span>
                </a>
              </div>

            </div>

            <div className="hidden sm:block">
              <div className="text-xs font-semibold tracking-wider text-white/70">Actions</div>
              <div className="mt-3 grid gap-2 text-sm">
                <a
                  className="text-white/70 hover:text-white"
                  href={LINKS.resumePdf}
                  download
                >
                  Download Resume
                </a>
                <motion.button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex w-fit items-center justify-start gap-2 rounded-2xl px-3 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-white/5 transition group-hover:border-white/20">
                    <ArrowUp size={16} className="text-white/80" />
                  </span>
                  <span>Back to Top</span>
                </motion.button>

              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/55">© {year} Khushal Namdev. All Rights Reserved.</p>
          <p className="text-sm text-white/55">Designed & Developed with dedication for the Salesforce Ecosystem.</p>
        </div>
      </div>
    </footer>
  )
}

