import React from 'react'
import NichtNeu from '@/assets/icons/NichtNeu.svg'
import Cross from '@/assets/icons/Cross.svg'
import Burger from '@/assets/icons/Burger.svg'

type IconProps = {
  name: string
}

const Icon = (props: IconProps): JSX.Element => {
  const { name } = props

  const Icon = () => {
    switch (name) {
      case 'NichtNeu':
        return <NichtNeu />
      case 'cross':
        return <Cross />
      case 'burger':
        return <Burger />
      default:
        return <></>
    }
  }

  return <Icon></Icon>
}

export default Icon
