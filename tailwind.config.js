/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'ui-sans-serif', 'system-ui'],
        body: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        bg: '#0B0F19',
        primary: '#3B82F6',
        secondary: '#8B5CF6',
        accent: '#06B6D4'
      },
      boxShadow: {
        glow: '0 0 24px rgba(59,130,246,0.35)',
        'card': '0 18px 50px rgba(0,0,0,0.45)',
        'card-soft': '0 12px 30px rgba(0,0,0,0.35)'
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-12px,0)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        }
      },
      animation: {
        floaty: 'floaty 8s ease-in-out infinite',
        shimmer: 'shimmer 3.5s ease-in-out infinite'
      }
    }
  },
  plugins: []
}

