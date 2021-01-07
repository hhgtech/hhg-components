import React, { ReactNode } from 'react'

import { Text } from 'components/atoms'
import { ThemeProps } from 'misc/theme'
import Styled from 'styled-components'

const StyledMenuLink = Styled.div`
  padding: 9px 21px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  
  &:not([data-is-link-active]) {
    cursor: pointer;
  }

  p {
    margin-left: 12px;
  }

  &[data-is-link-active] {
    background: ${(props: ThemeProps) => props.theme.colors.primaryBase};
  }

  &[data-is-link-collapsed] {
    margin-left: -14px;
    margin-right: -14px;
    justify-content: center
  }
`

type Props = {
  icon: JSX.Element
  children: ReactNode
  isCollapsed: boolean
  onLinkClick: () => void
  activeIcon?: JSX.Element
  isActive?: boolean
}

const MenuLink = ({
  icon,
  isActive,
  children,
  isCollapsed,
  activeIcon,
  onLinkClick,
}: Props) => {
  return (
    <StyledMenuLink
      data-is-link-active={isActive || undefined}
      onClick={onLinkClick}
      data-is-link-collapsed={isCollapsed || undefined}
    >
      {!(isActive && activeIcon) ? icon : activeIcon}
      {!isCollapsed && (
        <Text size="base" type="bold" color={isActive ? '#fff' : '#595959'}>
          {children}
        </Text>
      )}
    </StyledMenuLink>
  )
}

export { MenuLink }
