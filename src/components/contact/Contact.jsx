import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import SectionHeading from '../common/SectionHeading'
import ContactForm from './ContactForm'
import { BUSINESS, telLink, mailLink, whatsappLink } from '../../data/business'
import { fadeUp, viewport, staggerContainer, slideRight } from '../../utils/motion'

const INFO = [
  { icon: Phone, label: 'Phone', value: BUSINESS.phoneDisplay, href: telLink },
  { icon: Mail, label: 'Email', value: BUSINESS.email, href: mailLink },
  {
    icon: MapPin,
    label: 'Address',
    value: `${BUSINESS.address.line1}, ${BUSINESS.address.city}, ${BUSINESS.address.state} – ${BUSINESS.address.pin}`,
  },
  { icon: Clock, label: 'Hours', value: BUSINESS.hours },
]

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-beige-100">
      <div className="container-px">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Ready To"
          highlight="Book Your Ride?"
          subtitle="Reach out any time — we’re available 24/7 for taxis, transfers and tours."
        />

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="lg:col-span-5"
          >
            <motion.div variants={fadeUp} className="rounded-3xl bg-forest-700 p-7 text-beige-100 shadow-soft">
              <h3 className="font-serif text-2xl font-bold text-beige-100">{BUSINESS.name}</h3>
              <p className="mt-1 text-sm text-beige-200/70">{BUSINESS.subtitle}</p>

              <ul className="mt-7 space-y-5">
                {INFO.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest-600 text-gold-400">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-beige-200/60">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-medium text-beige-100 transition hover:text-gold-400 break-all">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-beige-100">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex gap-3">
                <a href={telLink} className="btn-gold flex-1 py-2.5 text-sm">
                  <Phone size={16} /> Call Now
                </a>
                <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn flex-1 py-2.5 text-sm bg-[#25D366] text-white hover:bg-[#1ebe5a]">
                  <FaWhatsapp size={18} /> WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div variants={fadeUp} custom={1} className="mt-6 overflow-hidden rounded-3xl shadow-soft">
              <iframe
                title="D.B. Enterprise location"
                src="https://www.google.com/maps?q=Dibrugarh,Assam&output=embed"
                className="h-56 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={viewport} className="lg:col-span-7">
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
