import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import 'jest-styled-components'

import { NotificationIndicator } from '.'

import MockTheme from './../../../mockTheme'

afterEach(cleanup)

test('it renders', () => {
  const notificationIndicator = render(
    <MockTheme>
      <NotificationIndicator
        hasIcon={true}
        type="small"
        bellIcon={<img src="https://source.unsplash.com/random/16x16" />}
      />
    </MockTheme>,
  )

  const self = notificationIndicator.container.firstChild

  expect(self).toMatchSnapshot()

  expect(self).toHaveAttribute('data-has-icon', 'true')
  expect(self).toHaveAttribute('data-notification-type', 'small')
})
