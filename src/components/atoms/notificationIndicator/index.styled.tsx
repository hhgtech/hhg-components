import styled from 'styled-components'
import theme, { ThemeType } from 'theme'

export const StyledIndicator = styled.div`
  position: relative;
  span {
    background: $alert;
    border-radius: 50%;
    color: white;
    font-weight: $fw-bold;
    text-align: center;
  }

  &[data-notification-type='small'] {
    span {
      display: block;
      width: 8px;
      height: 8px;
      font-size: 0px;
    }
  }
  &[data-notification-type='medium'] {
    span {
      display: block;
      width: 17px;
      height: 16px;
      font-size: 11px;
      line-height: 15px;
    }
  }
  &[data-notification-type='large'] {
    span {
      display: block;
      width: 24px;
      height: 24px;
      font-size: 13px;
      line-height: 20px;
    }
  }

  &[data-has-icon] {
    span {
      position: absolute;
      top: -8px;
      left: 10px;
    }
    svg {
      position: absolute;
      z-index: -1;
      top: 0;
    }
  }
`
