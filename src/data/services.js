import { IMAGES } from './images'
import {
  Plane,
  Car,
  KeyRound,
  Mountain,
  Users,
  Route,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  Wallet,
  MapPin,
  Clock,
} from 'lucide-react'

export const SERVICES = [
  {
    id: 'airport',
    title: 'Airport Pickup & Drop',
    image: IMAGES.airport,
    icon: Plane,
    desc: 'On-time transfers to & from Dibrugarh Airport with flight tracking.',
  },
  {
    id: 'taxi',
    title: 'Taxi Service',
    image: IMAGES.taxi,
    icon: Car,
    desc: 'Reliable local taxis across Dibrugarh, available round the clock.',
  },
  {
    id: 'rental',
    title: 'Car Rental',
    image: IMAGES.rental,
    icon: KeyRound,
    desc: 'Self-drive & chauffeur rentals — hourly, daily or weekly plans.',
  },
  {
    id: 'netours',
    title: 'North East Tours',
    image: IMAGES.netours,
    icon: Mountain,
    desc: 'Curated multi-day journeys across Assam & Arunachal Pradesh.',
  },
  {
    id: 'family',
    title: 'Family Travel',
    image: IMAGES.family,
    icon: Users,
    desc: 'Spacious, comfortable vehicles tailored for family holidays.',
  },
  {
    id: 'outstation',
    title: 'Outstation Trips',
    image: IMAGES.outstation,
    icon: Route,
    desc: 'One-way & round-trip outstation taxis at transparent fares.',
  },
]

export const WHY_CHOOSE = [
  { icon: Users, title: 'Professional Drivers', desc: 'Courteous, verified & experienced chauffeurs.' },
  { icon: Sparkles, title: 'Clean Vehicles', desc: 'Sanitised, well-maintained premium cars.' },
  { icon: ShieldCheck, title: 'Safe Journey', desc: 'GPS-tracked rides with full safety checks.' },
  { icon: Wallet, title: 'Affordable Pricing', desc: 'Transparent fares — no hidden charges.' },
  { icon: Plane, title: 'Airport Transfers', desc: 'Punctual pickups synced to your flight.' },
  { icon: MapPin, title: 'Local Travel Experts', desc: 'Deep North East knowledge & hidden gems.' },
  { icon: HeartHandshake, title: 'Family Friendly', desc: 'Comfort & care for every age group.' },
  { icon: Clock, title: '24/7 Support', desc: 'Always reachable, whenever you travel.' },
]
