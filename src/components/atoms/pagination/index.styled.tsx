import styled from 'styled-components'
import { ThemeProps } from 'theme'

export const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  [data-page-active] {
    background: ${(props: ThemeProps) => props.theme.colors.primaryBase};
    color: ${(props: ThemeProps) => props.theme.colors.white};
  }
`

export const StyledPageBlock = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: ${(props: ThemeProps) => props.theme.colors.gray800};
  cursor: pointer;
  font-size: 14px;
  font-weight: ${(props: ThemeProps) => props.theme.sizes.fwBold};
  box-sizing: border-box;
  border: 1px solid ${(props: ThemeProps) => props.theme.colors.gray200};

  > svg {
    margin: auto;
    width: 10px;
    height: 10px;
    stroke: ${(props: ThemeProps) => props.theme.colors.primaryBase};
  }

  &[data-last-page] {
    opacity: 0;
  }
`

export const StyledPaginationBlock = styled.li`
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: ${(props: ThemeProps) => props.theme.colors.gray800};
  cursor: pointer;
  font-size: 14px;
  font-weight: ${(props: ThemeProps) => props.theme.sizes.fwBold};
`
