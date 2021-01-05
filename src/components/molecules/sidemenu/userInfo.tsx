import React from 'react'

import { Avatar, Text } from 'components/atoms'
import Styled from 'styled-components'

const StyledUserInfo = Styled.div`
  display:flex;
  margin-top: 24px;
  margin-bottom: 36px;
  align-items: center;
`

const StyledUser = Styled.div`
  margin-left: 16px;
`

type Props = {
  isCollapsed: boolean
  userName: string
  role: string
  avatar: JSX.Element
  avatarOnClick: () => void
}

const UserInfo = ({
  isCollapsed,
  avatarOnClick,
  userName,
  role,
  avatar,
}: Props) => {
  return (
    <StyledUserInfo>
      <Avatar avatarImg={avatar} type="square" onClick={avatarOnClick} />
      {!isCollapsed && (
        <StyledUser>
          <Text size="base" type="bold">
            {userName}
          </Text>
          <Text size="sm" type="regular">
            {role}
          </Text>
        </StyledUser>
      )}
    </StyledUserInfo>
  )
}

export { UserInfo }
