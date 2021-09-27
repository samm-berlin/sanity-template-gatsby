import React, { FC } from 'react'
import styled from 'styled-components'
import Box from './Box'
// import { pLarge, p, pSmall, h3, h4, h5 } from '@/styles/typography'
import { theme } from '@/styles/theme'

export enum TextComponent {
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'span',
  'p'
}

export enum TextSize {
  'normal',
  'l',
  'm',
  's',
}

export enum TextVariant {
  'head',
  'subhead',
  'normal',
  'body',
  'caption',
}

export interface TextProps {
  as?: TextComponent;
  component?: TextComponent;
  size?: TextSize;
  s?: TextSize;
  variant?: TextVariant;
  hyphens?: string;
  whiteSpace?: string;
  uppercase?: boolean;
  mono?: boolean;
  bold: boolean;
}

export default styled.div.attrs((props: TextProps) => ({
  as: props.as || props.component || 'span',
  variant: props.variant || 'normal',
  hyphens: props.hyphens || 'normal',
  whiteSpace: props.whiteSpace || 'normal',
  uppercase: props.uppercase,
  mono: props.mono,
  bold: props.bold
}))`

  hyphens: ${props => (props.hyphens ? 'auto' : 'none')};
  white-space: ${props => props.whiteSpace};

  ${props =>
    props.mono &&
    `
  `}

  ${props =>
    props.uppercase &&
    `
    text-transform: uppercase;
  `}

  ${props =>
    props.bold &&
    `
    font-weight: bold;
  `}
`


/* export default styled.div.attrs((props: TextProps) => ({
  as: props.as || props.component || 'span',
  variant: props.variant || 'normal',
  hyphens: props.hyphens || 'normal',
  whiteSpace: props.whiteSpace || 'normal',
  uppercase: props.uppercase,
  mono: props.mono,
  bold: props.bold
}))`
  ${props => props.t === -1 && pSmall}
  ${props => props.t === 0 && p}
  ${props => props.t === 1 && pLarge}
  ${props => props.as === 'h3' && h3}
  ${props => props.as === 'h4' && h4}
  ${props => props.as === 'h5' && h5}

  hyphens: ${props => (props.hyphens ? 'auto' : 'none')};
  white-space: ${props => props.whiteSpace};

  ${props =>
    props.mono &&
    `
    ((font-family: ${theme.font.mono};
  `}

  ${props =>
    props.uppercase &&
    `
    text-transform: uppercase;
  `}

  ${props =>
    props.bold &&
    `
    font-weight: bold;
  `}
` */
