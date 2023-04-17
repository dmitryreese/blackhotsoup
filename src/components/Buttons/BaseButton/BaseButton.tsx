import { ButtonHTMLAttributes, FC } from 'react'

import { StyledButton } from './styled'

export interface BaseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const BaseButton: FC<BaseButtonProps> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>
}
