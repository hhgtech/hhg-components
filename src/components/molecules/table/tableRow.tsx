import React, { CSSProperties, ReactNode } from 'react'

import { ThemeProps } from 'misc/theme'
import styled from 'styled-components'

type Props = {
  children: ReactNode
  isActive?: boolean
  className?: string
  style?: CSSProperties
}

const StyledTableRow = styled.tr`
  border-bottom: 1px solid ${(props: ThemeProps) => props.theme.colors.gray200};

  &[data-is-active] {
    background-color: ${(props: ThemeProps) => props.theme.colors.gray200};
  }
`

const Row = ({ children, className, style, isActive }: Props) => {
  return (
    <StyledTableRow
      className={className}
      data-is-active={isActive || undefined}
      style={style}
    >
      {children}
    </StyledTableRow>
  )
}

export { Row }
