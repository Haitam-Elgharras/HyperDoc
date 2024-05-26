/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      translate: {
        '1/10': '10%',
        '1/4': '25%',
        '1/2': '50%',
        '-1/10': '-10%',
        '-1/4': '-25%',
        '-1/2': '-50%',
      },
    },
  },
  plugins: [],
}

