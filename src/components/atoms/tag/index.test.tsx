import React from 'react'

import { render, cleanup } from '@testing-library/react'
import 'jest-styled-components'

import { Tag } from '.'
import MockTheme from './../../../mockTheme'

afterEach(cleanup)

test('it renders', () => {
  const tag = render(
    <MockTheme>
      <Tag type="yellow">This is a test tag</Tag>
    </MockTheme>,
  )

  const self = tag.container.firstChild

  expect(self).toMatchSnapshot()

  expect(self).toHaveAttribute('data-tag-type', 'yellow')
})
