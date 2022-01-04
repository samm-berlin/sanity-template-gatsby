import React, { FC, ReactChild } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'
import Box from '@/atoms/Box'
import Head from './Head'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import GlobalStyle from '@/styles/globalStyle'

type Props = {
  children: ReactChild | ReactChild[] | JSX.Element
}

const Layout: FC<Props> = (props) => {
  const { children } = props

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Box color="black" bg="background">
        <Head />
        <Header />
        {children}
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default Layout
