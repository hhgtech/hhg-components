import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import 'jest-styled-components'

import { Logo } from '.'

afterEach(cleanup)

test('it renders', () => {
  const logo = render(<Logo type="hellobacsi" width="100px" height="auto" />)

  const self = logo.container.firstChild

  expect(self).toMatchSnapshot()

  expect('svg').toBeInTheDocument
})
