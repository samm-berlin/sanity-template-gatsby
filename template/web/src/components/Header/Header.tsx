import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Box from '@/atoms/Box'
import Text from '@/atoms/Text'
import { Navigation } from '@/components/Navigation'

interface Props {

}

const Header: FC = (props: Props) => {

  const { data } = useStaticQuery(graphql`
    query {
      data: sanitySiteSettingsNavigation {
        desktopMain {
          ...MenuLink
        }
        mobileMain {
          ...MenuLink
        }
      }
    }
  `)

  return (
    <Box
      px="3"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      bg="paper"
      height="70px"
      position="fixed"
    >
      <Text as="h1" variant="caption">
        Header Title
      </Text>
      <Navigation desktopMain={data.desktopMain} mobileMain={data.mobileMain} />
    </Box>
  );
}

export default Header
