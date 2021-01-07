import React from 'react'

import { render, cleanup } from '@testing-library/react'
import 'jest-styled-components'

import MockTheme from '../../../misc/mockTheme'
import * as Menu from '../sidemenu'

afterEach(cleanup)

test('it renders', () => {
  const menu = render(
    <MockTheme>
      <Menu.SideMenu isCollapsed>
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
    </MockTheme>,
  )

  const self = menu.container.firstChild

  expect(self).toMatchSnapshot()

  expect(self).toHaveAttribute('data-is-collapsed', 'true')
})
