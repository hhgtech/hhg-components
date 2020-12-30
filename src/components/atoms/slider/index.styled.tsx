import { ThemeProps } from 'src/misc/theme'
import styled from 'styled-components'

export const StyledSlider = styled.div`
  margin: 0 12px;

  & div[role='slider'] {
    -webkit-text-size-adjust: none;
    -webkit-user-select: none;
    &:focus {
      outline: none;
    }
  }
`

export const StyledThumb = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  background-color: ${(props: ThemeProps) => props.theme.colors.white};
  border-radius: 50%;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.07), 0px 4px 7px rgba(0, 0, 0, 0.15);
`

export const StyledDot = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px;
  height: 16px;
  background: ${(props: ThemeProps) => props.theme.colors.primaryBase};
  border-radius: 50%;
  transform: translateY(-50%) translateX(-50%);
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
`

export const StyledLabel = styled.div`
  position: absolute;
  top: -28px;
  display: block;
  padding: 4px;
  background-color: ${(props: ThemeProps) => props.theme.colors.primaryBase};
  border-radius: 4px;
  color: ${(props: ThemeProps) => props.theme.colors.white};
  font-size: 14px;
  font-weight: bold;
  outline: none;
  white-space: nowrap;

  &:focus {
    outline: none;
  }
`
