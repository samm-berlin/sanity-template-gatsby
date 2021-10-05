import React, {FC, useState} from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { SanityMenuLink } from 'web/types/graphql-types'
import Box from '@/atoms/Box'
import Text from '@/atoms/Text'
import { Link } from '@/atoms/Link'
import { Button } from '@/atoms/Button'

interface Props {
  desktopMain: SanityMenuLink[]
  mobileMain: SanityMenuLink[]
}

export const Navigation: FC<Props> = (props) => {
  const { desktopMain, mobileMain } = props;

  const [drawerOpened, setDrawerOpened] = useState(false)

  return (
    <Box display="flex">
      <Box display={['none', 'flex']} >
        {desktopMain.map(({ label, link }) => (<Box px={1}> <Link {...link}>{label}</Link> </Box>))}
      </Box>
      <Box display={['flex', 'none']}>
        <Button variant="primary" onClick={() => {setDrawerOpened(!drawerOpened)}}>BurgerIcon</Button>
      </Box>
      <Box
        display={['flex', 'none']}
        width={drawerOpened ? '200px' : '0'}
        transition="width 1s"
        height="calc(100vh - 70px)"
        position="fixed"
        top="70px"
        right="0"
        zIndex={100}
        bg="#fff">
        <Box m={2} display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start" width="100%">
          {mobileMain.map(({ label, link }) => <Link {...link}>{label}</Link>)}
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
