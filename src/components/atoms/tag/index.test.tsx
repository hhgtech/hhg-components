import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import 'jest-styled-components'

import { Tag } from '.'

afterEach(cleanup)

test('it renders', () => {
  const tag = render(<Tag type="warning">This is a test tag</Tag>)

  const self = tag.container.firstChild

  expect(self).toMatchSnapshot()

  expect(self).toHaveAttribute('data-tag-type', 'warning')
})
