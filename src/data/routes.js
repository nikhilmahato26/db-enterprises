import { IMAGES } from './images'

// Popular outstation routes — all originating from Dibrugarh.
export const ROUTES = [
  {
    id: 'duliajan',
    from: 'Dibrugarh',
    to: 'Duliajan',
    image: IMAGES.duliajan,
    distance: '48 km',
    time: '1h 10m',
    price: '₹1,400',
    tag: 'Popular',
  },
  {
    id: 'tinsukia',
    from: 'Dibrugarh',
    to: 'Tinsukia',
    image: IMAGES.tinsukia,
    distance: '47 km',
    time: '1h',
    price: '₹1,300',
    tag: 'Quick Trip',
  },
  {
    id: 'pasighat',
    from: 'Dibrugarh',
    to: 'Pasighat',
    image: IMAGES.pasighat,
    distance: '150 km',
    time: '4h',
    price: '₹4,500',
    tag: 'Scenic',
  },
  {
    id: 'namsai',
    from: 'Dibrugarh',
    to: 'Namsai',
    image: IMAGES.namsai,
    distance: '90 km',
    time: '2h 30m',
    price: '₹2,800',
    tag: 'Temple Town',
  },
  {
    id: 'digboi',
    from: 'Dibrugarh',
    to: 'Digboi',
    image: IMAGES.digboi,
    distance: '78 km',
    time: '2h',
    price: '₹2,200',
    tag: 'Heritage',
  },
  {
    id: 'sivasagar',
    from: 'Dibrugarh',
    to: 'Sivasagar',
    image: IMAGES.sivasagar,
    distance: '78 km',
    time: '2h',
    price: '₹2,300',
    tag: 'Historic',
  },
  {
    id: 'moran',
    from: 'Dibrugarh',
    to: 'Moran',
    image: IMAGES.moran,
    distance: '40 km',
    time: '55m',
    price: '₹1,200',
    tag: 'Nearby',
  },
  {
    id: 'roing',
    from: 'Dibrugarh',
    to: 'Roing',
    image: IMAGES.roing,
    distance: '120 km',
    time: '3h 15m',
    price: '₹3,800',
    tag: 'Adventure',
  },
]

// Pick-up & drop fare card — all from Dibrugarh.
// rates: per vehicle class → dzire (Sedan/Hatchback), innova (Innova/Scorpio-N), bolero (Bolero).
export const PICKUP_DROP_RATES = [
  { to: 'Duliajan', km: 50, rates: { dzire: 2000, innova: 3400, bolero: 3100 } },
  { to: 'Namrup', km: 80, rates: { dzire: 2700, innova: 4000, bolero: 3500 } },
  { to: 'Naharkatia', km: 70, rates: { dzire: 2500, innova: 3700, bolero: 3200 } },
  { to: 'Tinsukia', km: 50, rates: { dzire: 2000, innova: 3400, bolero: 3000 } },
  { to: 'Digboi', km: 70, rates: { dzire: 2500, innova: 3700, bolero: 3200 } },
  { to: 'Margherita', km: 100, rates: { dzire: 3200, innova: 4500, bolero: 4000 } },
  { to: 'Khonsa, Arunachal Pradesh', km: 115, rates: { dzire: 4000, innova: 5500, bolero: 5000 } },
  { to: 'Roing, Arunachal Pradesh', km: 155, rates: { dzire: 4200, innova: 5500, bolero: 5000 } },
  { to: 'Namsai, Arunachal Pradesh', km: 135, rates: { dzire: 3800, innova: 5300, bolero: 4800 } },
  { to: 'Dambuk, Arunachal Pradesh', km: 175, rates: { dzire: 5000, innova: 7000, bolero: 6000 } },
  { to: 'Pasighat, Arunachal Pradesh', km: 145, rates: { dzire: 3800, innova: 5500, bolero: 5000 } },
  { to: 'Jonai', km: 110, rates: { dzire: 3200, innova: 4700, bolero: 4300 } },
  { to: 'Silapathar', km: 60, rates: { dzire: 2300, innova: 3700, bolero: 3200 } },
  { to: 'Dhemaji', km: 65, rates: { dzire: 2300, innova: 3800, bolero: 3300 } },
  { to: 'Lakhimpur', km: 150, rates: { dzire: 4000, innova: 5500, bolero: 5000 } },
  { to: 'Majuli', km: 135, rates: { dzire: 3800, innova: 5300, bolero: 4800 } },
  { to: 'Moran', km: 45, rates: { dzire: 1700, innova: 3200, bolero: 2700 } },
  { to: 'Sivasagar', km: 80, rates: { dzire: 3300, innova: 4300, bolero: 3800 } },
  { to: 'Nazira', km: 70, rates: { dzire: 2800, innova: 4000, bolero: 3500 } },
  { to: 'Jorhat', km: 155, rates: { dzire: 4000, innova: 5500, bolero: 5000 } },
  { to: 'Sonari', km: 70, rates: { dzire: 2200, innova: 4000, bolero: 3500 } },
  { to: 'Alo, Arunachal Pradesh', km: 200, rates: { dzire: 6000, innova: 9000, bolero: 8000 } },
  { to: 'Golaghat', km: 200, rates: { dzire: 5500, innova: 8500, bolero: 7500 } },
  { to: 'Tezu, Arunachal Pradesh', km: 200, rates: { dzire: 5500, innova: 10000, bolero: 8500 } },
  { to: 'Itanagar, Arunachal Pradesh', km: 200, rates: { dzire: 5500, innova: 8500, bolero: 7000 } },
  { to: 'Naharlagun, Arunachal Pradesh', km: 190, rates: { dzire: 5300, innova: 8500, bolero: 7000 } },
  { to: 'Likabali, Arunachal Pradesh', km: 75, rates: { dzire: 2500, innova: 4000, bolero: 3500 } },
  { to: 'Doom Dooma', km: 80, rates: { dzire: 2700, innova: 4200, bolero: 3700 } },
]

// Maps a fleet vehicle name (from VEHICLE_TYPES) → rate-card tier key.
export const VEHICLE_RATE_TIER = {
  'Swift Dzire': 'dzire',
  'Mahindra Bolero': 'bolero',
  'Mahindra Scorpio-N': 'innova',
  'Toyota Innova Crysta': 'innova',
  // Toyota Fortuner is not in the standard rate card → fare on request.
}

// Quick lookup by destination label → { km, rates }.
export const RATE_BY_DESTINATION = Object.fromEntries(
  PICKUP_DROP_RATES.map((r) => [r.to, { km: r.km, rates: r.rates }]),
)

// Used in booking-form destination dropdowns.
export const DESTINATIONS = PICKUP_DROP_RATES.map((r) => r.to)
