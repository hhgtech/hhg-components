import React, { ReactNode, CSSProperties } from 'react'

import { Text } from 'components/atoms'

import { StyledTag } from './index.styled'

export type Props = {
  children: ReactNode
  type?:
    | 'default'
    | 'yellow'
    | 'red'
    | 'green'
    | 'teal'
    | 'blue'
    | 'pink'
    | 'violet'
    | 'grey'
  isSquared?: boolean
  isLight?: boolean
  hasMorePadding?: boolean
  className?: string
  style?: CSSProperties
}

const Tag = ({
  type = 'default',
  children,
  style,
  isSquared = false,
  className,
  isLight,
  hasMorePadding,
}: Props) => {
  return (
    <StyledTag
      data-is-squared={isSquared || undefined}
      data-tag-type={type}
      data-is-light={isLight || undefined}
      data-has-more-padding={hasMorePadding || undefined}
      style={style}
      className={className}
    >
      <Text size="sm">{children}</Text>
    </StyledTag>
  )
}

export { Tag }
