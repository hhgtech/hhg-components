import React, { CSSProperties, ReactNode } from 'react'

import styled from 'styled-components'

type Props = {
  children: ReactNode
  horizontalPadding?: string
  verticalPadding?: string
  className?: string
  style?: CSSProperties
}

const StyledTable = styled.table`
  --horizontal-spacing: ${(props) => props.theme.horizontalPadding || '19px'};
  --vertical-spacing: ${(props) => props.theme.verticalPadding || '26px'};
  width: 100%;
  position: relative;
`

const Table = ({
  children,
  className,
  style,
  horizontalPadding,
  verticalPadding,
}: Props) => {
  return (
    <StyledTable
      className={className}
      style={style}
      theme={{ horizontalPadding, verticalPadding }}
    >
      {children}
    </StyledTable>
  )
}

export { Table }
