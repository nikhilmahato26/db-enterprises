/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Light Beige palette
        beige: {
          50: '#FDFBF6',
          100: '#FAF7F0',
          200: '#F5F1E8',
          300: '#EDE6D6',
          400: '#E2D7C0',
          500: '#D4C4A5',
        },
        // Forest Green palette
        forest: {
          50: '#EAF1ED',
          100: '#CDDFD5',
          200: '#9BBFAB',
          300: '#6B9C82',
          400: '#3A6B54',
          500: '#2D5443',
          600: '#244536',
          700: '#1B3A2F',
          800: '#142B23',
          900: '#0D1C17',
        },
        gold: {
          400: '#D4AF6A',
          500: '#C39A4E',
          600: '#A8823B',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        glass: '0 8px 32px rgba(27, 58, 47, 0.18)',
        'glass-lg': '0 20px 60px rgba(27, 58, 47, 0.25)',
        soft: '0 10px 40px rgba(27, 58, 47, 0.10)',
        lift: '0 24px 50px rgba(27, 58, 47, 0.20)',
      },
      backgroundImage: {
        'hero-overlay':
          'linear-gradient(120deg, rgba(13,28,23,0.85) 0%, rgba(27,58,47,0.55) 45%, rgba(27,58,47,0.15) 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}
