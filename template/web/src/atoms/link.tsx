import React from 'react'
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby'

interface ALinkProps extends Omit<GatsbyLinkProps<any>, 'to'> {
  href: string
}

const ALink: React.FC<ALinkProps> = ({
  href,
  children,
  innerRef,
  ...other
}) => (
  <a href={href} ref={innerRef} {...other}>
    {children}
  </a>
)

export const Link = React.forwardRef(
  (
    props: Omit<GatsbyLinkProps<unknown>, 'ref'>,
    ref: React.Ref<HTMLAnchorElement>
  ) => {
    const { to, activeClassName, partiallyActive, type, internal, ...other } = props

    // Use Gatsby Link for internal links, and <a> for others
    if (type === 'internal') {
      const file = /\.[0-9a-z]+$/i.test(to);

      if (file) {
        return <ALink href={to} innerRef={ref} {...other} />
      }
      return (
        <GatsbyLink
          to={to}
          activeClassName={activeClassName}
          partiallyActive={partiallyActive}
          innerRef={ref}
          {...other}
        />
      )
    }
    return <ALink href={to} innerRef={ref} {...other} />
  }
)
