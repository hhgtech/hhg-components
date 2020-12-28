import styled from 'styled-components'
import { ThemeProps } from 'theme'

export const StyledIconText = styled.div`
  display: flex;
  align-items: center;

  @include layout-sp {
    &[data-size='lg'] {
      font-size: 16px;
      line-height: 24px;
      font-weight: ${(props: ThemeProps) => props.theme.sizes.fwBold};
    }
    &[data-size='md'] {
      font-size: 14px;
      line-height: 22px;
      font-weight: ${(props: ThemeProps) => props.theme.sizes.fwRegular};
    }
    &[data-size='sm'] {
      font-size: 13px;
      line-height: 20px;
      font-weight: ${(props: ThemeProps) => props.theme.sizes.fwRegular};
    }
  }
`
