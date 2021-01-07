import React from 'react'

import { Logo } from 'components/atoms'
import Styled from 'styled-components'

const StyledSideHeader = Styled.div`
  display: flex;
  justify-content: space-between;

  svg {
    transition: .4s ease-in-out;
  }
`

const StyledArrow = Styled.div`
  cursor: pointer;
  &[data-is-collapsed] {
    transform: rotate(180deg);
  }
`

type Props = {
  isCollapsed: boolean
  defaultLogo?:
    | 'hellobacsi'
    | 'hellosehat'
    | 'hellohealth'
    | 'hellotogether'
    | 'hellocare'
    | 'logomark'
  onBackClick?: () => void
}

const SideHeader = ({ isCollapsed, defaultLogo, onBackClick }: Props) => {
  return (
    <StyledSideHeader>
      <Logo
        type={isCollapsed ? 'logomark' : defaultLogo || 'hellocare'}
        height="24px"
        width={isCollapsed ? '24px' : '77px'}
      />
      <StyledArrow
        data-is-collapsed={isCollapsed || undefined}
        onClick={onBackClick}
      >
        <svg data-name="Layer 1" viewBox="0 0 20 20" width="20px" height="20px">
          <path
            d="M10 .75A9.25 9.25 0 1019.25 10 9.25 9.25 0 0010 .75z"
            fill="none"
            stroke="#d2d6dc"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M11.44 6.53L8 10l3.48 3.47"
            fill="none"
            stroke="#737373"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </StyledArrow>
    </StyledSideHeader>
  )
}

export { SideHeader }
