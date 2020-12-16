import styled from 'styled-components'
import theme, { ThemeType } from 'theme'

export const StyledTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;
  background: ${({ theme: ThemeType }) => theme.colors.neutral200};
  border-radius: 24px;

  p {
    color: $gray-500;
  }

  &[data-tag-type='warning'] {
    background: ${({ theme: ThemeType }) => theme.colors.yellow50};
    p {
      color: ${({ theme: ThemeType }) => theme.colors.alertWarning};
    }
  }

  &[data-tag-type='danger'] {
    background: ${({ theme: ThemeType }) => theme.colors.red50};
    p {
      color: ${({ theme: ThemeType }) => theme.colors.red700};
    }
  }

  &[data-tag-type='success'] {
    background: ${({ theme: ThemeType }) => theme.colors.green50};
    p {
      color: ${({ theme: ThemeType }) => theme.colors.success};
    }
  }

  &[data-tag-type='blue'] {
    background: ${({ theme: ThemeType }) => theme.colors.blue50};
    p {
      color: ${({ theme: ThemeType }) => theme.colors.blue700};
    }
  }
  &[data-is-squared='true'] {
    border-radius: 4px;
  }
`
