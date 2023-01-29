/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        'protruding': 'var(--protruding-effect)',
        'protruding-lime100': 'var(--protruding-effect-lime100)',
        'sunken': 'var(--sunken-effect)',
        'sunken-dark': 'var(--darker-sunken-effect)',
        'shadow-only': 'var(--shadow-only)',
        'smooth-corner': 'var(--smooth-corner)' ,
        'sunken-white': 'var(--white-sunken-effect)'
      },
      backgroundImage: {
        'convex': 'var(--convex-surface)',
        'concave': 'var(--concave-surface)',
        'concave-dark': 'var(--darker-concave-surface)'
      },
      backgroundColor: {
         'primary': 'var(--background-lightblue)'
      },
      zIndex: {
        'menuButton': 'var(--menu-button-Zindex)',
        'resumeNavbar': 'var(--resume-navbar-Zindex)',
        'resumeNavbarBackdrop': 'var(--resume-navbar-backdrop-Zindex)'
      },
      dropShadow: {
        '3xl': '0px 0px 5px rgba(0, 0, 0, 0.63)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      width: {
        'sub13px' : 'calc(100% - 13px)',
        'sub20px' : 'calc(100% - 20px)'
      },
      height: {
        'sub13px' : 'calc(100% - 13px)',
        'sub20px' : 'calc(100% - 20px)'
      }
    },
  },
  plugins: [],
}
// inset 0px 0px 7px rgba(0, 0, 0, 0.63);