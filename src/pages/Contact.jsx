import React, { useMemo, useState } from 'react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { GlassCard } from '../components/ui/GlassCard'
import { GlowButton } from '../components/ui/GlowButton'
import { validateEmail, normalizePhone } from '../utils/validators'
import emailjs from 'emailjs-com'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'


export default function Contact(){
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ state: 'idle', msg: '' })

  const canSend = useMemo(() => {
    return Boolean(form.name && validateEmail(form.email) && form.subject && form.message)
  }, [form.email, form.message, form.name, form.subject])

  function validate(){
    const next = {}
    if(!form.name.trim()) next.name = 'Name is required.'
    if(!validateEmail(form.email)) next.email = 'Enter a valid email.'
    const phone = normalizePhone(form.phone)
    if(form.phone && phone.length < 8) next.phone = 'Phone looks too short.'
    if(!form.subject.trim()) next.subject = 'Subject is required.'
    if(!form.message.trim() || form.message.trim().length < 10) next.message = 'Message should be at least 10 characters.'
    return next
  }

  async function onSubmit(e){
    e.preventDefault()

    const nextErrors = validate()
    setErrors(nextErrors)
    if(Object.keys(nextErrors).length) return

    setStatus({ state: 'sending', msg: '' })

    // EmailJS requires: serviceID, templateID, userID.
    // Put real IDs in `.env` and use Vite env vars (recommended):
    // VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
    // For simplicity (and to keep this file self-contained), we read from import.meta.env.
    try {
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if(!serviceID || !templateID || !publicKey){
        throw new Error('Missing EmailJS env vars: VITE_EMAILJS_SERVICE_ID / VITE_EMAILJS_TEMPLATE_ID / VITE_EMAILJS_PUBLIC_KEY')
      }

      await emailjs.send(serviceID, templateID, {
        from_name: form.name,
        from_email: form.email,
        from_phone: normalizePhone(form.phone),
        subject: form.subject,
        message: form.message
      }, publicKey)

      setStatus({ state: 'success', msg: 'Message sent successfully. I’ll get back to you soon.' })
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      setErrors({})
    } catch (err){
      const msg = err?.message || 'Failed to send. Please try again.'
      setStatus({ state: 'error', msg })
    }
  }

  return (
    <section className="pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build your Salesforce solution"
          description="Whether you’re hiring a Salesforce Developer, planning CRM customization, or launching business automation, I’d love to connect and discuss your needs."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <GlassCard className="p-7">
            <h3 className="font-heading text-xl font-extrabold tracking-tight">Your Salesforce brief</h3>
            <p className="mt-2 text-sm text-white/65">
              Share the Salesforce work you need—development, CRM customization, or automation—and I’ll review it and respond using your EmailJS template.
            </p>

            {/* <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
              <div className="text-xs font-semibold tracking-widest text-white/60">EmailJS Setup</div>
              <p className="mt-2 text-sm text-white/70">
                Add these env vars:
                <span className="mt-1 block font-mono text-xs text-white/55">VITE_EMAILJS_SERVICE_ID</span>
                <span className="font-mono text-xs text-white/55">VITE_EMAILJS_TEMPLATE_ID</span>
                <span className="font-mono text-xs text-white/55">VITE_EMAILJS_PUBLIC_KEY</span>
              </p>
            </div> */}

            <div className="mt-10 grid  gap-8">
              {[{k:'Email',v:'Khushalnamdev325@gmail.com'},{k:'Location',v:'Remote / India'}].map((x) => (
                <div key={x.k} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-white/60">{x.k}</div>
                  <div className="mt-2 text-sm font-semibold text-white/80">{x.v}</div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-7">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold tracking-widest text-white/60" htmlFor="name">NAME</label>
                  <div className="mt-2 relative">
                    <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
                      <Mail size={16} />
                    </div>
                    <input
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-11 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/40"
                      placeholder="Your Name"
                      autoComplete="name"
                    />
                  </div>
                  <p className="mt-2 text-xs text-red-300" aria-live="polite">{errors.name}</p>
                </div>

                <div>
                  <label className="text-xs font-semibold tracking-widest text-white/60" htmlFor="email">EMAIL</label>
                  <div className="mt-2 relative">
                    <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
                      <Mail size={16} />
                    </div>
                    <input
                      id="email"
                      value={form.email}
                      onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-11 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/40"
                      placeholder="you@example.com"
                      autoComplete="email"
                    />
                  </div>
                  <p className="mt-2 text-xs text-red-300" aria-live="polite">{errors.email}</p>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold tracking-widest text-white/60" htmlFor="phone">PHONE (OPTIONAL)</label>
                <div className="mt-2 relative">
                  <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
                    <Phone size={16} />
                  </div>
                  <input
                    id="phone"
                    value={form.phone}
                    onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-11 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                  />
                </div>
                <p className="mt-2 text-xs text-red-300" aria-live="polite">{errors.phone}</p>
              </div>

              <div>
                <label className="text-xs font-semibold tracking-widest text-white/60" htmlFor="subject">SUBJECT</label>
                <div className="mt-2 relative">
                  <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
                    <MapPin size={16} />
                  </div>
                  <input
                    id="subject"
                    value={form.subject}
                    onChange={(e) => setForm(f => ({ ...f, subject: e.target.value }))}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-11 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="Project Subject"
                  />
                </div>
                <p className="mt-2 text-xs text-red-300" aria-live="polite">{errors.subject}</p>
              </div>

              <div>
                <label className="text-xs font-semibold tracking-widest text-white/60" htmlFor="message">MESSAGE</label>
                <div className="mt-2 relative">
                    <textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                    className="h-32 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="Tell me about your Salesforce project..."
                  />
                </div>
                <p className="mt-2 text-xs text-red-300" aria-live="polite">{errors.message}</p>
              </div>


              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                <GlowButton
                  type="submit"
                  disabled={!canSend || status.state === 'sending'}
                  className={status.state === 'sending' ? 'opacity-80' : ''}
                  variant="primary"
                >
                  {status.state === 'sending' ? 'Sending...' : 'Connect About Salesforce'}
                </GlowButton>

                {/* <p className="text-xs text-white/55">
                  By sending, you agree to be contacted about Salesforce development, CRM customization, or automation opportunities.
                </p> */}
              </div>


              <AnimatePresence>
                {status.state !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className={
                      status.state === 'success'
                        ? 'rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm text-emerald-100'
                        : 'rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-100'
                    }
                    role={status.state === 'success' ? 'status' : 'alert'}
                  >
                    {status.msg}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}

