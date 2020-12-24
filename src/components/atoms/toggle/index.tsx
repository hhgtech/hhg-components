import React, { CSSProperties } from 'react'

import classnames from 'classnames'

import { StyledToggle } from './index.styled'

export type Props = {
  id: string
  checked: boolean
  className?: string
  style?: CSSProperties
  onChange?: () => void
}

const Toggle = ({ className, id, onChange, checked, style }: Props) => (
  <StyledToggle className={className} style={style}>
    <input type="checkbox" id={id} onChange={onChange} checked={checked} />
    <label htmlFor={id}>Toggle</label>
  </StyledToggle>
)

export { Toggle }
