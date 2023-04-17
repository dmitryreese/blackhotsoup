import { FC, useMemo } from 'react'

import { Loader } from '~/components/Loader'
import { BaseButton, BaseButtonProps } from '~/components/Buttons/BaseButton'

export interface LoadingButtonProps extends BaseButtonProps {
  isLoading?: boolean
}

export const LoadingButton: FC<LoadingButtonProps> = ({
  children,
  isLoading = false,
  disabled,
  ...rest
}) => {
  const isDisabled = useMemo(() => isLoading || disabled, [isLoading, disabled])

  return (
    <BaseButton {...rest} disabled={isDisabled}>
      {isLoading ? <Loader fraction={0.15} /> : children}
    </BaseButton>
  )
}
