import styled from 'styled-components'
import { ThemeProps } from 'theme'

export const StyledUploader = styled.div`
  .default-button[data-color='secondary'] {
    border: solid 2px ${(props: ThemeProps) => props.theme.colors.gray300};
    color: ${(props: ThemeProps) => props.theme.colors.gray800};

    &:hover {
      border: solid 2px ${(props: ThemeProps) => props.theme.colors.gray300};
      background-color: ${(props: ThemeProps) => props.theme.colors.gray300};
      color: ${(props: ThemeProps) => props.theme.colors.white};

      & > svg {
        fill: ${(props: ThemeProps) => props.theme.colors.white};
      }
    }
  }
`
export const StyledElementContainer = styled.div`
  ${(props: any) =>
    props['data-is-attached-to-element'] &&
    `
  display: inline-block;
  position: relative;
  `}
`
export const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props: ThemeProps) => props.theme.colors.gray100};

  ${(props: any) =>
    props['data-is-attached-to-element'] &&
    `
    position: absolute;
    bottom: -4px;
    right: -4px;
  `}

  & > svg {
    height: 16px;
    width: 16px;
  }
`

export const StyledDefaultButtonContent = styled.div`
  display: flex;
  align-items: center;
`
