/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Blues - from NBCC brand
        'primary': {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
          light: '#dbeafe',
        },
        // Warm Neutrals
        'warm': {
          white: '#fafaf9',
          50: '#f9f7f4',
          100: '#f3f1ed',
          200: '#e7e5e4',
          300: '#d6d3d1',
          600: '#57534e',
          800: '#292524',
          900: '#1c1917',
        },
        // Accent Colors
        'accent': {
          gold: '#f59e0b',
          green: '#10b981',
          purple: '#8b5cf6',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        scaleIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.95)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
        }
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-20': '20px 20px',
      },
    },
  },
  plugins: [
    // Text balance utility
    function({ addUtilities }) {
      addUtilities({
        '.text-balance': {
          'text-wrap': 'balance',
        },
      })
    },
  ],
}