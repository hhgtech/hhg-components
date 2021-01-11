import { ThemeProps } from 'misc/theme'
import { pcLayout, spLayout } from 'misc/utils'
import styled from 'styled-components'

export const StyledInput = styled.div`
  position: relative;
  width: 100%;

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
    font-weight: ${(props: ThemeProps) => props.theme.sizes.fwBold};
    line-height: 24px;
  }
  &[data-size='md'] {
    font-size: 14px;
    font-weight: ${(props: ThemeProps) => props.theme.sizes.fwRegular};
    line-height: 22px;
  }
  &[data-size='sm'] {
    font-size: 13px;
    font-weight: ${(props: ThemeProps) => props.theme.sizes.fwRegular};
    line-height: 20px;
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
  cursor: default;
  transform: translateY(-50%);
`
