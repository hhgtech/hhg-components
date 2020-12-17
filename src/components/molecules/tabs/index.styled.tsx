import styled from 'styled-components'
import theme, { ThemeType } from 'theme'

export const StyledTabs = styled.ul`
  display: inline-flex;
  border-bottom: 1px solid ${({ theme: ThemeType }) => theme.colors.neutral100};
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
  -webkit-overflow-scrolling: touch;
`

export const StyledTab = styled.li`
  padding-bottom: 4px;
  p {
    color: ${({ theme: ThemeType }) => theme.colors.gray400};
    white-space: nowrap;
  }

  &:not(:last-child) {
    margin-right: 24px;
  }

  &[data-is-tab-active] {
    p {
      color: ${({ theme: ThemeType }) => theme.colors.primaryBase};
    }
    border-bottom: 2px solid
      ${({ theme: ThemeType }) => theme.colors.primaryBase};
    margin-bottom: -1px;
  }

  &:not([data-is-tab-active]) {
    cursor: pointer;
  }
`
export const StyledTabContent = styled.div`
  display: flex;
  align-items: center;
`
export const StyledIcon = styled.div`
  margin-right: 8px;
`
