import React, { KeyboardEvent, useState } from 'react'

import { debounce } from 'lodash'
import { CSSProperties } from 'styled-components'

import {
  StyledInput,
  StyledInputLabel,
  StyledErrorLabel,
  StyledActionIcon,
  StyledDisplayIcon,
} from './index.styled'

export type Props = {
  name: string
  size: 'lg' | 'md' | 'sm'
  autoComplete?: 'on' | 'off'
  onChange: (v: string) => void
  defaultValue?: string
  errorMessage?: string
  actionIcon?: JSX.Element
  onActionClick?: () => void
  isDeleteAction?: boolean
  displayIcon?: JSX.Element
  label?: string
  placeholder?: string
  className?: string
  onKeyPress?: (e: KeyboardEvent) => void
  isDisabled?: boolean
  CustomInput?: JSX.Element
  style?: CSSProperties
}

const PureInput = ({
  name,
  errorMessage,
  autoComplete = 'off',
  defaultValue,
  actionIcon: ActionIcon,
  displayIcon: DisplayIcon,
  isDeleteAction,
  onActionClick,
  label,
  placeholder,
  className,
  onChange,
  onKeyPress,
  isDisabled,
  CustomInput,
  size,
  style,
}: Props) => {
  const [localValue, setLocalValue] = useState(defaultValue)

  const handleOnChange = (v: string) => {
    setLocalValue(v)
    onChange(v)
  }

  const handleOnActionClick = () => {
    if (isDeleteAction) {
      setLocalValue('')
    } else {
      onActionClick && onActionClick()
    }
  }

  return (
    <StyledInput
      data-size={size}
      className={className}
      data-has-action-icon={!!ActionIcon || undefined}
      data-has-display-icon={!!DisplayIcon || undefined}
      data-has-error={(errorMessage && errorMessage.length > 0) || undefined}
      style={style}
    >
      {label && (
        <StyledInputLabel htmlFor={name} className="inputLabel">
          {label}
        </StyledInputLabel>
      )}
      <div style={{ position: 'relative' }}>
        {CustomInput ? (
          CustomInput
        ) : (
          <input
            id={name}
            placeholder={placeholder}
            onChange={(e) => handleOnChange(e.target.value)}
            onKeyPress={(e) => onKeyPress && onKeyPress(e as KeyboardEvent)}
            type="text"
            disabled={isDisabled}
            value={localValue}
            autoComplete={autoComplete}
          />
        )}
        {DisplayIcon && (
          <StyledDisplayIcon className="displayIcon">
            {DisplayIcon}
          </StyledDisplayIcon>
        )}
        {ActionIcon && (
          <StyledActionIcon
            className="actionIcon"
            onClick={handleOnActionClick}
          >
            {ActionIcon}
          </StyledActionIcon>
        )}
      </div>
      {errorMessage && errorMessage.length > 0 && (
        <StyledErrorLabel className="errorLabel">
          {errorMessage}
        </StyledErrorLabel>
      )}
    </StyledInput>
  )
}

export { PureInput }
