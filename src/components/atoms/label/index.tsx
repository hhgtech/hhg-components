import React, { CSSProperties, ReactNode } from 'react'

import styled from 'styled-components'
import { ThemeProps } from 'theme'

export type Props = {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

const StyledLabel = styled.label`
  font-size: 13px;
  color: ${(props: ThemeProps) => props.theme.colors.gray500};
  line-height: 20px;
`

const Label = ({ children, className, style }: Props) => {
  return (
    <StyledLabel className={className} style={style}>
      {children}
    </StyledLabel>
  )
}

export { Label }
