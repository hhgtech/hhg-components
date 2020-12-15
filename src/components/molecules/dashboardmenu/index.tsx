import React, { useState, CSSProperties } from 'react'
import classnames from 'classnames'
import { Text } from 'components/atoms/text'
import nextId, { useId } from 'react-id-generator'
import { StyledDashboardMenu, Styledli, StyledMenuItem } from './index.styled'

type Pages = {
  name: string
  icon: JSX.Element
  activeIcon?: JSX.Element
}

export type Props = {
  pages: Array<Pages>
  initalPage?: number
  style?: CSSProperties
}

const DashboardMenu = ({ pages, initalPage, style }: Props) => {
  const [isPageActive, setPageActive] = useState(initalPage || 0)
  const idList = useId(pages.length)

  return (
    <StyledDashboardMenu style={{ ...style }}>
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
