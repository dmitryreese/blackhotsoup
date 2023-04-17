import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`

interface StyledInputProps {
  isValidationError?: boolean
}
export const StyledInput = styled.input<StyledInputProps>`
  padding: 16px;
  border: 1px solid #d5d5d5;
  border-color: ${({ isValidationError }) =>
    isValidationError ? 'red' : 'd5d5d5'};
  border-radius: 4px;
  transition: all 0.2s;

  &:focus {
    box-shadow: 0px 0px 1px 1px #646cff;
    border-color: #646cff;
    outline: none;
  }
`

export const StyledLabel = styled.label`
  font-weight: 500;
`

export const ValidationError = styled.span`
  color: red;
  font-size: 14px;
  position: absolute;
`

export const ValidationErrorWrapper = styled.div`
  position: relative;
`
