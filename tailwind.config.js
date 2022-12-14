/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        portfoliotheme: {
          primary: '#a68663',
          secondary: '#3238a7',
          accent: '#7525da',
          neutral: '#c8220f',
          "base-100": "#FFFFFF"
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
