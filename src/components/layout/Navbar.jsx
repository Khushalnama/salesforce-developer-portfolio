import React, { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { classNames } from '../../utils/classNames'
import { PortfolioLogo } from '../ui/PortfolioLogo'


const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Education', to: '/education' },
  { label: 'Certifications', to: '/certifications' },
  { label: 'Achievements', to: '/achievements' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' }
]

export function Navbar(){
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const active = useMemo(() => {
    const p = pathname
    const match = navItems.find(i => i.to === p)
    return match?.to ?? '/'
  }, [pathname])

  return (
    <header
      className={classNames(
        'fixed left-0 right-0 top-0 z-[1000] transition',
        scrolled ? 'backdrop-blur-xl bg-bg/60 border-b border-white/10' : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link to="/" className="group inline-flex items-center gap-3" aria-label="Home">
          <div className="relative grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/60 via-secondary/50 to-accent/50 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative" aria-hidden="true">
              <PortfolioLogo />
            </span>
          </div>

          <div className="hidden sm:block">
            <div className="font-heading text-sm font-bold tracking-wide">
              Khushal Namdev
            </div>
            <div className="text-xs text-white/60">Apex • LWC • Flow Automation</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {navItems.slice(0, 7).map(item => (
            <Link
              key={item.to}
              to={item.to}
              className={classNames(
                'relative rounded-full px-3 py-2 text-sm transition',
                'hover:bg-white/5 hover:text-white',
                active === item.to ? 'text-white' : 'text-white/70'
              )}
            >
              <span className="relative z-10">{item.label}</span>
              {active === item.to && (
                <motion.span
                  layoutId="navActive"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 ring-1 ring-white/10"
                  aria-hidden="true"
                />
              )}
            </Link>
          ))}
          <div className="w-px h-6 bg-white/10 mx-1" />
          {navItems.slice(7).map(item => (
            <Link
              key={item.to}
              to={item.to}
              className={classNames(
                'rounded-full px-3 py-2 text-sm transition hover:bg-white/5 hover:text-white',
                active === item.to ? 'text-white' : 'text-white/70'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 md:hidden"
          onClick={() => setMobileOpen(v => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.span key="x" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
                <X size={18} />
              </motion.span>
            ) : (
              <motion.span key="m" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
                <Menu size={18} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden overflow-hidden border-t border-white/10"
          >
            <div className="mx-auto max-w-6xl px-4 py-4">
              <div className="grid gap-2">
                {navItems.map(item => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={classNames(
                      'rounded-2xl px-4 py-3 text-sm transition',
                      active === item.to ? 'bg-white/10 text-white ring-1 ring-white/10' : 'bg-transparent text-white/70 hover:bg-white/5 hover:text-white'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

