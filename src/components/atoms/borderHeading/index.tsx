import React, { ReactNode } from 'react'
import { CSSProperties } from 'styled-components'
import { StyledBorderHeading } from './index.styled'

export type Props = {
  children: ReactNode
  style?: CSSProperties
}

const BorderHeading = ({ style, children }: Props) => (
  <StyledBorderHeading style={{ ...style }}>{children}</StyledBorderHeading>
)

export { BorderHeading }
