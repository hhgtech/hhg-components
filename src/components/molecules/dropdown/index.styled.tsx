import { ThemeProps } from 'misc/theme'
import styled from 'styled-components'

export const StyledDropdown = styled.div`
  position: relative;
  box-sizing: border-box;
  border: 1px solid ${(props: ThemeProps) => props.theme.colors.gray200};
  background: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23595959' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")
    no-repeat;
  background-position: right 16px center;
  border-radius: 6px;

  &[data-size='sm'] {
    font-size: 13px;
    line-height: 20px;
  }
  &[data-size='md'] {
    font-size: 14px;
    line-height: 21px;
  }
  &[data-size='lg'] {
    font-size: 16px;
    line-height: 24px;
  }

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
      display: inline-block;
      vertical-align: middle;
    }

    &:hover {
      box-shadow: none;
    }
    > div {
      position: relative;
      display: flex;
      width: 100%;
      box-sizing: border-box;
      align-items: center;
    }
    > div::after {
      position: absolute;
      top: 50%;
      right: 12px;
      width: 10px;
      height: 8px;
      background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23595959' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
      background-repeat: no-repeat;
      content: '';
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
    border: 1px solid ${(props: ThemeProps) => props.theme.colors.gray200};
    background: white;
    box-shadow: none;
    filter: drop-shadow(0px 10px 16px rgba(0, 0, 0, 0.04));
  }
`

export const StyledDropdownOption = styled.li`
  display: flex;
  padding: 12px 18px 12px 16px;
  &:hover,
  :active {
    background: ${(props: ThemeProps) => props.theme.colors.gray100};
  }
`
export const StyledIcon = styled.div`
  max-width: 16px;
  margin-right: 8px;
`
