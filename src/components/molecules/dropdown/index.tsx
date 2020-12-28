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
  placeHolderIcon: JSX.Element
  onChange?: (o: Option) => void
  value?: Option
  className?: string
  style?: CSSProperties
}

const Dropdown = ({
  className,
  value,
  options,
  onChange = () => {},
  id,
  placeHolderIcon,
  placeholder,
  style,
}: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)
  const showDropdown = () => setIsDropdownOpen(!isDropdownOpen)

  const hasIcons = placeHolderIcon ? true : false

  return (
    <StyledDropdown
      className={className}
      data-dropdown-open={isDropdownOpen || undefined}
      id={id}
      data-has-icons={hasIcons}
      style={style}
      onBlur={() => setIsDropdownOpen(false)}
      tabIndex={0}
    >
      <StyledDropdownName onClick={showDropdown}>
        {hasIcons && placeHolderIcon}{' '}
        <span>{value && value.value ? value.label : placeholder}</span>
      </StyledDropdownName>

      {isDropdownOpen && (
        <StyledDropdownList onClick={showDropdown} data-has-icons={hasIcons}>
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
