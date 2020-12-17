import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import 'jest-styled-components'

import { DashboardMenu } from '.'

afterEach(cleanup)

test('it renders', () => {
  const dashboardMenu = render(
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
    />,
  )

  const self = dashboardMenu.container.firstChild

  expect(self).toMatchSnapshot()

  expect(self).toContainHTML('<img')
  expect(self).toHaveTextContent('Overview')
})
