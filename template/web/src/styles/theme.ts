import { createGlobalStyle } from 'styled-components'
// import { p, h4 } from '@/styles/typography'

export const theme = {
  scale: 12 / 16,
  fontSize: {
    desktop: 12,
    tablet: 10,
    mobile: 8
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 1024,
      md: 1600
    }
  },
  background: '#0F46FA'
}

// const GlobalStyle = createGlobalStyle`
//   html{
//     font-size: ${theme.fontSize.mobile}px;
//     @media (min-width: ${theme.breakpoints.values.sm}px) {
//       font-size: ${theme.fontSize.tablet}px;
//     }
//     @media (min-width: ${theme.breakpoints.values.md}px) {
//       font-size: ${theme.fontSize.desktop}px;
//     }
//   }

//   a {
//     color: white;
//   }

//   p {
//     ${p}
//   }

//   h3 {
//     ${h4}
//     margin-bottom: 0.5rem;
//   }

//   h3,
//   ol + h3,
//   ul + h3 {
//     margin-top: 1.5rem;
//   }

//   ol,
//   ul {
//     margin-bottom: 0.5rem;
//   }

//   ol {
//     padding-left: 1.75rem;

//     > li {
//       padding-left: 0.25rem;
//     }
//   }

//   ul {
//     list-style: disc;
//     padding-left: 1.5rem;

//     > li {
//       padding-left: 0.5rem;
//     }
//   }

//   a {
//     display: inline;
//     font-weight: 700;
//     text-decoration: underline;
//     text-underline-offset: 0.15em;
//     text-decoration-thickness: 1px;

//     :focus,
//     :hover {
//       opacity: 0.7;
//     }
//   }

//   strong {
//     display: inline;
//     font-weight: 700;
//   }

// `
// export default GlobalStyle
