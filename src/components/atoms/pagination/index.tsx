import React, { useState, useEffect } from 'react'

import classnames from 'classnames'
import {
  StyledPageBlock,
  StyledPagination,
  StyledPaginationBlock,
} from './index.styled'

export type Props = {
  pagesAmount: number
  currentPage: number
  arrowLeft?: JSX.Element
  arrowRight?: JSX.Element
  onChange: (p: number) => void
  className?: string
}

const Pagination = ({
  className,
  pagesAmount,
  currentPage,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  onChange,
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
    <StyledPagination className={classnames(className)}>
      <StyledPageBlock
        onClick={() => handlePageChange(activePage - 1)}
        data-last-page={activePage === 1 || undefined}
      >
        {ArrowLeft}
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
        {ArrowRight}
      </StyledPageBlock>
    </StyledPagination>
  )
}

export { Pagination }
