import Box from '@/atoms/Box'
import Link from '@/atoms/Link'
import React from 'react'
import { SanityMenuLink } from 'web/types/graphql-types'

interface Props {
  mobileMain: SanityMenuLink[]
  mobileSecondary: SanityMenuLink[]
  drawerOpened: boolean
}

const NavigationDrawer = (props: Props) => {
  const { mobileMain, mobileSecondary, drawerOpened } = props;
  return (
    <Box
      bg="rgba(220, 220, 220, 1)"
      display={['flex', 'none']}
      flexDirection="column"
      height="calc(100vh - 4rem)"
      justifyContent="space-between"
      overflow="hidden"
      position="fixed"
      right="0"
      top="4rem"
      transition="width 1s"
      width={drawerOpened ? '100%' : '0'}
      zIndex={100}>
      <Box m={2} display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
        {mobileMain && mobileMain.map(({ label, link }) => <Link {...link}>{label}</Link>)}
      </Box>
      <Box m={2} display="flex" flexDirection="row" justifyContent="flex-end" alignItems="center">
        {mobileSecondary.map(({ label, link }) => (<Box ml={2}><Link {...link}>{label}</Link></Box>))}
      </Box>
    </Box>
  )
}

export default NavigationDrawer
