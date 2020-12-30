import { ThemeProps } from 'misc/theme'
import styled from 'styled-components'

export const StyledUnderlinedLink = styled.div`
  a {
    color: ${(props: ThemeProps) => props.theme.colors.primaryBase};
    cursor: pointer;
    text-decoration: underline;

    &:hover,
    &:focus {
      color: ${(props: ThemeProps) => props.theme.colors.primaryHover};
      outline: none;
      .arrowLeft,
      .arrowRight {
        stroke: ${(props: ThemeProps) => props.theme.colors.primaryHover};
      }
    }

    &:active {
      color: ${(props: ThemeProps) => props.theme.colors.primaryActive};
    }

    &:visited {
      color: ${(props: ThemeProps) => props.theme.colors.primaryVisited};
    }
  }

  &[data-disabled] {
    & > a {
      color: ${(props: ThemeProps) => props.theme.colors.gray300};
      cursor: not-allowed;
    }
  }

  @include layout-sp {
    &[data-size='lg'] {
      & > a {
        font-size: 16px;
        font-weight: ${(props: ThemeProps) => props.theme.sizes.fwBold};
        line-height: 24px;
      }
    }
    &[data-size='md'] {
      & > a {
        font-size: 14px;
        font-weight: ${(props: ThemeProps) => props.theme.sizes.fwRegular};
        line-height: 22px;
      }
    }
    &[data-size='sm'] {
      & > a {
        font-size: 13px;
        font-weight: ${(props: ThemeProps) => props.theme.sizes.fwRegular};
        line-height: 20px;
      }
    }
    &[data-size='xm'] {
      & > a {
        font-size: 11px;
        font-weight: ${(props: ThemeProps) => props.theme.sizes.fwRegular};
        line-height: 20px;
      }
    }
  }
`
