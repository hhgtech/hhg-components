import React from 'react'

import { CSSProperties } from 'styled-components'
import { StyledAvatar } from './index.styled'

export type Props = {
  avatarImg: JSX.Element
  onClick: () => void
  type?: 'rounded' | 'square'
  style?: CSSProperties
}

const Avatar = ({ type = 'square', avatarImg, onClick, style }: Props) => {
  return (
    <StyledAvatar
      style={{ ...style }}
      data-avatar-type={type || undefined}
      onClick={onClick}
    >
      {avatarImg}
    </StyledAvatar>
  )
}

export { Avatar }
