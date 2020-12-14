import styled from 'styled-components'
import { pcLayout, spLayout } from 'utils'
import theme, { ThemeType } from 'theme'

export const StyledAlert = styled.div`
  display: flex;
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  padding-right: 18px;
  padding-left: 24px;
  border-left: 4px solid ${({ theme: ThemeType }) => theme.colors.success};
  background: ${({ theme: ThemeType }) => theme.colors.green50};

  &[data-alert-type='danger'] {
    border-left-color: ${({ theme: ThemeType }) => theme.colors.red500};
    background: ${({ theme: ThemeType }) => theme.colors.red50};
  }

  &[data-alert-type='warning'] {
    border-left-color: ${({ theme: ThemeType }) => theme.colors.yellow500};
    background: ${({ theme: ThemeType }) => theme.colors.yellow50};
  }

  &[data-alert-type='blue'] {
    border-left-color: ${({ theme: ThemeType }) => theme.colors.blue500};
    background: ${({ theme: ThemeType }) => theme.colors.blue50};
  }
`
export const StyledContent = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
  }
`

export const StyledClose = styled.div`
  cursor: pointer;
`
