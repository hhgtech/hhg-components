import styled from 'styled-components'

export const StyledShadow = styled.div`
  &[data-shadow-size='small'] {
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.04))
      drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.04));
  }
  &[data-shadow-size='normal'] {
    filter: drop-shadow(0px 10px 16px rgba(0, 0, 0, 0.04))
      drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.04))
      drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.04));
  }
  &[data-shadow-size='medium'] {
    filter: drop-shadow(0px 16px 24px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.04))
      drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.04));
  }
  &[data-shadow-size='large'] {
    filter: drop-shadow(0px 24px 32px rgba(0, 0, 0, 0.04))
      drop-shadow(0px 16px 24px rgba(0, 0, 0, 0.04))
      drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.04))
      drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.04));
  }
  &[data-shadow-size='soft'] {
    filter: drop-shadow(0px 24px 32px rgba(0, 0, 0, 0.04))
      drop-shadow(0px 16px 24px rgba(0, 0, 0, 0.04))
      drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.04))
      drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.04));
  }
`
