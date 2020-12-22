import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import 'jest-styled-components'

import { Button } from '.'
import MockTheme from './../../../mockTheme'

afterEach(cleanup)

test('it renders', () => {
  const button = render(
    <MockTheme>
      <Button size="md" color="primary">
        This is a test tag
      </Button>
    </MockTheme>,
  )

  const self = button.container.firstChild

  expect(self).toMatchSnapshot()

  expect(self).toHaveAttribute('data-size', 'md')
})
