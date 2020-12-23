import React from 'react'

import { CSSProperties } from 'styled-components'
import { StyledBadge } from './index.styled'

import MockTheme from './../../../mockTheme'

export type Props = {
  type: string
  className?: string
  style?: CSSProperties
  number: string | number
  color?: 'primary' | 'secondary'
}

const Bagde = ({
  type = 'numeric',
  style,
  className,
  number,
  color,
}: Props) => {
  return (
    <MockTheme>
      <StyledBadge
        style={{ ...style }}
        data-avatar-type={type || undefined}
        className={className}
        data-color={color}
      >
        <span>{number}</span>
      </StyledBadge>
    </MockTheme>
  )
}

export { Bagde }
