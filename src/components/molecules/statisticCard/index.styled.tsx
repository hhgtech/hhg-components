import styled from 'styled-components'
import { ThemeProps } from 'theme'

export const StyledStatisticContainer = styled.div`
  border-radius: 6px;
  ${(props) =>
    props['data-is-in-card'] &&
    `
  padding: 12px; 
  background-color: ${props['data-card-color']};`}
`
export const StyledDot = styled.div`
  height: 13px;
  width: 13px;
  background-color: ${(props) => props['data-color']};
  border-radius: 50%;
  margin-right: 10px;
`

export const StyledDescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: ${(props: ThemeProps) => props.theme.sizes.fwRegular};
  color: ${(props: ThemeProps) => props.theme.colors.gray800};
  font-size: ${(props: ThemeProps) => props.theme.sizes.fsParagraph4};
`

export const StyledStatisticNumberWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  color: ${(props: ThemeProps) => props.theme.colors.gray800};
  font-weight: ${(props: ThemeProps) => props.theme.sizes.fwSemiBold};
  font-size: ${(props: ThemeProps) => props.theme.sizes.fsHeading2};

  & > svg {
    height: 24px;
    width: 24px;
    margin-right: 12px;
  }

  &[data-size='small'] {
    font-weight: ${(props: ThemeProps) => props.theme.sizes.fwBold};
    font-size: ${(props: ThemeProps) => props.theme.sizes.fsParagraph4};
    margin-left: 23px;
  }
`
