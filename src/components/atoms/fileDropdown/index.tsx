import React, { useRef, useState } from 'react'

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
  type: 'upload' | 'download'
  icon?: JSX.Element
  url?: string
  fileAcceptedType?: string
  multiple?: boolean
}

export type Props = {
  options: Array<Option>
  placeholder: string
  id: string
  placeHolderIcon?: JSX.Element
  onUploadSelected?: (e: FileList) => void
  value?: Option
  className?: string
  style?: CSSProperties
}

const FileDropdown = ({
  className,
  value,
  options,
  onUploadSelected,
  id,
  placeHolderIcon,
  placeholder,
  style,
}: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const showDropdown = () => setIsDropdownOpen(!isDropdownOpen)
  const inputList = useRef(
    options.map((option) => {
      return (
        option.type === 'upload' && (
          <input
            id={'uploader-dropdown-input-' + id + '-' + option.value}
            key={'uploader-dropdown-input-' + id + '-' + option.value}
            accept={option.fileAcceptedType}
            multiple={option.multiple}
            type="file"
            style={{ display: 'none' }}
            onChange={(e) => {
              console.log('change')
              onUploadSelected(e.target.files)
            }}
          />
        )
      )
    }),
  )

  const defaultFileIcon = (
    <svg
      id="prefix__Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12.17 14.83"
    >
      <defs>
        <clipPath id="prefix__clip-path" transform="translate(-1.92 -1.54)">
          <path fill="none" d="M0 .96h16v16H0z" />
        </clipPath>
        <style>
          {
            '.prefix__cls-3{fill:none;stroke:#595959;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
          }
        </style>
      </defs>
      <title>{'File'}</title>
      <g clipPath="url(#prefix__clip-path)">
        <path
          className="prefix__cls-3"
          d="M8.67 2.29H4a1.33 1.33 0 00-1.33 1.33v10.67A1.33 1.33 0 004 15.62h8a1.33 1.33 0 001.33-1.33V7z"
          transform="translate(-1.92 -1.54)"
        />
        <path
          className="prefix__cls-3"
          d="M8.67 2.29V7h4.66"
          transform="translate(-1.92 -1.54)"
        />
      </g>
    </svg>
  )

  const downloadIcon = (
    <svg
      id="prefix__Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13.5 13.5"
    >
      <defs>
        <style>
          {
            '.prefix__cls-1{fill:none;stroke:#595959;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
          }
        </style>
      </defs>
      <title>{'download'}</title>
      <path
        className="prefix__cls-1"
        d="M14 11v2.66A1.33 1.33 0 0112.67 15H3.33A1.33 1.33 0 012 13.62V11M4.67 7.62L8 11l3.33-3.34M8 11V3"
        transform="translate(-1.25 -2.21)"
      />
    </svg>
  )

  const uploadIcon = (
    <svg
      id="prefix__Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13.5 13.5"
    >
      <defs>
        <style>
          {
            '.prefix__cls-1{fill:none;stroke:#595959;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
          }
        </style>
      </defs>
      <title>{'upload'}</title>
      <path
        className="prefix__cls-1"
        d="M14 11v2.66A1.33 1.33 0 0112.67 15H3.33A1.33 1.33 0 012 13.62V11M11.33 6.29L8 3 4.67 6.29M8 3v8"
        transform="translate(-1.25 -2.21)"
      />
    </svg>
  )

  const onUpload = (dropdownId: string) => {
    ;(document.querySelector(dropdownId) as HTMLElement)?.click()
  }

  const onDownload = (url: string) => {
    url && window.open(url, '_blank')
  }

  return (
    <StyledDropdown
      className={className}
      data-dropdown-open={!!isDropdownOpen}
      id={id}
      data-has-icons
      style={style}
      onBlur={() => setIsDropdownOpen(false)}
      tabIndex={0}
    >
      <StyledDropdownName onClick={showDropdown}>
        {placeHolderIcon || defaultFileIcon}{' '}
        <span>{value && value.value ? value.label : placeholder}</span>
      </StyledDropdownName>

      {isDropdownOpen && (
        <StyledDropdownList onClick={showDropdown} data-has-icons>
          {options.map((option) => (
            <StyledDropdownOption
              key={`${id}-${option.value}`}
              data-selected={
                (value && value.value === option.value) || undefined
              }
              onClick={() =>
                option.type === 'upload'
                  ? onUpload(
                      '#uploader-dropdown-input-' + id + '-' + option.value,
                    )
                  : onDownload(option.url)
              }
            >
              <StyledIcon>
                {option.icon || option.type === 'download'
                  ? downloadIcon
                  : uploadIcon}
              </StyledIcon>
              {option.label}
            </StyledDropdownOption>
          ))}
        </StyledDropdownList>
      )}
      <>{inputList.current}</>
    </StyledDropdown>
  )
}

export { FileDropdown }
