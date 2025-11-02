/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Example: Tailwind blue-700
        accent: '#F97316',  // Optional: accent color
      },
    },
  },
  plugins: [],
}

