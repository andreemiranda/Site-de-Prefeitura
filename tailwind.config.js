import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#004A8D',
          50: '#E6F0F9',
          100: '#CCE0F3',
          200: '#99C2E8',
          300: '#66A3DC',
          400: '#3385D1',
          500: '#004A8D',
          600: '#003B71',
          700: '#002C54',
          800: '#001E38',
          900: '#000F1C',
        },
        secondary: {
          DEFAULT: '#F58220',
          50: '#FEF2E6',
          100: '#FDE5CC',
          200: '#FACB99',
          300: '#F8B166',
          400: '#F69733',
          500: '#F58220',
          600: '#C46819',
          700: '#934E13',
          800: '#62340C',
          900: '#311A06',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      boxShadow: {
        'custom': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'custom-lg': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [typography],
}