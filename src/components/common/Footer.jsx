import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react'
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa'
import Logo from './Logo'
import { NAV_LINKS } from '../../data/nav'
import { SERVICES } from '../../data/services'
import { BUSINESS, telLink, mailLink, whatsappLink } from '../../data/business'
import { fadeUp, viewport } from '../../utils/motion'

export default function Footer() {
  return (
    <footer className="relative bg-forest-800 text-beige-200">
      <div className="container-px section-pad">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="lg:col-span-4">
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-beige-200/70">
              Professional taxi services and unforgettable North East tour experiences — comfort, safety
              and reliability across Assam & Arunachal Pradesh.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: FaWhatsapp, href: whatsappLink(), label: 'WhatsApp' },
                { icon: FaInstagram, href: '#', label: 'Instagram' },
                { icon: FaFacebookF, href: '#', label: 'Facebook' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full bg-forest-700 text-beige-100 transition hover:bg-gold-500 hover:text-forest-900"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} custom={1} className="lg:col-span-2">
            <h4 className="mb-5 font-serif text-lg font-semibold text-beige-100">Explore</h4>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="group inline-flex items-center gap-1 text-beige-200/70 transition hover:text-gold-400">
                    <ChevronRight size={14} className="-ml-1 opacity-0 transition group-hover:opacity-100" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} custom={2} className="lg:col-span-3">
            <h4 className="mb-5 font-serif text-lg font-semibold text-beige-100">Services</h4>
            <ul className="space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="group inline-flex items-center gap-1 text-beige-200/70 transition hover:text-gold-400">
                    <ChevronRight size={14} className="-ml-1 opacity-0 transition group-hover:opacity-100" />
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} custom={3} className="lg:col-span-3">
            <h4 className="mb-5 font-serif text-lg font-semibold text-beige-100">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold-400" />
                <span className="text-beige-200/70">
                  {BUSINESS.address.line1}, {BUSINESS.address.city},<br />
                  {BUSINESS.address.state} – {BUSINESS.address.pin}
                </span>
              </li>
              <li>
                <a href={telLink} className="flex items-center gap-3 transition hover:text-gold-400">
                  <Phone size={18} className="shrink-0 text-gold-400" />
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={mailLink} className="flex items-center gap-3 break-all transition hover:text-gold-400">
                  <Mail size={18} className="shrink-0 text-gold-400" />
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-forest-700/60">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-xs text-beige-200/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <p>
            Designed for premium North East travel · {BUSINESS.hours}
          </p>
        </div>
      </div>
    </footer>
  )
}
