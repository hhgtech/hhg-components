import React from 'react'

import { render, cleanup } from '@testing-library/react'
import 'jest-styled-components'

import { Divider } from '.'
import MockTheme from '../../../misc/mockTheme'

afterEach(cleanup)

test('it renders', () => {
  const alert = render(
    <MockTheme>
      <Divider type="dotted" />
    </MockTheme>,
  )

  const self = alert.container.firstChild

  expect(self).toMatchSnapshot()
  expect(self).toHaveAttribute('data-diver-type', 'dotted')
})
