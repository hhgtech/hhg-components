import React from 'react'
import { render, cleanup } from '@testing-library/react'
import 'jest-styled-components'

import MockTheme from './../../../mockTheme'

import { Toggle } from '.'

afterEach(cleanup)

test('it renders', () => {
  const toggle = render(
    <MockTheme>
      <Toggle
        id="test-toggle"
        checked
        onChange={() => console.log('onChange')}
      />
    </MockTheme>,
  )

  const self = toggle.container.firstChild

  expect(self).toMatchSnapshot()

  expect(self.firstChild).toHaveAttribute('checked')
})
