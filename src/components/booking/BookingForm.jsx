import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Navigation, Calendar, Car, Users, Phone, CheckCircle2, Lock, Route, IndianRupee } from 'lucide-react'
import { BUSINESS, whatsappLink } from '../../data/business'
import { DESTINATIONS, RATE_BY_DESTINATION, VEHICLE_RATE_TIER } from '../../data/routes'
import { VEHICLE_TYPES } from '../../data/fleet'

// Premium booking form. `glass` renders the hero glassmorphism variant.
export default function BookingForm({ glass = false, prefillDestination = '' }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      from: BUSINESS.startingLocation, // fixed
      destination: prefillDestination,
      date: '',
      vehicle: '',
      passengers: '',
      phone: '',
    },
  })
  const [sent, setSent] = useState(false)

  // Live fare estimate — depends on the selected destination and vehicle class.
  const selectedDestination = watch('destination')
  const selectedVehicle = watch('vehicle')
  const route = selectedDestination ? RATE_BY_DESTINATION[selectedDestination] : null
  const tier = VEHICLE_RATE_TIER[selectedVehicle] // undefined if no/unknown vehicle
  // Show the exact price for the chosen vehicle, else the lowest (Dzire) as a "from" estimate.
  const farePrice = route ? (tier ? route.rates[tier] : route.rates.dzire) : null
  // Fortuner (and any other vehicle not in the rate card) → quote on request.
  const fareOnRequest = !!selectedVehicle && !tier
  const isExactFare = !!route && !!tier

  const onSubmit = (data) => {
    const fareLine = farePrice
      ? `%0AEstimated Fare: ${isExactFare ? '' : 'from '}₹${farePrice.toLocaleString('en-IN')} (${route.km} km)`
      : ''
    const msg = `New Booking Request%0A--------------------%0AFrom: ${BUSINESS.startingLocation}%0ATo: ${data.destination}%0ADate: ${data.date}%0AVehicle: ${data.vehicle}%0APassengers: ${data.passengers}%0APhone: ${data.phone}${fareLine}`
    window.open(whatsappLink(decodeURIComponent(msg)), '_blank')
    setSent(true)
    setTimeout(() => {
      setSent(false)
      reset({ from: BUSINESS.startingLocation, destination: '', date: '', vehicle: '', passengers: '', phone: '' })
    }, 3500)
  }

  const today = new Date().toISOString().split('T')[0]
  const labelCls = glass ? 'text-forest-600' : 'field-label'

  return (
    <div
      className={`relative w-full rounded-3xl p-6 sm:p-7 ${
        glass ? 'glass shadow-glass-lg' : 'bg-beige-50 shadow-soft border border-beige-300'
      }`}
    >
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="font-serif text-2xl font-bold text-forest-700">Book Your Journey</h3>
          <p className="mt-1 text-xs text-forest-400">Instant confirmation via WhatsApp</p>
        </div>
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-forest-700 text-gold-400">
          <Car size={20} />
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Starting location — fixed Dibrugarh */}
        <div>
          <label className="field-label">Starting Location</label>
          <div className="relative">
            <MapPin size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest-400" />
            <input
              value={BUSINESS.startingLocation}
              readOnly
              {...register('from')}
              className="field cursor-not-allowed bg-beige-200 pl-10 pr-10 font-medium"
            />
            <Lock size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-forest-300" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Destination */}
          <div>
            <label className="field-label">Destination</label>
            <div className="relative">
              <Navigation size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest-400" />
              <select
                {...register('destination', { required: true })}
                className={`field appearance-none pl-10 ${errors.destination ? 'border-red-400' : ''}`}
                defaultValue={prefillDestination}
              >
                <option value="">Select destination</option>
                {DESTINATIONS.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="field-label">Travel Date</label>
            <div className="relative">
              <Calendar size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest-400" />
              <input
                type="date"
                min={today}
                {...register('date', { required: true })}
                className={`field pl-10 ${errors.date ? 'border-red-400' : ''}`}
              />
            </div>
          </div>

          {/* Vehicle */}
          <div>
            <label className="field-label">Vehicle Type</label>
            <div className="relative">
              <Car size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest-400" />
              <select
                {...register('vehicle', { required: true })}
                className={`field appearance-none pl-10 ${errors.vehicle ? 'border-red-400' : ''}`}
              >
                <option value="">Select vehicle</option>
                {VEHICLE_TYPES.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Passengers */}
          <div>
            <label className="field-label">Passengers</label>
            <div className="relative">
              <Users size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest-400" />
              <select
                {...register('passengers', { required: true })}
                className={`field appearance-none pl-10 ${errors.passengers ? 'border-red-400' : ''}`}
              >
                <option value="">No. of guests</option>
                {['1-2', '3-4', '5-7', '8-12', '12+'].map((p) => (
                  <option key={p} value={p}>{p} Passengers</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="field-label">Phone Number</label>
          <div className="relative">
            <Phone size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest-400" />
            <input
              type="tel"
              placeholder="Your 10-digit mobile number"
              {...register('phone', { required: true, pattern: /^[0-9+\s-]{10,15}$/ })}
              className={`field pl-10 ${errors.phone ? 'border-red-400' : ''}`}
            />
          </div>
          {errors.phone && <p className="mt-1 text-xs text-red-500">Enter a valid phone number.</p>}
        </div>

        {/* Live fare preview */}
        <AnimatePresence initial={false}>
          {route && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 0 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="flex items-center justify-between rounded-2xl border border-gold-400/40 bg-gold-400/10 px-4 py-3">
                <div>
                  <p className="flex items-center gap-1.5 text-xs font-medium text-forest-500">
                    <Route size={13} className="text-forest-400" />
                    {BUSINESS.startingLocation} → {selectedDestination} · {route.km} km
                  </p>
                  <p className="mt-0.5 text-[11px] text-forest-400">
                    {fareOnRequest
                      ? `Fare on request · ${selectedVehicle}`
                      : isExactFare
                        ? `Estimated fare · ${selectedVehicle}`
                        : 'Starting fare · select a vehicle for exact price'}
                  </p>
                </div>
                {fareOnRequest ? (
                  <span className="font-serif text-base font-bold text-forest-700">On request</span>
                ) : (
                  <span className="flex items-baseline font-serif font-bold text-forest-700">
                    {!isExactFare && <span className="mr-1 text-[11px] font-medium text-forest-400">from</span>}
                    <IndianRupee size={18} strokeWidth={2.5} className="self-center" />
                    <span className="text-2xl">{farePrice.toLocaleString('en-IN')}</span>
                  </span>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-gold w-full py-3.5 text-base font-semibold"
        >
          Book Now
        </motion.button>
      </form>

      {/* Success overlay */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 rounded-3xl bg-beige-50/95 backdrop-blur"
          >
            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
              <CheckCircle2 size={56} className="text-forest-500" />
            </motion.span>
            <p className="font-serif text-xl font-bold text-forest-700">Request Sent!</p>
            <p className="px-6 text-center text-sm text-forest-400">
              We’ve opened WhatsApp to confirm your booking. We’ll reply right away.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
