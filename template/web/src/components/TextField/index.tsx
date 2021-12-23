import React, { FC, useState } from 'react'
import styled from 'styled-components'
import textVariants from '@/styles/textVariants'
import { border, BorderProps,  compose,  layout, LayoutProps, space, SpaceProps, typography, TypographyProps, variant } from 'styled-system'
import Box from '@/atoms/Box'
import BGDark from '@/assets/newsletterBGDark.svg'
import BGLight from '@/assets/newsletterBGLight.svg'
import BGTransparent from '@/assets/newsletterBGTransparent.svg'
import theme from '@/styles/theme'

interface InputProps extends
  // Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "height" | "width" | "size">,
  SpaceProps,
  LayoutProps,
  BorderProps,
  TypographyProps {
  autocomplete?: string;
  id?: string;
  label?: string;
  name?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  type?: 'email' | 'text';
  value: string;
  variant?: 'primary' | 'desktop';
  }

const inputCompose = compose(border, layout, space, typography)
const inputVariants = variant({
  variants: {
    primary: {
      bg: 'grey',
      color: 'grey',
      backgroundImage: `url(${BGLight})`,
      backgroundRepeat: 'no-repeat',
      border: 'unset',
      '&:focus-visible': {
        bg: 'grey',
        color: 'white',
        border: 'null',
        backgroundImage: `url(${BGDark})`,
      },
      '::placeholder': {
        color: 'grey'
      }
    },
    desktop: {
      bg: 'transparent',
      color: 'white',
      backgroundImage: `url(${BGTransparent})`,
      backgroundRepeat: 'no-repeat',
      border: 'unset',
      '&:focus-visible': {
        bg: 'transparent',
        color: 'white',
        border: 'null',
        backgroundImage: `url(${BGTransparent})`,
      },
      '::placeholder': {
        color: 'white'
      }
    }
  }
})

const inputStyle = {
  width: '100%',
  height: '100%',
  padding: '1rem',
  paddingLeft: '3.5rem',
  ...textVariants.captionSmall,
  fontSize: theme.fontSizes[textVariants.captionSmall.fontSize],
  lineHeight: '23px',
  letterSpacing: '0em',
  textAlign: 'left',
}

const Input = styled.input<InputProps>(inputCompose, inputVariants, inputStyle)


const TextField: FC<InputProps> = (props) => {
  const { type, name, id, label, autocomplete, variant, value, setValue, ...boxprops} =  props

  const [ focused, setFocused ] = useState(false);

  return (
    <Box {...boxprops}>
      <Input
        autoComplete={autocomplete}
        id={id}
        name={ name || "text_field"}
        onChange={(event) => {setValue(event.target.value)}}
        onFocus={() => {setFocused(true)}}
        onBlur={() => {setFocused(false)}}
        placeholder={label}
        type={type || 'text'}
        value={value}
        variant={variant || 'primary'}/>
    </Box>
  )
}

export default TextField
