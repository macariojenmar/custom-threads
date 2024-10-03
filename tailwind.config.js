/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#640D5F",
        "paper-bg": "#74156E",
        "accent-rose": "#D91656",
        "highlight-yellow": '#FFEB55',
        "accent-pink": '#eb68a2',
        "shirt-grey": "#BBBABD",
        "shirt-black": "#292929",
        "shirt-maroon": "#55202E",
        "shirt-indigo": "#718697",
        "shirt-mustard": "#E79524"
      },
      screens: {
        'xs': '375px',
        'sm': '768px',
        'md': '1024px',
        'lg': '1920px',
        'xl': '1440px'
      },
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)'
      }
    },
  }
}