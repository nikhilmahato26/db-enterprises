import { BUSINESS } from '../../data/business'

export default function Logo({ light = false }) {
  return (
    <a href="#home" className="flex items-center gap-3 group">
      <span
        className={`grid h-11 w-11 place-items-center rounded-xl font-serif text-lg font-bold shadow-soft transition-transform duration-300 group-hover:scale-105 ${
          light ? 'bg-beige-100 text-forest-700' : 'bg-forest-700 text-gold-400'
        }`}
      >
        DB
      </span>
      <span className="leading-none">
        <span
          className={`block font-serif text-lg font-bold tracking-tight ${
            light ? 'text-beige-100' : 'text-forest-700'
          }`}
        >
          {BUSINESS.name}
        </span>
        <span
          className={`block text-[10px] font-medium uppercase tracking-[0.18em] ${
            light ? 'text-beige-200/70' : 'text-forest-400'
          }`}
        >
          {BUSINESS.subtitle}
        </span>
      </span>
    </a>
  )
}
