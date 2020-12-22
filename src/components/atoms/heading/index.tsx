import React, { ReactNode } from 'react'
import { CSSProperties } from 'styled-components'

import { StyledHeading } from './index.styled'

export type Props = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  children: ReactNode
  title?: string
  color?: string
  className?: string
  style?: CSSProperties
}

const Heading = ({
  tag: Tag,
  className,
  children,
  title,
  color,
  style,
}: Props) => (
  <StyledHeading style={style} className={className}>
    <Tag title={title} style={color ? { color } : undefined} data-tag={Tag}>
      {children}
    </Tag>
  </StyledHeading>
)

export { Heading }
