/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#4C506AFF',
          100: '#535391FF',
          200: '#423870FF',
          300: '#313390FF',
          400: '#2F2A7AFF',
          500: '#1C197EFF',
          600: '#261A6AFF',
          700: '#120D38FF',
          800: '#0B146AFF',
          900: '#1E13BBFF',
        },
      },
    },
  },
  plugins: [],
};