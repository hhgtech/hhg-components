import React, { useEffect, useState } from 'react'

import { Text } from 'components/atoms'
import { useId } from 'react-id-generator'
import { CSSProperties } from 'styled-components'

import {
  StyledTabs,
  StyledTab,
  StyledTabContent,
  StyledIcon,
} from './index.styled'

type TabContent = {
  name: string
  icon?: JSX.Element
}

export type Props = {
  tabContent: Array<TabContent>
  onChange?: (n: number) => void
  className?: string
  initialTab?: number
  style?: CSSProperties
}

const Tabs = ({
  style,
  initialTab,
  tabContent,
  onChange,
  className,
}: Props) => {
  const [activeTab, setActiveTab] = useState(initialTab || 0)
  const idList = useId(tabContent.length)

  useEffect(() => {
    setActiveTab(initialTab)
  }, [initialTab])

  return (
    <StyledTabs style={style} className={className}>
      {tabContent.map((tab, i) => (
        <StyledTab
          data-is-tab-active={activeTab === i || undefined}
          onClick={() => {
            setActiveTab(i)
            onChange && onChange(i)
          }}
          key={idList[i]}
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
