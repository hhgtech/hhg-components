import React, { ReactNode } from 'react'
import { CSSProperties } from 'styled-components'
import { StyledText } from './index.styled'

export type Props = {
  children: ReactNode
  size: 'md' | 'base' | 'sm' | 'xs'
  type?: 'regular' | 'bold' | 'caption'
  title?: string
  style?: CSSProperties
}

const Text = ({
  size = 'base',
  type = 'regular',
  title,
  style,
  children,
}: Props) => (
  <StyledText
    title={title}
    data-size={size}
    data-type={type}
    style={{ ...style }}
  >
    {children}
  </StyledText>
)

export { Text }
