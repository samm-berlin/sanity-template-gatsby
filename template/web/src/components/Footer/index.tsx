import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { SanityMenuLink } from 'web/types/graphql-types'
import Box from '@/atoms/Box'
import Link from '@/atoms/Link'
import Text from '@/atoms/Text'

const Footer: FC = () => {

  const { data } = useStaticQuery(graphql`
    query {
      data: sanitySiteSettingsNavigation {
        desktopSecondary {
          label
          link {
            ...Link
          }
        }
      }
    }
  `)

  const desktopSecondary: SanityMenuLink[] = data.desktopSecondary

  return (
    <Box bg="black" height="12rem" display={['none', 'flex']} flexDirection="row" justifyContent="flex-end">
      <Box mx={4} display="flex" flexDirection="row" justifyContent="flex-end" alignItems="center">
        {desktopSecondary.map(({ label, link }) =>
          <Link {...link}>
            <Text color="white" pl={2}>
              {label}
            </Text>
          </Link>
        )}
      </Box>
    </Box>
  )
}

export default Footer
