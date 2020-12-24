import React from 'react'
import { StyledBadge } from './index.styled'
import MockTheme from '../../../mockTheme'

export type Props = {
  icon: JSX.Element
  type: 'dot' | 'numeric'
  size?: 'medium' | 'large'
  color?: 'primary' | 'error'
  className?: string
  amount?: number
}

const Badge = ({ amount, type, size, color, icon, className }: Props) => {
  return (
    <MockTheme>
      <StyledBadge
        data-notification-type={type}
        data-notification-size={size || 'medium'}
        data-notification-color={color || 'primary'}
        data-has-icon={!!icon || undefined}
        className={className}
      >
        <div>
          {amount && <span>{amount}</span>} {icon && <div>{icon}</div>}
        </div>
      </StyledBadge>
    </MockTheme>
  )
}

export { Badge }
