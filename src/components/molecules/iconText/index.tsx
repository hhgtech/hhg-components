import React, { ReactNode } from 'react'

import { StyledIconText } from './index.styled'

export type Props = {
  size: 'lg' | 'md' | 'sm'
  iconPosition: 'left' | 'right'
  children: ReactNode
  icon: JSX.Element
  className?: string
}

const IconText = ({
  size,
  iconPosition,
  className,
  children,
  icon: Icon,
}: Props) => {
  return (
    <StyledIconText
      className={className}
      data-size={size}
      data-icon-position={iconPosition}
    >
      {iconPosition === 'left' && Icon}
      {children}
      {iconPosition === 'right' && Icon}
    </StyledIconText>
  )
}

export { IconText }
