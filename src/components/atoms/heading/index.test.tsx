import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import 'jest-styled-components'

import MockTheme from './../../../mockTheme'

import { Heading } from '.'

afterEach(cleanup)

test('it renders', () => {
  const heading = render(
    <MockTheme>
      <Heading tag="h2">Hello, World!</Heading>
    </MockTheme>,
  )

  const self = heading.container

  expect(self).toMatchSnapshot()

  expect(self.firstChild).toContainHTML('data-tag="h2"')
})
