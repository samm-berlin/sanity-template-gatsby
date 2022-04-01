import theme from './theme'

export default {
  normal: {
    fontFamily: theme.fonts.sans,
    fontSize: 3,
    fontWeight: 300
  },
  caption: {
    fontFamily: theme.fonts.sans,
    fontSize: 4
  },
  captionSmall: {
    fontFamily: theme.fonts.sans,
    fontSize: 2
  },
  head: {
    fontFamily: theme.fonts.sans,
    fontSize: 5,
    fontWeight: 900,
    textTransform: 'uppercase',
    py: 2
  },
  relatedTitle: {
    fontSize: 5,
    fontWeight: 700
  },
  cardTitle: {
    fontSize: 4,
    fontWeight: 700,
    lineHeight: 1
  },
  subhead: {
    fontFamily: theme.fonts.serif,
    fontSize: 4,
    fontWeight: 400,
    my: 1
  },
  body: {
    fontFamily: theme.fonts.sans,
    fontSize: 3,
    fontWeight: 300
  },
  h1: {
    fontSize: [12, 15, 19],
    fontWeight: 700,
    lineHeight: 0.95
  },
  h2: {
    fontSize: [10, 14, 18],
    fontWeight: 700,
    lineHeight: 0.95
  },
  h3: {
    fontSize: [7, 13, 17],
    fontWeight: 700,
    lineHeight: 0.98
  },
  h4: {
    fontSize: [3, 11, 15],
    fontWeight: 1,
    lineHeight: 0.98
  },
  h5: {
    fontSize: [9, 9, 14],
    fontWeight: 700,
    lineHeight: 1
  },
  h6: {
    fontSize: [8, 8, 13],
    fontWeight: 700,
    lineHeight: 1.05
  },
  bodyXL: {
    fontSize: [9, 9, 14],
    fontWeight: 300,
    lineHeight: 1.15
  },
  bodyL: {
    fontSize: [7, 8, 11],
    fontWeight: 300,
    lineHeight: 1.2
  },
  bodyM: {
    fontSize: [3, 6, 8],
    fontWeight: 300,
    lineHeight: 1.2
  },
  bodyS: {
    fontSize: [2, 20, 6],
    fontWeight: 300,
    lineHeight: 1.2
  }
}
