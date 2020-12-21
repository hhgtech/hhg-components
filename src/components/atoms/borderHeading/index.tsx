import React, { ReactNode } from 'react'
import { CSSProperties } from 'styled-components'
import { StyledBorderHeading } from './index.styled'

export type Props = {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

const BorderHeading = ({ style, children, className }: Props) => (
  <StyledBorderHeading style={{ ...style }} className={className}>
    {children}
  </StyledBorderHeading>
)

export { BorderHeading }
