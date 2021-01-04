import React, { ReactNode, CSSProperties } from 'react'

import { Text } from 'components/atoms'

import { StyledTag } from './index.styled'

export type Props = {
  children: ReactNode
  type?:
    | 'standard'
    | 'yellow'
    | 'red'
    | 'green'
    | 'teal'
    | 'blue'
    | 'pink'
    | 'violet'
    | 'grey'
    | 'sponsored'
  isSquared?: boolean
  isLight?: boolean
  isInline?: boolean
  isSelected?: boolean
  hasMorePadding?: boolean
  isLink?: boolean
  className?: string
  style?: CSSProperties
}

const Tag = ({
  type,
  children,
  style,
  isInline,
  isSquared = false,
  className,
  isLight,
  hasMorePadding,
  isLink,
  isSelected,
}: Props) => {
  return (
    <StyledTag
      data-is-squared={isSquared || undefined}
      data-tag-type={type}
      data-is-light={isLight || undefined}
      data-has-more-padding={hasMorePadding || undefined}
      data-is-inline={isInline || undefined}
      style={style}
      className={className}
      data-is-selected={isSelected || undefined}
      data-is-link={isLink || undefined}
    >
      <Text size="sm">{children}</Text>
    </StyledTag>
  )
}

export { Tag }
