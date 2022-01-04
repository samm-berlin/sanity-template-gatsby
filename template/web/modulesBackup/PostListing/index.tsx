import React, { FC } from 'react'
import { SanityPost } from 'web/graphql-types'
import Grid from '@/atoms/Grid'
import BlogPost from './BlogPost'

type BlogIndexProps = {
  allPosts: SanityPost[]
}

const BlogIndex: FC<BlogIndexProps> = ({ allPosts }) => {
  return (
    <Grid container maxWidth="unset">
      {allPosts.map((post, idx) => (
        <BlogPost post={post} idx={idx} />
      ))}
    </Grid>
  )
}

export default BlogIndex
