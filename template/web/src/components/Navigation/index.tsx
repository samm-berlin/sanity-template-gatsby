import React, {FC, useState} from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { SanityMenuLink } from 'web/types/graphql-types'
import Box from '@/atoms/Box'
import Link from '@/atoms/Link'
import { IoMenu, IoClose } from 'react-icons/io5'
import Text from '@/atoms/Text'


interface Props {
  desktopMain: SanityMenuLink[]
  mobileMain: SanityMenuLink[]
  mobileSecondary: SanityMenuLink[]
}

const Navigation: FC<Props> = (props) => {
  const { desktopMain, mobileMain, mobileSecondary } = props;

  const [drawerOpened, setDrawerOpened] = useState(false)

  return (
    <Box display="flex" width="33%">
      <Box display={['none', 'flex']} width="100%" justifyContent="space-between">
        {desktopMain.map(({ label, link }) => (
          <Box px={1}>
            <Link {...link}>
              <Text color="white">
                {label}
              </Text>
            </Link>
          </Box>
        ))}
      </Box>
      <Box display={['flex', 'none']}>
        {drawerOpened ?
          <IoClose size="2em" onClick={() => { setDrawerOpened(!drawerOpened) }}/>
          : <IoMenu size="2em" onClick={() => { setDrawerOpened(!drawerOpened) }} /> }
      </Box>
      <Box
        bg="#fff"
        display={['flex', 'none']}
        flexDirection="column"
        height="calc(100vh - 70px)"
        justifyContent="space-between"
        overflow="hidden"
        position="fixed"
        right="0"
        top="70px"
        transition="width 1s"
        width={drawerOpened ? '100%' : '0'}
        zIndex={100}>
        <Box m={2} display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
          {mobileMain && mobileMain.map(({ label, link }) => <Link color="text" {...link}>{label}</Link>)}
        </Box>
        <Box m={2} display="flex" flexDirection="row" justifyContent="flex-end" alignItems="center">
          {mobileSecondary.map(({ label, link }) => (<Box ml={2}><Link color="text" {...link}>{label}</Link></Box>))}
        </Box>
      </Box>
    </Box>
  )
}

export const query = graphql`
  fragment MenuLink on SanityMenuLink {
    label
    link {
      ...Link
    }
  }
`
export default Navigation
