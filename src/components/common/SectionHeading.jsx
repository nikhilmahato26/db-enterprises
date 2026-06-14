import { motion } from 'framer-motion'
import { fadeUp, viewport } from '../../utils/motion'

export default function SectionHeading({ eyebrow, title, highlight, subtitle, align = 'center', light = false }) {
  const isCenter = align === 'center'
  return (
    <div className={`mb-12 lg:mb-16 ${isCenter ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-xl'}`}>
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className={`eyebrow ${light ? 'text-gold-400' : ''} ${isCenter ? 'justify-center' : ''} flex`}
        >
          <span className={`h-px w-8 ${light ? 'bg-gold-400' : 'bg-forest-400'}`} />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={1}
        className={`mt-3 text-3xl sm:text-4xl lg:text-5xl heading-serif text-balance ${
          light ? 'text-beige-100' : ''
        }`}
      >
        {title} {highlight && <span className="text-gold-500">{highlight}</span>}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={2}
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? 'text-beige-200/80' : 'text-forest-500'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
