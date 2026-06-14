import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Phone, Navigation, Calendar, MessageSquare, CheckCircle2 } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { BUSINESS, telLink, whatsappLink } from '../../data/business'
import { DESTINATIONS } from '../../data/routes'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm()
  const [sent, setSent] = useState(false)
  const today = new Date().toISOString().split('T')[0]

  const buildMessage = (d) =>
    `New Enquiry%0A----------%0AName: ${d.name || '-'}%0APhone: ${d.phone || '-'}%0AFrom: ${BUSINESS.startingLocation}%0ATo: ${d.destination || '-'}%0ADate: ${d.date || '-'}%0AMessage: ${d.message || '-'}`

  const onSubmit = (data) => {
    window.open(whatsappLink(decodeURIComponent(buildMessage(data))), '_blank')
    setSent(true)
    setTimeout(() => {
      setSent(false)
      reset()
    }, 3500)
  }

  const onWhatsApp = () => {
    const data = getValues()
    window.open(whatsappLink(decodeURIComponent(buildMessage(data))), '_blank')
  }

  return (
    <div className="relative rounded-3xl bg-beige-50 p-6 shadow-soft sm:p-8">
      <h3 className="font-serif text-2xl font-bold text-forest-700">Send a Booking Request</h3>
      <p className="mt-1 text-sm text-forest-400">
        Starting from <span className="font-semibold text-forest-600">{BUSINESS.startingLocation}</span> · we reply within minutes.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="field-label">Name</label>
            <div className="relative">
              <User size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest-400" />
              <input {...register('name', { required: true })} placeholder="Your name" className={`field pl-10 ${errors.name ? 'border-red-400' : ''}`} />
            </div>
          </div>
          <div>
            <label className="field-label">Phone</label>
            <div className="relative">
              <Phone size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest-400" />
              <input type="tel" {...register('phone', { required: true, pattern: /^[0-9+\s-]{10,15}$/ })} placeholder="Mobile number" className={`field pl-10 ${errors.phone ? 'border-red-400' : ''}`} />
            </div>
          </div>
          <div>
            <label className="field-label">Destination</label>
            <div className="relative">
              <Navigation size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest-400" />
              <select {...register('destination', { required: true })} className={`field appearance-none pl-10 ${errors.destination ? 'border-red-400' : ''}`} defaultValue="">
                <option value="">Select destination</option>
                {DESTINATIONS.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="field-label">Travel Date</label>
            <div className="relative">
              <Calendar size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest-400" />
              <input type="date" min={today} {...register('date', { required: true })} className={`field pl-10 ${errors.date ? 'border-red-400' : ''}`} />
            </div>
          </div>
        </div>

        <div>
          <label className="field-label">Message</label>
          <div className="relative">
            <MessageSquare size={16} className="pointer-events-none absolute left-3.5 top-4 text-forest-400" />
            <textarea {...register('message')} rows={3} placeholder="Tell us about your trip (optional)" className="field resize-none pl-10 pt-3" />
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <motion.button type="submit" whileTap={{ scale: 0.98 }} className="btn-gold flex-1 py-3 text-base font-semibold">
            Book Now
          </motion.button>
          <a href={telLink} className="btn-primary px-5 py-3 text-sm">
            <Phone size={16} /> Call
          </a>
          <button type="button" onClick={onWhatsApp} className="btn px-5 py-3 text-sm bg-[#25D366] text-white hover:bg-[#1ebe5a]">
            <FaWhatsapp size={18} /> WhatsApp
          </button>
        </div>
      </form>

      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 rounded-3xl bg-beige-50/95 backdrop-blur"
          >
            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
              <CheckCircle2 size={56} className="text-forest-500" />
            </motion.span>
            <p className="font-serif text-xl font-bold text-forest-700">Request Sent!</p>
            <p className="px-6 text-center text-sm text-forest-400">We’ve opened WhatsApp — we’ll confirm shortly.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
