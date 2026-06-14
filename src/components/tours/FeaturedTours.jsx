import { motion } from 'framer-motion'
import { Star, MapPin, Clock, ArrowRight, Check } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import { TOURS } from '../../data/tours'
import { whatsappLink } from '../../data/business'
import { fadeUp, viewport, staggerContainer } from '../../utils/motion'

function TourCard({ tour, i }) {
  return (
    <motion.article
      variants={fadeUp}
      custom={i}
      className="group relative grid overflow-hidden rounded-3xl bg-beige-50 shadow-soft card-hover md:grid-cols-2"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden md:h-auto">
        <img
          src={tour.image}
          alt={tour.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent md:bg-gradient-to-r" />
        <span className="absolute left-4 top-4 flex items-center gap-1 rounded-full glass-dark px-3 py-1 text-xs font-semibold text-beige-100">
          <Star size={13} className="text-gold-400" fill="currentColor" strokeWidth={0} /> {tour.rating}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col p-6 sm:p-7">
        <span className="flex items-center gap-1.5 text-xs font-medium text-forest-400">
          <MapPin size={14} /> {tour.location}
        </span>
        <h3 className="mt-2 font-serif text-2xl font-bold text-forest-700">{tour.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-forest-500">{tour.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {tour.highlights.map((h) => (
            <li key={h} className="flex items-center gap-1 rounded-full bg-beige-200 px-3 py-1 text-xs font-medium text-forest-600">
              <Check size={12} className="text-forest-400" /> {h}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          <div>
            <span className="flex items-center gap-1 text-xs text-forest-400">
              <Clock size={13} /> {tour.duration}
            </span>
            <p className="font-serif text-2xl font-bold text-forest-700">
              {tour.price}
              <span className="ml-1 text-xs font-normal text-forest-400">/ person</span>
            </p>
          </div>
          <a
            href={whatsappLink(`Hi! I'm interested in the ${tour.name}.`)}
            target="_blank"
            rel="noreferrer"
            className="btn-gold py-2.5 text-sm"
          >
            Book Now <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default function FeaturedTours() {
  return (
    <section id="tours" className="section-pad bg-beige-200">
      <div className="container-px">
        <SectionHeading
          eyebrow="Featured Packages"
          title="Signature North East"
          highlight="Tour Packages"
          subtitle="Hand-crafted journeys into the most breathtaking valleys of Arunachal Pradesh."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          {TOURS.map((t, i) => (
            <TourCard key={t.id} tour={t} i={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
