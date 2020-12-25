import React, { useEffect, useRef, useState } from 'react'

import {
  StyledDescriptionWrapper,
  StyledStatisticContainer,
  StyledStatisticNumberWrapper,
} from './index.styled'

export type Props = {
  description: string
  value: string | number
  withIcon?: JSX.Element
  isInACard?: boolean
  cardColor?: string
  className?: string
}

const StatisticCard = ({
  description,
  value,
  withIcon,
  isInACard,
  cardColor,
  className,
}: Props) => {
  return (
    <StyledStatisticContainer
      className={className}
      data-is-in-card={isInACard || undefined}
      cardColor={cardColor}
    >
      <StyledDescriptionWrapper>{description}</StyledDescriptionWrapper>
      <StyledStatisticNumberWrapper>
        {withIcon}
        <div>{value}</div>
      </StyledStatisticNumberWrapper>
    </StyledStatisticContainer>
  )
}

export { StatisticCard }
