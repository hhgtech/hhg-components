import React, { KeyboardEvent } from 'react'

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
  onChange: (v: string) => void
  defaultValue?: string
  errorMessage?: string
  actionIcon?: JSX.Element
  onActionClick?: () => void
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
  defaultValue,
  actionIcon: ActionIcon,
  displayIcon: DisplayIcon,
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
  const deboucedOnChange = debounce(onChange, 300)

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
            onChange={(e) => deboucedOnChange(e.target.value)}
            onKeyPress={(e) => onKeyPress && onKeyPress(e as KeyboardEvent)}
            type="text"
            disabled={isDisabled}
            defaultValue={defaultValue}
          />
        )}
        {DisplayIcon && (
          <StyledDisplayIcon className="displayIcon" onClick={onActionClick}>
            {DisplayIcon}
          </StyledDisplayIcon>
        )}
        {ActionIcon && (
          <StyledActionIcon className="actionIcon" onClick={onActionClick}>
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
