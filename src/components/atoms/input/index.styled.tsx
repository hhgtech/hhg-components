import styled from 'styled-components'
import { ThemeProps } from 'theme'
import { pcLayout, spLayout } from 'utils'

export const StyledInput = styled.div`
  position: relative;
  min-height: 114px;
  min-width: 343px;

  &[data-has-error] {
    input {
      border-color: ${(props: ThemeProps) => props.theme.colors.red700};
    }
  }

  input {
    width: calc(100% - 34px); // border 2px and padding 32px
    border-radius: 6px;
    border: solid 1px ${(props: ThemeProps) => props.theme.colors.gray200};
    padding: 12px 16px;

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
      width: calc(100% - 66px);
      padding: 12px 48px 12px 16px;
    }
  }
  &[data-has-display-icon] {
    input {
      width: calc(100% - 66px);
      padding: 12px 16px 12px 48px;
    }
  }

  &[data-has-action-icon][data-has-display-icon] {
    input {
      width: calc(100% - 98px);
      padding: 12px 48px;
    }
  }

  ${spLayout()`
    font-size: 14px;
    line-height: 22px;
  `}

  ${pcLayout()`
    font-size: 16px;
    line-height: 24px;
  `}

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
export const StyledInputLabel = styled.label`
  display: inline-block;
  color: ${(props: ThemeProps) => props.theme.colors.gray600};
  font-weight: ${(props: ThemeProps) => props.theme.sizes.fwBold};
  margin-bottom: 4px;
`

export const StyledErrorLabel = styled.label`
  color: ${(props: ThemeProps) => props.theme.colors.red700};
  font-weight: ${(props: ThemeProps) => props.theme.sizes.fwRegular};
`

export const StyledActionIcon = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`
export const StyledDisplayIcon = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  cursor: default;
`
