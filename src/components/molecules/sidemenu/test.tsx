import React, { useState } from 'react'

import * as Menu from '../sidemenu'

const Test = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Menu.SideMenu isCollapsed={isMenuOpen}>
      <Menu.SideHeader
        isCollapsed={isMenuOpen}
        onBackClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <Menu.UserInfo
        userName="Dirk Mulder"
        role="HHG Care"
        isCollapsed={isMenuOpen}
        avatarOnClick={() => console.log('click')}
        avatar={<img src="//unsplash.it/32" />}
      />
      <Menu.MenuLink
        icon={<img src="//unsplash.it/26" />}
        isActive
        isCollapsed={isMenuOpen}
        onLinkClick={() => console.log('click')}
      >
        Overview
      </Menu.MenuLink>
      <Menu.MenuLink
        icon={<img src="//unsplash.it/26" />}
        isCollapsed={isMenuOpen}
        onLinkClick={() => console.log('click')}
      >
        Overview
      </Menu.MenuLink>
      <Menu.MenuLink
        icon={<img src="//unsplash.it/26" />}
        isCollapsed={isMenuOpen}
        onLinkClick={() => console.log('click')}
      >
        Overview
      </Menu.MenuLink>
      <Menu.MenuLink
        icon={<img src="//unsplash.it/26" />}
        isCollapsed={isMenuOpen}
        onLinkClick={() => console.log('click')}
      >
        Overview
      </Menu.MenuLink>
    </Menu.SideMenu>
  )
}

export { Test }
