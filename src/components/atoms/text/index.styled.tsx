import { ThemeProps } from 'misc/theme'
import { pcLayout, spLayout } from 'misc/utils'
import styled from 'styled-components'

export const StyledText = styled.p`
  --default-color: ${(props: ThemeProps) => props.theme.colors.gray800};
  --text-color: var(--custom-color, --default-color);

  color: var(--text-color);

  ${pcLayout()`
    &[data-size='lg'] {
      font-size: 26px;
      letter-spacing: -0.4px;
      line-height: 1.2;
    }
    &[data-size='md'] {
      font-size: 20px;
      letter-spacing: -0.4px;
      line-height: 1.2;
    }
    &[data-size='base'] {
      font-size: 16px;
      line-height: 1.5;
    }
    &[data-size='sm'] {
      font-size: 13px;
      line-height: 1.5;
    }
    &[data-size='xs'] {
      font-size: 11px;
      line-height: 1.5;
    }
  `}

  ${spLayout()`
      &[data-size='lg'] {
        font-size: 22px;
        letter-spacing: -0.4px;
        line-height: 1.2;
      }
      &[data-size='md'] {
        font-size: 16px;
        line-height: 1.2;
      }
      &[data-size='base'] {
        font-size: 14px;
        line-height: 1.5;
      }
      &[data-size='sm'] {
        font-size: 13px;
        line-height: 1.5;
      }
      &[data-size='xs'] {
        font-size: 11px;
        line-height: 1.5;
      }
    }
  `}

  /* Style the different types */

  /* Make variants bold */
  &[data-type='bold'],
  &[data-variant='heading'],
  &[data-type='caption'] {
    font-weight: ${(props: ThemeProps) => props.theme.sizes.fwBold};
  }

  /* Make caption uppercase */
  &[data-type='caption'] {
    text-transform: uppercase;
  }
`
