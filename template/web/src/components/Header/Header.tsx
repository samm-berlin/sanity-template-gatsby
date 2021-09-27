import React, { FC } from 'react'
import { Button } from '@material-ui/core'
import styled from 'styled-components'

const LogoButton = styled(Button)`
  background: green;
`

const Header: FC = () => {
  return (
    <div>
      <LogoButton />
    </div>
  )
}

export default Header
