import { ThemeProps } from 'src/misc/theme'
import styled from 'styled-components'

export const StyledDropdown = styled.div`
  position: relative;
  box-sizing: border-box;
  border: 1px solid ${(props: ThemeProps) => props.theme.colors.gray200};
  background: url('../../../public/bgSvg/arrow-down.svg') no-repeat;
  background-position: right 16px center;
  border-radius: 6px;

  &[data-has-icons='true'] {
    border: none;
    background: ${(props: ThemeProps) => props.theme.colors.gray100};

    img,
    svg {
      display: inline-block;
      max-width: 16px;
      margin-right: 6px;
    }

    span {
      vertical-align: middle;
      display: inline-block;
    }

    &:hover {
      box-shadow: none;
    }
    > div {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    > div::after {
      content: '';
      right: 12px;
      top: 50%;
      background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23595959' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
      width: 10px;
      height: 8px;
      position: absolute;
      background-repeat: no-repeat;
      transform: translateY(-50%);
    }
  }

  &:hover {
    box-shadow: 0 0 2px 2px ${(props: ThemeProps) => props.theme.colors.blue200};
  }
`

export const StyledDropdownName = styled.div`
  padding: 12px 18px 12px 16px;
  cursor: pointer;
  &[data-dropdown-open] {
    padding: 11px 15px 11px 15px;
    border: 1px solid ${(props: ThemeProps) => props.theme.colors.primaryBase};
    border-radius: 6px;
    box-shadow: 0 0 2px 2px ${(props: ThemeProps) => props.theme.colors.blue200};
  }

  & > svg {
    height: 16px;
    width: 16px;
  }
`

export const StyledDropdownList = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  display: block;
  margin-top: 4px;
  background: ${(props: ThemeProps) => props.theme.colors.white};
  border-radius: 6px;
  box-shadow: -1px 1px 2px rgba(67, 70, 74, 0.0001),
    -2px 2px 5px rgba(67, 86, 100, 0.123689);
  cursor: pointer;

  &[data-has-icons='true'] {
    background: white;
    box-shadow: none;
    border: 1px solid ${(props: ThemeProps) => props.theme.colors.gray200};
    filter: drop-shadow(0px 10px 16px rgba(0, 0, 0, 0.04));
  }
`

export const StyledDropdownOption = styled.li`
  margin: 8px;
  padding: 12px 18px 12px 16px;
  border-radius: 6px;
  display: flex;
  &:hover,
  :active {
    background: ${(props: ThemeProps) => props.theme.colors.gray100};
  }
`
export const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;

  & > svg {
    height: 16px;
    width: 16px;
  }
`
