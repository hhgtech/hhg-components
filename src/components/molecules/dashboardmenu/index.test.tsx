import React from 'react'

import { render, cleanup } from '@testing-library/react'
import 'jest-styled-components'

import { DashboardMenu } from '.'
import MockTheme from './../../../mockTheme'

afterEach(cleanup)

test('it renders', () => {
  const dashboardMenu = render(
    <MockTheme>
      <DashboardMenu
        initalPage={1}
        pages={[
          {
            name: 'Overview',
            icon: <img src="https://source.unsplash.com/random/32x32" />,
            activeIcon: <img src="https://source.unsplash.com/random/32x32" />,
          },

          {
            name: 'Facilities',
            icon: <img src="https://source.unsplash.com/random/32x32" />,
            activeIcon: <img src="https://source.unsplash.com/random/32x32" />,
          },

          {
            name: 'Doctors',
            icon: <img src="https://source.unsplash.com/random/32x32" />,
            activeIcon: <img src="https://source.unsplash.com/random/32x32" />,
          },
        ]}
      />
    </MockTheme>,
  )

  const self = dashboardMenu.container.firstChild

  expect(self).toMatchSnapshot()

  // expect(self).toContainHTML('</img>')
  expect(self).toHaveTextContent('Overview')
})
