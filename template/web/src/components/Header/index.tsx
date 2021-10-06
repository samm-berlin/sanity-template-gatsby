import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Box from '@/atoms/Box'
import Text from '@/atoms/Text'
import Navigation from '@/components/Navigation'

interface Props {

}

const Header: FC = (props: Props) => {

  const { data } = useStaticQuery(graphql`
    query {
      data: sanitySiteSettingsNavigation {
        desktopMain {
          label
          link {
            ...Link
          }
        }
        mobileMain {
          label
          link {
            ...Link
          }
        }
        mobileSecondary {
          label
          link {
            ...Link
          }
        }
      }
    }
  `)

  return (
    <Box
      px={4}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      bg="rgba(220, 220, 220, 0.3)"
      height="12rem"
      width="100%"
      position="fixed"
      zIndex={1}
      style={{
        backdropFilter: "blur(10px)"
      }}
    >
      <Text as="h1" variant="head">
        SAMM
      </Text>
      <Navigation desktopMain={data.desktopMain} mobileMain={data.mobileMain} mobileSecondary={data.mobileSecondary} />
    </Box>
  )
}

export default Header
