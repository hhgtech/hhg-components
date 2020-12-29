import React, { useState, CSSProperties } from 'react'

import { Text } from 'components/atoms/text'
import { useId } from 'react-id-generator'

import { StyledDashboardMenu, Styledli, StyledMenuItem } from './index.styled'

type Pages = {
  name: string
  icon: JSX.Element
  activeIcon?: JSX.Element
}

export type Props = {
  pages: Array<Pages>
  initalPage?: number
  className?: string
  style?: CSSProperties
}

const DashboardMenu = ({ pages, initalPage, style, className }: Props) => {
  const [isPageActive, setPageActive] = useState(initalPage || 0)
  const idList = useId(pages.length)

  return (
    <StyledDashboardMenu style={{ ...style }} className={className}>
      <ul>
        {pages.map((page, i) => (
          <Styledli
            key={idList[i]}
            data-is-active={isPageActive === i || undefined}
            onClick={() => setPageActive(i)}
          >
            <StyledMenuItem>
              {isPageActive === i ? page.activeIcon : page.icon}
            </StyledMenuItem>

            <Text size="base" type="bold">
              {page.name}
            </Text>
          </Styledli>
        ))}
      </ul>
    </StyledDashboardMenu>
  )
}

export { DashboardMenu }
