import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import { SERVICES } from '../../data/services'
import { fadeUp, viewport, staggerContainer } from '../../utils/motion'

function ServiceCard({ service, i }) {
  const Icon = service.icon
  return (
    <motion.article
      variants={fadeUp}
      custom={i}
      className="group relative h-72 overflow-hidden rounded-3xl shadow-soft card-hover"
    >
      <img
        src={service.image}
        alt={service.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/40 to-transparent" />

      <div className="relative flex h-full flex-col justify-end p-6 text-beige-100">
        <span className="mb-3 grid h-12 w-12 place-items-center rounded-xl glass-dark text-gold-400 transition-transform duration-500 group-hover:-translate-y-1">
          <Icon size={22} />
        </span>
        <h3 className="font-serif text-xl font-bold">{service.title}</h3>
        <p className="mt-1 max-h-0 overflow-hidden text-sm text-beige-200/85 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
          {service.desc}
        </p>
        <span className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-gold-500 text-forest-900 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </motion.article>
  )
}

export default function Services() {
  return (
    <section id="services" className="section-pad bg-beige-100">
      <div className="container-px">
        <SectionHeading
          eyebrow="What We Offer"
          title="Premium Travel"
          highlight="Services"
          subtitle="From quick airport runs to multi-day mountain expeditions — we move you in comfort."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} i={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
