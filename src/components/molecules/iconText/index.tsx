import React, { ReactNode } from 'react'

import { StyledIconText } from './index.styled'

export type Props = {
  size: 'lg' | 'md' | 'sm'
  iconPosition: 'left' | 'right'
  children: ReactNode
  Icon: JSX.Element
  className?: string
}

const IconText = ({ size, iconPosition, className, children, Icon }: Props) => {
  return (
    <StyledIconText className={className} data-size={size}>
      {iconPosition === 'left' && Icon}
      {children}
      {iconPosition === 'right' && Icon}
    </StyledIconText>
  )
}

export { IconText }
