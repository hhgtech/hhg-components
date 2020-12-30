import { ThemeProps } from 'src/misc/theme'
import styled from 'styled-components'

export const StyledSlider = styled.div`
  position: relative;
  width: 100%;

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

  background-color: ${(props: ThemeProps) => props.theme.colors.white};
  color: ${(props: ThemeProps) => props.theme.colors.gray300};
  border: 1px solid ${(props: ThemeProps) => props.theme.colors.gray300};

  &[data-is-active='true'] {
    background-color: ${(props: ThemeProps) => props.theme.colors.primaryBase};
    color: ${(props: ThemeProps) => props.theme.colors.white};
    border: none;
  }
`

export const StyledTrackContainer = styled.div`
  display: flex;
  width: 100%;
  height: 36px;

  &[data-track-type='detail'] {
    margin-top: 0;
  }

  &[data-track-type='detail'][data-step-passed='true'] > div {
    border: 1px solid ${(props: ThemeProps) => props.theme.colors.primaryBase};
    height: 0px;
  }

  &[data-track-type='detail'] > div {
    border: 1px solid ${(props: ThemeProps) => props.theme.colors.gray200};
    height: 0px;
  }
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
  color: ${(props: ThemeProps) => props.theme.colors.gray500};
  font-size: ${(props: ThemeProps) => props.theme.sizes.fsCaption2};
  font-weight: ${(props: ThemeProps) => props.theme.sizes.fwBold};

  &[data-step-passed='true'] {
    color: ${(props: ThemeProps) => props.theme.colors.gray800};
  }
`

export const StyledBreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
`

export const StyledBreadcrumbWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props: ThemeProps) => props.theme.sizes.fsCaption2};
  font-weight: ${(props: ThemeProps) => props.theme.sizes.fwBold};
  color: ${(props: ThemeProps) => props.theme.colors.gray500};
  cursor: pointer;

  & > svg {
    height: 10px;
    width: 10px;
    margin: 0 14px;
  }

  & > svg > path {
    stroke: ${(props: ThemeProps) => props.theme.colors.gray500};
  }

  &[data-selected='true'] {
    color: ${(props: ThemeProps) => props.theme.colors.primaryBase};
  }
`

export const StyledDetailStep = styled.div`
  position: absolute;
  left: 0;
  top: 19px;
  height: 24px;
  cursor: pointer;

  transform: translateY(-50%);
  display: flex;
  align-items: center;

  padding: 8px;
  background-color: ${(props: ThemeProps) => props.theme.colors.white};
`

export const StyledDetailStepIndicator = styled.div`
  min-width: 24px;
  height: 24px;
  border: 2px solid ${(props: ThemeProps) => props.theme.colors.white};
  border-radius: 50%;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  background-color: ${(props: ThemeProps) => props.theme.colors.white};
  color: ${(props: ThemeProps) => props.theme.colors.gray300};
  border: 1px solid ${(props: ThemeProps) => props.theme.colors.gray300};

  &[data-is-active='true'] {
    border: none;
    background-color: ${(props: ThemeProps) => props.theme.colors.primaryBase};
    color: ${(props: ThemeProps) => props.theme.colors.white};
  }
`

export const StyledDetailStepIndicatorExternal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    height: 20px;
    width: 20px;
    margin-right: 8px;

    & > path {
      stroke: ${(props: ThemeProps) => props.theme.colors.gray500};
    }
  }
`

export const StyledDetailStepLabel = styled.div`
  color: ${(props: ThemeProps) => props.theme.colors.gray400};
  font-size: ${(props: ThemeProps) => props.theme.sizes.fsCaption2};
  font-weight: ${(props: ThemeProps) => props.theme.sizes.fwBold};
  margin-right: 8px;
  flex: 0 0 auto;

  &[data-step-passed='true'] {
    color: ${(props: ThemeProps) => props.theme.colors.gray800};
  }
`
export const StyledDetailStepDescription = styled.div`
  position: absolute;
  top: 32px;
  font-weight: ${(props: ThemeProps) => props.theme.sizes.fwRegular};
  color: ${(props: ThemeProps) => props.theme.colors.gray400};
  padding-right: 16px;
`
