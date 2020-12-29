import React from 'react'

import { render, cleanup } from '@testing-library/react'
import 'jest-styled-components'

import { Flag } from '.'
import MockTheme from './../../../mockTheme'

afterEach(cleanup)

test('it renders', () => {
  const flag = render(
    <MockTheme>
      <Flag country="ID" width={100} height={100} />
    </MockTheme>,
  )

  const self = flag.container.firstChild

  expect(self).toMatchSnapshot()

  expect(self).toHaveAttribute('data-is-bitmap', 'true')
})
