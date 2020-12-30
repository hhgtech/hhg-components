import 'jest-styled-components'

import React from 'react'

import { cleanup, render } from '@testing-library/react'

import { RadioGroup } from '.'
import MockTheme from '../../../misc/mockTheme'

afterEach(cleanup)

test('it renders', () => {
  const dropdown = render(
    <MockTheme>
      <RadioGroup
        id="dropdown1"
        value="1"
        type="circle"
        isDisabled={true}
        options={[
          { label: 'option 1', value: '1' },
          { label: 'option 2', value: '2' },
          { label: 'option 3', value: '3' },
          { label: 'option 4', value: '4' },
        ]}
      />
    </MockTheme>,
  )

  const self = dropdown.container.firstChild

  expect(self).toMatchSnapshot()
})
