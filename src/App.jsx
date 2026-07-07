import React, { Suspense, lazy } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import { PageTransition } from './components/animation/PageTransition'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { ScrollProgress } from './components/effects/ScrollProgress'
import { LoadingScreen } from './components/effects/LoadingScreen'
const Testimonials = lazy(() => import('./pages/Testimonials'))
const NotFound = lazy(() => import('./pages/NotFound'))

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Skills = lazy(() => import('./pages/Skills'))
const Projects = lazy(() => import('./pages/Projects'))
const Experience = lazy(() => import('./pages/Experience'))
const Education = lazy(() => import('./pages/Education'))
const Certifications = lazy(() => import('./pages/Certifications'))
const Achievements = lazy(() => import('./pages/Achievements'))
const Resume = lazy(() => import('./pages/Resume'))
const Contact = lazy(() => import('./pages/Contact'))

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-bg text-white selection:bg-primary/30 selection:text-white">
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />

      <main className="relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/education" element={<Education />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      <PageTransition />
      <Footer />
    </div>
  )
}

