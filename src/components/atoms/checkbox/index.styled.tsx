import styled from 'styled-components'
import { ThemeProps } from 'theme'
import { pcLayout, spLayout } from 'utils'

export const StyledCheckbox = styled.div`
  display: flex;
  cursor: pointer;

  input {
    width: 20px;
    height: 20px;
    border: solid 1px ${(props: ThemeProps) => props.theme.colors.gray500};
    border-radius: 2px;
    transition: background 0.4s, border-color 0.4s, box-shadow 0.4s;
    cursor: inherit;

    &:hover,
    &:active {
      border-color: ${(props: ThemeProps) => props.theme.colors.primaryBase};
      box-shadow: 0 0 2px 2px
        ${(props: ThemeProps) => props.theme.colors.blue200};
    }

    &:checked {
      border: 0;
      background: ${(props: ThemeProps) => props.theme.colors.primaryBase}
        url("data:image/svg+xml,%3Csvg width='12' height='9' viewBox='0 0 12 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 1L4.125 8L1 4.81819' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")
        no-repeat center center;
    }
  }

  label {
    max-width: 15rem;
    margin-left: 8px;
    font-weight: ${(props: ThemeProps) => props.theme.sizes.fwRegular};
    width: calc(100% - 24px);
    cursor: inherit;

    ${spLayout()`
      font-size: 14px;
      line-height: 24px;
    `}

    ${pcLayout()`
      font-size: 16px;
      line-height: 22px;
    `}
  }

  &[data-disabled] {
    color: ${(props: ThemeProps) => props.theme.colors.gray300};
    cursor: not-allowed;
    input {
      border-color: ${(props: ThemeProps) => props.theme.colors.gray300};

      &:hover {
        border-color: ${(props: ThemeProps) => props.theme.colors.gray300};
        box-shadow: none;
      }
    }
  }
`
