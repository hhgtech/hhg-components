import React from 'react'

import { render, cleanup } from '@testing-library/react'
import 'jest-styled-components'

import { Shadow } from '.'
import MockTheme from '../../../misc/mockTheme'

afterEach(cleanup)

test('it renders', () => {
  const shadow = render(
    <MockTheme>
      <Shadow size="medium">
        <div>Shadow child!</div>
      </Shadow>
    </MockTheme>,
  )

  const self = shadow.container.firstChild

  expect(self).toMatchSnapshot()

  expect(self).toHaveAttribute('data-shadow-size', 'medium')
})
