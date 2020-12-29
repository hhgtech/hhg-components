import React, { CSSProperties, ReactNode } from 'react'

import { StyledShadow } from './index.styled'

type Props = {
  size: 'small' | 'normal' | 'medium' | 'large' | 'soft'
  children: ReactNode
  className?: string
  style?: CSSProperties
}

const Shadow = ({ size, children, style, className }: Props) => {
  return (
    <StyledShadow style={style} className={className} data-shadow-size={size}>
      {children}
    </StyledShadow>
  )
}

export { Shadow }
