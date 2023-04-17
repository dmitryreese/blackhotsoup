import { FC, useCallback, useMemo, useState } from 'react'

import { signInPostRequest } from '~/api/signIn'

import { EmailInput } from '~/components/Inputs/EmailInput'
import { PasswordInput } from '~/components/Inputs/PasswordInput'
import { BaseLink } from '~/components/Links/BaseLink'
import { LoadingButton } from '~/components/Buttons/LoadingButton'

import reactLogo from '~/assets/react.svg'

import {
  Wrapper,
  LeftWrapper,
  RightWrapper,
  InputWrapper,
  CreateAccountWrapper,
  Title,
  Logo,
  StyledWrongCredentials,
  WrongCredentialsWrapper,
  TitleWrapper,
  MobileLogo,
} from './styled'

export const LoginForm: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isValidated, setIsValidated] = useState<boolean>(false)
  const [isWrongCredentials, setIsWrongCredentials] = useState<boolean>(false)

  const handleSignIn = useCallback(async () => {
    setIsLoading(true)
    setIsWrongCredentials(false)

    try {
      await signInPostRequest(email, password)
    } catch (err) {
      setIsWrongCredentials(true)
    }

    setIsLoading(false)
  }, [email, password])

  const isDisabled = useMemo(
    () => email.length === 0 || password.length === 0 || isValidated,
    [email, password, isValidated],
  )

  return (
    <Wrapper>
      <LeftWrapper>
        <Logo src={reactLogo} alt="logo" />
      </LeftWrapper>
      <RightWrapper>
        <MobileLogo src={reactLogo} alt="mobile logo" />
        <InputWrapper>
          <TitleWrapper>
            <Title>Sign in to continue</Title>
            {isWrongCredentials && (
              <WrongCredentialsWrapper>
                <StyledWrongCredentials>
                  Could not sign in, check your credentials
                </StyledWrongCredentials>
              </WrongCredentialsWrapper>
            )}
          </TitleWrapper>

          <EmailInput
            value={email}
            setValue={setEmail}
            setIsValidated={setIsValidated}
          />

          <PasswordInput
            withForgotPassword
            forgotPasswordLink="//goo.gl"
            value={password}
            setValue={setPassword}
          />

          <LoadingButton
            onClick={handleSignIn}
            isLoading={isLoading}
            disabled={isDisabled}
          >
            Sign in
          </LoadingButton>

          <CreateAccountWrapper>
            <BaseLink href="//goo.gl">Create account</BaseLink>
          </CreateAccountWrapper>
        </InputWrapper>
      </RightWrapper>
    </Wrapper>
  )
}
