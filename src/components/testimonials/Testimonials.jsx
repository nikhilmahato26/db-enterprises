import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'

import SectionHeading from '../common/SectionHeading'
import { TESTIMONIALS } from '../../data/testimonials'
import { IMAGES } from '../../data/images'
import { fadeUp, viewport } from '../../utils/motion'

function TestimonialCard({ t }) {
  return (
    <div className="relative h-full rounded-3xl glass p-7 shadow-glass">
      <Quote size={40} className="text-gold-500/40" />
      <p className="mt-3 text-sm leading-relaxed text-forest-600">“{t.text}”</p>

      <div className="mt-6 flex items-center gap-4 border-t border-white/40 pt-5">
        <img src={t.avatar} alt={t.name} loading="lazy" className="h-12 w-12 rounded-full object-cover ring-2 ring-gold-400" />
        <div>
          <p className="font-semibold text-forest-700">{t.name}</p>
          <p className="text-xs text-forest-400">{t.role}</p>
        </div>
        <span className="ml-auto flex text-gold-500">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
          ))}
        </span>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section-pad relative overflow-hidden bg-beige-100">
      {/* background image with overlay */}
      <div className="absolute inset-0">
        <img src={IMAGES.cta} alt="" className="h-full w-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-beige-100/80" />
      </div>

      <div className="container-px relative">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved By"
          highlight="Travellers"
          subtitle="Real stories from guests who explored the North East with us."
        />

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={28}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="!pb-14"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.id} className="h-auto pb-2">
                <TestimonialCard t={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
