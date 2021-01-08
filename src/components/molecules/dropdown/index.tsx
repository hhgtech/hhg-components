import React from 'react'

import { CSSProperties } from 'styled-components'

import {
  StyledDropdown,
  StyledDropdownName,
  StyledDropdownList,
  StyledDropdownOption,
  StyledIcon,
} from './index.styled'

type Option = {
  label: string
  value: string
  icon?: JSX.Element
}

export type Props = {
  options: Array<Option>
  placeholder: string
  id: string
  placeholderIcon?: JSX.Element
  onChange?: (o: Option) => void
  value?: Option
  className?: string
  style?: CSSProperties
}

const Dropdown = ({
  className,
  value,
  options,
  onChange = () => undefined,
  id,
  placeholderIcon,
  placeholder,
  style,
}: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)
  const showDropdown = () => setIsDropdownOpen(!isDropdownOpen)

  return (
    <StyledDropdown
      className={className}
      data-dropdown-open={isDropdownOpen || undefined}
      id={id}
      data-has-icons={!!placeholderIcon}
      style={style}
      onBlur={() => setIsDropdownOpen(false)}
      tabIndex={0}
    >
      <StyledDropdownName onClick={showDropdown}>
        {placeholderIcon}{' '}
        <span>{value && value.value ? value.label : placeholder}</span>
      </StyledDropdownName>

      {isDropdownOpen && (
        <StyledDropdownList
          onClick={showDropdown}
          data-has-icons={!!placeholderIcon}
        >
          {options.map((option) => (
            <StyledDropdownOption
              key={`${id}-${option.value}`}
              data-selected={
                (value && value.value === option.value) || undefined
              }
              onClick={() => onChange(option)}
            >
              {option.icon && <StyledIcon>{option.icon}</StyledIcon>}
              {option.label}
            </StyledDropdownOption>
          ))}
        </StyledDropdownList>
      )}
    </StyledDropdown>
  )
}

export { Dropdown }
