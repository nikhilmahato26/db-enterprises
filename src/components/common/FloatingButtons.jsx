import { AnimatePresence, motion } from 'framer-motion'
import { Phone, ArrowUp, CalendarCheck } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { telLink, whatsappLink } from '../../data/business'
import { useScrolled } from '../../hooks/useScrollProgress'

const item = {
  hidden: { opacity: 0, scale: 0.5, x: 30 },
  visible: (i) => ({ opacity: 1, scale: 1, x: 0, transition: { delay: i * 0.06 } }),
}

export default function FloatingButtons() {
  const scrolled = useScrolled(400)

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-7 sm:right-6">
      {/* Book Now */}
      <motion.a
        custom={0}
        variants={item}
        initial="hidden"
        animate="visible"
        href="#booking"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="hidden items-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold text-forest-900 shadow-lift sm:flex"
      >
        <CalendarCheck size={18} /> Book Now
      </motion.a>

      {/* Call */}
      <motion.a
        custom={1}
        variants={item}
        initial="hidden"
        animate="visible"
        href={telLink}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Call now"
        className="grid h-14 w-14 place-items-center rounded-full bg-forest-700 text-beige-100 shadow-lift"
      >
        <Phone size={22} />
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        custom={2}
        variants={item}
        initial="hidden"
        animate="visible"
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat on WhatsApp"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
        <FaWhatsapp size={26} className="relative" />
      </motion.a>

      {/* Scroll to top */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
            className="grid h-12 w-12 place-items-center rounded-full glass-dark text-beige-100 shadow-lift"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
