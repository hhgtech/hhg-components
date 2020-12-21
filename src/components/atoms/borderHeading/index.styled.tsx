import styled from 'styled-components'
import { ThemeProps } from 'theme'

export const StyledBorderHeading = styled.h4`
  position: relative;
  padding-left: 12px;
  font-size: 18px;
  font-weight: ${(props: ThemeProps) => props.theme.sizes.fwBold};
  letter-spacing: -0.6px;
  line-height: 18px;

  &:after {
    position: absolute;
    top: 1px;
    left: 0;
    width: 4px;
    height: 16px;
    background-color: ${(props: ThemeProps) => props.theme.colors.primaryBase};
    content: '';
  }
`
