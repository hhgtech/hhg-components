import React, { ReactElement } from 'react'

import { CSSProperties } from 'styled-components'

import { Text } from '../../atoms/text'
import { StyledCategoryCard } from './index.styled'

export type Props = {
  imgBanner: ReactElement
  label: string
  className?: string
  style?: CSSProperties
  onClick?: () => void
}

export const CategoryCard = ({
  imgBanner,
  label,
  className,
  style,
  onClick,
}: Props) => {
  return (
    <StyledCategoryCard className={className} style={style} onClick={onClick}>
      <div className="banner">{imgBanner}</div>
      <div className="content">
        <Text className="category_name" size="sm" type="bold">
          {label}
        </Text>
      </div>
    </StyledCategoryCard>
  )
}
