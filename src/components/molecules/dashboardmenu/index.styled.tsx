import { ThemeProps } from 'misc/theme'
import styled from 'styled-components'

export const StyledDashboardMenu = styled.div`
  p {
    color: ${(props: ThemeProps) => props.theme.colors.neutral200};
  }

  &[data-is-active] {
    background: ${(props: ThemeProps) => props.theme.colors.primaryBase};
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
