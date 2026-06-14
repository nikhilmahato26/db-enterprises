import { motion } from 'framer-motion'
import Hero from '../components/hero/Hero'
import StatsBar from '../components/common/StatsBar'
import PopularRoutes from '../components/routes/PopularRoutes'
import FeaturedTours from '../components/tours/FeaturedTours'
import Services from '../components/services/Services'
import WhyChooseUs from '../components/services/WhyChooseUs'
import FleetShowcase from '../components/fleet/FleetShowcase'
import Gallery from '../components/common/Gallery'
import BookingProcess from '../components/common/BookingProcess'
import Testimonials from '../components/testimonials/Testimonials'
import CtaBanner from '../components/common/CtaBanner'
import Contact from '../components/contact/Contact'

// Smooth page-transition wrapper.
export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <StatsBar />
      <PopularRoutes />
      <FeaturedTours />
      <Services />
      <WhyChooseUs />
      <FleetShowcase />
      <Gallery />
      <BookingProcess />
      <Testimonials />
      <CtaBanner />
      <Contact />
    </motion.main>
  )
}
