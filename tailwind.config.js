/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff4d4f',  // Pinkish-orange
        secondary: '#ff7f50',  // Coral
      },
      gradientColorStops: {
        'start': '#ff4d4f',
        'mid': '#ff7f50',
        'end': '#ffa500',
      },
    },
  },
  plugins: [],
};
