import React, { FC } from 'react'

import { graphql } from 'gatsby'
import { Container, Box, Grid, Typography } from '@material-ui/core'
import {
  Maybe,
  SanityModuleFurtherReading,
  SanityPostOrStore
} from 'web/graphql-types'
import { Anchor, StyledTypography, Image, Post } from './furtherReadingStyles'

const FurtherReadingModule: FC<SanityModuleFurtherReading> = ({
  title = '',
  featuredPost = [],
  ...props
}) => {
  const isBrowser = typeof window !== 'undefined'
  if (!isBrowser) return <></>
  const paths = window.location.pathname.split('/').filter(str => str != '')
  const isStorePage = paths[0] == 'stores'
  const moduleContent = (
    <Box px={6} mt={5} mb={5} mr="-0.9167rem" ml="-0.9167rem">
      <Box
        mt="2.25rem"
        mb="2.25rem"
        pl="0.9167rem"
        pr="0.9167rem"
        ml="auto"
        mr="auto"
      >
        <StyledTypography
          component="h2"
          variant="subtitle1"
          maxWidth={12 / featuredPost.length}
        >
          {title && title}:
        </StyledTypography>
      </Box>
      <Grid alignContent="flex-start" container direction="row" spacing={0}>
        {featuredPost.map((postOrStore: Maybe<SanityPostOrStore>) => {
          return (
            <Post
              item
              xs={6}
              sm={6}
              md={12 / featuredPost.length}
              key={postOrStore?.id}
            >
              <Anchor
                href={`//${window?.location?.host || ''}/${
                  postOrStore?.slug?.current
                }`}
              >
                <Image
                  style={{
                    backgroundImage: `url(${postOrStore?.meta?.ogImage?.asset
                      ?.url || ''})`
                  }}
                />
                <Typography align="center" component="h3" variant="subtitle1">
                  {postOrStore?.title}
                </Typography>
              </Anchor>
            </Post>
          )
        })}
      </Grid>
    </Box>
  )
  if (isStorePage) return moduleContent
  return <Container maxWidth="lg"> {moduleContent}</Container>
}

export default FurtherReadingModule

export const query = graphql`
  fragment moduleFurtherReadingData on SanityModuleFurtherReading {
    _key
    _type
    title
    featuredPost {
      ... on SanityPost {
        id
        title
        slug {
          current
        }
        meta {
          ogImage {
            asset {
              altText
              url
            }
          }
        }
      }
      ... on SanityStore {
        id
        title
        slug {
          current
        }
        meta {
          ogImage {
            asset {
              url
              altText
            }
          }
        }
      }
    }
  }
`
