import styled from 'styled-components'
import theme, { ThemeType } from 'theme'

export const StyledDashboardMenu = styled.div`
  p {
    color: $gray-800;
  }

  &[data-is-active] {
    background: $primary-base;
    p {
      color: $white;
    }
  }
`

export const Styledli = styled.li`
  display: flex;
  align-items: center;
  padding: 9px 24px;
  margin-bottom: 12px;
  border-radius: 6px;
  cursor: pointer;
`

export const StyledMenuItem = styled.div`
  display: flex;
  min-width: 25px;
  justify-content: center;
  margin-right: 12px;
`
