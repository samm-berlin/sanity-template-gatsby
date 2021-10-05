export const brandColors = {
  green: '#00ff00',
  blue: '#007ce0'
}

export default {
  colors: {
    brand: Object.values(brandColors)[0],
    text: '#000',
    background: '#fff',
  },
  fonts: {
    sans: `'Archivo', sans-serif`,
    serif: `'EB Garamond', serif`,
    mono: `'Nanum Gothic Coding', monospace`,
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'text',
    },
    test: {
      color: 'green',
      bg: 'blue',
    }
  },
  space: [0, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32],
  radii: [0, 1, 2, 4, 6, 8, 16],
  containerWidth: "1440px",
  minComponentWidth: "300px",
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
  },
}

export const darkTheme = {
  colors: {
    brand: Object.values(brandColors)[0], // this is only a default and gets overriden by module options
    text: '#f3f3f3',
    background: '#000e1a',
  },
}

export const brandTheme = {
  colors: {
    brand: '#000e1a',
    text: '#f3f3f3',
  },
}