import styled, { keyframes } from 'styled-components'
import { ThemeProps } from 'theme'

export const StyledFlag = styled.div`
  --width: ${(props) => props.theme.width};
  --height: ${(props) => props.theme.height};

  img,
  svg {
    width: calc(var(--width) * 1px);
    height: calc(var(--height) * 1px);
  }

  &[data-is-bitmap] {
    img {
      object-fit: contain;
    }
  }
`
