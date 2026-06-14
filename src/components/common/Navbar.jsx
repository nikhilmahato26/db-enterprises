import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import Logo from './Logo'
import { NAV_LINKS } from '../../data/nav'
import { BUSINESS, telLink } from '../../data/business'
import { useScrolled } from '../../hooks/useScrollProgress'

export default function Navbar() {
  const scrolled = useScrolled(40)
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-soft py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="container-px flex items-center justify-between">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-forest-600 transition hover:text-forest-700 hover:bg-beige-200/70"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={telLink} className="btn-outline py-2 text-sm">
            <Phone size={16} /> {BUSINESS.phoneDisplay}
          </a>
          <a href="#booking" className="btn-gold py-2 text-sm">
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl bg-forest-700 text-beige-100 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="container-px mt-2 glass rounded-2xl py-4">
              <ul className="flex flex-col">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-4 py-3 font-medium text-forest-600 transition hover:bg-beige-200"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex gap-3 px-4">
                <a href={telLink} className="btn-outline flex-1 py-2.5 text-sm">
                  <Phone size={16} /> Call
                </a>
                <a href="#booking" onClick={() => setOpen(false)} className="btn-gold flex-1 py-2.5 text-sm">
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
