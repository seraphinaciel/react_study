/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        red2: 'pink',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        dropIn: {
          from: { transform: 'scale(.95)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' },
        },
        dropOut: {
          from: { transform: 'scale(1)', opacity: '1' },
          to: { transform: 'scale(.95)', opacity: '0' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        dropIn: 'dropIn .5s ease-in-out',
        dropOut: 'dropOut .5s ease-in-out',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
