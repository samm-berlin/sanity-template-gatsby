import React, {FC, useState} from 'react'
import { graphql } from 'gatsby'
import { SanityMenuLink } from 'web/types/graphql-types'
import Box from '@/atoms/Box'
import Link from '@/atoms/Link'
import NavigationDrawer from '@/components/Navigation/NavigationDrawer'
import { IoMenu, IoClose } from 'react-icons/io5'


interface Props {
  desktopMain: SanityMenuLink[]
  mobileMain: SanityMenuLink[]
  mobileSecondary: SanityMenuLink[]
}

const Navigation: FC<Props> = (props) => {
  const { desktopMain, mobileMain, mobileSecondary } = props;

  const [drawerOpened, setDrawerOpened] = useState(false)

  return (
    <Box display="flex">
      <Box display={['none', 'flex']} >
        {desktopMain.map(({ label, link }) => (<Box px={1}> <Link {...link}>{label}</Link> </Box>))}
      </Box>
      <Box display={['flex', 'none']}>
        {drawerOpened ?
          <IoClose size="2em" onClick={() => { setDrawerOpened(!drawerOpened) }}/>
          : <IoMenu size="2em" onClick={() => { setDrawerOpened(!drawerOpened) }} /> }
      </Box>
      <NavigationDrawer drawerOpened={drawerOpened} mobileMain={mobileMain} mobileSecondary={mobileSecondary} />
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
