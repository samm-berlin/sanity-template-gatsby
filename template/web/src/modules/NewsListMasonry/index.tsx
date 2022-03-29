import React, { FC, useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Box from '@/atoms/Box'
import Text from '@/atoms/Text'
import ListItemCard from '@/components/ListItemCard.tsx'
import { Tag } from '@/components/TagList'
import { toDateString } from '@/lib/date'
import NewsCategories from './NewsCategories'
import { Category } from 'web/types/custom-graphql-types'

export type NewsListMasonryItem = {
  _key?: string
  _type?: string
  _createdAt: string
  title: string
  featuredImage: any
  excerpt: any
  tags?: Tag[]
  category?: Category
}

export type NewsCategory = {
  _key?: string
  _type?: string
  title: string
}

const itemsPerPage = 10
const widthDict = ['100%', '50%', '50%', 'calc(100% / 3)'].concat(Array(100).fill('calc(100% / 3)'))
const imageAspectRatioDict = ['16/9', '16/9', '16/9', '4/3'].concat(Array(100).fill('4/3'))

const NewsListMasonry: FC = () => {
  const { allSanityNews, allSanityNewsCategory } = useStaticQuery(
    graphql`
      query {
        allSanityNews {
          nodes {
            _createdAt
            _key
            _type
            title
            slug {
              _key
              _type
              current
            }
            featuredImage {
              ...ImageWithPreview
            }
            excerpt {
              ...RichTextData
            }
            tags {
              ...tagsData
            }
            category {
              _key
              _type
              title
            }
          }
        }
        allSanityNewsCategory {
          nodes {
            title
            _key
            _type
          }
        }
      }
    `
  )

  const allNews: NewsListMasonryItem[] = allSanityNews.nodes
  const allNewsCategory: NewsCategory[] = allSanityNewsCategory.nodes

  const [filteredCategory, setFilteredCategory] = useState<string>()

  return (
    <Box display="flex" flexWrap="wrap" flexDirection="row">
      <Box width="100%" display="flex" justifyContent="center" my="3">
        <NewsCategories
          categories={allNewsCategory}
          filteredCategory={filteredCategory}
          setFilteredCategory={setFilteredCategory}
        />
      </Box>
      {allNews &&
        allNews
          .filter((item) => (filteredCategory ? item.category?.title === filteredCategory : true))
          .map((news, index) => (
            <Box
              key={news._key}
              width={['100%', widthDict[index]]}
              pl={[2, !index ? 2 : index === 1 ? 2 : index % 3 === 0 ? 2 : 4]}
              pr={[2, !index ? 2 : index === 1 ? 4 : index % 3 === 2 ? 2 : 4]}
              mb={4}
            >
              <ListItemCard
                {...news}
                image={news.featuredImage}
                imageAspectRatio={imageAspectRatioDict[index]}
                date={toDateString(news._createdAt)}
              />
            </Box>
          ))}
    </Box>
  )
}

export default NewsListMasonry
