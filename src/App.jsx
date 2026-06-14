import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import FloatingButtons from './components/common/FloatingButtons'
import Home from './pages/Home'

export default function App() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen bg-beige-100">
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>

      <Footer />
      <FloatingButtons />
    </div>
  )
}
