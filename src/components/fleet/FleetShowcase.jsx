import { motion } from 'framer-motion'
import { Users, Briefcase, Snowflake, Phone, ArrowRight } from 'lucide-react'

import SectionHeading from '../common/SectionHeading'
import { FLEET } from '../../data/fleet'
import { telLink, whatsappLink } from '../../data/business'
import { fadeUp, viewport, staggerContainer } from '../../utils/motion'

function FleetCard({ car }) {
  return (
    <div className="w-full overflow-hidden rounded-3xl bg-beige-50 shadow-glass card-hover flex flex-col justify-between">
      <div>
        <div className="relative h-56 overflow-hidden sm:h-64">
          <img src={car.image} alt={car.name} loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-forest-900">
            {car.tag}
          </span>
          <span className="absolute bottom-4 right-4 rounded-full glass-dark px-3 py-1.5 text-sm font-bold text-beige-100">
            {car.price}
          </span>
        </div>

        <div className="p-6">
          <p className="text-xs font-medium uppercase tracking-wider text-gold-600">{car.type}</p>
          <h3 className="mt-1 font-serif text-xl font-bold text-forest-700">{car.name}</h3>

          <div className="mt-4 flex items-center gap-5 text-sm text-forest-500">
            <span className="flex items-center gap-1.5"><Users size={16} /> {car.seats} Seats</span>
            <span className="flex items-center gap-1.5"><Briefcase size={16} /> {car.luggage} Bags</span>
            <span className="flex items-center gap-1.5"><Snowflake size={16} /> AC</span>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <div className="flex gap-3">
          <a
            href={whatsappLink(`Hi! I'd like to book the ${car.name}.`)}
            target="_blank"
            rel="noreferrer"
            className="btn-primary flex-1 py-2.5 text-sm"
          >
            Book <ArrowRight size={15} />
          </a>
          <a href={telLink} className="btn-outline px-4 py-2.5 text-sm" aria-label="Call to book">
            <Phone size={16} /> Call
          </a>
        </div>
      </div>
    </div>
  )
}

export default function FleetShowcase() {
  return (
    <section id="fleet" className="section-pad bg-beige-100">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Fleet"
          title="Travel In Our"
          highlight="Premium Vehicles"
          subtitle="Immaculately maintained SUVs and sedans for every journey and group size."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
        >
          {FLEET.map((car, i) => (
            <motion.div
              key={car.id}
              variants={fadeUp}
              custom={i}
              className="flex w-full max-w-[390px] h-full"
            >
              <FleetCard car={car} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
