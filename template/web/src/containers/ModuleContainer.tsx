import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import Box from '@/atoms/Box'
import { graphql } from 'gatsby'
import { SanityModuleDefaultFields } from 'web/types/graphql-types'
import pageTheme, { lightTheme, darkTheme, brandTheme } from '@/styles/theme'

type Props = {
  options?: SanityModuleDefaultFields | null
}

const ModuleContainer: FC<Props> = ({ children, options }) => {
  return (
    <ThemeProvider
      theme={
        options?.theme?.theme === 'none'
          ? { ...pageTheme, colors: { ...pageTheme.colors, brand: options?.theme?.list?.value } }
          : options?.theme?.theme === 'light'
          ? { ...pageTheme, colors: { ...lightTheme.colors, brand: options?.theme?.list?.value } }
          : options?.theme?.theme === 'dark'
          ? { ...pageTheme, colors: { ...darkTheme.colors, brand: options?.theme?.list?.value } }
          : {
              ...pageTheme,
              colors: {
                ...brandTheme.colors,
                background: options?.theme?.list?.value
              }
            }
      }
    >
      <Box bg={'background'}>
        <Box
          px={options?.padding?.x}
          py={options?.padding?.y}
          mx="auto"
          maxWidth={options?.padding?.container ? pageTheme.containerWidth : ''}
          minWidth={pageTheme.minComponentWidth}
          bg={'background'}
          color={'text'}
          height="100%"
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default ModuleContainer

export const query = graphql`
  fragment ModuleOptions on SanityModuleDefaultFields {
    activation {
      hidden
    }
    padding {
      container
      x
      y
    }
    theme {
      theme
      list {
        value
        title
      }
    }
  }
`
