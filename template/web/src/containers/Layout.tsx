import React, { FC, ReactChild } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import Box from '@/atoms/Box'
import Head from './Head'
import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'

type Props = {
  children: ReactChild | ReactChild[] | JSX.Element
}

const Layout: FC<Props> = props => {
  const { children } = props

  return (
    <Box>
      <Head />
      <ThemeProvider theme={theme}>
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </Box>
  )
}

export default Layout
