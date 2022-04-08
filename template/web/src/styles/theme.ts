export const brandColors = {
  green: '#00ffe0',
  blue: '#007ce0'
}

export const breakpoints = ['786px', '1440px']

export default {
  colors: {
    brand: Object.values(brandColors)[0],
    text: '#000',
    background: 'rgba(1,1,1,0)',
    grey: '#E4E4E4',
    lightGrey: '#BFBFBF',
    black: '#000',
    white: '#fff'
  },
  fonts: {
    sans: '\'Archivo\', sans-serif',
    serif: '\'EB Garamond\', serif',
    mono: '\'Nanum Gothic Coding\', monospace'
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'text'
    },
    test: {
      color: 'green',
      bg: 'blue'
    }
  },
  space: [0, '1rem', '2rem', '3rem', '4rem', '5rem'],
  fontSizes: [
    '1.5rem', // 12 - 0
    '1.75rem', // 14 - 1
    '2rem', // 16 - 2
    '2.5rem', // 20 - 3
    '3rem', // 24 - 4
    '4rem', // 32 - 5
    '5rem', // 40 - 6
    '6rem', // 48 - 7
    '7rem', // 56 - 8
    '8rem', // 64 - 9
    '9rem', // 72 - 10
    '10rem', // 80 - 11
    '12rem', // 96 -12
    '14rem', // 112 -13
    '16rem', // 128 -14
    '18rem', // 144 -15
    '20rem', // 160 -16
    '25rem', // 200 -17
    '30rem' // 240 - 18
  ],
  radii: [0, 1, 2, 4, 6, 8, 16],
  containerWidth: '1200px',
  minComponentWidth: '300px',
  breakpoints: breakpoints,
  mediaQueries: {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    large: `@media screen and (min-width: ${breakpoints[1]})`
  }
  // scale: 12 / 16,
  // fontSize: {
  //   desktop: 12,
  //   tablet: 10,
  //   mobile: 8
  // },
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 1024,
  //     md: 1600
  //   }
  // }
}

export const lightTheme = {
  colors: {
    brand: Object.values(brandColors)[0], // this is only a default and gets overriden by module options
    text: '#000e1a',
    background: '#f3f3f3',
    grey: '#E4E4E4'
  }
}

export const darkTheme = {
  colors: {
    brand: Object.values(brandColors)[0], // this is only a default and gets overriden by module options
    text: '#f3f3f3',
    background: '#000e1a',
    grey: '#E4E4E4'
  }
}

export const brandTheme = {
  colors: {
    brand: '#000e1a',
    text: '#f3f3f3',
    grey: '#E4E4E4'
  }
}

export const moduleWidth = {
  narrow: 4 / 12,
  regular: 6 / 12,
  wide: 8 / 12
}
