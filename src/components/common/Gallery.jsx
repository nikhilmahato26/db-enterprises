import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { GALLERY } from '../../data/gallery'
import { scaleIn, viewport, staggerContainer } from '../../utils/motion'

export default function Gallery() {
  return (
    <section id="gallery" className="section-pad bg-beige-200">
      <div className="container-px">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments From The"
          highlight="North East"
          subtitle="Road trips, tea gardens, misty mountains and the luxury cars that take you there."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] lg:grid-cols-4"
        >
          {GALLERY.map((g, i) => (
            <motion.figure
              key={i}
              variants={scaleIn}
              custom={i}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${g.span}`}
            >
              <img
                src={g.src}
                alt={g.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-forest-900/10 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
              <figcaption className="absolute inset-x-4 bottom-4 translate-y-2 text-sm font-semibold text-beige-100 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {g.label}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
