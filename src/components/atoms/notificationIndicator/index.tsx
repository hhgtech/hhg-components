import React from 'react'
import { StyledIndicator } from './index.styled'

export type Props = {
  bellIcon: JSX.Element
  type: 'small' | 'medium' | 'large'
  className?: string
  amount?: number
  hasIcon?: boolean
}

const NotificationIndicator = ({
  amount,
  type,
  hasIcon,
  bellIcon,
  className,
}: Props) => {
  return (
    <StyledIndicator
      data-notification-type={type}
      data-has-icon={hasIcon || undefined}
      className={className}
    >
      {amount && <span>{amount}</span>} {hasIcon && <div>{bellIcon}</div>}
    </StyledIndicator>
  )
}

export { NotificationIndicator }
