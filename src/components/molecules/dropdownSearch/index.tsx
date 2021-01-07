import React from 'react'

import { CSSProperties } from 'styled-components'

import { PureInput } from '../../atoms/pureInput'
import {
  StyledDropdownSearch,
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
  id: string
  placeholder: string
  options: Array<Option>
  placeHolderIcon: JSX.Element
  onChange?: (o: Option) => void
  value?: Option
  className?: string
  style?: CSSProperties
}

const DropdownSearch = ({
  className,
  style,
  id,
  placeholder,
  placeHolderIcon,
  onChange,
  value,
}: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)
  const showDropdown = () => setIsDropdownOpen(!isDropdownOpen)

  const hasIcons = true

  const handleOnChange = (v: string) => {
    console.log(v)
  }

  const options = [
    {
      label: 'None',
      value: '1',
      icon: <img src="//unsplash.it/16" />,
    },
    {
      label: 'Second point',
      value: '2',
      icon: <img src="//unsplash.it/16" />,
    },
    {
      label: 'Third point',
      value: '3',
      icon: <img src="//unsplash.it/16" />,
    },
  ]

  return (
    <StyledDropdownSearch
      className={className}
      data-dropdown-open={isDropdownOpen || undefined}
      id={id}
      data-has-icons={true}
      style={style}
      onBlur={() => setIsDropdownOpen(false)}
      tabIndex={0}
    >
      <StyledDropdownName onClick={showDropdown}>
        <PureInput
          name="dropdown-input"
          displayIcon={placeHolderIcon}
          size="md"
          onChange={handleOnChange}
        />
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
    </StyledDropdownSearch>
  )
}

export { DropdownSearch }
