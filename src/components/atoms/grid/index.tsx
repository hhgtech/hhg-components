import React, { CSSProperties, ReactNode } from 'react'

import { StyledGrid } from './index.styled'

interface BasicProps {
  children: ReactNode
  alignItems?: 'start' | 'end' | 'center' | 'stretch'
  gap?: string
  className?: string
  justifyChildren?: 'start' | 'center' | 'end' | 'stretch'
  style?: CSSProperties
}

interface BasicGrid extends BasicProps {
  columns: number
  columnsDesktop: number
  gridTemplateColumns?: never
  gridTemplateColumnsDesktop?: never
}

interface ExtendedGrid extends BasicProps {
  columns?: never
  columnsDesktop?: never
  gridTemplateColumns: string
  gridTemplateColumnsDesktop: string
}

type Props = BasicGrid | ExtendedGrid

const Grid = ({
  className,
  columns,
  columnsDesktop,
  gridTemplateColumns,
  gridTemplateColumnsDesktop,
  gap,
  children,
  justifyChildren,
  style,
  alignItems,
}: Props) => {
  return (
    <StyledGrid
      className={className}
      style={{ ...style }}
      theme={{
        columns,
        columnsDesktop,
        gap,
        justifyChildren,
        gridTemplateColumns,
        gridTemplateColumnsDesktop,
        alignItems,
      }}
    >
      {children}
    </StyledGrid>
  )
}

export { Grid }
