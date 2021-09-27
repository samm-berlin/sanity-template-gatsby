import React, { FC } from 'react'

import { graphql } from 'gatsby'
import { Grid, Box, Typography } from '@material-ui/core'
import { SanityModuleImage } from 'web/graphql-types'
import { Image } from './ImageStyle'

const ImageModule: FC<SanityModuleImage> = ({ image, ...props }) =>
  image?.asset?.url ? (
    <Box my={3} mx="auto" maxWidth="1440px" px={6}>
      <Grid direction="column" container alignItems="center" justify="center">
        <Image src={image?.asset?.url || ''} alt={image?.alt || ''} />
        {image.subtitle && (
          <Box pt={1}>
            <Typography variant="body2"> {image.subtitle}</Typography>
          </Box>
        )}
      </Grid>
    </Box>
  ) : null

export default ImageModule

export const query = graphql`
  fragment moduleImageData on SanityModuleImage {
    image {
      alt
      subtitle
      asset {
        url
      }
    }
  }
`
