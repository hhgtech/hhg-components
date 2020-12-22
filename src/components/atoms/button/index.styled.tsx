import styled, { keyframes } from 'styled-components'
import { ThemeProps } from 'theme'

export const StyledButton = styled.button`
  width: auto;
  border-radius: 6px;
  cursor: pointer;
  font-weight: ${(props: ThemeProps) => props.theme.sizes.fwBold};
  transition: background-color 0.3s, border-color 0.3s;

  &[data-has-icon] {
    display: flex;
    align-items: center;
    svg {
      width: 16px;
      height: 16px;
      margin-right: 10px;
    }
  }

  &[data-color='primary'] {
    background-color: ${(props: ThemeProps) => props.theme.colors.primaryBase};
    color: ${(props: ThemeProps) => props.theme.colors.white};

    &[data-size='lg'] {
      padding: 12px 24px;
      font-size: 16px;
      line-height: 24px;
    }

    &[data-size='md'] {
      padding: 8px 24px;
      font-size: 14px;
      line-height: 24px;
    }

    &[data-size='sm'] {
      padding: 6px 24px;
      font-size: 13px;
      line-height: 20px;
    }

    &:hover {
      background-color: ${(props: ThemeProps) =>
        props.theme.colors.primaryHover};
    }

    &:active {
      background-color: ${(props: ThemeProps) =>
        props.theme.colors.primaryActive};
    }
  }

  &[data-is-loading] {
    span {
      padding-left: 32px;
    }
    svg {
      position: absolute;
      width: 24px;
      height: 24px;
    }
  }

  &[data-color='secondary'] {
    border: solid 2px ${(props: ThemeProps) => props.theme.colors.primaryBase};
    background-color: ${(props: ThemeProps) => props.theme.colors.white};
    color: ${(props: ThemeProps) => props.theme.colors.primaryBase};

    &[data-size='lg'] {
      padding: 11px 24px;
      font-size: 16px;
      line-height: 24px;
    }

    &[data-size='md'] {
      padding: 7px 24px;
      font-size: 14px;
      line-height: 24px;
    }

    &[data-size='sm'] {
      padding: 5px 24px;
      font-size: 13px;
      line-height: 20px;
    }

    &:hover {
      border-color: ${(props: ThemeProps) => props.theme.colors.primaryHover};
      background-color: ${(props: ThemeProps) =>
        props.theme.colors.primaryHover};
      color: ${(props: ThemeProps) => props.theme.colors.white};
    }

    &:active {
      border-color: ${(props: ThemeProps) => props.theme.colors.primaryActive};
      background-color: ${(props: ThemeProps) =>
        props.theme.colors.primaryActive};
      color: ${(props: ThemeProps) => props.theme.colors.white};
    }
  }

  &:disabled {
    border-color: $gray-300;
    background-color: $gray-300;
    color: ${(props: ThemeProps) => props.theme.colors.white};
    cursor: not-allowed;
  }

  &[data-block] {
    width: 100%;
    padding: 12px auto;
  }
`

const circle = keyframes`
  0% {
        transfrom: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
`

export const StyledLoader = styled.svg`
  animation: ${circle} 1.2s linear infinite;
`
