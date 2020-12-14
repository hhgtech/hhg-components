import styled from 'styled-components'

export const StyledAvatar = styled.div`
  cursor: pointer;
  &[data-avatar-type='square'] {
    img {
      width: 72px;
      height: 72px;
      border-radius: 6px;
    }
  }
  &[data-avatar-type='rounded'] {
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
`
