import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import * as Menu from '../sidemenu'
import { Test } from './test'

export default {
  component: Menu,
  title: 'Molecules/SideMenu',
}

const SideMenu: Story<Props> = (args) => <Test {...args} />

export const WorkingExample = SideMenu.bind({})

const Template: Story = (args) => (
  <Menu.SideMenu {...args}>
    <Menu.SideHeader
      isCollapsed={false}
      onBackClick={() => console.log('Close button pressed 🤠')}
    />
    <Menu.UserInfo
      userName="Dirk Mulder"
      role="HHG Care"
      isCollapsed={false}
      avatarOnClick={() => undefined}
      avatar={<img src="//unsplash.it/32" />}
    />
    <Menu.MenuLink
      isActive
      isCollapsed={false}
      icon={<img src="//unsplash.it/16" />}
      onLinkClick={() => console.log('clicked!')}
    >
      Overview
    </Menu.MenuLink>
    <Menu.MenuLink
      isCollapsed={false}
      icon={<img src="//unsplash.it/16" />}
      onLinkClick={() => console.log('clicked!')}
    >
      Overview
    </Menu.MenuLink>
    <Menu.MenuLink
      isCollapsed={false}
      icon={<img src="//unsplash.it/16" />}
      onLinkClick={() => console.log('clicked!')}
    >
      Overview
    </Menu.MenuLink>
  </Menu.SideMenu>
)

export const Full = Template.bind({})

Full.args = {
  isCollapsed: false,
}

const CollapsedMenu: Story<Props> = (args) => (
  <Menu.SideMenu {...args}>
    <Menu.SideHeader
      isCollapsed={true}
      onBackClick={() => console.log('Close button pressed 🤠')}
    />
    <Menu.UserInfo
      userName="Dirk Mulder"
      role="HHG Care"
      isCollapsed={true}
      avatarOnClick={() => undefined}
      avatar={<img src="//unsplash.it/32" />}
    />
    <Menu.MenuLink
      isActive
      isCollapsed={true}
      icon={<img src="//unsplash.it/16" />}
      onLinkClick={() => console.log('clicked!')}
    >
      Overview
    </Menu.MenuLink>
    <Menu.MenuLink
      isCollapsed={true}
      icon={<img src="//unsplash.it/16" />}
      onLinkClick={() => console.log('clicked!')}
    >
      Overview
    </Menu.MenuLink>
    <Menu.MenuLink
      isCollapsed={true}
      icon={<img src="//unsplash.it/16" />}
      onLinkClick={() => console.log('clicked!')}
    >
      Overview
    </Menu.MenuLink>
  </Menu.SideMenu>
)

export const Collapsed = CollapsedMenu.bind({})

Collapsed.args = {
  isCollapsed: true,
}

const MenuHeader: Story<Props> = (args) => <Menu.SideHeader {...args} />

export const Header = MenuHeader.bind({})

Header.args = {
  defaultLogo: 'hellobacsi',
  isCollapsed: false,
  onBackClick: () =>
    console.log('You have successfully clicked on the button 🥳'),
}

const MenuUserInfo: Story<Props> = (args) => <Menu.UserInfo {...args} />

export const UserInfo = MenuUserInfo.bind({})

UserInfo.args = {
  userName: 'Random User',
  isCollapsed: false,
  role: 'Hello Health Group',
  avatarOnClick: () => console.log('Clicked on the avatar 🤳'),
  avatar: <img src="//unsplash.it/32" />,
}

const MenuLink: Story<Props> = (args) => (
  <Menu.MenuLink {...args}>I am a link</Menu.MenuLink>
)

export const Link = MenuLink.bind({})

Link.args = {
  isActive: true,
  isCollapsed: false,
  icon: <img src="//unsplash.it/16" />,
  activeIcon: <img src="//unsplash.it/16" />,
  onLinkClick: () => console.log('Click 😇'),
}
