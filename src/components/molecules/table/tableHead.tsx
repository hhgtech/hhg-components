import React, { CSSProperties, ReactNode } from 'react'

import { ThemeProps } from 'misc/theme'
import styled from 'styled-components'

import { Row } from './tableRow'

type Props = {
  children: ReactNode
  className?: string
  isSticky?: boolean
  style?: CSSProperties
}

const StyledTableHead = styled.thead`
  th {
    padding: var(--vertical-spacing) var(--horizontal-spacing);
    text-align: left;

    color: ${(props: ThemeProps) => props.theme.colors.gray500};
    font-weight: ${(props: ThemeProps) => props.theme.sizes.fwBold};
  }
  &[data-is-sticky] {
    th {
      position: sticky;
      top: 0;
      background: white;
      border-bottom: 2px solid
        ${(props: ThemeProps) => props.theme.colors.gray200};
    }
  }
`

const Head = ({ isSticky, children, className, style }: Props) => {
  return (
    <StyledTableHead
      className={className}
      data-is-sticky={isSticky || undefined}
      style={style}
    >
      <Row>{children}</Row>
    </StyledTableHead>
  )
}

export { Head }
