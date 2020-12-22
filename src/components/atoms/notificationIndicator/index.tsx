import React from 'react'
import { CSSProperties } from 'styled-components'
import { StyledIndicator } from './index.styled'

export type Props = {
  bellIcon: JSX.Element
  type: 'small' | 'medium' | 'large'
  className?: string
  amount?: number
  hasIcon?: boolean
  style?: CSSProperties
}

const NotificationIndicator = ({
  amount,
  type,
  hasIcon,
  bellIcon,
  className,
  style,
}: Props) => {
  return (
    <StyledIndicator
      data-notification-type={type}
      data-has-icon={hasIcon || undefined}
      className={className}
      style={style}
    >
      {amount && <span>{amount}</span>} {hasIcon && <div>{bellIcon}</div>}
    </StyledIndicator>
  )
}

export { NotificationIndicator }
