export const brandColors = {
  green: '#00ffe0',
  blue: '#007ce0'
}

export const breakpoints = ['786px', '1440px']

export default {
  colors: {
    brand: Object.values(brandColors)[0],
    text: '#000',
    background: 'rgba(1,1,1,0)'
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
  fontSizes: ['1.5rem', '1.75rem', '2rem', '3rem', '5rem', '6rem'],
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
    background: '#f3f3f3'
  }
}

export const darkTheme = {
  colors: {
    brand: Object.values(brandColors)[0], // this is only a default and gets overriden by module options
    text: '#f3f3f3',
    background: '#000e1a'
  }
}

export const brandTheme = {
  colors: {
    brand: '#000e1a',
    text: '#f3f3f3'
  }
}
