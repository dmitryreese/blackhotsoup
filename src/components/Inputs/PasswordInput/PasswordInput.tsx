import { FC, useId } from 'react'

import { BaseInputProps, BaseInput } from '~/components/Inputs/BaseInput'
import { BaseLink } from '~/components/Links/BaseLink'

import { Wrapper, ForgotPasswordWrapper } from './styled'

export interface PasswordInputProps extends BaseInputProps {
  withForgotPassword?: boolean
  forgotPasswordLink?: string
}

export const PasswordInput: FC<PasswordInputProps> = ({
  withForgotPassword = false,
  forgotPasswordLink,
  ...props
}) => {
  const id = useId()

  return (
    <Wrapper>
      <BaseInput
        type="password"
        placeholder="Password"
        labelText="Password"
        id={id}
        {...props}
      />
      {withForgotPassword && (
        <ForgotPasswordWrapper>
          <BaseLink href={forgotPasswordLink}>Forgot password?</BaseLink>
        </ForgotPasswordWrapper>
      )}
    </Wrapper>
  )
}
