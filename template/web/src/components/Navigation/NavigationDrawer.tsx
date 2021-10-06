import Box from '@/atoms/Box'
import Link from '@/atoms/Link'
import React from 'react'
import { SanityMenuLink } from 'web/types/graphql-types'
import { IoClose } from 'react-icons/io5'
import Text from '@/atoms/Text'

interface Props {
  mobileMain: SanityMenuLink[]
  mobileSecondary: SanityMenuLink[]
  drawerOpened: boolean
  closeDrawer: () => void
}

const NavigationDrawer = (props: Props) => {
  const { mobileMain, mobileSecondary, drawerOpened, closeDrawer } = props;
  return (
    <Box
      display={['flex', 'none']}
      height="100vh"
      overflow="hidden"
      position="fixed"
      right="0"
      top="0"
      transition="width .6s"
      width={drawerOpened ? '100%' : '0'}
      zIndex={100}
      bg="black"
    >
      <Box
        p={2}
        display="flex"
        height="100%"
        width="100%"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <IoClose size="2em" color="white" onClick={() => closeDrawer()} />
        <Box m={2} display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
          {mobileMain && mobileMain.map(({ label, link }) =>
            <Link {...link} >
              <Text color="white" py={2}>
                {label}
              </Text>
            </Link>
          )}
        </Box>
        <Box m={2} display="flex" flexDirection="row" justifyContent="flex-end" alignItems="center">
          {mobileSecondary.map(({ label, link }) =>
            <Link {...link}>
              <Text color="white" pl={2}>
                {label}
              </Text>
            </Link>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default NavigationDrawer
