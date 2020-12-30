import React from 'react'

import { render, cleanup } from '@testing-library/react'
import 'jest-styled-components'

import { UnderlinedLink } from '.'
import MockTheme from '../../../misc/mockTheme'

afterEach(cleanup)

test('it renders', () => {
  const underlinedLink = render(
    <MockTheme>
      <UnderlinedLink size="lg" isDisabled link={<a>Test</a>} />
    </MockTheme>,
  )

  const self = underlinedLink.container.firstChild

  expect(self).toMatchSnapshot()

  expect(self).toHaveAttribute('data-is-disabled', 'true')
})
