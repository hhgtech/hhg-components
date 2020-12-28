import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import 'jest-styled-components'

import MockTheme from './../../../mockTheme'

import { Tag } from '.'

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
