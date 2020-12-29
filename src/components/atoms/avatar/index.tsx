import React from 'react'

import { CSSProperties } from 'styled-components'

import MockTheme from './../../../mockTheme'
import { StyledAvatar } from './index.styled'

export type Props = {
  avatarImg: JSX.Element
  onClick: () => void
  className?: string
  type?: 'rounded' | 'square'
  style?: CSSProperties
}

const Avatar = ({
  type = 'square',
  avatarImg,
  onClick,
  style,
  className,
}: Props) => {
  return (
    <MockTheme>
      <StyledAvatar
        style={style}
        data-avatar-type={type}
        onClick={onClick}
        className={className}
      >
        {avatarImg}
      </StyledAvatar>
    </MockTheme>
  )
}

export { Avatar }
