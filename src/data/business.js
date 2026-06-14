// Central business information — single source of truth.
export const BUSINESS = {
  name: 'D.B. Enterprise',
  subtitle: 'Car Rental & Taxi Service in Dibrugarh',
  phoneDisplay: '+91 96783 84191',
  phoneRaw: '919678384191',
  email: 'dbenterprise2025@gmail.com',
  whatsapp: '919678384191',
  address: {
    line1: 'Bongal Gaon',
    city: 'Dibrugarh',
    state: 'Assam',
    pin: '786003',
    country: 'India',
  },
  startingLocation: 'Dibrugarh', // Always fixed.
  hours: '24 / 7 Available',
}

export const telLink = `tel:+${BUSINESS.phoneRaw}`

export const whatsappLink = (message = "Hi D.B. Enterprise, I'd like to book a taxi.") =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`

export const mailLink = `mailto:${BUSINESS.email}`
