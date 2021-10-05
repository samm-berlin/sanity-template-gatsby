import React, { FC } from 'react'
import { graphql } from 'gatsby'
import Marquee from 'react-ticker'
import Text from '@/atoms/Text'

const MarqueeModule: FC<any> = ({ marqueetext, marqueestyle }) =>
    <Marquee>
        {() =>
            <Text as="h3" variant={marqueestyle} pr={2}>
                {marqueetext}{'\xa0\xa0\xa0\xa0\xa0'}
            </Text>
        }
    </Marquee>

export default MarqueeModule

export const query = graphql`
  fragment moduleMarqueeData on SanityModuleMarquee {
    marqueetext: text
    marqueestyle: variant
  }
`
