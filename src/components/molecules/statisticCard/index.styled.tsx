import styled from 'styled-components'
import { ThemeProps } from 'theme'

type Props = {
  cardColor?: string
}

export const StyledStatisticContainer = styled.div<Props>`
  border-radius: 6px;

  &[data-is-in-card] {
    padding: 12px;
    background-color: ${(props) => props.cardColor};
  }
`

export const StyledDescriptionWrapper = styled.div`
  font-weight: ${(props: ThemeProps) => props.theme.sizes.fwRegular};
  color: ${(props: ThemeProps) => props.theme.colors.gray800};
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
`
