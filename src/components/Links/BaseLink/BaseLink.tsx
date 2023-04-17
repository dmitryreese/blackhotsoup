import { AnchorHTMLAttributes, FC } from 'react'

import { StyledLink } from './styled'

export interface BaseLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const BaseLink: FC<BaseLinkProps> = ({ children, ...rest }) => {
  return <StyledLink {...rest}>{children}</StyledLink>
}
