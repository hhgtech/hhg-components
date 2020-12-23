import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import 'jest-styled-components'

import { Badge } from '.'

import MockTheme from '../../../mockTheme'

afterEach(cleanup)

test('it renders', () => {
  const badge = render(
    <MockTheme>
      <Badge
        hasIcon={true}
        type="dot"
        bellIcon={<img src="https://source.unsplash.com/random/16x16" />}
      />
    </MockTheme>,
  )

  const self = badge.container.firstChild

  expect(self).toMatchSnapshot()

  expect(self).toHaveAttribute('data-has-icon', 'true')
  expect(self).toHaveAttribute('data-notification-type', 'dot')
})
