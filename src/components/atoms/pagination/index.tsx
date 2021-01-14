import React, { useState, useEffect } from 'react'

import { CSSProperties } from 'styled-components'

import {
  StyledPageBlock,
  StyledPagination,
  StyledPaginationBlock,
} from './index.styled'

export type Props = {
  pagesAmount: number
  currentPage: number
  onChange: (p: number) => void
  className?: string
  style?: CSSProperties
}

const Pagination = ({
  className,
  pagesAmount,
  currentPage,
  onChange,
  style,
}: Props) => {
  const pages = [...Array(pagesAmount)].map((__v, i) => i + 1)

  const [activePage, setActivePage] = useState(currentPage)

  const totalArray = pagesAmount - 1

  const handlePageChange = (p: number) => {
    if (p <= pagesAmount && p > 0) {
      setActivePage(p)
      onChange(p)
    }
  }

  useEffect(() => {
    setActivePage(currentPage)
  }, [currentPage])

  return (
    <StyledPagination className={className} style={style}>
      <StyledPageBlock
        onClick={() => handlePageChange(activePage - 1)}
        data-last-page={activePage === 1 || undefined}
      >
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 9L1 5L5 1" />
        </svg>
      </StyledPageBlock>

      {pages
        .slice(
          activePage <= 3 ? 0 : activePage - 3,
          activePage <= 3 ? 5 : activePage + 2,
        )
        .map((i) => (
          <StyledPaginationBlock
            key={`${'pagination'}+${i}`}
            data-page-active={i === activePage || undefined}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </StyledPaginationBlock>
        ))}

      <StyledPageBlock
        onClick={() => handlePageChange(activePage + 1)}
        data-last-page={activePage === totalArray + 1 || undefined}
      >
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L5 5L1 9" />
        </svg>
      </StyledPageBlock>
    </StyledPagination>
  )
}

export { Pagination }
