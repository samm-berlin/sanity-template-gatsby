import React, {FC, useState} from 'react'
import { graphql } from 'gatsby'
import { SanityMenuLink } from 'web/types/graphql-types'
import Box from '@/atoms/Box'
import Link from '@/atoms/Link'
import NavigationDrawer from '@/components/Navigation/NavigationDrawer'
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
