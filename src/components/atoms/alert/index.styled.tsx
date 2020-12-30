import { ThemeProps } from 'misc/theme'
import styled from 'styled-components'

export const StyledAlert = styled.div`
  display: flex;
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  padding-right: 18px;
  padding-left: 24px;
  border-left: 4px solid ${(props: ThemeProps) => props.theme.colors.success};
  background: ${(props: ThemeProps) => props.theme.colors.green50};

  &[data-alert-type='danger'] {
    border-left-color: ${(props: ThemeProps) => props.theme.colors.red500};
    background: ${(props: ThemeProps) => props.theme.colors.red50};
  }

  &[data-alert-type='warning'] {
    border-left-color: ${(props: ThemeProps) => props.theme.colors.yellow500};
    background: ${(props: ThemeProps) => props.theme.colors.yellow50};
  }

  &[data-alert-type='blue'] {
    border-left-color: ${(props: ThemeProps) => props.theme.colors.blue500};
    background: ${(props: ThemeProps) => props.theme.colors.blue50};
  }
`
export const StyledContent = styled.div`
  display: flex;
  align-items: center;

  svg,
  img {
    margin-right: 8px;
  }
`

export const StyledClose = styled.div`
  cursor: pointer;
`
