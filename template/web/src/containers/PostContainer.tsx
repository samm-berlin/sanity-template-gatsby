import React, { FC, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { SanityPost } from 'web/types/graphql-types'
import ModuleLoop from '@/containers/ModulesLoop'

interface PostProps {
  post: SanityPost
}

const PostContainer: FC<PostProps> = ({
  post: { title, meta, contentModules }
}) => {

  return (
    <ModuleLoop modules={contentModules?.modules} />
  )
}

export default PostContainer
