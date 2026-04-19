/* tailwind.config.js */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 60% - Primary Background (soft, eco-friendly)
        background: {
          DEFAULT: '#F5FBF7',   // Soft minty white - main background
          muted: '#E8F3EC',     // Slightly deeper for contrast sections
        },
        // 30% - Secondary Surfaces (cards, containers)
        card: {
          bg: '#FFFFFF',         // Pure white for cards
          border: '#E2E8F0',     // Soft gray border
        },
        // 10% - Accent Color (buttons, highlights, CTAs)
        accent: {
          DEFAULT: '#2D6A4F',    // Deep forest green - primary CTA
          hover: '#1B4D3E',      // Darker on hover
          light: '#40916C',      // Lighter accent for highlights
          muted: '#D8F3DC',      // Background accent tint
        },
        // Supporting nature-inspired tones
        green: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },
        emerald: {
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
        },
        blue: {
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
        },
        teal: {
          400: '#2DD4BF',
          500: '#14B8A6',
        },
        // Text colors
        primary: {
          DEFAULT: '#1A2E24',    // Dark forest for primary text
          light: '#2D4A3B',
        },
        secondary: {
          DEFAULT: '#4B6B5C',    // Muted green-gray
        },
        muted: '#6B8A7A',         // Softer text
        border: '#D1DCD6',        // Border color
      },
      backgroundColor: {
        'card-bg': '#FFFFFF',
        'secondary-bg': '#F2F9F5',
        'header-bg': '#FFFFFF',
        'bg-gradient-start': '#F5FBF7',
        'bg-gradient-end': '#EBF5EF',
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.03), 0 1px 2px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 12px 24px -8px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.02)',
        'button': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'button-hover': '0 8px 20px -6px rgba(45, 106, 79, 0.3)',
        'glow': '0 0 12px rgba(45, 106, 79, 0.3)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}