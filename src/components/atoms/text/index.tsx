import React, { ReactNode } from 'react'

import { CSSProperties } from 'styled-components'

import { StyledText } from './index.styled'

export type Props = {
  children: ReactNode
  size: 'lg' | 'md' | 'base' | 'sm' | 'xs'
  className?: string
  color?: string
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
  color,
}: Props) => {
  const customColor = { '--custom-color': color } as React.CSSProperties

  return (
    <StyledText
      title={title}
      data-size={size}
      data-type={type}
      style={{ ...style, ...customColor }}
      className={className}
    >
      {children}
    </StyledText>
  )
}

export { Text }
