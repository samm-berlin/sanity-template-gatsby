import Box from '@/atoms/Box'
import { graphql, useStaticQuery } from 'gatsby'
import React, { FC } from 'react'

const Footer: FC = () => {

  const { data } = useStaticQuery(graphql`
    query {
      data: sanitySiteSettingsNavigation {
        desktopSecondary {
          ...MenuLink
        }
      }
    }
  `)

  return (
    <Box display={['none', 'flex']} >
      <h1>Footer</h1>
    </Box>
  )
}

export default Footer
