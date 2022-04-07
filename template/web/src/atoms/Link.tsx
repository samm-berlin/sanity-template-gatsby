import React from 'react'
import { Link as GatsbyLink, GatsbyLinkProps, graphql } from 'gatsby'
import { getUri } from '@/utils/routing'
import { Slug } from 'web/types/custom-graphql-types'
import Box from './Box'

interface ALinkProps extends Omit<GatsbyLinkProps<unknown>, 'to'> {
  href: string
}

const ALink: React.FC<ALinkProps> = ({ href, children, innerRef, ...other }) => (
  <a href={href} ref={innerRef} {...other}>
    {children}
  </a>
)

interface LinkProps extends Omit<GatsbyLinkProps<unknown>, 'ref' | 'to'> {
  ref: React.Ref<HTMLAnchorElement>
  to?: string
  internal?: {
    slug: Slug
    _type: string
  }
}

const Link = React.forwardRef((props: LinkProps) => {
  const { to, activeClassName, partiallyActive, type, internal, ref, children, ...other } = props

  // Use Gatsby Link for internal links, and <a> for others
  if (type === 'internal') {
    const file = /\.[0-9a-z]+$/i.test(to || '')

    if (file && to) {
      return <ALink href={to} innerRef={ref} {...other} />
    }
    if (internal) {
      const uri = getUri(internal?.slug.current, internal?._type)
      return (
        <GatsbyLink
          to={uri}
          activeClassName={activeClassName}
          partiallyActive={partiallyActive}
          innerRef={ref}
          {...other}
        >
          {children}
        </GatsbyLink>
      )
    } else {
      return <Box>{children}</Box>
    }
  }
  return <ALink href={to || ''} innerRef={ref} {...other} />
})

export default Link

export const query = graphql`
  fragment Link on SanityLink {
    url
    type
    internal {
      ... on SanityPage {
        _type
        slug {
          current
        }
      }
      ... on SanityNews {
        _type
        slug {
          current
        }
      }
      ... on SanityProject {
        _type
        slug {
          current
        }
      }
      ... on SanityProduct {
        _type
        slug {
          current
        }
      }
    }
  }
`
