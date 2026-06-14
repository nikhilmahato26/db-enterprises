import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules'
import { Users, Briefcase, Snowflake, Phone, ArrowRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'

import SectionHeading from '../common/SectionHeading'
import { FLEET } from '../../data/fleet'
import { telLink, whatsappLink } from '../../data/business'
import { fadeUp, viewport } from '../../utils/motion'

function FleetCard({ car }) {
  return (
    <div className="overflow-hidden rounded-3xl bg-beige-50 shadow-glass">
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

        <div className="mt-5 flex gap-3">
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
      </div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="px-2 sm:px-6">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 120, modifier: 2.2, slideShadows: false }}
          breakpoints={{
            0: { slidesPerView: 1.1, spaceBetween: 16 },
            640: { slidesPerView: 1.8, spaceBetween: 20 },
            1024: { slidesPerView: 2.6, spaceBetween: 28 },
            1280: { slidesPerView: 3.2, spaceBetween: 30 },
          }}
          className="!pb-16 !pt-4"
        >
          {FLEET.map((car) => (
            <SwiperSlide key={car.id} className="h-auto !flex">
              <FleetCard car={car} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  )
}
