import React, { FC } from 'react'

import { graphql } from 'gatsby'
import { Container, Box, Grid } from '@material-ui/core'
import { SanityModuleImageTwoColumns } from 'web/graphql-types'
import { ImageContainer, Image } from './ImageTwoColumnsStyle'

const ImageTwoColumnsModule: FC<SanityModuleImageTwoColumns> = ({ doubleImageArray, ...props }) => (
  <Box px={6} my={3} mx="auto" maxWidth="1440px">
    <Grid alignItems="center" container direction="row" spacing={0}>
      {doubleImageArray.map((img: any) => {
        return img?.asset?.url ? (
          <Grid item xs={12} sm={12} md={6}>
            <ImageContainer>
              <Image src={img?.asset?.url || ''} alt={img?.alt || ''} />
            </ImageContainer>
          </Grid>
        ) : null
      })}
    </Grid>
  </Box>
)

export default ImageTwoColumnsModule

export const query = graphql`
  fragment moduleImageTwoColumnsData on SanityModuleImageTwoColumns {
    _key
    _type
    doubleImageArray: image {
      alt
      asset {
        url
      }
    }
  }
`
