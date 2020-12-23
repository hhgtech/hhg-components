import React, { CSSProperties, ReactNode } from 'react'
import styled from 'styled-components'
import { ThemeProps, ThemeType } from 'theme'

type Props = {
  children: ReactNode
  isHoverable?: boolean
  isStriped?: boolean
  style?: CSSProperties
  className?: string
}

const StyledTableBody = styled.tbody`
  position: relative;
  &[data-is-striped] {
    > tr:nth-child(odd) {
      background-color: ${(props) => props.theme.colors.neutral50};
    }
  }
  &[data-is-hoverable] {
    > tr:hover {
      background-color: ${(props) => props.theme.colors.neutral100};
    }
  }
`

const Body = ({
  children,
  className,
  style,
  isHoverable,
  isStriped,
}: Props) => {
  return (
    <StyledTableBody
      className={className}
      style={style}
      data-is-striped={isStriped || undefined}
      data-is-hoverable={isHoverable || undefined}
    >
      {children}
    </StyledTableBody>
  )
}

export { Body }
