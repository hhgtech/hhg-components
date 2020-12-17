import React, { ReactNode, CSSProperties } from 'react'

import classnames from 'classnames'
import { Text } from 'components/atoms'

import { StyledTag } from './index.styled'

export type Props = {
  children: ReactNode
  squared?: boolean
  type?: 'danger' | 'warning' | 'blue' | 'success'
  style?: CSSProperties
}

const Tag = ({ type, children, style, squared }: Props) => {
  return (
    <StyledTag
      data-is-squared={squared || undefined}
      data-tag-type={type || undefined}
      style={{ ...style }}
    >
      <Text size="sm">{children}</Text>
    </StyledTag>
  )
}

export { Tag }
