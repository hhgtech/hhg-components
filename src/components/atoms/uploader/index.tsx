import React from 'react'

import { Button } from '../button'
import {
  StyledDefaultButtonContent,
  StyledElementContainer,
  StyledIconWrapper,
  StyledUploader,
} from './index.styled'

export type Props = {
  type: 'badge' | 'button'
  onFileSelected: (f: FileList) => void
  inputId: string
  withIcon?: JSX.Element
  multiple?: boolean
  fileAcceptType?: string
  withElement?: JSX.Element
  className?: string
}

const Uploader = ({
  type,
  withIcon,
  onFileSelected,
  inputId,
  withElement,
  fileAcceptType,
  multiple,
  className,
}: Props) => {
  const onClick = () => {
    ;(document.querySelector(
      '#uploader-input-' + inputId,
    ) as HTMLElement)?.click()
  }

  const getBadge = () => (
    <StyledElementContainer
      onClick={onClick}
      data-is-attached-to-element={!!withElement}
    >
      {withElement}
      <StyledIconWrapper data-is-attached-to-element={!!withElement}>
        {withIcon}
      </StyledIconWrapper>
    </StyledElementContainer>
  )

  const getButton = () =>
    withElement ? (
      <div onClick={onClick}>{withElement}</div>
    ) : (
      <Button
        size="md"
        color="secondary"
        className="default-button"
        icon={withIcon}
        onClick={onClick}
      >
        <StyledDefaultButtonContent>
          <svg
            id="prefix__Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 13.5 13.5"
          >
            <defs>
              <style>
                {
                  '.prefix__cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
                }
              </style>
            </defs>
            <title>{'upload'}</title>
            <path
              className="prefix__cls-1"
              d="M14 10v2.67A1.33 1.33 0 0112.67 14H3.33A1.33 1.33 0 012 12.67V10M11.33 5.33L8 2 4.67 5.33M8 2v8"
              transform="translate(-1.25 -1.25)"
            />
          </svg>
          {'Upload Image'}
        </StyledDefaultButtonContent>
      </Button>
    )

  return (
    <StyledUploader className={className}>
      {type === 'badge' ? getBadge() : getButton()}
      <input
        id={'uploader-input-' + inputId}
        accept={fileAcceptType}
        multiple={multiple}
        type="file"
        style={{ display: 'none' }}
        onChange={(e) => {
          onFileSelected(e.target.files)
        }}
      />
    </StyledUploader>
  )
}

export { Uploader }
