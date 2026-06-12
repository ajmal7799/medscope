/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1B5FAA',
          green: '#3A8C2F',
          cyan: '#0EA5E9',
          navy: '#0D1B2A',
          white: '#FFFFFF',
          lightBg: '#F4F8FF',
          textDark: '#1A202C',
          textMuted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        accent: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        antigravity: '0 20px 60px rgba(27, 95, 170, 0.15), 0 4px 16px rgba(0, 0, 0, 0.08)',
        antigravityHover: '0 30px 70px rgba(27, 95, 170, 0.25), 0 8px 30px rgba(0, 0, 0, 0.12)',
        glow: '0 0 25px rgba(14, 165, 233, 0.3)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

