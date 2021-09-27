import { css } from 'styled-components';

import { media, rem, scale } from '@/styles/utils';

const reset = css`
  font-weight: normal;
  text-decoration: none;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const h1 = css`
  ${reset}
`;

export const h2 = css`
  ${reset}
`;

export const h3 = css`
  ${reset}
  font-size: ${rem(20)};
  line-height: ${rem(22)};
  font-weight: 700;
`;

export const h4 = css`
  ${reset}
  font-size: ${rem(12)};
  line-height: ${rem(16)};
  font-weight: 700;
  margin-bottom: ${scale(1.5)};
  ${media.md`
    font-size: ${rem(12)};
    line-height: ${rem(16)};
  `}
`;

export const h5 = css`
  ${reset}
  font-size: ${rem(12)};
  line-height: ${rem(16)};
  ${media.md`
    font-size: ${rem(12)};
    line-height: ${rem(16)};
  `}
`;

export const pLarge = css`
  ${reset}
  font-size: ${rem(12)};
  line-height: ${rem(16)};

  ${media.md`
    font-size: ${rem(12)};
    line-height: ${rem(16)};
  `}
`;

export const p = css`
  ${reset}
  font-size: ${rem(10)};
  line-height: ${rem(12)};

  ${media.md`
    font-size: ${rem(10)};
    line-height: ${rem(12)};
  `}
`;

export const pSmall = css`
  ${reset}
  font-size: ${rem(8)};
  line-height: ${rem(10)};
  letter-spacing: 0.02em;
`;

export const bold = css`
  font-weight: 700;
`;

export const caps = css`
  text-transform: uppercase;
`;

export const cartCount = css`
  ${reset}
  padding-top: 1px;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
`;
