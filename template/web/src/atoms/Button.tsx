import React, { FC } from 'react'
import styled from 'styled-components'
import { compose, color, border, variant, typography, space, SpaceProps, TypographyProps, ColorProps, BorderProps } from 'styled-system'
import { SanityButton as SanityButtonProps } from 'web/types/graphql-types';
import Box from './Box';
import { Link } from './Link';

export interface ButtonProps extends
    SanityButtonProps,
    TypographyProps,
    SpaceProps,
    ColorProps,
    BorderProps {
    variant: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    // variant: 'primary' | 'secondary' | 'outline';
};

const buttonCompose = compose(
    border,
    color,
    space,
    typography
);
const buttonVariants = variant({
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
});
const buttonStyle = {
    display: 'inline-block',
    textDecoration: 'none',
    width: 'fit-content',
    cursor: 'pointer'
};

const DivButton = styled(Box)<ButtonProps>(buttonCompose, buttonVariants, buttonStyle);

const LinkButton = styled(Link)<ButtonProps>(buttonCompose, buttonVariants, buttonStyle);

export const SanityButton: FC<ButtonProps> = props =>
    <LinkButton
        to={props.link?.url || ''}
        variant={props.properties?.style || 'primary'}
        target={props.link?.targetBlank ? '_blank' : ''}
        borderRadius={4}
        internal={props.link?.internal}
        type={props.link?.type}
        p={2}
        m={1}
    >
        {props?.properties?.label}
    </LinkButton>

export const Button: FC<ButtonProps> = props =>
    <DivButton
        borderRadius={4}
        p={2}
        m={1}
        {...props}
    />
