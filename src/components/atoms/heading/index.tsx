import React, { ReactNode } from 'react'
import { CSSProperties } from 'react'

import { StyledHeading } from './index.styled'

export type Props = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  children: ReactNode
  title?: string
  color?: string
  className?: string
  style?: string
}

const Heading = ({
  tag: Tag,
  className,
  children,
  title,
  color,
  style,
}: Props) => (
  <StyledHeading style={style as CSSProperties} className={className}>
    <Tag
      title={title}
      style={
        color ? { ['--custom-heading-color' as string]: color } : undefined
      }
      data-tag={Tag}
    >
      {children}
    </Tag>
  </StyledHeading>
)

export { Heading }
