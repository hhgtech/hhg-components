import React from 'react'

import { StyledRadio } from './index.styled'

export type Props = {
  type: 'circle' | 'rectangle'
  size?: 'small' | 'large'
  label: string
  name: string
  value: string
  checked?: boolean
  className?: string
  isDisabled?: boolean
  onChange: (v: string) => void
}

const Radio = ({
  type,
  size = 'small',
  label,
  name,
  checked,
  value,
  className,
  isDisabled = false,
  onChange,
}: Props) => {
  return (
    <StyledRadio
      data-disabled={isDisabled}
      className={className}
      data-type={type}
      data-size={size}
    >
      <input
        type="radio"
        checked={checked}
        name={name}
        id={`${name}-${value}`}
        value={value}
        onChange={() => onChange(value)}
      />
      <label htmlFor={`${name}-${value}`}>{label}</label>
    </StyledRadio>
  )
}

export { Radio }
