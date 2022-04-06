import React, { FC, useState } from 'react'
import { graphql, navigate } from 'gatsby'
import Box from '@/atoms/Box'
import Image from '@/atoms/SanityImage'
import Text from '@/atoms/Text'
import { getUri } from '@/utils/routing'

export type PageReference = {
  _type: string
  title: string
}

export type FourPathGridItem = {
  _key: string
  pageReference: PageReference
  image: any
}

export type ModuleFourPathGrid = {
  items: FourPathGridItem[]
}

// interface ModuleFourPathGridProps extends ModuleFourPathGrid {}

const ModuleFourPathGridItem: FC<ModuleFourPathGrid> = (props) => {
  const { items } = props

  const [activeImageIndex, setActiveImageIndex] = useState<number>()

  return (
    <Box>
      <Box
        display={['none', 'flex']}
        width={'100%'}
        aspectRatio="3/2"
        position="relative"
        flexWrap="wrap"
        onMouseLeave={() => setActiveImageIndex(undefined)}
      >
        <Box zIndex="-1" position="absolute" top="0" left="0" width="100%" height="100%">
          {activeImageIndex && <Image image={items[activeImageIndex - 1].image} />}
        </Box>
        {items.map((item, index) => (
          <Box
            key={item._key}
            width={['100%', '50%']}
            height={['25%', '50%']}
            onMouseEnter={() => setActiveImageIndex(index + 1)}
            onClick={() =>
              navigate(getUri(item.pageReference.slug.current, item.pageReference._type))
            }
            cursor="pointer"
            display="flex"
            alignItems="center"
          >
            <Box
              display={'flex'}
              opacity={activeImageIndex && activeImageIndex - 1 !== index ? 0 : 1}
              width="100%"
              height="100%"
            >
              <Box pl={5} display="flex" alignItems="center">
                <Text
                  color={activeImageIndex && activeImageIndex - 1 === index ? 'white' : 'black'}
                  component="h3"
                  variant="bodyTitle"
                >
                  {item.pageReference.title}
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box height="100vh" display={['flex', 'none']} flexDirection="column">
        {items.map((item) => (
          <Box
            key={item._key}
            height="25%"
            width={['100%', '50%']}
            position="relative"
            aspectRatio="16/9"
            onClick={() =>
              navigate(getUri(item.pageReference.slug.current, item.pageReference._type))
            }
            cursor="pointer"
          >
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              display="flex"
              alignItems="center"
              justifyContent="center"
              zIndex="80"
            >
              <Text component="h3" variant="bodyTitle" color="white" textAlign="center">
                {item.pageReference.title}
              </Text>
            </Box>
            <Image image={item.image}></Image>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default ModuleFourPathGridItem

export const query = graphql`
  fragment moduleFourPathGridData on SanityModuleFourPathGrid {
    items {
      _key
      _type
      image {
        ...ImageWithPreview
        asset {
          _key
          _type
          url
        }
      }
      pageReference {
        ... on SanityPage {
          _type
          title
          slug {
            _key
            _type
            current
          }
        }
        ... on SanityNews {
          _type
          title
          slug {
            _key
            _type
            current
          }
        }
        ... on SanityProject {
          _type
          title
          slug {
            _key
            _type
            current
          }
        }
        ... on SanityProduct {
          _type
          title
          slug {
            _key
            _type
            current
          }
        }
      }
    }
  }
`
