import React, { useState } from 'react'

import { CSSProperties } from 'styled-components'
import { StyledPopup } from './index.styled'

export type Props = {
  type: 'lead' | 'form' | 'confirm'
  closeIcon: JSX.Element
  isOpen: boolean
  onClose: () => void
}

const Popup = ({
  type = 'lead',
  closeIcon,
  isOpen = true,
  onClose = () => {},
}: Props) => {
  return (
    <StyledPopup data-open={isOpen} data-type={type}>
      <div onClick={onClose}>{closeIcon}</div>
    </StyledPopup>
  )
}

export { Popup }
