import React from 'react'

import { render, cleanup } from '@testing-library/react'
import 'jest-styled-components'

import { Input } from '.'
import MockTheme from './../../../mockTheme'

afterEach(cleanup)

test('it renders', () => {
  const tag = render(
    <MockTheme>
      <Input value="test" name="test-input" size="md" label="test input" />
    </MockTheme>,
  )

  const self = tag.container.firstChild

  expect(self).toMatchSnapshot()
  expect(self).toContainHTML('test input')
  expect(self).toHaveAttribute('data-size', 'md')
})
