import React, { FC } from 'react'
import Box from '@/atoms/Box'
import Text from '@/atoms/Text'

const Header: FC = () => {
  return (
    <Box>
      <Text as="h1" variant="caption">Header</Text>
    </Box>
  )
}

export default Header
