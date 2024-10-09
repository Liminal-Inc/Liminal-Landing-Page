/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector'],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          dark: '#4338CA',
        },
        secondary: '#7C3AED',
        accent: '#EC4899',
        background: '#F3F4F6',
        surface: '#FFFFFF',
        text: '#1F2937',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
