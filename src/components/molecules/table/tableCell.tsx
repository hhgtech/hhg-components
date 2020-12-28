import React, { CSSProperties, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
  textAlign?: 'left' | 'center' | 'right'
  className?: string
  isTableHead?: boolean
  style?: CSSProperties
}

const StyledTableCell = styled.td`
  padding: var(--vertical-spacing) var(--horizontal-spacing);
  vertical-align: middle;

  &[data-text-aling='left'] {
    text-align: left;
  }
  &[data-text-aling='right'] {
    text-align: right;
  }
  &[data-text-aling='center'] {
    text-align: center;
  }
`

const Cell = ({
  children,
  className,
  style,
  textAlign,
  isTableHead,
}: Props) => {
  return (
    <StyledTableCell
      className={className}
      style={style}
      data-text-align={textAlign ? textAlign : 'left'}
      as={isTableHead ? 'th' : 'td'}
    >
      {children}
    </StyledTableCell>
  )
}

export { Cell }
