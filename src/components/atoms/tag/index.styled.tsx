import styled from 'styled-components'
import { ThemeProps } from 'theme'

export const StyledTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;
  background: ${(props: ThemeProps) => props.theme.colors.neutral200};
  border-radius: 24px;

  p {
    color: $gray-500;
  }

  &[data-tag-type='warning'] {
    background: ${(props: ThemeProps) => props.theme.colors.yellow50};
    p {
      color: ${(props: ThemeProps) => props.theme.colors.alertWarning};
    }
  }

  &[data-tag-type='danger'] {
    background: ${(props: ThemeProps) => props.theme.colors.red50};
    p {
      color: ${(props: ThemeProps) => props.theme.colors.red700};
    }
  }

  &[data-tag-type='success'] {
    background: ${(props: ThemeProps) => props.theme.colors.green50};
    p {
      color: ${(props: ThemeProps) => props.theme.colors.success};
    }
  }

  &[data-tag-type='blue'] {
    background: ${(props: ThemeProps) => props.theme.colors.blue50};
    p {
      color: ${(props: ThemeProps) => props.theme.colors.blue700};
    }
  }
  &[data-is-squared='true'] {
    border-radius: 4px;
  }
`
