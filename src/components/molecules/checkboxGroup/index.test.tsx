import 'jest-styled-components'

import React from 'react'

import { cleanup, render } from '@testing-library/react'

import { CheckboxGroup } from '.'
import MockTheme from './../../../mockTheme'

afterEach(cleanup)

test('it renders', () => {
  const dropdown = render(
    <MockTheme>
      <CheckboxGroup
        name="checkbox1"
        values={['1', '4']}
        type="vertical"
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
  expect(self).toContainHTML('for="checkbox1-1"')
  expect(self).toContainHTML('<input')
  expect(self).toHaveAttribute('data-type', 'vertical')
})
