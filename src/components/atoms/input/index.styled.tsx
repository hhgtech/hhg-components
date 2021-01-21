import { ThemeProps } from 'misc/theme'
import { pcLayout, spLayout } from 'misc/utils'
import styled from 'styled-components'

export const StyledInput = styled.div`
  position: relative;
  min-width: 343px;
  min-height: 114px;

  &[data-has-error] {
    input {
      border-color: ${(props: ThemeProps) => props.theme.colors.red700};
    }
  }

  input {
    width: 100%;
    padding: 12px 16px;
    border: solid 1px ${(props: ThemeProps) => props.theme.colors.gray200};
    border-radius: 6px;

    &:active,
    &:focus {
      border-color: ${(props: ThemeProps) => props.theme.colors.primaryBase};
      box-shadow: 0px 0px 2px 2px
        ${(props: ThemeProps) => props.theme.colors.blue200};
    }

    &:disabled {
      background-color: ${(props: ThemeProps) => props.theme.colors.gray100};
      cursor: not-allowed;
    }
  }

  &[data-has-action-icon] {
    input {
      padding: 12px 48px 12px 16px;
    }
  }
  &[data-has-display-icon] {
    input {
      padding: 12px 16px 12px 48px;
    }
  }

  &[data-has-action-icon][data-has-display-icon] {
    input {
      padding: 12px 48px;
    }
  }

  &[data-size='lg'] {
    input {
      font-size: 16px;
      font-weight: ${(props: ThemeProps) => props.theme.sizes.fwRegular};
      ${spLayout()`
        font-size: 22px;
        line-height: 1.2;
      `}

      ${pcLayout()`
        font-size: 26px;
        line-height: 1.2;
      `}
    }
  }
  &[data-size='md'] {
    input {
      font-weight: ${(props: ThemeProps) => props.theme.sizes.fwRegular};
      line-height: 22px;
      ${spLayout()`
        font-size: 14px;
        line-height: 1.2;
      `}

      ${pcLayout()`
        font-size: 16px;
        line-height: 1.2;
      `}
    }
  }
  &[data-size='sm'] {
    input {
      font-weight: ${(props: ThemeProps) => props.theme.sizes.fwRegular};
      line-height: 20px;
      ${spLayout()`
        font-size: 13px;
        line-height: 1.5;
      `}

      ${pcLayout()`
        font-size: 13px;
        line-height: 1.5;
      `}
    }
  }
`
export const StyledInputLabel = styled.label`
  display: inline-block;
  margin-bottom: 4px;
  color: ${(props: ThemeProps) => props.theme.colors.gray600};
  font-weight: ${(props: ThemeProps) => props.theme.sizes.fwBold};
`

export const StyledErrorLabel = styled.label`
  color: ${(props: ThemeProps) => props.theme.colors.red700};
  font-weight: ${(props: ThemeProps) => props.theme.sizes.fwRegular};
`

export const StyledActionIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  cursor: pointer;
  transform: translateY(-50%);
`
export const StyledDisplayIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 16px;
  display: inline-flex;
  cursor: default;
  transform: translateY(-50%);
`
