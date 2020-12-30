import { ThemeProps } from 'src/misc/theme'
import { spLayout } from 'src/misc/utils'
import styled from 'styled-components'

export const StyledIconText = styled.div`
  display: flex;
  align-items: center;
  --font-weight-lg: ${(props: ThemeProps) => props.theme.sizes.fwBold};
  --font-weight-md: ${(props: ThemeProps) => props.theme.sizes.fwRegular};
  --font-weight-sm: ${(props: ThemeProps) => props.theme.sizes.fwRegular};
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
