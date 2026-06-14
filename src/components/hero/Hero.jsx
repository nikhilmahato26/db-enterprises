import { motion } from 'framer-motion'
import { Star, Phone, CalendarCheck } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import BookingForm from '../booking/BookingForm'
import { BUSINESS, telLink, whatsappLink } from '../../data/business'
import { IMAGES } from '../../data/images'
import { fadeUp, staggerContainer } from '../../utils/motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img src={IMAGES.hero} alt="Cinematic road through Assam" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="container-px relative z-10 grid min-h-screen items-center gap-12 pt-28 pb-16 lg:grid-cols-12 lg:gap-8 lg:pt-24">
        {/* Left */}
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="lg:col-span-7 text-beige-100">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium backdrop-blur-md"
          >
            <span className="flex text-gold-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            Trusted Taxi Partner
          </motion.span>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="mt-6 font-serif text-4xl font-bold leading-[1.08] text-balance sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Explore North East With <span className="text-gold-400">Comfort</span> &amp; Safety
          </motion.h1>

          <motion.p variants={fadeUp} custom={2} className="mt-4 text-lg font-medium text-beige-200">
            with <span className="font-serif text-2xl font-bold text-gold-400">{BUSINESS.name}</span>
          </motion.p>

          <motion.p variants={fadeUp} custom={3} className="mt-4 max-w-lg text-base leading-relaxed text-beige-200/85 sm:text-lg">
            Professional taxi services and unforgettable North East tour experiences — across Assam &amp;
            Arunachal Pradesh.
          </motion.p>

          <motion.div variants={fadeUp} custom={4} className="mt-8 flex flex-wrap gap-3">
            <a href="#booking" className="btn-gold px-7 py-3.5 text-base">
              <CalendarCheck size={18} /> Book Now
            </a>
            <a href={telLink} className="btn-ghost-light px-7 py-3.5 text-base">
              <Phone size={18} /> Call Now
            </a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn px-7 py-3.5 text-base bg-[#25D366] text-white hover:bg-[#1ebe5a] hover:-translate-y-0.5 shadow-soft">
              <FaWhatsapp size={20} /> WhatsApp
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div variants={fadeUp} custom={5} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-beige-200/80">
            {['24/7 Availability', 'Verified Drivers', 'Transparent Fares'].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400" /> {t}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — booking form */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          id="booking"
          className="lg:col-span-5 scroll-mt-28"
        >
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
            <BookingForm glass />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-gold-400"
          />
        </div>
      </motion.div>
    </section>
  )
}
