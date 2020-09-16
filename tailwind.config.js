module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'mx-xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'mx-lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'mx-md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'mx-sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      // 'xs': {'min': '0px', 'max': '639px'},
      // 'sm': {'min': '640px', 'max': '767px'},
      // 'md': {'min': '768px', 'max': '1023px'},
      // 'lg': {'min': '1024px', 'max': '1279px'},
      // 'xl': {'min': '1280px'},
    },
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        'indigo': '#9561e2',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
    fontFamily: {
      'sans': ['Poppins', 'Sans-serif']
    },
    listStyleType: {
      square: 'square',
      roman: 'upper-roman',
      none: 'none',
      decimal: 'decimal'
    }
  },
}
