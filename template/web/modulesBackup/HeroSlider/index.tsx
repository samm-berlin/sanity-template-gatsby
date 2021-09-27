import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { SanityModuleHeroSlider } from 'web/graphql-types'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Typography, Box } from '@material-ui/core'

const StyledBox = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  padding: 5rem;
  z-index: 50;
  width: 50%;
  max-width: 600px;
`

const StyledCarousel = styled(Carousel)`
  .carousel-status {
    display: none !important;
  }
  ul > li {
    padding-left: 0;
  }
`

const HeroSlider: FC<SanityModuleHeroSlider> = ({
  titleOne,
  titleTwo,
  images,
  ...props
}) => {
  const [carouselIndex, setCarouselIndex] = useState(0)

  if (images)
    return (
      <>
        {!carouselIndex ? (
          <StyledBox>
            <Box pb={4}>
              <Typography variant="h2" component="h1" color="primary">
                {titleOne}
              </Typography>
            </Box>

            <Typography variant="h2" component="h1" color="primary">
              {titleTwo}
            </Typography>
          </StyledBox>
        ) : null}

        <StyledCarousel
          showArrows={false}
          showThumbs={false}
          showIndicators={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={4000}
          transitionTime={1000}
          dynamicHeight={true}
          onChange={(index, item) => {
            setCarouselIndex(index)
          }}
        >
          {images?.map(image => (
            <div key={image?._key}>
              <img src={image?.asset?.url}></img>
            </div>
          ))}
        </StyledCarousel>
      </>
    )
  return null
}

export default HeroSlider

export const query = graphql`
  fragment moduleHeroSliderData on SanityModuleHeroSlider {
    _key
    _type
    titleOne
    titleTwo
    images {
      asset {
        url
      }
    }
  }
`
