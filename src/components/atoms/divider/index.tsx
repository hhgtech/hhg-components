import React from 'react'

import { StyledDivider } from './index.styled'

export type Props = {
  type:
    | 'dotted'
    | 'dashed'
    | 'solid'
    | 'double'
    | 'groove'
    | 'ridge'
    | 'inset'
    | 'outset'
  className?: string
}

const Divider = ({ type, className }: Props) => {
  return (
    <StyledDivider className={className} data-diver-type={type || undefined} />
  )
}

export { Divider }
