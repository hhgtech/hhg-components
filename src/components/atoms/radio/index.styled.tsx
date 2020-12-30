import { ThemeProps } from 'misc/theme'
import styled from 'styled-components'

export const StyledRadio = styled.div`
  &[data-type='circle'] {
    display: flex;
    cursor: pointer;
    position: relative;
    align-items: center;

    input {
      width: 20px;
      height: 20px;
      border: solid 1px ${(props: ThemeProps) => props.theme.colors.gray500};
      border-radius: 100%;
      transition: background 0.4s, border-color 0.4s, box-shadow 0.4s;
      cursor: inherit;
      margin-right: 8px;
      flex-shrink: 0;

      &:hover,
      &:active {
        border-color: ${(props: ThemeProps) => props.theme.colors.primaryBase};
        box-shadow: 0 0 2px 2px
          ${(props: ThemeProps) => props.theme.colors.blue600};
      }

      &:checked {
        border-color: ${(props: ThemeProps) => props.theme.colors.primaryBase};
        &:after {
          content: '';
          position: absolute;
          width: 14px;
          height: 14px;
          left: 3px;
          top: 4px;
          border-radius: 50%;
          background-color: ${(props: ThemeProps) =>
            props.theme.colors.primaryBase};
        }
      }
    }

    label {
      font-weight: ${(props: ThemeProps) => props.theme.sizes.fwRegular};
      width: calc(100% - 24px);
      cursor: inherit;
    }

    &[data-disabled='true'] {
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
  }

  &[data-type='rectangle'] {
    input {
      display: none;

      &:checked ~ label {
        font-weight: ${(props: ThemeProps) => props.theme.sizes.fwBold};
        color: ${(props: ThemeProps) => props.theme.colors.white};
        background-color: ${(props: ThemeProps) => props.theme.colors.blue600};
        border-color: ${(props: ThemeProps) => props.theme.colors.blue600};
      }
    }

    label {
      box-sizing: border-box;
      display: inline-block;
      width: auto;
      border: solid 1px ${(props: ThemeProps) => props.theme.colors.gray300};
      border-radius: 6px;
      text-align: center;
      font-weight: ${(props: ThemeProps) => props.theme.sizes.fwRegular};
      color: ${(props: ThemeProps) => props.theme.colors.gray800};
      cursor: pointer;
      flex-shrink: 0;

      &:hover,
      &:active {
        border-color: ${(props: ThemeProps) => props.theme.colors.blue600};
      }
    }

    &[data-disabled='true'] {
      input {
        cursor: not-allowed;
      }

      label {
        cursor: not-allowed;
        color: ${(props: ThemeProps) => props.theme.colors.gray300};

        &:hover {
          border-color: ${(props: ThemeProps) => props.theme.colors.gray300};
        }
      }
    }

    &[data-size='small'] {
      label {
        font-size: 13px;
        height: 32px;
        padding: 6px 12px;
      }
    }

    &[data-size='large'] {
      label {
        font-size: 14px;
        height: 48px;
        padding: 13px 16px;
      }
    }
  }
`
