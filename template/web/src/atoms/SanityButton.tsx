import NotFoundPage from '@/pages/404';
import React, { FC } from 'react'
import styled from 'styled-components'
import { compose, color, border, variant, typography, space, SpaceProps, TypographyProps, ColorProps, BorderProps } from 'styled-system'
import { SanityButton as SanityButtonProps } from 'web/types/graphql-types';
import Box from './Box';
import { Link } from './Link';
import Text from './Text';

export interface ButtonProps extends SanityButtonProps, TypographyProps, SpaceProps, ColorProps, BorderProps {
    variant: 'primary' | 'secondary' | 'outline';
};

const Button = styled(Link)<ButtonProps>(
    compose(
        border,
        color,
        space,
        typography
    ),
    variant({
        variants: {
            primary: {
                bg: 'brand',
                color: 'background',
                '&:hover': {
                    bg: 'text',
                }
            },
            secondary: {
                bg: 'text',
                color: 'background',
                '&:hover': {
                    bg: 'brand',
                    color: 'background'
                }
            },
            outline: {
                bg: 'background',
                color: 'brand',
                border: '2px solid',
                borderColor: 'brand',
                '&:hover': {
                    bg: 'brand',
                    color: 'background'
                }
            }
        }
    }),
    {
        display: 'inline-block',
        textDecoration: 'none',
        width: 'fit-content'
    }
)

const SanityButton: FC<ButtonProps> = props =>
    <>
        <Button to="/" borderRadius={4} p={1} m={1} variant="primary">
            {props?.properties?.label}
        </Button>
        <Button to="/" borderRadius={4} p={1} m={1} variant="secondary">
            {props?.properties?.label}
        </Button>
        <Button to="/" borderRadius={4} p={1} m={1} variant="outline">
            {props?.properties?.label}
        </Button>
    </>

export default SanityButton;