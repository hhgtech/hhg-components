import React, { ReactNode, CSSProperties } from 'react'

import { Text } from 'components/atoms'

import { StyledTag } from './index.styled'

export type Props = {
  children: ReactNode
  type: 'danger' | 'warning' | 'blue' | 'success'
  className?: string
  squared?: boolean
  style?: CSSProperties
}

const Tag = ({ type, children, style, squared = false, className }: Props) => {
  return (
    <StyledTag
      data-is-squared={squared || undefined}
      data-tag-type={type}
      style={style}
      className={className}
    >
      <Text size="sm">{children}</Text>
    </StyledTag>
  )
}

export { Tag }
