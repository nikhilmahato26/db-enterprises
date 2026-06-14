# D.B. Enterprise — Premium Travel & Taxi Website

A high-end, conversion-focused website for **D.B. Enterprise** — Car Rental & Taxi
Service in Dibrugarh, Assam. Light Beige + Forest Green theme, glassmorphism,
Framer Motion animations and a fixed-origin (Dibrugarh) booking flow.

## Tech Stack
- **React 18** + **Vite**
- **Tailwind CSS** (utility classes only)
- **Framer Motion** — scroll reveal, hover lift, counters, page transitions
- **Swiper JS** — fleet & testimonials carousels
- **React Router DOM**, **React Hook Form**, **React Icons**, **Lucide React**

## Getting Started
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the build
```

## Project Structure
```
src/
├── assets/                 # local brand images (optional)
├── components/
│   ├── hero/               # full-screen hero + glass booking form
│   ├── booking/            # reusable BookingForm (origin fixed to Dibrugarh)
│   ├── routes/             # popular route cards
│   ├── tours/              # featured tour packages
│   ├── fleet/              # fleet coverflow carousel
│   ├── services/           # services grid + why-choose-us
│   ├── testimonials/       # glass testimonial slider
│   ├── contact/            # contact info + booking form
│   └── common/             # navbar, footer, gallery, stats, process, CTA, floating buttons
├── hooks/                  # useCountUp, useScrolled
├── data/                   # business info, routes, tours, services, fleet, images...
├── utils/                  # shared Framer Motion variants
├── pages/                  # Home
├── App.jsx
└── main.jsx
```

## Customisation
- **Business details:** `src/data/business.js`
- **Routes / destinations:** `src/data/routes.js`
- **Tours, services, fleet, testimonials, gallery:** matching files in `src/data/`
- **Imagery:** `src/data/images.js` (swap Unsplash URLs for local brand photos)
- **Theme colours / fonts:** `tailwind.config.js`

> The hero & contact booking forms always keep **Starting Location = Dibrugarh**.
> Submissions open a pre-filled WhatsApp message to the business number.
