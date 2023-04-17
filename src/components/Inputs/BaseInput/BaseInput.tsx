import { ChangeEvent, FC, InputHTMLAttributes, useCallback } from 'react'

import {
  StyledInput,
  StyledLabel,
  ValidationError,
  Wrapper,
  ValidationErrorWrapper,
} from './styled'

export interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isValidationError?: boolean
  validationError?: string
  labelText?: string
  withoutLabel?: boolean
  setValue?: (value: string) => void
}

export const BaseInput: FC<BaseInputProps> = ({
  isValidationError = false,
  labelText,
  withoutLabel = false,
  validationError,
  id,
  value,
  setValue,
  onChange,
  ...rest
}) => {
  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    onChange?.(e)
    setValue?.(e.target.value)
  }, [])

  return (
    <Wrapper>
      {!withoutLabel && <StyledLabel htmlFor={id}>{labelText}</StyledLabel>}
      <StyledInput
        value={value}
        onChange={handleOnChange}
        id={id}
        isValidationError={isValidationError}
        {...rest}
      />
      {isValidationError && (
        <ValidationErrorWrapper>
          <ValidationError>{validationError}</ValidationError>
        </ValidationErrorWrapper>
      )}
    </Wrapper>
  )
}
