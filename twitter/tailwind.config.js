/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'twitter-blue': '#1DA1F2',
        'twitter-black': '#14171A',
        'twitter-dark-grey': '#657786',
        'twitter-light-grey': '#AAB8C2',
        'twitter-extra-light-grey': '#E1E8ED',
        'twitter-background': '#15202b'
      },
    },
  },
  plugins: [],
}

