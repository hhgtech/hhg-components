import React from 'react'

import { Checkbox } from '../../atoms/checkbox'
import { StyledCheckboxGroup } from './index.styled'

export type Props = {
  type: 'vertical' | 'horizontal'
  options: Array<{
    label: string
    value: string
    disabled?: boolean
  }>
  values?: Array<string>
  onChanges?: (v: Array<string>) => void
  name: string
  className?: string
  isDisabled?: boolean
}

const CheckboxGroup = ({
  name,
  values = [],
  onChanges,
  options = [],
  className,
  type = 'vertical',
  isDisabled,
}: Props) => {
  const onChange = (value: string, checked: boolean) => {
    const newValues = values.slice()
    if (checked) {
      newValues.push(value)
    } else {
      const removeIndex = newValues.findIndex((item) => item === value)
      newValues.splice(removeIndex, 1)
    }
    if (onChanges) {
      onChanges(newValues)
    }
  }

  return (
    <StyledCheckboxGroup className={className} data-type={type}>
      {options.map((option, index) => (
        <Checkbox
          label={option.label}
          name={name}
          key={`${index}-${option.value}`}
          checked={values.includes(option.value)}
          value={option.value}
          isDisabled={isDisabled || option.disabled}
          onChange={!isDisabled && onChange}
        />
      ))}
    </StyledCheckboxGroup>
  )
}

export { CheckboxGroup }
