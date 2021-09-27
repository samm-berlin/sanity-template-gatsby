import React, { FC, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { NavigationContext } from '@/components/Navigation/NavigationContext'
import { SanityPost } from 'web/graphql-types'
import ModuleLoop from '@/containers/ModulesLoop'
import { Box } from '@material-ui/core'

const StyledBox = styled(Box)`
  p {
    margin: 0 18rem;
  }
`

interface PostProps {
  post: SanityPost
}

const PostContainer: FC<PostProps> = ({
  post: { title, meta, contentModules }
}) => {
  const { setRoute, setLogoType } = useContext(NavigationContext)
  useEffect(() => {
    setRoute('/blog')
    setLogoType('cross')
  }, [])

  return (
    <StyledBox>
      <ModuleLoop modules={contentModules?.modules} />
    </StyledBox>
  )
}

export default PostContainer
