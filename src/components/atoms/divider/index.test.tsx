import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import 'jest-styled-components'

import MockTheme from './../../../mockTheme'

import { Divider } from '.'

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
