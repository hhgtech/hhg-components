import React, { CSSProperties } from 'react'

import { StyledUnderlinedLink } from './index.styled'

export type Props = {
  size: 'lg' | 'md' | 'sm' | 'xm'
  link: JSX.Element
  style?: CSSProperties
  isDisabled?: boolean
  className?: string
}

const UnderlinedLink = ({
  size,
  isDisabled,
  className,
  link,
  style,
}: Props) => (
  <StyledUnderlinedLink
    className={className}
    data-size={size}
    style={style}
    data-disabled={isDisabled || undefined}
  >
    {link}
  </StyledUnderlinedLink>
)

export { UnderlinedLink }
