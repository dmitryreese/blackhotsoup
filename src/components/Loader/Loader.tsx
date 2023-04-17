import { FC } from 'react'

import { StyledLoader, Wrapper } from './styled'

interface LoaderProps {
  fraction?: number
}

export const Loader: FC<LoaderProps> = ({ fraction }) => {
  return (
    <Wrapper fraction={fraction}>
      <StyledLoader />
    </Wrapper>
  )
}
