module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      colors: {
        primary: {
          100: 'rgba(31, 41, 55, 0.1)',
          200: 'rgba(31, 41, 55, 0.2)',
          300: 'rgba(31, 41, 55, 0.3)',
          400: 'rgba(31, 41, 55, 0.4)',
          500: 'rgba(31, 41, 55, 0.5)',
          600: 'rgba(31, 41, 55, 0.6)',
          700: 'rgba(31, 41, 55, 0.7)',
          800: 'rgba(31, 41, 55, 0.8)',
          900: 'rgba(31, 41, 55, 0.9)',
          1000: 'rgba(31, 41, 55, 1)',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};
