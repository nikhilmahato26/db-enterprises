import { motion } from 'framer-motion'
import { Phone, CalendarCheck } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { telLink, whatsappLink } from '../../data/business'
import { IMAGES } from '../../data/images'
import { fadeUp, viewport } from '../../utils/motion'

export default function CtaBanner() {
  return (
    <section className="container-px py-12 lg:py-16">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="relative overflow-hidden rounded-[2rem] shadow-glass-lg"
      >
        <img src={IMAGES.cta} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/92 via-forest-800/80 to-forest-700/55" />

        <div className="relative grid items-center gap-6 px-7 py-12 sm:px-12 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-8">
            <p className="eyebrow text-gold-400">Limited Slots Daily</p>
            <h3 className="mt-3 font-serif text-3xl font-bold text-beige-100 sm:text-4xl text-balance">
              Plan Your North East Escape Today
            </h3>
            <p className="mt-3 max-w-xl text-beige-200/85">
              Book a taxi, airport transfer or a full tour package — comfortable, safe and always on time.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
            <a href="#booking" className="btn-gold px-6 py-3.5">
              <CalendarCheck size={18} /> Book Now
            </a>
            <a href={telLink} className="btn-ghost-light px-6 py-3.5">
              <Phone size={18} /> Call
            </a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn px-6 py-3.5 bg-[#25D366] text-white hover:bg-[#1ebe5a]">
              <FaWhatsapp size={20} /> Chat
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
