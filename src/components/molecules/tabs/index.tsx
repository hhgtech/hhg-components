import React, { useState } from 'react'

import { CSSProperties } from 'styled-components'
import {
  StyledTabs,
  StyledTab,
  StyledTabContent,
  StyledIcon,
} from './index.styled'
import { Text } from './../../atoms'

type TabContent = {
  name: string
  icon?: JSX.Element
}

export type Props = {
  tabContent: Array<TabContent>
  initialTab?: number
  style?: CSSProperties
}

const Tabs = ({ style, initialTab, tabContent }: Props) => {
  const [activeTab, setActiveTab] = useState(initialTab || 0)

  return (
    <StyledTabs style={{ ...style }}>
      {tabContent.map((tab, i) => (
        <StyledTab
          data-is-tab-active={activeTab === i || undefined}
          onClick={() => setActiveTab(i)}
        >
          <StyledTabContent>
            {tab.icon && <StyledIcon>{tab.icon}</StyledIcon>}
            <Text size="sm" type="bold">
              {tab.name}
            </Text>
          </StyledTabContent>
        </StyledTab>
      ))}
    </StyledTabs>
  )
}

export { Tabs }
