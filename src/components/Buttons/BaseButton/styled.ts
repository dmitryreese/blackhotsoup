import styled from 'styled-components'

export const StyledButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #646cff;
  cursor: pointer;
  color: #fff;
  transition: background-color 0.2s;
  display: flex;
  height: 40px;
  line-height: 40px;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #3e48ff;
  }

  &:focus {
    background-color: #1924fc;
  }

  &:disabled {
    background-color: #d5d5d5;
    cursor: not-allowed;
  }
`
