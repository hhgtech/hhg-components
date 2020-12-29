import 'jest-styled-components'

import React from 'react'

import { cleanup, render } from '@testing-library/react'

import { Checkbox } from '.'
import MockTheme from './../../../mockTheme'

afterEach(cleanup)

test('it renders', () => {
  const dropdown = render(
    <MockTheme>
      <Checkbox
        name="checkbox1"
        checked={true}
        isDisabled={true}
        label="option1"
        value="1"
      />
    </MockTheme>,
  )

  const self = dropdown.container.firstChild

  expect(self).toMatchSnapshot()
  expect(self).toContainHTML('for="checkbox1-1"')
  expect(self).toContainHTML('<input')
  expect(self).toHaveAttribute('data-disabled', 'true')
})
