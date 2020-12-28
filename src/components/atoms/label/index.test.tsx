import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import 'jest-styled-components'

import { Label } from '.'
import MockTheme from './../../../mockTheme'

afterEach(cleanup)

test('it renders', () => {
  const label = render(
    <MockTheme>
      <Label>Hello World</Label>
    </MockTheme>,
  )

  const self = label.container.firstChild

  expect(self).toMatchSnapshot()

  expect(self).toHaveTextContent('Hello World')
})
