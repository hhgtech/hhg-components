import 'jest-styled-components'

import React from 'react'

import { cleanup, render } from '@testing-library/react'

import { Radio } from '.'
import MockTheme from '../../../misc/mockTheme'

afterEach(cleanup)

test('it renders', () => {
  const radio = render(
    <MockTheme>
      <Radio
        type="circle"
        onChange={() => console.log('radio')}
        value="abc"
        name="radio"
        label="radio"
        checked
      ></Radio>
    </MockTheme>,
  )

  const self = radio.container.firstChild

  expect(self).toMatchSnapshot()

  expect(self).toHaveAttribute('data-disabled', 'false')
})
