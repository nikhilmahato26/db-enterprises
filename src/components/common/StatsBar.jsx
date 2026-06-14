import { motion } from 'framer-motion'
import { STATS } from '../../data/nav'
import { useCountUp } from '../../hooks/useCountUp'
import { fadeUp, viewport, staggerContainer } from '../../utils/motion'

function StatItem({ value, suffix, label, decimals }) {
  const { ref, value: count } = useCountUp(value, { decimals: decimals || 0 })
  return (
    <motion.div variants={fadeUp} ref={ref} className="text-center">
      <p className="font-serif text-4xl font-bold text-gold-400 sm:text-5xl">
        {count}
        <span className="text-gold-500">{suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium uppercase tracking-wider text-beige-200/80">{label}</p>
    </motion.div>
  )
}

export default function StatsBar() {
  return (
    <section className="relative bg-forest-700">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="container-px grid grid-cols-2 gap-8 py-12 lg:grid-cols-4 lg:py-16"
      >
        {STATS.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </motion.div>
    </section>
  )
}
