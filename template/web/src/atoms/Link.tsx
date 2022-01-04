import React from 'react'
import { Link as GatsbyLink, GatsbyLinkProps, graphql } from 'gatsby'
import { getUri } from '@/utils/routing'

interface ALinkProps extends Omit<GatsbyLinkProps<any>, 'to'> {
  href: string
}

const ALink: React.FC<ALinkProps> = ({ href, children, innerRef, ...other }) => (
  <a href={href} ref={innerRef} {...other}>
    {children}
  </a>
)

const Link = React.forwardRef(
  (props: Omit<GatsbyLinkProps<unknown>, 'ref'>, ref: React.Ref<HTMLAnchorElement>) => {
    const { to, url, activeClassName, partiallyActive, type, internal, ...other } = props

    // Use Gatsby Link for internal links, and <a> for others
    if (type === 'internal') {
      const file = /\.[0-9a-z]+$/i.test(to)

      if (file) {
        return <ALink href={to} innerRef={ref} {...other} />
      }
      const uri = getUri(internal.slug.current, internal.type)
      return (
        <GatsbyLink
          to={uri}
          activeClassName={activeClassName}
          partiallyActive={partiallyActive}
          innerRef={ref}
          {...other}
        />
      )
    }
    return <ALink href={url} innerRef={ref} {...other} />
  }
)

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
      ... on SanityPost {
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
