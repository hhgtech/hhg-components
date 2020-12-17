import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import 'jest-styled-components'

import { NotificationIndicator } from '.'

afterEach(cleanup)

test('it renders', () => {
  const notificationIndicator = render(
    <NotificationIndicator
      hasIcon={true}
      type="small"
      bellIcon={<img src="https://source.unsplash.com/random/16x16" />}
    />,
  )

  const self = notificationIndicator.container.firstChild

  expect(self).toMatchSnapshot()

  expect(self).toHaveAttribute('data-has-icon', 'true')
  expect(self).toHaveAttribute('data-notification-type', 'small')
})
