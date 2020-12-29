import React from 'react'

import { StyledCheckbox } from './index.styled'

export type Props = {
  label: string
  name: string
  value: string
  checked: boolean
  className?: string
  isDisabled?: boolean
  onChange?: (value: string, checked: boolean) => void
}

const Checkbox = ({
  label,
  name,
  checked,
  className,
  isDisabled,
  onChange,
  value,
}: Props) => {
  return (
    <StyledCheckbox
      className={className}
      data-disabled={isDisabled || undefined}
    >
      <input
        type="checkbox"
        checked={checked}
        name={name}
        onChange={() => onChange(value, !checked)}
        disabled={isDisabled}
        value={value}
        id={`${name}-${value}`}
      />
      <label htmlFor={`${name}-${value}`}>{label}</label>
    </StyledCheckbox>
  )
}

export { Checkbox }
