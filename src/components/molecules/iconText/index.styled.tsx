import { ThemeProps } from 'misc/theme'
import { spLayout } from 'misc/utils'
import styled from 'styled-components'

export const StyledIconText = styled.div`
  display: flex;
  align-items: center;
  --font-weight-lg: ${(props: ThemeProps) => props.theme.sizes.fwBold};
  --font-weight-md: ${(props: ThemeProps) => props.theme.sizes.fwRegular};
  --font-weight-sm: ${(props: ThemeProps) => props.theme.sizes.fwRegular};

  &[data-icon-position='left'] {
    & > *:first-child {
      margin-right: 8px;
    }

    & > *:last-child {
      width: calc(100% - 24px);
    }
  }
  &[data-icon-position='right'] {
    & > *:first-child {
      width: calc(100% - 24px);
    }
    & > *:last-child {
      margin-left: 8px;
    }
  }

  ${spLayout()`
    &[data-size='lg'] {
      font-size: 16px;
      line-height: 24px;
      font-weight: var(--font-weight-lg);
    }
    &[data-size='md'] {
      font-size: 14px;
      line-height: 22px;
      font-weight: var(--font-weight-md);
    }
    &[data-size='sm'] {
      font-size: 13px;
      line-height: 20px;
      font-weight: var(----font-weight-sm);
    }
  `}
`
