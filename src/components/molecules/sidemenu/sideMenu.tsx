import React, { CSSProperties, ReactNode } from 'react'

import styled from 'styled-components'

const StyledSideMenu = styled.div`
  --menu-width: 240px;
  padding: 28px 16px;
  background-color: ${(props) => props.theme.colors.neutral50};
  width: var(--menu-width);
  height: 100vh;
  transition: ease-in-out 0.5s;

  &[data-is-collapsed] {
    --menu-width: 64px;
  }
`

type Props = {
  isCollapsed: boolean
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

const SideMenu = ({ isCollapsed, className, style, children }: Props) => {
  return (
    <StyledSideMenu
      style={style}
      className={className}
      data-is-collapsed={isCollapsed || undefined}
    >
      {children}
    </StyledSideMenu>
  )
}

export { SideMenu }
