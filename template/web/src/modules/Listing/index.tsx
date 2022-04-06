import React, { FC } from 'react'
import { graphql, navigate, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Box from '@/atoms/Box'
import Text from '@/atoms/Text'
import Image from '@/atoms/SanityImage'
import Link from '@/atoms/Link'
import theme from '@/styles/theme'
import { getUri } from '@/utils/routing'

const ContainerBox = styled(Box)`
  .hover-box {
    opacity: 1;
  }
  &:hover .hover-box {
    opacity: 0;
  }
  .hover-box:hover {
    opacity: 1;
  }
  .hover-box:hover ~ .hover-box {
    opacity: 0;
  }
  .image-box {
    opacity: 0;
  }
  .hover-box:hover + .image-box {
    opacity: 1;
    -transition: opacity 1s;
  }
`

const HoverBox = styled(Box)`
  @media screen and (min-width: ${theme.breakpoints[0]}) {
    &:hover a div {
      color: white;
    }
  }
`

export type ListingItem = {
  _key?: string
  _type: string
  title: string
  slug: {
    _key: string
    _type: string
    current: string
  }
  featuredImage: {
    asset: {
      url: string
    }
  }
}

export type ModuleListing = {
  postType: 'jobs' | 'news' | 'project'
}

type ListingProps = ModuleListing

const Listing: FC<ListingProps> = (props) => {
  const { postType } = props

  const { allSanityProject, allSanityNews, allSanityJobs } = useStaticQuery(graphql`
    query {
      allSanityProject {
        nodes {
          _key
          _type
          title
          slug {
            current
          }
          featuredImage {
            ...ImageWithPreview
          }
        }
      }
      allSanityNews {
        nodes {
          _key
          _type
          title
          slug {
            current
          }
          featuredImage {
            ...ImageWithPreview
          }
        }
      }
      allSanityJobs {
        nodes {
          _key
          _type
          title
          featuredImage {
            ...ImageWithPreview
          }
        }
      }
    }
  `)

  const listingItems: ListingItem[] =
    postType === 'news'
      ? allSanityNews.nodes
      : postType === 'jobs'
      ? allSanityJobs.nodes
      : allSanityProject.nodes

  // useEffect(() => console.log(listingItems), [])

  return (
    <ContainerBox position="relative">
      {listingItems.map((item) => (
        <Box key={item._key}>
          <HoverBox
            className="hover-box"
            cursor="pointer"
            onClick={() => item.slug && navigate(getUri(item.slug.current, item._type))}
          >
            <Link type="internal" internal={{ slug: item.slug, _type: item._type }}>
              <Text component="h1" variant="head" color="black">
                {item.title}
              </Text>
            </Link>
          </HoverBox>
          <Box
            display={['none', 'unset']}
            className="image-box"
            position="fixed"
            height="100%"
            width="100%"
            maxHeight="100vh"
            top="0"
            zIndex="-1"
          >
            <Image image={item.featuredImage} />
          </Box>
        </Box>
      ))}
    </ContainerBox>
  )
}

export default Listing

export const query = graphql`
  fragment moduleListingData on SanityModuleListing {
    postType
  }
`
