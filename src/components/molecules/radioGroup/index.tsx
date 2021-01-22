import React, { useState } from 'react'

import { Radio } from '../../atoms/radio'
import { StyledRadioGroup } from './index.styled'

export type Props = {
  type: 'circle' | 'rectangle'
  options: Array<{
    label: string
    value: string
  }>
  value?: string
  id: string
  className?: string
  isDisabled?: boolean
  size?: 'small' | 'large'
  direction?: 'vertical' | 'horizontal'
  group?: 'group1' | 'group2'
  onChange?: (v: string) => void
}

const RadioGroup = ({
  id,
  value,
  options,
  className,
  type = 'circle',
  isDisabled,
  size = 'small',
  direction = 'vertical',
  group = 'group1',
  onChange,
}: Props) => {
  const [check, setCheck] = useState(value)

  const handleOnChange = (v: string) => {
    setCheck(v)
    onChange && onChange(v)
  }

  return (
    <StyledRadioGroup
      className={className}
      data-direction={direction}
      data-group={group}
    >
      {options.map((option) => (
        <Radio
          type={type}
          size={size}
          label={option.label}
          name={id}
          key={`${id}-${option.value}`}
          checked={check === option.value}
          value={option.value}
          isDisabled={isDisabled}
          onChange={!isDisabled && handleOnChange}
        />
      ))}
    </StyledRadioGroup>
  )
}

export { RadioGroup }
