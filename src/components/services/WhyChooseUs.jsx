import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import { WHY_CHOOSE } from '../../data/services'
import { IMAGES } from '../../data/images'
import { fadeUp, viewport, staggerContainer, slideLeft } from '../../utils/motion'

function ReasonCard({ item, i }) {
  const Icon = item.icon
  return (
    <motion.div
      variants={fadeUp}
      custom={i}
      whileHover={{ y: -6 }}
      className="group flex items-start gap-4 rounded-2xl border border-beige-300 bg-beige-50 p-5 shadow-soft transition-shadow hover:shadow-lift"
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-forest-700 text-gold-400 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
        <Icon size={22} />
      </span>
      <div>
        <h4 className="flex items-center gap-1.5 font-semibold text-forest-700">
          <Check size={15} className="text-forest-400" /> {item.title}
        </h4>
        <p className="mt-1 text-sm text-forest-500">{item.desc}</p>
      </div>
    </motion.div>
  )
}

export default function WhyChooseUs() {
  return (
    <section className="section-pad relative overflow-hidden bg-beige-200">
      <div className="container-px grid gap-12 lg:grid-cols-12 lg:items-center">
        {/* Left visual */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative lg:col-span-5"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-glass-lg">
            <img src={IMAGES.about} alt="Premium travel experience" className="h-[460px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 to-transparent" />
          </div>
          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 -right-2 w-44 rounded-2xl glass p-4 shadow-glass sm:right-6"
          >
            <p className="font-serif text-3xl font-bold text-forest-700">100%</p>
            <p className="text-xs font-medium text-forest-500">Safety & Satisfaction Guaranteed</p>
          </motion.div>
        </motion.div>

        {/* Right reasons */}
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Travel With Total"
            highlight="Peace of Mind"
            align="left"
            subtitle="A premium experience built on trust, comfort and local expertise."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {WHY_CHOOSE.map((item, i) => (
              <ReasonCard key={item.title} item={item} i={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
