import { motion } from 'framer-motion'
import { MapPinned, CarFront, ClipboardCheck, PartyPopper, ChevronRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { fadeUp, viewport, staggerContainer } from '../../utils/motion'

const STEPS = [
  { icon: MapPinned, title: 'Choose Destination', desc: 'Pick your route or tour. We start from Dibrugarh.' },
  { icon: CarFront, title: 'Select Vehicle', desc: 'Choose the perfect car for your group size.' },
  { icon: ClipboardCheck, title: 'Confirm Booking', desc: 'Get instant confirmation via WhatsApp or call.' },
  { icon: PartyPopper, title: 'Enjoy Journey', desc: 'Relax — a professional driver handles the rest.' },
]

export default function BookingProcess() {
  return (
    <section className="section-pad relative overflow-hidden bg-forest-700 text-beige-100">
      {/* subtle radial accents */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-forest-400/30 blur-3xl" />

      <div className="container-px relative">
        <SectionHeading
          eyebrow="How It Works"
          title="Book In Four"
          highlight="Easy Steps"
          subtitle="A frictionless booking experience — from idea to journey in minutes."
          light
        />

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.li variants={fadeUp} custom={i} key={step.title} className="relative">
                <div className="group h-full rounded-3xl glass-dark p-7 text-center transition-transform duration-500 hover:-translate-y-2">
                  <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-beige-100 text-forest-700 transition-transform duration-500 group-hover:scale-110">
                    <Icon size={28} />
                  </span>
                  <span className="absolute right-5 top-5 font-serif text-4xl font-bold text-white/10">
                    0{i + 1}
                  </span>
                  <h3 className="mt-5 font-serif text-lg font-bold text-beige-100">{step.title}</h3>
                  <p className="mt-2 text-sm text-beige-200/75">{step.desc}</p>
                </div>

                {/* connector */}
                {i < STEPS.length - 1 && (
                  <ChevronRight
                    size={28}
                    className="absolute -right-5 top-1/2 hidden -translate-y-1/2 text-gold-400/70 lg:block"
                  />
                )}
              </motion.li>
            )
          })}
        </motion.ol>
      </div>
    </section>
  )
}
