import { ThemeProps } from 'misc/theme'
import { spLayout } from 'misc/utils'
import styled from 'styled-components'

export const StyledHeading = styled.div`
  color: ${(props: ThemeProps) => props.theme.colors.secondaryBase};
  font-weight: ${(props: ThemeProps) => props.theme.sizes.fwBold};
  line-height: 1.2;

  /* Base headings sizes and properties */
  > [data-tag='h1'] {
    font-size: 40px;
    letter-spacing: -1.2px;
  }

  > [data-tag='h2'] {
    font-size: 32px;
    letter-spacing: -1px;
  }

  > [data-tag='h3'] {
    font-size: 28px;
    letter-spacing: -0.8px;
  }

  > [data-tag='h4'] {
    font-size: 24px;
    letter-spacing: -0.6px;
  }

  > [data-tag='h5'] {
    font-size: 20px;
    letter-spacing: -0.4px;
  }

  /* Styles for mobile */
  ${spLayout()`
    > [data-tag='h1'] {
      font-size: 26px;
      letter-spacing: -0.9px;
    }

    > [data-tag='h2'] {
      font-size: 24px;
      letter-spacing: -0.8px;
    }

    > [data-tag='h3'] {
      font-size: 20px;
      letter-spacing: -0.7px;
    }

    > [data-tag='h4'] {
      font-size: 18px;
      letter-spacing: -0.6px;
    }

    &[data-tag='h5'] {
      font-size: 16px;
      letter-spacing: 0px;
    }
  `}
`
