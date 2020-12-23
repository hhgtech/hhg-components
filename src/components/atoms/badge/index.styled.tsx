import styled from 'styled-components'
import { ThemeProps } from 'theme'

export const StyledBadge = styled.div`
  width: max-content;
  height: 24px;
  padding: 1px 8px 1px 8px;
  border-radius: 32px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;

  &[data-color='primary'] {
    background-color: ${(props: ThemeProps) => props.theme.colors.blue50};
    color: ${(props: ThemeProps) => props.theme.colors.blue600};
  }

  &[data-color='secondary'] {
    color: ${(props: ThemeProps) => props.theme.colors.gray600};
    border: solid 1px ${(props: ThemeProps) => props.theme.colors.gray200};
  }
`
