import styled from 'styled-components'
import { ThemeProps } from 'theme'

export const StyledBadge = styled.div`
  position: relative;

  span {
    font-weight: ${(props: ThemeProps) => props.theme.sizes.fwBold};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &[data-notification-type='dot'] {
    span {
      width: 8px;
      height: 8px;
      font-size: 0px;
      border-radius: 50%;
    }
  }

  &[data-notification-type='numeric'] {
    span {
      border-radius: 32px;
    }

    &[data-notification-size='medium'] {
      span {
        width: max-content;
        height: 16px;
        font-size: 11px;
        padding: 1px 6px;
      }
    }
    &[data-notification-size='large'] {
      span {
        width: max-content;
        height: 24px;
        font-size: 13px;
        padding: 1px 10px;
      }
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

  &[data-notification-color='warning'] {
    span {
      background: ${(props: ThemeProps) => props.theme.colors.alertWarning};
      color: white;
    }
  }

  &[data-notification-color='primary'] {
    span {
      background: ${(props: ThemeProps) => props.theme.colors.blue50};
      color: ${(props: ThemeProps) => props.theme.colors.blue600};
    }
  }
`
