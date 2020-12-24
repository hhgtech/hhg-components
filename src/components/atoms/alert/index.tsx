import React from 'react'

import { Text } from 'components/atoms'
import { CSSProperties } from 'styled-components'
import { StyledAlert, StyledClose, StyledContent } from './index.styled'

export type Props = {
  type: 'success' | 'danger' | 'warning' | 'info'
  contentIcon: JSX.Element
  closeIcon: JSX.Element
  text: string
  className?: string
  style?: CSSProperties
  onClose?: () => void
}

const Alert = ({
  style,
  onClose,
  text,
  type,
  contentIcon,
  closeIcon,
  className,
}: Props) => {
  return (
    <StyledAlert style={style} data-alert-type={type} className={className}>
      <StyledContent>
        {contentIcon}
        <Text type="bold" size="sm">
          {text}
        </Text>
      </StyledContent>
      <StyledClose onClick={onClose}>{closeIcon}</StyledClose>
    </StyledAlert>
  )
}

export { Alert }
