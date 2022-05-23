module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'dark-cyan': '#0e8784',
      'dark-grey-blue': '#333d4b',
      'pale-orange': '#fdd6ba',
      'cream': '#fefcf7',
      'grey': '#83888f',
      'wheat': '#F4F1EB',
      'white': '#fff',

    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '8rem',
      '10xl': '9rem',
    },
    extend: {
      fontFamily: {
        Fraunces: ['Fraunces', 'serif'],
        Barlow: ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
