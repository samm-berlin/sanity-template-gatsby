import React, { FC } from 'react'
import { SanityPost } from 'web/graphql-types'
import Grid from '@/atoms/Grid'
import withWidth from '@material-ui/core/withWidth'
import {
  PostAnchor,
  PostTitle,
  PostDescription,
  PostImage,
  ColWrapper,
  ColContent
} from './Styles'

type BlogPostProps = {
  post: SanityPost
  idx: number
}

const BlogPost: FC<BlogPostProps> = ({ post, idx, width }) => {
  const imgUrl = post?.meta?.ogImage?.asset?.url
  const isEvenRow = idx % 2 == 0
  const contentCol = (
    <>
      <PostTitle>{post.title}</PostTitle>
      <PostDescription>{post?.meta?.metaDescription}</PostDescription>
    </>
  )
  const imgCol = (
    <PostImage
      style={{
        backgroundImage: `url(${imgUrl || ''})`
      }}
    />
  )
  const isMobile = width === 'xs'
  return (
    <PostAnchor href={`/${post?.slug?.current || '404'}`}>
      <Grid container xs={12} md={12}>
        <Grid xs={12} sm={6} md={6}>
          <ColWrapper>
            <ColContent>
              {isEvenRow && !isMobile ? contentCol : imgCol}
            </ColContent>
          </ColWrapper>
        </Grid>
        <Grid xs={12} sm={6} md={6}>
          <ColWrapper>
            <ColContent>
              {isEvenRow && !isMobile ? imgCol : contentCol}
            </ColContent>
          </ColWrapper>
        </Grid>
      </Grid>
    </PostAnchor>
  )
}

export default withWidth()(BlogPost)
