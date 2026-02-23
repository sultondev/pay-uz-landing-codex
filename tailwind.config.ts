import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#edfff7',
          500: '#22c55e',
          600: '#16a34a'
        }
      },
      boxShadow: {
        soft: '0 20px 50px -20px rgba(15, 23, 42, 0.25)'
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.1), transparent 40%), radial-gradient(circle at 80% 0%, rgba(59, 130, 246, 0.08), transparent 35%)',
        'cta-glow':
          'radial-gradient(circle at 10% 20%, rgba(34, 197, 94, 0.3), transparent 40%), radial-gradient(circle at 90% 0%, rgba(34, 197, 94, 0.15), transparent 30%)'
      }
    }
  },
  plugins: []
} satisfies Config
