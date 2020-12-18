import React, { ReactNode, CSSProperties } from 'react'

import { Text } from 'components/atoms'

import { StyledTag } from './index.styled'

export type Props = {
  children: ReactNode
  className?: string
  squared?: boolean
  type?: 'danger' | 'warning' | 'blue' | 'success'
  style?: CSSProperties
}

const Tag = ({ type, children, style, squared, className }: Props) => {
  return (
    <StyledTag
      data-is-squared={squared || undefined}
      data-tag-type={type || undefined}
      style={{ ...style }}
      className={className}
    >
      <Text size="sm">{children}</Text>
    </StyledTag>
  )
}

export { Tag }
