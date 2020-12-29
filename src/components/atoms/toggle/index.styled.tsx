import styled from 'styled-components'
import { ThemeProps } from 'theme'

export const StyledToggle = styled.div`
  input[type='checkbox'] {
    width: 0;
    height: 0;
    visibility: hidden;
  }

  label {
    position: relative;
    display: block;
    width: 40px;
    height: 24px;
    background: #c3cbd4;
    border-radius: 100px;
    cursor: pointer;
    text-indent: -9999px;
  }

  label:after {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 90px;
    content: '';
    transition: 0.3s;
  }

  input:checked + label {
    background: ${(props: ThemeProps) => props.theme.colors.primaryBase};
  }

  input:checked + label:after {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`
