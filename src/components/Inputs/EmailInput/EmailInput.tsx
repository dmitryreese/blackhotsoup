import { useId, useState, useCallback, ChangeEvent, FC } from 'react'

import { BaseInputProps, BaseInput } from '~/components/Inputs/BaseInput'

export interface EmailInputProps extends BaseInputProps {
  setIsValidated?: (isValidated: boolean) => void
}

export const EmailInput: FC<EmailInputProps> = ({
  onChange,
  setIsValidated,
  ...props
}) => {
  const id = useId()
  const [isValidationError, setIsValidationError] = useState<boolean>(false)

  const validateEmail = useCallback((str: string) => {
    const isValidEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(str)

    setIsValidationError(!isValidEmail)
    setIsValidated?.(!isValidEmail)
  }, [])

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    onChange?.(e)
    if (e.target.value.length > 0) {
      validateEmail(e.target.value)
    }
  }, [])

  return (
    <BaseInput
      onChange={handleOnChange}
      placeholder="example@mail.com"
      id={id}
      labelText="Email"
      isValidationError={isValidationError}
      validationError="Invalid email format"
      {...props}
    />
  )
}
