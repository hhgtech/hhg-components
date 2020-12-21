import React, { ReactNode } from 'react'

import { StyledHeading } from './index.styled'

export type Props = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  children: ReactNode
  title?: string
  color?: string
  className?: string
}

const Heading = ({ tag: Tag, className, children, title, color }: Props) => (
  <StyledHeading className={className}>
    <Tag title={title} style={color ? { color } : undefined} data-tag={Tag}>
      {children}
    </Tag>
  </StyledHeading>
)

export { Heading }
