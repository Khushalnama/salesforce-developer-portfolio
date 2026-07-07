import React, { useEffect, useMemo, useRef, useState } from 'react'
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

export function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const drawerRef = useRef(null)
  const closeBtnRef = useRef(null)
  const lastActiveElRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!mobileOpen) return

    // Preserve focus + disable scrolling
    lastActiveElRef.current = document.activeElement
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Focus close button (keyboard + screen readers)
    requestAnimationFrame(() => {
      closeBtnRef.current?.focus?.()
    })

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setMobileOpen(false)
        return
      }

      if (e.key !== 'Tab') return

      // Focus trap within drawer
      const drawerEl = drawerRef.current
      if (!drawerEl) return

      const focusables = Array.from(
        drawerEl.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute('disabled'))

      if (focusables.length === 0) return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const current = document.activeElement

      if (e.shiftKey) {
        if (current === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (current === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
      // Restore focus
      lastActiveElRef.current?.focus?.()
    }
  }, [mobileOpen])

  const active = useMemo(() => {
    const p = pathname
    const match = navItems.find((i) => i.to === p)
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
          {navItems.slice(0, 7).map((item) => (
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
          {navItems.slice(7).map((item) => (
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
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-drawer"
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.span
                key="x"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <X size={18} />
              </motion.span>
            ) : (
              <motion.span
                key="m"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <Menu size={18} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile right-side drawer (only applies on mobile via md:hidden) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div className="fixed inset-0 z-[1100] md:hidden" aria-hidden="false">
            {/* Overlay */}
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              className="absolute inset-0 h-full w-full"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(18px)' }}
            />

            {/* Drawer */}
            <motion.aside
              id="mobile-drawer"
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute top-0 right-0 h-[100vh] w-[320px] overflow-y-auto border-l border-white/10"
              style={{
                background: 'rgba(10,10,20,0.96)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                boxShadow: ' -10px 0 40px rgba(0,0,0,0.55)',
              }}
            >
              <div className="flex items-center justify-between px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="relative grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/60 via-secondary/50 to-accent/50 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="relative" aria-hidden="true">
                      <PortfolioLogo />
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-bold tracking-wide">Khushal Namdev</div>
                    <div className="text-xs text-white/60">Navigation</div>
                  </div>
                </div>

                <button
                  ref={closeBtnRef}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary/60"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="px-4 pb-6">
                <nav aria-label="Mobile primary" className="mt-2">
                  <div className="grid gap-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className={classNames(
                          'group relative rounded-2xl px-4 py-3 text-[15px] font-medium transition',
                          active === item.to
                            ? 'bg-white/10 text-white ring-1 ring-white/10'
                            : 'bg-transparent text-white/75 hover:text-white hover:bg-white/5',
                          'focus:outline-none focus:ring-2 focus:ring-primary/60'
                        )}
                      >
                        <span className="relative z-10">{item.label}</span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            'pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-[10px] transition',
                            active === item.to ? 'opacity-100' : 'group-hover:opacity-100'
                          )}
                          style={{
                            background:
                              'radial-gradient(120px 40px at 30% 20%, rgba(59,130,246,0.25), transparent 60%)',
                          }}
                        />
                      </Link>
                    ))}
                  </div>
                </nav>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}


