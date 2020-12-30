import { ThemeProps } from 'misc/theme'
import styled from 'styled-components'

export const StyledPopup = styled.div`
  background-color: ${(props: ThemeProps) => props.theme.colors.white};
  box-shadow: 0px 4px 8px ${(props: ThemeProps) => props.theme.colors.gray200};
  border-radius: 6px;
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease-in-out;

  &[data-open='true'] {
    visibility: visible;
    z-index: 200;
    opacity: 1;
    top: 50%;
  }

  &[data-open='false'] {
    top: -50%;
  }

  &[data-type='lead'] {
    width: 332px;
    height: 460px;

    div {
      top: -15px;
      right: -15px;
    }
  }

  &[data-type='form'] {
    width: 496px;
    height: 548px;
  }

  &[data-type='confirm'] {
    width: 380px;
    height: 252px;
  }

  div {
    width: 32px;
    height: 32px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
`
