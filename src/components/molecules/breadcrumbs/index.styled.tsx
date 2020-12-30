import { ThemeProps } from 'src/misc/theme'
import styled from 'styled-components'

export const StyledBreadcrumb = styled.div`
  position: relative;
  display: flex;

  & > .collapsed-breadcrumb {
    border: none;
    & > div {
      padding: 0;
    }
    & > ul {
      min-width: max-content;
    }
  }

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
`

export const StyledSeperator = styled.div`
  margin-right: 8px;
  margin-left: 8px;
  width: 6px;
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='10' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L1 9' stroke='%23595959' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  &[data-size='lg'] {
    width: 6px;
    margin-right: 8px;
    margin-left: 8px;
  }
  &[data-size='md'] {
    width: 5px;
    margin-right: 7px;
    margin-left: 7px;
  }
  &[data-size='sm'] {
    width: 4px;
    margin-right: 6px;
    margin-left: 6px;
  }
`

export const StyledTextLink = styled.div`
  max-width: 12em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  > a {
    color: ${(props: ThemeProps) => props.theme.colors.gray800};
    cursor: pointer;
    text-decoration: none;
  }

  &[data-last='true'] {
    > a {
      color: ${(props: ThemeProps) => props.theme.colors.gray500};
    }
  }

  > a {
    &:hover,
    &:focus {
      color: ${(props: ThemeProps) => props.theme.colors.primaryHover};
      outline: none;
      .arrowLeft,
      .arrowRight {
        stroke: ${(props: ThemeProps) => props.theme.colors.primaryActive};
      }
    }

    &:active {
      color: ${(props: ThemeProps) => props.theme.colors.primaryActive};
    }
  }

  &[data-disabled] {
    > a {
      cursor: not-allowed;
      color: ${(props: ThemeProps) => props.theme.colors.gray300};
    }
  }
`
