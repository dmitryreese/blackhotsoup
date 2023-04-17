import { FC, PropsWithChildren } from 'react'

import { LoginForm } from '~/components/LoginForm'

import { StyledLoginPage } from './styled'

export const LoginPage: FC = () => {
  return (
    <StyledLoginPage>
      <LoginForm />
    </StyledLoginPage>
  )
}
