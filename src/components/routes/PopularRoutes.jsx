import { motion } from 'framer-motion'
import { ArrowRight, Clock, MapPin } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import { ROUTES } from '../../data/routes'
import { whatsappLink } from '../../data/business'
import { fadeUp, viewport, staggerContainer } from '../../utils/motion'

function RouteCard({ route, i }) {
  return (
    <motion.article
      variants={fadeUp}
      custom={i}
      className="group relative overflow-hidden rounded-3xl bg-beige-50 shadow-soft card-hover"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={route.image}
          alt={`${route.from} to ${route.to}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-forest-900/10 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-forest-900 shadow">
          {route.tag}
        </span>
        <span className="absolute right-4 top-4 rounded-full glass-dark px-3 py-1 text-xs font-semibold text-beige-100">
          {route.price}
        </span>

        {/* Route name on image */}
        <div className="absolute inset-x-4 bottom-4 text-beige-100">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <span>{route.from}</span>
            <ArrowRight size={16} className="text-gold-400" />
            <span>{route.to}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-center justify-between text-xs text-forest-400">
          <span className="flex items-center gap-1">
            <MapPin size={14} /> {route.distance}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} /> {route.time}
          </span>
        </div>
        <a
          href={whatsappLink(`Hi! I'd like to book a taxi from ${route.from} to ${route.to}.`)}
          target="_blank"
          rel="noreferrer"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-forest-700 py-2.5 text-sm font-medium text-beige-100 transition hover:bg-forest-600 group-hover:gap-3"
        >
          Book Now <ArrowRight size={16} />
        </a>
      </div>
    </motion.article>
  )
}

export default function PopularRoutes() {
  return (
    <section id="routes" className="section-pad bg-beige-100">
      <div className="container-px">
        <SectionHeading
          eyebrow="Popular Routes"
          title="Where Would You Like"
          highlight="To Go?"
          subtitle="Fixed, transparent fares on our most-booked routes — all starting from Dibrugarh."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {ROUTES.map((r, i) => (
            <RouteCard key={r.id} route={r} i={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
