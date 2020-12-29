import styled from 'styled-components'
import { ThemeProps } from 'theme'

export const StyledSlider = styled.div`
  margin: 0 12px;
  position: relative;

  & div[role='slider'] {
    -webkit-text-size-adjust: none;
    -webkit-user-select: none;
    &:focus {
      outline: none;
    }
  }
`

export const StyledStep = styled.div`
  position: absolute;
  top: 19px;
  width: 24px;
  height: 24px;
  color: ${(props: ThemeProps) => props.theme.colors.white};
  border: 2px solid ${(props: ThemeProps) => props.theme.colors.white};
  border-radius: 50%;
  transform: translateY(-50%) translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${(props: ThemeProps) =>
    props['data-is-active']
      ? `background-color:  ${props.theme.colors.primaryBase};
      `
      : `background-color:  ${props.theme.colors.white};
        color: ${props.theme.colors.gray300};
        border: 1px solid ${props.theme.colors.gray300};
      `};
`

export const StyledTrackContainer = styled.div`
  display: flex;
  width: 100%;
  height: 36px;
  margin-top: 32px;
`

export const StyledTrack = styled.div`
  width: 100%;
  height: 5px;
  align-self: center;
  border-radius: 4px;
  background-color: ${(props: ThemeProps) => props.theme.colors.gray200};
`

export const StyledStepLabel = styled.div`
  position: absolute;
  top: 32px;
  min-width: 100px;
  text-align: center;
  color: ${(props: ThemeProps) => props.theme.colors.gray800};
  font-size: ${(props: ThemeProps) => props.theme.sizes.fsCaption2};
`
