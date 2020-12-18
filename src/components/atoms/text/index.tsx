import React, { ReactNode } from 'react'
import { CSSProperties } from 'styled-components'
import { StyledText } from './index.styled'

export type Props = {
  children: ReactNode
  size: 'md' | 'base' | 'sm' | 'xs'
  className?: string
  type?: 'regular' | 'bold' | 'caption'
  title?: string
  style?: CSSProperties
}

const Text = ({
  size = 'base',
  type = 'regular',
  title,
  className,
  style,
  children,
}: Props) => (
  <StyledText
    title={title}
    data-size={size}
    data-type={type}
    style={{ ...style }}
    className={className}
  >
    {children}
  </StyledText>
)

export { Text }
