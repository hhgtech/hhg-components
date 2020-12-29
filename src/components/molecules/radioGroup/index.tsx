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
}: Props) => {
  const [check, setCheck] = useState(value)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (event?: any) => {
    setCheck(event)
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
          onChange={!isDisabled && onChange}
        />
      ))}
    </StyledRadioGroup>
  )
}

export { RadioGroup }
