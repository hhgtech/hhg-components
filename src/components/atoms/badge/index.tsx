import React from 'react'
import { StyledBadge } from './index.styled'
import MockTheme from '../../../mockTheme'

export type Props = {
  bellIcon: JSX.Element
  type: 'dot' | 'numeric'
  size?: 'medium' | 'large'
  color?: 'primary' | 'warning'
  className?: string
  amount?: number
  hasIcon?: boolean
}

const Badge = ({
  amount,
  type,
  size,
  color,
  hasIcon,
  bellIcon,
  className,
}: Props) => {
  return (
    <MockTheme>
      <StyledBadge
        data-notification-type={type}
        data-notification-size={size}
        data-notification-color={color}
        data-has-icon={hasIcon || undefined}
        className={className}
      >
        {amount && <span>{amount}</span>} {hasIcon && <div>{bellIcon}</div>}
      </StyledBadge>
    </MockTheme>
  )
}

export { Badge }
