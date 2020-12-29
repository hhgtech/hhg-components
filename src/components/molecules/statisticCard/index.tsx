import React from 'react'

import {
  StyledDescriptionWrapper,
  StyledDot,
  StyledStatisticContainer,
  StyledStatisticNumberWrapper,
} from './index.styled'

export type Props = {
  type: 'big' | 'small'
  description: string
  value: string | number
  withIcon?: JSX.Element
  isInACard?: boolean
  cardColor?: string
  className?: string
}

const StatisticCard = ({
  type,
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
      data-size={type}
      data-is-in-card={type === 'big' && isInACard}
      data-card-color={cardColor}
    >
      <StyledDescriptionWrapper>
        {type === 'small' && <StyledDot data-color={cardColor} />}
        {description}
      </StyledDescriptionWrapper>
      <StyledStatisticNumberWrapper data-size={type}>
        {type !== 'small' && withIcon}
        {value}
      </StyledStatisticNumberWrapper>
    </StyledStatisticContainer>
  )
}

export { StatisticCard }
