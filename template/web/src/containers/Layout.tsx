import React, { FC, ReactChild } from 'react'
import { Container, CssBaseline } from '@material-ui/core'
import GlobalStyle from '@/styles/theme'
import { ThemeProvider } from '@material-ui/styles'
import theme from '@/styles/MUItheme'
import Head from './Head'
import Navigation from '@/components/Navigation/Navigation'
import Footer from '@/components/Footer'
import { NavigationProvider } from '@/components/Navigation/NavigationContext'

type Props = {
  children: ReactChild | ReactChild[] | JSX.Element
  footerIsHalf?: boolean
  displayNone?: boolean
  useLightBackground?: boolean | null
}

const Layout: FC<Props> = props => {
  const { children, footerIsHalf, displayNone, useLightBackground } = props
  const lightBlue = theme.palette.secondary.main
  const royalBlue = theme.palette.background.default

  return (
    <Container disableGutters={true} maxWidth={false}>
      <Head />
      <ThemeProvider
        theme={
          useLightBackground
            ? {
                ...theme,
                palette: {
                  ...theme.palette,
                  secondary: {
                    ...theme.palette.secondary,
                    main: royalBlue
                  },
                  background: {
                    paper: lightBlue,
                    default: lightBlue
                  },
                  text: {
                    ...theme.palette.text,
                    primary: royalBlue
                  }
                }
              }
            : theme
        }
      >
        <NavigationProvider>
          <CssBaseline />
          <GlobalStyle />
          <Navigation />
          {children}
          <Footer displayNone={displayNone} half={footerIsHalf} />
        </NavigationProvider>
      </ThemeProvider>
    </Container>
  )
}

export default Layout
