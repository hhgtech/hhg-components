import React from 'react'

import { StyledBadge } from './index.styled'

export type Props = {
  icon: JSX.Element
  type: 'dot' | 'numeric'
  size?: 'medium' | 'large'
  color?: 'primary' | 'error'
  className?: string
  amount?: number
}

const Badge = ({
  amount,
  type,
  size = 'medium',
  color = 'primary',
  icon,
  className,
}: Props) => {
  return (
    <StyledBadge
      data-notification-type={type}
      data-notification-size={size}
      data-notification-color={color}
      data-has-icon={!!icon || undefined}
      className={className}
    >
      <div>
        {amount && <span>{amount}</span>} {icon && <div>{icon}</div>}
      </div>
    </StyledBadge>
  )
}

export { Badge }
